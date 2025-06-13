# daily-word-app
Joyce Kromah, Jasmin Asker & Artem Blinkov Informationsarkitekt
2025

Vårt projekt är en webbapplikation som visar ett nytt engelskt ord var trettonde sekund, med dess definition och ljud för uttal. Användaren kan spara ordet i två olika listor: "Mastered" (ord man har lärt sig) och "In Progress" (ord man håller på att lära sig). Syftet är att hjälpa användare bygga upp sitt ordförråd på ett väldigt enkelt och strukturerat sätt.

Vi valde att bygga vårt projekt med Next.js eftersom vi har tidigare erfarenhet av React från inlämningsuppgifter och det gav oss en gemensam grund att utgå ifrån. Eftersom React enbart är ett frontend-bibliotek och vi även behövde en backend för vårt API, var Next.js ett naturligt val då det förenklar integrationen mellan klient och server jämfört med att enbart använda React [1], [2].

Till skillnad från React har Next.js redan en rad olika viktiga funktioner som är ramverkets vilket gör att vi inte behöver konfigurera mycket manuellt [3]. Funktioner som routing, datahämtning via Server-Side Rendering (SSR) och Static Site Generation (SSG), automatiska JavaScript-bundling, kod delning (code splitting) och sökmotoroptimering (SEO) är integrerade från början [3]. Detta innebär att vi som utvecklare slipper lägga tid på att sätta upp byggverktyg som t.ex. react-router, webpack etc. för extra bibliotek för serverrendering.

Med Next.js kunde vi istället fokusera på att utveckla funktionalitet och användargränssnitt, snarare än att konfigurera infrastruktur. Detta har varit särskilt värdefullt i vårt projekt, där effektiv kodning och enkel struktur har varit centrala för att nå målen.

Referenser

[1] UXPin, “NextJS vs React — Which One is Better for Web Development?,” Studio by UXPin, Apr. 11, 2024.
https://www.uxpin.com/studio/blog/nextjs-vs-react/

[2] “React Foundations: About React and Next.js | Next.js,” nextjs.org.
https://nextjs.org/learn/react-foundations/what-is-react-and-nextjs

[3] A. Ravichandran, “Discovering Next.js: Why It’s My Go-To Framework for React Applications,” Medium, Jul. 20, 2023.
https://adithiravi.medium.com/discovering-next-js-why-its-my-go-to-framework-for-react-applications-dcb97fd81382
__________________________________________________________________________

## Getting Started

1. Download the project folder from GitHub
2. Open the project in your chosen text-editor, we have been using VScode
3. Create an .env file under the root folder that is called "daily-word" (NOT daily-word-app-main)
4. Paste the provided API-key and API-links (NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_API_URL, NEXT_PUBLIC_API_AUDIO)
5. Open the terminal
6. Type **cd daily-word** in your terminal, to change directory to the root folder that is called "daily-word"
7. Type **npm install** in your terminal
8. Then type **npm run dev** in your terminal
9. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
