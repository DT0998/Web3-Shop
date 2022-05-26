import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (  
    <Html>
        <Head>
          <script async src="https://apis.google.com/js/client.js"></script>
          <meta
            property="og:image"
            content="https://bingo.family/_next/static/media/BGF_LOGO.db8b083c.png?imwidth=128"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1024" />
          <meta property="og:image:height" content="1024" />
          <meta
            name="title"
            content="Bingo.Family | Best Play-to-Earn Game 2022, Earn free crypto"
          />
          <meta
            name="description"
            content="Bingo.Family is a Play-to-earn crypto game based on the NFT Technology.  Players can compete fairly with each other with the fundamental pleasure of bingo games"
          />
          {/* twitter seo */}
          <meta
            name="twitter:title"
            content="Bingo.Family | Top NFT Games for Play-To-Earn free token, NFT 2022"
          />
          <meta
            name="twitter:description"
            content="Bingo.Family is a Play-to-earn crypto game based on the NFT Technology. Players can compete fairly with each other with the fundamental pleasure of bingo games and win NFT rewards and earn BGOF token"
          />
          {/* facebook seo */}
          <meta
            property="og:description"
            content="Bingo.Family is a Play-to-earn crypto game based on the NFT Technology. Players can compete fairly with each other with the fundamental pleasure of bingo games and win NFT rewards and earn BGOF token"
          />
          <meta
            property="og:title"
            content="Bingo.Family, Top NFT Games for Play-To-Earn 2022, online simple-to-play game based on NFT Tech"
          />
          {/* keyword */}
          <meta
            name="keywords"
            content="Coin NFT, Crypto Currency , Crypto game,Crypto win,Crypto win,Free to earn,Game,Gamefi,Gaming,NFT,Nft game,Nft Gaming,Nft trade,NFTlaunch ,Online game,Boardgame,Familygame,Play to Earn "
          />
          
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
  );
}

export default Document;


