export function GET() {
  const message = "Hello, World!";
  const success = true;
  return Response.json({ message, success }, { status: 200 });
}
