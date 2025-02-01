import { getGoogleAuthToken } from "./googleAuth.js";

export interface SearchConfig {
  projectId: string;
  location: string;
  collectionId: string;
  engineId: string;
}

export interface SearchResponse {
  results: Array<{
    document: {
      id: string;
      content: string; // Type this based on your content structure
      derivedStructData: {
        snippets: Array<{
          snippet: string;
        }>;
      };
    };
    snippet?: {
      snippet: string;
    };
  }>;
  queryId: string;
  session: string;
}

export interface GeneratedAnswer {
  answer: {
    answerText: string;
    citations: Array<{
      content: string;
      uri: string;
    }>;
    references: Array<{
      chunkInfo: {
        content: string;
        documentMetadata: {
          uri: string;
        };
      };
    }>;
  };
  relatedQuestions?: Array<{
    question: string;
  }>;
}

export class GoogleSearchClient {
  private baseUrl: string;
  private config: SearchConfig;

  constructor(config: SearchConfig) {
    this.config = config;
    this.baseUrl = `https://discoveryengine.googleapis.com/v1alpha/projects/${config.projectId}/locations/${config.location}/collections/${config.collectionId}/engines/${config.engineId}`;
  }

  private async getAccessToken(): Promise<string> {
    return getGoogleAuthToken();
  }

  async search(query: string): Promise<SearchResponse> {
    const token = await this.getAccessToken();
    const response = await fetch(
      `${this.baseUrl}/servingConfigs/default_search:search`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          pageSize: 10,
          queryExpansionSpec: { condition: "AUTO" },
          spellCorrectionSpec: { mode: "AUTO" },
          contentSearchSpec: {
            snippetSpec: { returnSnippet: true },
          },
          session: `projects/${this.config.projectId}/locations/${this.config.location}/collections/${this.config.collectionId}/engines/${this.config.engineId}/sessions/-`,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Search failed: ${response.statusText}`);
    }

    return response.json();
  }

  async getGeneratedAnswer(
    query: string,
    answer: string,
    queryId: string,
    sessionId: string,
  ): Promise<GeneratedAnswer> {
    const token = await this.getAccessToken();
    const response = await fetch(
      `${this.baseUrl}/servingConfigs/default_search:answer`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: {
            text: query,
            queryId: queryId,
          },
          session: sessionId,
          relatedQuestionsSpec: { enable: true },
          answerGenerationSpec: {
            ignoreAdversarialQuery: false,
            ignoreNonAnswerSeekingQuery: false,
            ignoreLowRelevantContent: false,
            includeCitations: true,
            promptSpec: {
              preamble: answer,
            },
            answerLanguageCode: "ja",
            modelSpec: {
              modelVersion: "stable",
            },
          },
        }),
      },
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  }
}
