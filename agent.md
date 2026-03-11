# Role
You are an expert frontend developer who specializes in minimalist, high-performance static websites. 

# Task
We have a client who wants a simple static website for their orthodox church. Your task is to write the code for a simple, responsive,  static landing page inside the `index.html` file. Apart from the landing page create pages for Home  About Us  Events  Contact that is mentioned in the navigation bar. Refer the ASCII Wireframe.

# Tech Stack Constraints
- Strictly use Vanilla HTML5.
- Do NOT use React, Vue, Next.js, or any JavaScript frameworks.
- Do NOT write custom CSS. Instead, link to the "Pico.css" classless framework via CDN in the `<head>` tag. 
- Keep the code incredibly clean, semantic, and highly readable, add comments wherever necessary.
- Create a detailed readme file that walks through how to update and edit the contents of the site.
- Create a site map

# Design Wireframe (ASCII)
Use the following layout structure to build the page. Center the content vertically and horizontally on the screen.

+---------------------------------------------------------------------------------------------------+
| [Logo] SDOF - St Johns             Home  About Us  Events  Contact  EN | ML       [ Donate ]    |
|        ORTHODOX CHURCH, PUNALUR                                                                   |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
| <                               [ LARGE HERO IMAGE: CHURCH SCENE ]                              > |
|                                                                                                   |
|                           Welcome to the Spiritual Home of                                        |
|                                  St. John's Punalur                                               |
|                                                                                                   |
|                               [ Join Our Community > ]                                            |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
|                   |                                                                               |
|                   | About SDOF                                                                    |
|  +-------------+  | -----------------------------------------------------------------------       |
|  |             |  | Faith | Witness | Enlightenment                                               |
|  |  [ IMAGE 1 ]|  |                                                                               |
|  |   Church    |  | St. Dionysius Orthodox Fellowship (SDOF) is a vibrant spiritual movement      |
|  +-------------+  | serving under St John's Orthodox Syrian Church.                               |
|  +-------------+  |                                                                               |
|  |             |  | +--------------------+ +--------------------+ +-----------------------+       |
|  |  [ IMAGE 2 ]|  | | + Faith            | | * Witness          | | [ ] Enlightenment     |       |
|  |   Priest    |  | | We are committed to| | SDOF exists to     | | especially youth-     |       |
|  +-------------+  | | strengthening faith| | inspire members-   | | to stand firm in      |       |
|  +-------------+  | | ...                | | ...                | | ...                   |       |
|  |             |  | +--------------------+ +--------------------+ +-----------------------+       |
|  |  [ IMAGE 3 ]|  |                                                                               |
|  |Congregation |  | Mission & Vision                                                              |
|  +-------------+  | -----------------------------------------------------------------------       |
|                   | * To organise empowerment programs, seminars and outreach activities          |
|                   | * To support and assist the church during crucial situations                  |
|                   | * To encourage unity, discipline and spiritual revival among our members      |
|                   | * To restore and strengthen members who require guidance and support.         |
|                   |                                                                               |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
| ^ Upcoming Events                                                                                 |
| -------------------------------------------------------------------------------------------       |
|                                                                                                   |
| +------------+  +------------+  +------------+  +-----------------------------------------+       |
| | DEC        |  | JAN        |  | JAN        |  | Sunday Mass                             |       |
| | 25         |  | 01         |  | 06         |  | Livestream                              |       |
| |            |  |            |  |            |  |                                         |       |
| | Christmas  |  | New Year   |  | Epiphany   |  | [ IMAGE: ALTAR SCENE ]                  | >     |
| | Carols     |  | Prayer     |  | Celebration|  |                                         |       |
| +------------+  +------------+  +------------+  +-----------------------------------------+       |
|                                                                                                   |
|                        [ View All Events > ]                                                      |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
|                   |                                                                               |
|                   | About St. John's Punalur                                                      |
|  +-------------+  | -----------------------------------------------------------------------       |
|  |             |  | CHURCH HISTORY                                                                |
|  |  [ IMAGE 4 ]|  |                                                                               |
|  |   Church    |  | The ancient St. Johns Orthodox Syrian church in Punalur town, a spiritual     |
|  +-------------+  | source of Christians in the Chernmanthoor area.                               |
|                   |                                                                               |
|                   | "plikotitl in 1899AD The late Rev_Alexanerios KathanartFather"                |
|                   |                                                                               |
|                   | The Chernmanthoor orthodox Syrian church was established under the order...   |
|                   |                                                                               |
+---------------------------------------------------------------------------------------------------+
| [Logo] St. John's Church, Punalur... | Phone: +91 94465 63128 | Email: info@... | [f] [IG] [YT] |
+---------------------------------------------------------------------------------------------------+

# Execution Requirements
1. Use a semantic HTML structure (`<header>`, `<main>`, `<section>`).
2. Ensure the buttons span an appropriate width on mobile but don't stretch too wide on desktop (use a max-width container).
3. Use placeholder URLs for the links (e.g., `#`) and placeholder text for the images/names. I will fill those in myself later.
4. I am planning to deploy on either Vercel, NEtlify or git hub pages, so include a section in the readme for each service