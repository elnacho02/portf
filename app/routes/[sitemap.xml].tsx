export const loader = () => {
  // handle "GET" request
  // separating xml content from Response to keep clean code.
  const content = ``
  // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'utf8',
    },
  })
}
