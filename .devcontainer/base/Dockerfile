FROM mcr.microsoft.com/devcontainers/base:debian

RUN apt-get update && \
    apt-get install -y \
      apt-transport-https \
      ca-certificates \
      curl \
      gnupg

# Install gcloud
# [ref] https://cloud.google.com/sdk/docs/install?hl=ja#deb
RUN curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg
RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
RUN apt-get update && \
    apt-get install -y \
      google-cloud-cli \
      google-cloud-sdk-gke-gcloud-auth-plugin