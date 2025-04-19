#!python
# ---------------------------------------------------------------
# Author:  Gagandeep Singh Bhambrah
# Date:    2025-04-13
# Purpose: Convert markdown files into needed page format for the website.
# ---------------------------------------------------------------
import marko
from marko.html_renderer import HTMLRenderer

class CustomRenderer(HTMLRenderer):
    # Render any Markdown heading as our constant <BlogHeading />.
    def render_heading(self, element):
        # Use the heading's content as the text for the BlogHeading.
        content = self.render_children(element).strip()
        # If you need a fixed value (e.g. always "Summary"), simply replace content.
        # For example: content = "Summary"
        return f'<BlogHeading text="{content}" />'
    
    # Render paragraphs wrapped in <BlogText> with an inner <p> element.
    def render_paragraph(self, element):
        content = self.render_children(element).strip()
        # Wrap the paragraph text inside a <p> with Tailwind margin classes.
        return f'<BlogText>\n  <p className="my-2">{content}</p>\n</BlogText>'
    
    # Render images as a Next.js <Image /> component wrapped in a <p> element.
    def render_image(self, element):
        alt = getattr(element, "alt", "")
        # Hardcode width and height as specified (300 x 300).
        return (
            '<p className="my-2 flex justify-center">'
            f'<Image src="{element.dest}" alt="{alt}" width={{300}} height={{300}} />'
            '</p>'
        )
    

def convert_markdown_to_custom_html(markdown_text: str, output_file: str):
    # Parse the Markdown text.
    ast = marko.parse(markdown_text)
    # Render to HTML using our custom renderer.
    renderer = CustomRenderer()
    html_content = renderer.render(ast)
    # Write the HTML content to a file.
    with open(output_file, "w") as f:
        f.write(html_content)

# Example usage:
if __name__ == "__main__":
    import sys
    import json 

    data = ""

    if len(sys.argv) > 1:
        # Read the Markdown file from command line argument.
        with open(sys.argv[1], "r") as f:
            data = "\n".join(json.load(f)["blog"])
    else:
        # Example Markdown text.
        data = sys.stdin.read()

    print(data)    
    convert_markdown_to_custom_html(data, "output.html")
    print("Conversion complete. Output written to output.html")