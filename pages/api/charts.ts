// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const data = [
  {
    layout: "5",
    type: "MUSIC",
    key: "640033986",
    title: "Con La Brisa",
    subtitle: "Foudeqush & Ludwig Göransson",
    share: {
      subject: "Con La Brisa - Foudeqush & Ludwig Göransson",
      text: "I used Shazam to discover Con La Brisa by Foudeqush & Ludwig Göransson.",
      href: "https://www.shazam.com/track/640033986/con-la-brisa",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e9/a0/16/e9a016aa-a82f-8e67-50b2-f1101e0be964/22UM1IM30248.rgb.jpg/400x400cc.jpg",
      twitter:
        "I used @Shazam to discover Con La Brisa by Foudeqush & Ludwig Göransson.",
      html: "https://www.shazam.com/snippets/email-share/640033986?lang=en&country=GB",
      snapchat: "https://www.shazam.com/partner/sc/track/640033986",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e9/a0/16/e9a016aa-a82f-8e67-50b2-f1101e0be964/22UM1IM30248.rgb.jpg/400x400cc.jpg",
      coverart:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e9/a0/16/e9a016aa-a82f-8e67-50b2-f1101e0be964/22UM1IM30248.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e9/a0/16/e9a016aa-a82f-8e67-50b2-f1101e0be964/22UM1IM30248.rgb.jpg/400x400cc.jpg",
      joecolor: "b:040404p:eae2d0s:d8d7dft:bcb5a7q:aeadb3",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1653546269",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/a5/79/7e/a5797ee9-a15a-4f3b-0a68-0ac53b28ae86/mzaf_14258047481717338383.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/con-la-brisa/1653546033?i=1653546269&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/con-la-brisa/1653546033?i=1653546269&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "foudeqush",
        id: "42",
        adamid: "1262210582",
      },
      {
        alias: "ludwig-g%C3%B6ransson",
        id: "42",
        adamid: "391832320",
      },
    ],
    url: "https://www.shazam.com/track/640033986/con-la-brisa",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "632531170",
    title: "Unholy",
    subtitle: "Sam Smith & Kim Petras",
    share: {
      subject: "Unholy - Sam Smith & Kim Petras",
      text: "I used Shazam to discover Unholy by Sam Smith & Kim Petras.",
      href: "https://www.shazam.com/track/632531170/unholy",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Unholy by Sam Smith & Kim Petras.",
      html: "https://www.shazam.com/snippets/email-share/632531170?lang=en&country=GB",
      avatar:
        "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/de/0c/5f/de0c5f88-722a-32d8-ff95-51ea2d98cd33/9fd6e963-6b85-446e-aeb9-871641d96659_ami-identity-a9d9c72c23307ab2a64018246fe99b36-2022-11-11T11-06-33.418Z_cropped.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/632531170",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/de/0c/5f/de0c5f88-722a-32d8-ff95-51ea2d98cd33/9fd6e963-6b85-446e-aeb9-871641d96659_ami-identity-a9d9c72c23307ab2a64018246fe99b36-2022-11-11T11-06-33.418Z_cropped.png/800x800cc.jpg",
      coverart:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
      joecolor: "b:36311dp:e4c29ds:e0a581t:c1a583q:be8e6d",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1649325659",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/3c/2c/82/3c2c8235-9907-0405-b21c-8fd66d285e56/mzaf_6122099414111658029.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/unholy/1649325651?i=1649325659&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/unholy/1649325651?i=1649325659&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "sam-smith",
        id: "42",
        adamid: "156488786",
      },
      {
        alias: "kim-petras",
        id: "42",
        adamid: "291697579",
      },
    ],
    url: "https://www.shazam.com/track/632531170/unholy",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "639053666",
    title:
      "Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By)",
    subtitle: "Rihanna",
    share: {
      subject:
        "Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By) - Rihanna",
      text: "I used Shazam to discover Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By) by Rihanna.",
      href: "https://www.shazam.com/track/639053666/lift-me-up-from-black-panther-wakanda-forever-music",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/46/17/80/461780d4-8620-3e89-7cc4-7f1f08152924/22UM1IM24755.rgb.jpg/400x400cc.jpg",
      twitter:
        "I used @Shazam to discover Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By) by Rihanna.",
      html: "https://www.shazam.com/snippets/email-share/639053666?lang=en&country=GB",
      avatar:
        "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/c3/64/22/c3642227-2af3-1d93-0721-c91a65e521d4/79d56625-c24d-4599-9919-5d999b69398f_ami-identity-d7c7fc06e25964f71047f919dd682d38-2022-10-28T03-56-00.951Z_cropped.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/639053666",
    },
    images: {
      background:
        "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/c3/64/22/c3642227-2af3-1d93-0721-c91a65e521d4/79d56625-c24d-4599-9919-5d999b69398f_ami-identity-d7c7fc06e25964f71047f919dd682d38-2022-10-28T03-56-00.951Z_cropped.png/800x800cc.jpg",
      coverart:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/46/17/80/461780d4-8620-3e89-7cc4-7f1f08152924/22UM1IM24755.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/46/17/80/461780d4-8620-3e89-7cc4-7f1f08152924/22UM1IM24755.rgb.jpg/400x400cc.jpg",
      joecolor: "b:898989p:070707s:161616t:212121q:2d2d2d",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1651763192",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/37/ec/71/37ec7188-c1f5-47c1-43a7-28d32e26f172/mzaf_7868625517086999040.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/lift-me-up-from-black-panther-wakanda-forever-music/1651763191?i=1651763192&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/lift-me-up-from-black-panther-wakanda-forever-music/1651763191?i=1651763192&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "rihanna",
        id: "42",
        adamid: "63346553",
      },
    ],
    url: "https://www.shazam.com/track/639053666/lift-me-up-from-black-panther-wakanda-forever-music",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "640033998",
    title: "Laayli' kuxa'ano'one",
    subtitle: "Adn Maya Colectivo, Pat Boy, Yaalen K'uj & All Mayan Winik",
    share: {
      subject:
        "Laayli' kuxa'ano'one - Adn Maya Colectivo, Pat Boy, Yaalen K'uj & All Mayan Winik",
      text: "I used Shazam to discover Laayli' kuxa'ano'one by Adn Maya Colectivo, Pat Boy, Yaalen K'uj & All Mayan Winik.",
      href: "https://www.shazam.com/track/640033998/laayli-kuxaanoone",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e9/a0/16/e9a016aa-a82f-8e67-50b2-f1101e0be964/22UM1IM30248.rgb.jpg/400x400cc.jpg",
      twitter:
        "I used @Shazam to discover Laayli' kuxa'ano'one by Adn Maya Colectivo, Pat Boy, Yaalen K'uj & All Mayan Winik.",
      html: "https://www.shazam.com/snippets/email-share/640033998?lang=en&country=GB",
      snapchat: "https://www.shazam.com/partner/sc/track/640033998",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e9/a0/16/e9a016aa-a82f-8e67-50b2-f1101e0be964/22UM1IM30248.rgb.jpg/400x400cc.jpg",
      coverart:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e9/a0/16/e9a016aa-a82f-8e67-50b2-f1101e0be964/22UM1IM30248.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e9/a0/16/e9a016aa-a82f-8e67-50b2-f1101e0be964/22UM1IM30248.rgb.jpg/400x400cc.jpg",
      joecolor: "b:040404p:eae2d0s:d8d7dft:bcb5a7q:aeadb3",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1653546501",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/72/df/18/72df18c2-fc28-2bce-2363-ec7f248b21f2/mzaf_5104801483130027339.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/laayli-kuxaanoone/1653546033?i=1653546501&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/laayli-kuxaanoone/1653546033?i=1653546501&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "adn-maya-colectivo",
        id: "42",
        adamid: "1477108846",
      },
      {
        alias: "pat-boy",
        id: "42",
        adamid: "1141511081",
      },
      {
        alias: "yaalen-kuj",
        id: "42",
        adamid: "1477109463",
      },
      {
        alias: "all-mayan-winik",
        id: "42",
        adamid: "1347586399",
      },
    ],
    url: "https://www.shazam.com/track/640033998/laayli-kuxaanoone",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "529650734",
    title: "Sampadan 25 (Todh Teri Dance Edit)",
    subtitle: "Kone Kone",
    share: {
      subject: "Sampadan 25 (Todh Teri Dance Edit) - Kone Kone",
      text: "I used Shazam to discover Sampadan 25 (Todh Teri Dance Edit) by Kone Kone.",
      href: "https://www.shazam.com/track/529650734/sampadan-25-todh-teri-dance-edit",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/9d/86/72/9d8672c7-d6ff-68d6-82c1-bea595a5be25/4251804105491_3000.jpg/400x400cc.jpg",
      twitter:
        "I used @Shazam to discover Sampadan 25 (Todh Teri Dance Edit) by Kone Kone.",
      html: "https://www.shazam.com/snippets/email-share/529650734?lang=en&country=GB",
      snapchat: "https://www.shazam.com/partner/sc/track/529650734",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/9d/86/72/9d8672c7-d6ff-68d6-82c1-bea595a5be25/4251804105491_3000.jpg/400x400cc.jpg",
      coverart:
        "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/9d/86/72/9d8672c7-d6ff-68d6-82c1-bea595a5be25/4251804105491_3000.jpg/400x400cc.jpg",
      coverarthq:
        "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/9d/86/72/9d8672c7-d6ff-68d6-82c1-bea595a5be25/4251804105491_3000.jpg/400x400cc.jpg",
      joecolor: "b:cb0968p:f8fefcs:fed001t:efcddeq:f3a915",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1522893312",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/46/d4/93/46d49304-c67e-90e4-f5fc-d04678ffe665/mzaf_937378253205790077.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/sampadan-25-todh-teri-dance-edit/1522893310?i=1522893312&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/sampadan-25-todh-teri-dance-edit/1522893310?i=1522893312&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "kone-kone",
        id: "42",
        adamid: "1450945674",
      },
    ],
    url: "https://www.shazam.com/track/529650734/sampadan-25-todh-teri-dance-edit",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "633165091",
    title: "Aise Kyun (Ghazal Version)",
    subtitle: "Rekha Bhardwaj, Anurag Saikia & Raj Shekhar",
    share: {
      subject:
        "Aise Kyun (Ghazal Version) - Rekha Bhardwaj, Anurag Saikia & Raj Shekhar",
      text: "I used Shazam to discover Aise Kyun (Ghazal Version) by Rekha Bhardwaj, Anurag Saikia & Raj Shekhar.",
      href: "https://www.shazam.com/track/633165091/aise-kyun-ghazal-version",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/1d/1d/9f1d1d2b-4e6f-f43c-dc11-89e83dda8b80/8720766648408.png/400x400cc.jpg",
      twitter:
        "I used @Shazam to discover Aise Kyun (Ghazal Version) by Rekha Bhardwaj, Anurag Saikia & Raj Shekhar.",
      html: "https://www.shazam.com/snippets/email-share/633165091?lang=en&country=GB",
      avatar:
        "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/53/59/13/535913d2-093d-2b45-10a8-e5c31171429d/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/633165091",
    },
    images: {
      background:
        "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/53/59/13/535913d2-093d-2b45-10a8-e5c31171429d/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/1d/1d/9f1d1d2b-4e6f-f43c-dc11-89e83dda8b80/8720766648408.png/400x400cc.jpg",
      coverarthq:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/1d/1d/9f1d1d2b-4e6f-f43c-dc11-89e83dda8b80/8720766648408.png/400x400cc.jpg",
      joecolor: "b:16a1b3p:090706s:28170et:0c2628q:24332f",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1645836443",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/60/66/12/60661251-0ddc-7412-ab31-ba2855224716/mzaf_3824660724958107804.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/aise-kyun-ghazal-version/1645836224?i=1645836443&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/aise-kyun-ghazal-version/1645836224?i=1645836443&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "rekha-bhardwaj",
        id: "42",
        adamid: "110955098",
      },
      {
        alias: "anurag-saikia",
        id: "42",
        adamid: "708779663",
      },
      {
        alias: "raj-shekhar",
        id: "42",
        adamid: "663438951",
      },
    ],
    url: "https://www.shazam.com/track/633165091/aise-kyun-ghazal-version",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "640034010",
    title: "Coming Back For You",
    subtitle: "Fireboy DML",
    share: {
      subject: "Coming Back For You - Fireboy DML",
      text: "I used Shazam to discover Coming Back For You by Fireboy DML.",
      href: "https://www.shazam.com/track/640034010/coming-back-for-you",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e9/a0/16/e9a016aa-a82f-8e67-50b2-f1101e0be964/22UM1IM30248.rgb.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Coming Back For You by Fireboy DML.",
      html: "https://www.shazam.com/snippets/email-share/640034010?lang=en&country=GB",
      avatar:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/ef/97/3b/ef973b1a-78c4-52d4-e6e8-a28caf033628/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/640034010",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/ef/97/3b/ef973b1a-78c4-52d4-e6e8-a28caf033628/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e9/a0/16/e9a016aa-a82f-8e67-50b2-f1101e0be964/22UM1IM30248.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e9/a0/16/e9a016aa-a82f-8e67-50b2-f1101e0be964/22UM1IM30248.rgb.jpg/400x400cc.jpg",
      joecolor: "b:040404p:eae2d0s:d8d7dft:bcb5a7q:aeadb3",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1653546285",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/92/1b/74/921b7464-c7b2-e41d-e14f-a32c2967e80b/mzaf_9159916691393944890.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/coming-back-for-you/1653546033?i=1653546285&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/coming-back-for-you/1653546033?i=1653546285&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "fireboy-dml",
        id: "42",
        adamid: "1437009453",
      },
    ],
    url: "https://www.shazam.com/track/640034010/coming-back-for-you",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "640034009",
    title: "Alone",
    subtitle: "Burna Boy",
    share: {
      subject: "Alone - Burna Boy",
      text: "I used Shazam to discover Alone by Burna Boy.",
      href: "https://www.shazam.com/track/640034009/alone",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e9/a0/16/e9a016aa-a82f-8e67-50b2-f1101e0be964/22UM1IM30248.rgb.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Alone by Burna Boy.",
      html: "https://www.shazam.com/snippets/email-share/640034009?lang=en&country=GB",
      avatar:
        "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/5f/77/17/5f771752-2a96-11be-8c1f-b8b4050eacac/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/640034009",
    },
    images: {
      background:
        "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/5f/77/17/5f771752-2a96-11be-8c1f-b8b4050eacac/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e9/a0/16/e9a016aa-a82f-8e67-50b2-f1101e0be964/22UM1IM30248.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e9/a0/16/e9a016aa-a82f-8e67-50b2-f1101e0be964/22UM1IM30248.rgb.jpg/400x400cc.jpg",
      joecolor: "b:040404p:eae2d0s:d8d7dft:bcb5a7q:aeadb3",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1653546264",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/ae/95/14/ae9514e3-e99e-bba8-6488-00c493aba698/mzaf_11209521166475078407.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/alone/1653546033?i=1653546264&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/alone/1653546033?i=1653546264&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "burna-boy",
        id: "42",
        adamid: "591899010",
      },
    ],
    url: "https://www.shazam.com/track/640034009/alone",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "498502624",
    title: "Under The Influence",
    subtitle: "Chris Brown",
    share: {
      subject: "Under The Influence - Chris Brown",
      text: "I used Shazam to discover Under The Influence by Chris Brown.",
      href: "https://www.shazam.com/track/498502624/under-the-influence",
      image:
        "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Under The Influence by Chris Brown.",
      html: "https://www.shazam.com/snippets/email-share/498502624?lang=en&country=GB",
      avatar:
        "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/498502624",
    },
    images: {
      background:
        "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
      coverarthq:
        "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
      joecolor: "b:000000p:ffffffs:f63710t:cbcbcbq:c42c0d",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1643756110",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/87/a2/c8/87a2c876-dfbd-a57e-2c13-dbd6fc3cba77/mzaf_4085762200601715015.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/under-the-influence/1643755888?i=1643756110&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/under-the-influence/1643755888?i=1643756110&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: true,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "chris-brown",
        id: "42",
        adamid: "95705522",
      },
    ],
    url: "https://www.shazam.com/track/498502624/under-the-influence",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "640824915",
    title: "Born Again",
    subtitle: "Rihanna",
    share: {
      subject: "Born Again - Rihanna",
      text: "I used Shazam to discover Born Again by Rihanna.",
      href: "https://www.shazam.com/track/640824915/born-again",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e9/a0/16/e9a016aa-a82f-8e67-50b2-f1101e0be964/22UM1IM30248.rgb.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Born Again by Rihanna.",
      html: "https://www.shazam.com/snippets/email-share/640824915?lang=en&country=GB",
      avatar:
        "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/c3/64/22/c3642227-2af3-1d93-0721-c91a65e521d4/79d56625-c24d-4599-9919-5d999b69398f_ami-identity-d7c7fc06e25964f71047f919dd682d38-2022-10-28T03-56-00.951Z_cropped.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/640824915",
    },
    images: {
      background:
        "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/c3/64/22/c3642227-2af3-1d93-0721-c91a65e521d4/79d56625-c24d-4599-9919-5d999b69398f_ami-identity-d7c7fc06e25964f71047f919dd682d38-2022-10-28T03-56-00.951Z_cropped.png/800x800cc.jpg",
      coverart:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e9/a0/16/e9a016aa-a82f-8e67-50b2-f1101e0be964/22UM1IM30248.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e9/a0/16/e9a016aa-a82f-8e67-50b2-f1101e0be964/22UM1IM30248.rgb.jpg/400x400cc.jpg",
      joecolor: "b:040404p:eae2d0s:d8d7dft:bcb5a7q:aeadb3",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1653546525",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/31/05/9f/31059f4e-ccf6-9f8a-dbdd-82344b675beb/mzaf_15960632604162658434.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/born-again/1653546033?i=1653546525&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/born-again/1653546033?i=1653546525&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "rihanna",
        id: "42",
        adamid: "63346553",
      },
    ],
    url: "https://www.shazam.com/track/640824915/born-again",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "637736488",
    title: "Dj Dyyroth Paijo Mumet Ndase",
    subtitle: "DJ BAHBUS",
    share: {
      subject: "Dj Dyyroth Paijo Mumet Ndase - DJ BAHBUS",
      text: "I used Shazam to discover Dj Dyyroth Paijo Mumet Ndase by DJ BAHBUS.",
      href: "https://www.shazam.com/track/637736488/dj-dyyroth-paijo-mumet-ndase",
      twitter:
        "I used @Shazam to discover Dj Dyyroth Paijo Mumet Ndase by DJ BAHBUS.",
      html: "https://www.shazam.com/snippets/email-share/637736488?lang=en&country=GB",
      snapchat: "https://www.shazam.com/partner/sc/track/637736488",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:subscribe",
              type: "applemusicopen",
              uri: "https://music.apple.com/subscribe?mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:subscribe",
              type: "uri",
              uri: "https://music.apple.com/subscribe?mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    url: "https://www.shazam.com/track/637736488/dj-dyyroth-paijo-mumet-ndase",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "315646975",
    title: "One Dance (feat. Wizkid & Kyla)",
    subtitle: "Drake",
    share: {
      subject: "One Dance (feat. Wizkid & Kyla) - Drake",
      text: "I used Shazam to discover One Dance (feat. Wizkid & Kyla) by Drake.",
      href: "https://www.shazam.com/track/315646975/one-dance-feat-wizkid-kyla",
      image:
        "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/400x400cc.jpg",
      twitter:
        "I used @Shazam to discover One Dance (feat. Wizkid & Kyla) by Drake.",
      html: "https://www.shazam.com/snippets/email-share/315646975?lang=en&country=GB",
      avatar:
        "https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/b2/bd/8b/b2bd8b72-6528-28e3-7e5f-d637c9c89f4e/mza_17710009188773268806.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/315646975",
    },
    images: {
      background:
        "https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/b2/bd/8b/b2bd8b72-6528-28e3-7e5f-d637c9c89f4e/mza_17710009188773268806.png/800x800cc.jpg",
      coverart:
        "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/400x400cc.jpg",
      joecolor: "b:132029p:bfcdd5s:d0c2b4t:9caab3q:aaa198",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1440841384",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/78/52/09/785209ca-6bb3-a1ad-46fb-95c666901be2/mzaf_14435552344986796123.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/one-dance-feat-wizkid-kyla/1440841363?i=1440841384&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/one-dance-feat-wizkid-kyla/1440841363?i=1440841384&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "drake",
        id: "42",
        adamid: "271256",
      },
    ],
    url: "https://www.shazam.com/track/315646975/one-dance-feat-wizkid-kyla",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "511731769",
    title: "Shinunoga E-Wa",
    subtitle: "Fujii Kaze",
    share: {
      subject: "Shinunoga E-Wa - Fujii Kaze",
      text: "I used Shazam to discover Shinunoga E-Wa by Fujii Kaze.",
      href: "https://www.shazam.com/track/511731769/shinunoga-e-wa",
      image:
        "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/96/4e/5b/964e5b6e-4766-63ba-7e50-9f8a5bd0569e/20UMGIM17280.rgb.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Shinunoga E-Wa by Fujii Kaze.",
      html: "https://www.shazam.com/snippets/email-share/511731769?lang=en&country=GB",
      avatar:
        "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/e5/3f/da/e53fda17-e8d5-5c76-1d9e-bdfb127475e9/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/511731769",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/e5/3f/da/e53fda17-e8d5-5c76-1d9e-bdfb127475e9/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/96/4e/5b/964e5b6e-4766-63ba-7e50-9f8a5bd0569e/20UMGIM17280.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/96/4e/5b/964e5b6e-4766-63ba-7e50-9f8a5bd0569e/20UMGIM17280.rgb.jpg/400x400cc.jpg",
      joecolor: "b:abababp:050505s:070707t:262626q:272727",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1505498792",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/09/dc/85/09dc85ff-864d-63fd-277a-bfbbaff0725d/mzaf_15542888245757637983.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/shinunoga-e-wa/1505498769?i=1505498792&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/shinunoga-e-wa/1505498769?i=1505498792&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "fujii-kaze",
        id: "42",
        adamid: "1486113150",
      },
    ],
    url: "https://www.shazam.com/track/511731769/shinunoga-e-wa",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "636446692",
    title: "Maan Meri Jaan",
    subtitle: "King",
    share: {
      subject: "Maan Meri Jaan - King",
      text: "I used Shazam to discover Maan Meri Jaan by King.",
      href: "https://www.shazam.com/track/636446692/maan-meri-jaan",
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/90/9d/aa/909daa9a-3a47-9314-2855-39f5a157f1e3/5054197407734.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Maan Meri Jaan by King.",
      html: "https://www.shazam.com/snippets/email-share/636446692?lang=en&country=GB",
      avatar:
        "https://is3-ssl.mzstatic.com/image/thumb/Features115/v4/e4/fc/ae/e4fcae8b-8e3d-5718-7909-18106790e2b1/mzl.bjfhaket.jpg/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/636446692",
    },
    images: {
      background:
        "https://is3-ssl.mzstatic.com/image/thumb/Features115/v4/e4/fc/ae/e4fcae8b-8e3d-5718-7909-18106790e2b1/mzl.bjfhaket.jpg/800x800cc.jpg",
      coverart:
        "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/90/9d/aa/909daa9a-3a47-9314-2855-39f5a157f1e3/5054197407734.jpg/400x400cc.jpg",
      coverarthq:
        "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/90/9d/aa/909daa9a-3a47-9314-2855-39f5a157f1e3/5054197407734.jpg/400x400cc.jpg",
      joecolor: "b:023120p:ffffffs:fceed0t:ccd5d2q:cac8ad",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1649039974",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/99/26/85/99268572-de04-6118-1dc7-46f102114910/mzaf_3508198437937566372.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/maan-meri-jaan/1649039960?i=1649039974&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/maan-meri-jaan/1649039960?i=1649039974&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "king",
        id: "42",
        adamid: "1489995981",
      },
    ],
    url: "https://www.shazam.com/track/636446692/maan-meri-jaan",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "10826069",
    title: "Sing For The Moment",
    subtitle: "Eminem",
    share: {
      subject: "Sing For The Moment - Eminem",
      text: "I used Shazam to discover Sing For The Moment by Eminem.",
      href: "https://www.shazam.com/track/10826069/sing-for-the-moment",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/c9/02/cd/c902cdef-e179-5b70-8142-112a2abe7f27/22UMGIM49875.rgb.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Sing For The Moment by Eminem.",
      html: "https://www.shazam.com/snippets/email-share/10826069?lang=en&country=GB",
      avatar:
        "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/87/8e/a0/878ea0a1-ed8d-6fd7-3567-76ab8e6529af/mzl.ayuccyos.jpg/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/10826069",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/87/8e/a0/878ea0a1-ed8d-6fd7-3567-76ab8e6529af/mzl.ayuccyos.jpg/800x800cc.jpg",
      coverart:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/c9/02/cd/c902cdef-e179-5b70-8142-112a2abe7f27/22UMGIM49875.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/c9/02/cd/c902cdef-e179-5b70-8142-112a2abe7f27/22UMGIM49875.rgb.jpg/400x400cc.jpg",
      joecolor: "b:000000p:ffffffs:e49b3et:cbcbcbq:b67c32",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1625004727",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/e5/f0/52/e5f052c0-0e37-2128-1310-921909c45b9d/mzaf_12071706415002968719.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/sing-for-the-moment/1625004609?i=1625004727&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/sing-for-the-moment/1625004609?i=1625004727&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: true,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "eminem",
        id: "42",
        adamid: "111051",
      },
    ],
    url: "https://www.shazam.com/track/10826069/sing-for-the-moment",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "66006814",
    title: "Aathma Raama",
    subtitle: "Brodha V",
    share: {
      subject: "Aathma Raama - Brodha V",
      text: "I used Shazam to discover Aathma Raama by Brodha V.",
      href: "https://www.shazam.com/track/66006814/aathma-raama",
      image:
        "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/41/ef/0e/41ef0e30-1ab4-34e3-8695-ef330ed13bf5/artwork.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Aathma Raama by Brodha V.",
      html: "https://www.shazam.com/snippets/email-share/66006814?lang=en&country=GB",
      avatar:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/b2/ab/f5/b2abf5fc-4133-94d2-172f-61a6beef1f87/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/66006814",
    },
    images: {
      background:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/b2/ab/f5/b2abf5fc-4133-94d2-172f-61a6beef1f87/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/41/ef/0e/41ef0e30-1ab4-34e3-8695-ef330ed13bf5/artwork.jpg/400x400cc.jpg",
      coverarthq:
        "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/41/ef/0e/41ef0e30-1ab4-34e3-8695-ef330ed13bf5/artwork.jpg/400x400cc.jpg",
      joecolor: "b:0a0a0ap:eee6d1s:e4dcc6t:c0baa9q:b9b2a0",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1598091182",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/90/66/71/90667119-0ede-c78a-1d56-223714261cda/mzaf_18101044973965918234.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/aathma-raama/1598091181?i=1598091182&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/aathma-raama/1598091181?i=1598091182&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "brodha-v",
        id: "42",
        adamid: "388811568",
      },
    ],
    url: "https://www.shazam.com/track/66006814/aathma-raama",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "620001443",
    title: 'Sancharare (From "Sayanna Varthakal")',
    subtitle: "Sankar Sharma, Rzee & Bhadra Rajin",
    share: {
      subject:
        'Sancharare (From "Sayanna Varthakal") - Sankar Sharma, Rzee & Bhadra Rajin',
      text: 'I used Shazam to discover Sancharare (From "Sayanna Varthakal") by Sankar Sharma, Rzee & Bhadra Rajin.',
      href: "https://www.shazam.com/track/620001443/sancharare-from-sayanna-varthakal",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/98/66/08/9866083d-8dfe-6d58-4c3b-808573c45861/cover.jpg/400x400cc.jpg",
      twitter:
        'I used @Shazam to discover Sancharare (From "Sayanna Varthakal") by Sankar Sharma, Rzee & Bhadra Rajin.',
      html: "https://www.shazam.com/snippets/email-share/620001443?lang=en&country=GB",
      snapchat: "https://www.shazam.com/partner/sc/track/620001443",
    },
    images: {
      background:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/98/66/08/9866083d-8dfe-6d58-4c3b-808573c45861/cover.jpg/400x400cc.jpg",
      coverart:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/98/66/08/9866083d-8dfe-6d58-4c3b-808573c45861/cover.jpg/400x400cc.jpg",
      coverarthq:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/98/66/08/9866083d-8dfe-6d58-4c3b-808573c45861/cover.jpg/400x400cc.jpg",
      joecolor: "b:200001p:fffdffs:00cfc9t:d2caccq:06a5a1",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1630107554",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/e7/3e/93/e73e9306-ed9a-4613-7af1-2d56c85aec4c/mzaf_4477530864755352422.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/sancharare-from-sayanna-varthakal/1630107550?i=1630107554&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/sancharare-from-sayanna-varthakal/1630107550?i=1630107554&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "sankar-sharma",
        id: "42",
        adamid: "558310540",
      },
      {
        alias: "rzee",
        id: "42",
        adamid: "1071780498",
      },
      {
        alias: "bhadra-rajin",
        id: "42",
        adamid: "1425462091",
      },
    ],
    url: "https://www.shazam.com/track/620001443/sancharare-from-sayanna-varthakal",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "54672193",
    title: "A Gangster's Wife (feat. Chino Grande)",
    subtitle: "Ms Krazie",
    share: {
      subject: "A Gangster's Wife (feat. Chino Grande) - Ms Krazie",
      text: "I used Shazam to discover A Gangster's Wife (feat. Chino Grande) by Ms Krazie.",
      href: "https://www.shazam.com/track/54672193/a-gangsters-wife-feat-chino-grande",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/89/6d/2a/896d2a55-0a37-8288-cc5d-4ff4dc031421/197187142620.jpg/400x400cc.jpg",
      twitter:
        "I used @Shazam to discover A Gangster's Wife (feat. Chino Grande) by Ms Krazie.",
      html: "https://www.shazam.com/snippets/email-share/54672193?lang=en&country=GB",
      snapchat: "https://www.shazam.com/partner/sc/track/54672193",
    },
    images: {
      background:
        "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/89/6d/2a/896d2a55-0a37-8288-cc5d-4ff4dc031421/197187142620.jpg/400x400cc.jpg",
      coverart:
        "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/89/6d/2a/896d2a55-0a37-8288-cc5d-4ff4dc031421/197187142620.jpg/400x400cc.jpg",
      coverarthq:
        "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/89/6d/2a/896d2a55-0a37-8288-cc5d-4ff4dc031421/197187142620.jpg/400x400cc.jpg",
      joecolor: "b:cdced2p:060604s:191511t:2e2e2dq:3d3a37",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1647406775",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/41/a7/15/41a7150f-f31e-5620-dccd-c060794d5663/mzaf_12568174180622119458.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/a-gangsters-wife-feat-chino-grande/1647406774?i=1647406775&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/a-gangsters-wife-feat-chino-grande/1647406774?i=1647406775&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "ms-krazie",
        id: "42",
        adamid: "216086900",
      },
    ],
    url: "https://www.shazam.com/track/54672193/a-gangsters-wife-feat-chino-grande",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "106479411",
    title: "Tourner Dans Le Vide",
    subtitle: "Indila",
    share: {
      subject: "Tourner Dans Le Vide - Indila",
      text: "I used Shazam to discover Tourner Dans Le Vide by Indila.",
      href: "https://www.shazam.com/track/106479411/tourner-dans-le-vide",
      image:
        "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/c0/d9/7f/c0d97fd9-2a06-61d8-86c2-96fac328e0b1/00602537735709.rgb.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Tourner Dans Le Vide by Indila.",
      html: "https://www.shazam.com/snippets/email-share/106479411?lang=en&country=GB",
      avatar:
        "https://is4-ssl.mzstatic.com/image/thumb/Features115/v4/f8/f2/e8/f8f2e848-e07f-4597-d918-b1da37a8a85c/mzl.zcdmhnlk.jpg/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/106479411",
    },
    images: {
      background:
        "https://is4-ssl.mzstatic.com/image/thumb/Features115/v4/f8/f2/e8/f8f2e848-e07f-4597-d918-b1da37a8a85c/mzl.zcdmhnlk.jpg/800x800cc.jpg",
      coverart:
        "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/c0/d9/7f/c0d97fd9-2a06-61d8-86c2-96fac328e0b1/00602537735709.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/c0/d9/7f/c0d97fd9-2a06-61d8-86c2-96fac328e0b1/00602537735709.rgb.jpg/400x400cc.jpg",
      joecolor: "b:8f8d94p:100c0bs:141110t:292626q:2c2a2a",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1440830556",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/50/ed/6e/50ed6e97-8f42-1d50-2594-95304ba8c233/mzaf_10499799276396112567.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/tourner-dans-le-vide/1440830382?i=1440830556&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/tourner-dans-le-vide/1440830382?i=1440830556&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "indila",
        id: "42",
        adamid: "365001429",
      },
    ],
    url: "https://www.shazam.com/track/106479411/tourner-dans-le-vide",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "635244275",
    title: 'Aadharanjali (From "Romancham)',
    subtitle: "Sushin Shyam, Madhuvanthi Narayan & Vinayak Sasikumar",
    share: {
      subject:
        'Aadharanjali (From "Romancham) - Sushin Shyam, Madhuvanthi Narayan & Vinayak Sasikumar',
      text: 'I used Shazam to discover Aadharanjali (From "Romancham) by Sushin Shyam, Madhuvanthi Narayan & Vinayak Sasikumar.',
      href: "https://www.shazam.com/track/635244275/aadharanjali-from-romancham",
      image:
        "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/f2/11/15/f2111536-a8b3-e6da-265f-bf40a9a50c43/197187091232.jpg/400x400cc.jpg",
      twitter:
        'I used @Shazam to discover Aadharanjali (From "Romancham) by Sushin Shyam, Madhuvanthi Narayan & Vinayak Sasikumar.',
      html: "https://www.shazam.com/snippets/email-share/635244275?lang=en&country=GB",
      avatar:
        "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/3c/6b/73/3c6b730e-97c8-b273-fa05-bc4d9557e594/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/635244275",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/3c/6b/73/3c6b730e-97c8-b273-fa05-bc4d9557e594/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/f2/11/15/f2111536-a8b3-e6da-265f-bf40a9a50c43/197187091232.jpg/400x400cc.jpg",
      coverarthq:
        "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/f2/11/15/f2111536-a8b3-e6da-265f-bf40a9a50c43/197187091232.jpg/400x400cc.jpg",
      joecolor: "b:170a01p:f1b901s:e19503t:c59601q:b97903",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1647834178",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/7d/a2/84/7da284cf-cc03-2a81-e59a-91bc6f8adca2/mzaf_13249433832550769689.plus.aac.p.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/aadharanjali-from-romancham/1647834173?i=1647834178&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/aadharanjali-from-romancham/1647834173?i=1647834178&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "sushin-shyam",
        id: "42",
        adamid: "827484156",
      },
      {
        alias: "madhuvanthi-narayan",
        id: "42",
        adamid: "1143470182",
      },
      {
        alias: "vinayak-sasikumar",
        id: "42",
        adamid: "913478269",
      },
    ],
    url: "https://www.shazam.com/track/635244275/aadharanjali-from-romancham",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "315988436",
    title: "Hurts So Good",
    subtitle: "Astrid S",
    share: {
      subject: "Hurts So Good - Astrid S",
      text: "I used Shazam to discover Hurts So Good by Astrid S.",
      href: "https://www.shazam.com/track/315988436/hurts-so-good",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/83/08/3d830822-aed2-375d-6ede-dff69c3250af/00602547958716.rgb.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Hurts So Good by Astrid S.",
      html: "https://www.shazam.com/snippets/email-share/315988436?lang=en&country=GB",
      avatar:
        "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/ef/ab/43/efab4343-83ae-937b-da81-b3b2f29bb495/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/315988436",
    },
    images: {
      background:
        "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/ef/ab/43/efab4343-83ae-937b-da81-b3b2f29bb495/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/83/08/3d830822-aed2-375d-6ede-dff69c3250af/00602547958716.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/83/08/3d830822-aed2-375d-6ede-dff69c3250af/00602547958716.rgb.jpg/400x400cc.jpg",
      joecolor: "b:000000p:fbecf1s:ffe4d3t:c9bcc0q:cbb6a8",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1445301219",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/15/56/0a/15560afc-269e-1ef2-e1dc-95fbd7531bf5/mzaf_13181530581497223895.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/hurts-so-good/1445301098?i=1445301219&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/hurts-so-good/1445301098?i=1445301219&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "astrid-s",
        id: "42",
        adamid: "987085593",
      },
    ],
    url: "https://www.shazam.com/track/315988436/hurts-so-good",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "625106155",
    title: "Under The Influence (Body Language)",
    subtitle: "Chris Brown",
    share: {
      subject: "Under The Influence (Body Language) - Chris Brown",
      text: "I used Shazam to discover Under The Influence (Body Language) by Chris Brown.",
      href: "https://www.shazam.com/track/625106155/under-the-influence-body-language",
      image:
        "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
      twitter:
        "I used @Shazam to discover Under The Influence (Body Language) by Chris Brown.",
      html: "https://www.shazam.com/snippets/email-share/625106155?lang=en&country=GB",
      avatar:
        "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/625106155",
    },
    images: {
      background:
        "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
      coverarthq:
        "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
      joecolor: "b:000000p:ffffffs:f63710t:cbcbcbq:c42c0d",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1643756101",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/3b/7b/06/3b7b0648-d0bc-aa64-912f-45541bb1de12/mzaf_17261939321764395679.plus.aac.p.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/under-the-influence-body-language/1643755888?i=1643756101&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/under-the-influence-body-language/1643755888?i=1643756101&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: true,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "chris-brown",
        id: "42",
        adamid: "95705522",
      },
    ],
    url: "https://www.shazam.com/track/625106155/under-the-influence-body-language",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "601555046",
    title: "Calm Down",
    subtitle: "Rema",
    share: {
      subject: "Calm Down - Rema",
      text: "I used Shazam to discover Calm Down by Rema.",
      href: "https://www.shazam.com/track/601555046/calm-down",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Calm Down by Rema.",
      html: "https://www.shazam.com/snippets/email-share/601555046?lang=en&country=GB",
      avatar:
        "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/23/24/4c/23244c02-6e19-ffa8-6bf1-01170fe9091a/17ea45ee-4d29-478a-87cd-f8d97fbc88c9_ami-identity-9e987f39368f9dd37966c136969aac14-2022-10-10T10-11-43.274Z_cropped.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/601555046",
    },
    images: {
      background:
        "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/23/24/4c/23244c02-6e19-ffa8-6bf1-01170fe9091a/17ea45ee-4d29-478a-87cd-f8d97fbc88c9_ami-identity-9e987f39368f9dd37966c136969aac14-2022-10-10T10-11-43.274Z_cropped.png/800x800cc.jpg",
      coverart:
        "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg",
      joecolor: "b:f7f1d1p:020000s:1f1909t:333029q:4a4431",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1614063459",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/70/9f/c7/709fc7e3-8e43-4b42-4f6e-c9f0a94842ce/mzaf_8187227090010990098.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/calm-down/1614063395?i=1614063459&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/calm-down/1614063395?i=1614063459&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "rema",
        id: "42",
        adamid: "1304716885",
      },
    ],
    url: "https://www.shazam.com/track/601555046/calm-down",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "215694828",
    title: "Naina",
    subtitle: "Sona Mohapatra & Armaan Malik",
    share: {
      subject: "Naina - Sona Mohapatra & Armaan Malik",
      text: "I used Shazam to discover Naina by Sona Mohapatra & Armaan Malik.",
      href: "https://www.shazam.com/track/215694828/naina",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/a9/0a/42/a90a42be-f307-77aa-56ff-fcaefcfb1f08/8902894356282_cover.jpg/400x400cc.jpg",
      twitter:
        "I used @Shazam to discover Naina by Sona Mohapatra & Armaan Malik.",
      html: "https://www.shazam.com/snippets/email-share/215694828?lang=en&country=GB",
      avatar:
        "https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/c1/ea/b1/c1eab1cf-95f1-5ea2-6314-00883db0a011/mza_8380342675368701858.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/215694828",
    },
    images: {
      background:
        "https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/c1/ea/b1/c1eab1cf-95f1-5ea2-6314-00883db0a011/mza_8380342675368701858.png/800x800cc.jpg",
      coverart:
        "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/a9/0a/42/a90a42be-f307-77aa-56ff-fcaefcfb1f08/8902894356282_cover.jpg/400x400cc.jpg",
      coverarthq:
        "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/a9/0a/42/a90a42be-f307-77aa-56ff-fcaefcfb1f08/8902894356282_cover.jpg/400x400cc.jpg",
      joecolor: "b:002320p:05c4e9s:08b2f8t:04a4c1q:0695cd",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1111783512",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/d3/b5/0e/d3b50ee8-bd7c-a98d-7823-bc5a6791befd/mzaf_7468892607675178814.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/naina/1111783409?i=1111783512&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/naina/1111783409?i=1111783512&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "sona-mohapatra",
        id: "42",
        adamid: "128637668",
      },
      {
        alias: "armaan-malik",
        id: "42",
        adamid: "258287474",
      },
    ],
    url: "https://www.shazam.com/track/215694828/naina",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "40590926",
    title: "Mockingbird",
    subtitle: "Eminem",
    share: {
      subject: "Mockingbird - Eminem",
      text: "I used Shazam to discover Mockingbird by Eminem.",
      href: "https://www.shazam.com/track/40590926/mockingbird",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Mockingbird by Eminem.",
      html: "https://www.shazam.com/snippets/email-share/40590926?lang=en&country=GB",
      avatar:
        "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/87/8e/a0/878ea0a1-ed8d-6fd7-3567-76ab8e6529af/mzl.ayuccyos.jpg/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/40590926",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/87/8e/a0/878ea0a1-ed8d-6fd7-3567-76ab8e6529af/mzl.ayuccyos.jpg/800x800cc.jpg",
      coverart:
        "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/400x400cc.jpg",
      joecolor: "b:000219p:fefefes:cac9ddt:cbcbd0q:a2a1b5",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1440751633",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/65/c6/15/65c61537-1c2f-e2bd-0f26-2ed9818fb86f/mzaf_9317418265960662555.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/mockingbird/1440751265?i=1440751633&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/mockingbird/1440751265?i=1440751633&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: true,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "eminem",
        id: "42",
        adamid: "111051",
      },
    ],
    url: "https://www.shazam.com/track/40590926/mockingbird",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "633403854",
    title: "Yaaron Sab Dua Karo (feat. Arup Jena)",
    subtitle: "Ritik Gupta",
    share: {
      subject: "Yaaron Sab Dua Karo (feat. Arup Jena) - Ritik Gupta",
      text: "I used Shazam to discover Yaaron Sab Dua Karo (feat. Arup Jena) by Ritik Gupta.",
      href: "https://www.shazam.com/track/633403854/yaaron-sab-dua-karo-feat-arup-jena",
      image:
        "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/45/e8/4f/45e84fca-6f24-e2d3-0de6-5985cd0bb02b/5063078474482_cover.jpg/400x400cc.jpg",
      twitter:
        "I used @Shazam to discover Yaaron Sab Dua Karo (feat. Arup Jena) by Ritik Gupta.",
      html: "https://www.shazam.com/snippets/email-share/633403854?lang=en&country=GB",
      snapchat: "https://www.shazam.com/partner/sc/track/633403854",
    },
    images: {
      background:
        "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/45/e8/4f/45e84fca-6f24-e2d3-0de6-5985cd0bb02b/5063078474482_cover.jpg/400x400cc.jpg",
      coverart:
        "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/45/e8/4f/45e84fca-6f24-e2d3-0de6-5985cd0bb02b/5063078474482_cover.jpg/400x400cc.jpg",
      coverarthq:
        "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/45/e8/4f/45e84fca-6f24-e2d3-0de6-5985cd0bb02b/5063078474482_cover.jpg/400x400cc.jpg",
      joecolor: "b:160702p:fefefes:db8e33t:cfcccbq:b37329",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1653053605",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/78/18/94/78189484-33a1-7aca-a63a-d0ed2899bf43/mzaf_7408699103566865165.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/yaaron-sab-dua-karo-feat-arup-jena/1653053603?i=1653053605&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/yaaron-sab-dua-karo-feat-arup-jena/1653053603?i=1653053605&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "ritik-gupta",
        id: "42",
        adamid: "1504074329",
      },
    ],
    url: "https://www.shazam.com/track/633403854/yaaron-sab-dua-karo-feat-arup-jena",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "616490430",
    title: "NEON BLADE",
    subtitle: "MoonDeity",
    share: {
      subject: "NEON BLADE - MoonDeity",
      text: "I used Shazam to discover NEON BLADE by MoonDeity.",
      href: "https://www.shazam.com/track/616490430/neon-blade",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/af/87/1e/af871ead-b35e-31c2-46bc-820ab014ab68/7316215313433.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover NEON BLADE by MoonDeity.",
      html: "https://www.shazam.com/snippets/email-share/616490430?lang=en&country=GB",
      snapchat: "https://www.shazam.com/partner/sc/track/616490430",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/af/87/1e/af871ead-b35e-31c2-46bc-820ab014ab68/7316215313433.jpg/400x400cc.jpg",
      coverart:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/af/87/1e/af871ead-b35e-31c2-46bc-820ab014ab68/7316215313433.jpg/400x400cc.jpg",
      coverarthq:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/af/87/1e/af871ead-b35e-31c2-46bc-820ab014ab68/7316215313433.jpg/400x400cc.jpg",
      joecolor: "b:000000p:fd0000s:f80000t:ca0000q:c60000",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1627535463",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/be/81/d3/be81d362-a70a-bbce-64dd-02e4baeb5f10/mzaf_14085939890733326253.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/neon-blade/1627535453?i=1627535463&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/neon-blade/1627535453?i=1627535463&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: true,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "moondeity",
        id: "42",
        adamid: "1593188093",
      },
    ],
    url: "https://www.shazam.com/track/616490430/neon-blade",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "640442821",
    title: "ម្លប់ស្វាយព្រាត់ស្នេហ៍-មាស​ សាលី",
    subtitle: "Meck Sithong",
    share: {
      subject: "ម្លប់ស្វាយព្រាត់ស្នេហ៍-មាស​ សាលី - Meck Sithong",
      text: "I used Shazam to discover ម្លប់ស្វាយព្រាត់ស្នេហ៍-មាស​ សាលី by Meck Sithong.",
      href: "https://www.shazam.com/track/640442821/%E1%9E%98-%E1%9E%9B%E1%9E%94-%E1%9E%9F-%E1%9E%9C-%E1%9E%99%E1%9E%96-%E1%9E%9A-%E1%9E%8F-%E1%9E%9F-%E1%9E%93-%E1%9E%A0-%E1%9E%98-%E1%9E%9F-%E1%9E%9F-%E1%9E%9B",
      image:
        "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/20/45/a4/2045a483-17f2-234b-50ec-3e66d35590e9/artwork.jpg/400x400cc.jpg",
      twitter:
        "I used @Shazam to discover ម្លប់ស្វាយព្រាត់ស្នេហ៍-មាស​ សាលី by Meck Sithong.",
      html: "https://www.shazam.com/snippets/email-share/640442821?lang=en&country=GB",
      snapchat: "https://www.shazam.com/partner/sc/track/640442821",
    },
    images: {
      background:
        "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/20/45/a4/2045a483-17f2-234b-50ec-3e66d35590e9/artwork.jpg/400x400cc.jpg",
      coverart:
        "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/20/45/a4/2045a483-17f2-234b-50ec-3e66d35590e9/artwork.jpg/400x400cc.jpg",
      coverarthq:
        "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/20/45/a4/2045a483-17f2-234b-50ec-3e66d35590e9/artwork.jpg/400x400cc.jpg",
      joecolor: "b:000000p:f0f0e5s:f6e492t:c0c0b7q:c4b675",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1653208892",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/88/da/88/88da8806-17ac-c0a6-f4a2-2f35f31eeed9/mzaf_9403259987605611338.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/%E1%9E%98-%E1%9E%9B%E1%9E%94-%E1%9E%9F-%E1%9E%9C-%E1%9E%99%E1%9E%96-%E1%9E%9A-%E1%9E%8F-%E1%9E%9F-%E1%9E%93-%E1%9E%A0-%E1%9E%98-%E1%9E%9F-%E1%9E%9F-%E1%9E%9B/1653208884?i=1653208892&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/%E1%9E%98-%E1%9E%9B%E1%9E%94-%E1%9E%9F-%E1%9E%9C-%E1%9E%99%E1%9E%96-%E1%9E%9A-%E1%9E%8F-%E1%9E%9F-%E1%9E%93-%E1%9E%A0-%E1%9E%98-%E1%9E%9F-%E1%9E%9F-%E1%9E%9B/1653208884?i=1653208892&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "meck-sithong",
        id: "42",
        adamid: "1649348628",
      },
    ],
    url: "https://www.shazam.com/track/640442821/%E1%9E%98-%E1%9E%9B%E1%9E%94-%E1%9E%9F-%E1%9E%9C-%E1%9E%99%E1%9E%96-%E1%9E%9A-%E1%9E%8F-%E1%9E%9F-%E1%9E%93-%E1%9E%A0-%E1%9E%98-%E1%9E%9F-%E1%9E%9F-%E1%9E%9B",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "633165088",
    title: "Mehmaan (feat. Raitila Rajasthan)",
    subtitle: "Sickflip",
    share: {
      subject: "Mehmaan (feat. Raitila Rajasthan) - Sickflip",
      text: "I used Shazam to discover Mehmaan (feat. Raitila Rajasthan) by Sickflip.",
      href: "https://www.shazam.com/track/633165088/mehmaan-feat-raitila-rajasthan",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/1d/1d/9f1d1d2b-4e6f-f43c-dc11-89e83dda8b80/8720766648408.png/400x400cc.jpg",
      twitter:
        "I used @Shazam to discover Mehmaan (feat. Raitila Rajasthan) by Sickflip.",
      html: "https://www.shazam.com/snippets/email-share/633165088?lang=en&country=GB",
      avatar:
        "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/d2/85/d8/d285d8aa-d0f7-f6b4-5417-4b92b2207284/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/633165088",
    },
    images: {
      background:
        "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/d2/85/d8/d285d8aa-d0f7-f6b4-5417-4b92b2207284/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/1d/1d/9f1d1d2b-4e6f-f43c-dc11-89e83dda8b80/8720766648408.png/400x400cc.jpg",
      coverarthq:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/1d/1d/9f1d1d2b-4e6f-f43c-dc11-89e83dda8b80/8720766648408.png/400x400cc.jpg",
      joecolor: "b:16a1b3p:090706s:28170et:0c2628q:24332f",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1645836442",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/37/57/ba/3757bab5-b5c3-930c-6b15-b02297a371b2/mzaf_3428023902191154523.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/mehmaan-feat-raitila-rajasthan/1645836224?i=1645836442&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/mehmaan-feat-raitila-rajasthan/1645836224?i=1645836442&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "sickflip",
        id: "42",
        adamid: "430674675",
      },
    ],
    url: "https://www.shazam.com/track/633165088/mehmaan-feat-raitila-rajasthan",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "404979975",
    title: "Rosapoo Malatharam",
    subtitle: "Sushin Shyam",
    share: {
      subject: "Rosapoo Malatharam - Sushin Shyam",
      text: "I used Shazam to discover Rosapoo Malatharam by Sushin Shyam.",
      href: "https://www.shazam.com/track/404979975/rosapoo-malatharam",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/c0/ca/70/c0ca7062-fdf4-48cf-e9d9-c60083b3cf2f/886446957210.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Rosapoo Malatharam by Sushin Shyam.",
      html: "https://www.shazam.com/snippets/email-share/404979975?lang=en&country=GB",
      avatar:
        "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/3c/6b/73/3c6b730e-97c8-b273-fa05-bc4d9557e594/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/404979975",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/3c/6b/73/3c6b730e-97c8-b273-fa05-bc4d9557e594/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/c0/ca/70/c0ca7062-fdf4-48cf-e9d9-c60083b3cf2f/886446957210.jpg/400x400cc.jpg",
      coverarthq:
        "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/c0/ca/70/c0ca7062-fdf4-48cf-e9d9-c60083b3cf2f/886446957210.jpg/400x400cc.jpg",
      joecolor: "b:220809p:ffffffs:f51d3et:d2cdcdq:ca1933",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1340070902",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/39/75/04/3975048e-50a3-aff4-870f-1476e1d69a42/mzaf_8230539381375617686.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/rosapoo-malatharam/1340070621?i=1340070902&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/rosapoo-malatharam/1340070621?i=1340070902&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "sushin-shyam",
        id: "42",
        adamid: "827484156",
      },
    ],
    url: "https://www.shazam.com/track/404979975/rosapoo-malatharam",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "330779188",
    title: "Starboy",
    subtitle: "The Weeknd Feat. Daft Punk",
    share: {
      subject: "Starboy - The Weeknd Feat. Daft Punk",
      text: "I used Shazam to discover Starboy by The Weeknd Feat. Daft Punk.",
      href: "https://www.shazam.com/track/330779188/starboy-feat-daft-punk",
      image:
        "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/e2/61/f8/e261f8c1-73db-9a7a-c89e-1068f19970e0/16UMGIM67863.rgb.jpg/400x400cc.jpg",
      twitter:
        "I used @Shazam to discover Starboy by The Weeknd Feat. Daft Punk.",
      html: "https://www.shazam.com/snippets/email-share/330779188?lang=en&country=GB",
      avatar:
        "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/55/f8/5c/55f85c40-3e34-e35f-ed2a-cf975e622059/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/330779188",
    },
    images: {
      background:
        "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/55/f8/5c/55f85c40-3e34-e35f-ed2a-cf975e622059/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/e2/61/f8/e261f8c1-73db-9a7a-c89e-1068f19970e0/16UMGIM67863.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/e2/61/f8/e261f8c1-73db-9a7a-c89e-1068f19970e0/16UMGIM67863.rgb.jpg/400x400cc.jpg",
      joecolor: "b:0c0e00p:f8bf00s:e56409t:c99c00q:b95307",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1440871420",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/18/9a/38/189a38bf-e5b3-b739-3097-d189ef6ee417/mzaf_980906342048584542.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/starboy-feat-daft-punk/1440871397?i=1440871420&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/starboy-feat-daft-punk/1440871397?i=1440871420&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: true,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "the-weeknd",
        id: "42",
        adamid: "479756766",
      },
    ],
    url: "https://www.shazam.com/track/330779188/starboy-feat-daft-punk",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "127047942",
    title: "Ava",
    subtitle: "Famy",
    share: {
      subject: "Ava - Famy",
      text: "I used Shazam to discover Ava by Famy.",
      href: "https://www.shazam.com/track/127047942/ava",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/9c/99/c1/9c99c12a-722b-99f0-530f-7f90f7f73b98/5060243329370.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Ava by Famy.",
      html: "https://www.shazam.com/snippets/email-share/127047942?lang=en&country=GB",
      snapchat: "https://www.shazam.com/partner/sc/track/127047942",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/9c/99/c1/9c99c12a-722b-99f0-530f-7f90f7f73b98/5060243329370.jpg/400x400cc.jpg",
      coverart:
        "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/9c/99/c1/9c99c12a-722b-99f0-530f-7f90f7f73b98/5060243329370.jpg/400x400cc.jpg",
      coverarthq:
        "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/9c/99/c1/9c99c12a-722b-99f0-530f-7f90f7f73b98/5060243329370.jpg/400x400cc.jpg",
      joecolor: "b:fcfbf9p:01132ds:0e253ct:334255q:3d5062",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1168850906",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/55/2d/7b/552d7bed-6924-aa18-4b5c-340d77cf423c/mzaf_1643542620909121917.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/ava/1168850367?i=1168850906&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/ava/1168850367?i=1168850906&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "famy",
        id: "42",
        adamid: "1277288654",
      },
    ],
    url: "https://www.shazam.com/track/127047942/ava",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "637562611",
    title: 'Mandharapoove (From "Kumari")',
    subtitle: "Aavani Malhar, Jakes Bejoy & Joe Paul",
    share: {
      subject:
        'Mandharapoove (From "Kumari") - Aavani Malhar, Jakes Bejoy & Joe Paul',
      text: 'I used Shazam to discover Mandharapoove (From "Kumari") by Aavani Malhar, Jakes Bejoy & Joe Paul.',
      href: "https://www.shazam.com/track/637562611/mandharapoove-from-kumari",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/67/68/90/6768901a-d1c9-cc1d-0274-2af890e4cc4a/197187200559.jpg/400x400cc.jpg",
      twitter:
        'I used @Shazam to discover Mandharapoove (From "Kumari") by Aavani Malhar, Jakes Bejoy & Joe Paul.',
      html: "https://www.shazam.com/snippets/email-share/637562611?lang=en&country=GB",
      snapchat: "https://www.shazam.com/partner/sc/track/637562611",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/67/68/90/6768901a-d1c9-cc1d-0274-2af890e4cc4a/197187200559.jpg/400x400cc.jpg",
      coverart:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/67/68/90/6768901a-d1c9-cc1d-0274-2af890e4cc4a/197187200559.jpg/400x400cc.jpg",
      coverarthq:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/67/68/90/6768901a-d1c9-cc1d-0274-2af890e4cc4a/197187200559.jpg/400x400cc.jpg",
      joecolor: "b:edfdf2p:070e0as:1e1b10t:353e38q:47483d",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1650190757",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/bc/be/57/bcbe57e1-6974-5833-edf5-109e880bd0d1/mzaf_10454262869255811359.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/mandharapoove-from-kumari/1650190422?i=1650190757&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/mandharapoove-from-kumari/1650190422?i=1650190757&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "aavani-malhar",
        id: "42",
        adamid: "1436075731",
      },
      {
        alias: "jakes-bejoy",
        id: "42",
        adamid: "334329518",
      },
      {
        alias: "joe-paul",
        id: "42",
        adamid: "376820878",
      },
    ],
    url: "https://www.shazam.com/track/637562611/mandharapoove-from-kumari",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "621856736",
    title: "you were there for me",
    subtitle: "Henry Moodie",
    share: {
      subject: "you were there for me - Henry Moodie",
      text: "I used Shazam to discover you were there for me by Henry Moodie.",
      href: "https://www.shazam.com/track/621856736/you-were-there-for-me",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e2/6c/70/e26c7046-0df7-9c50-cf95-83f19fa82bdc/5037300012407.jpg/400x400cc.jpg",
      twitter:
        "I used @Shazam to discover you were there for me by Henry Moodie.",
      html: "https://www.shazam.com/snippets/email-share/621856736?lang=en&country=GB",
      avatar:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/f3/82/f2/f382f2ed-ce4f-64d4-a0ee-665cdb51fbea/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/621856736",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/f3/82/f2/f382f2ed-ce4f-64d4-a0ee-665cdb51fbea/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e2/6c/70/e26c7046-0df7-9c50-cf95-83f19fa82bdc/5037300012407.jpg/400x400cc.jpg",
      coverarthq:
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/e2/6c/70/e26c7046-0df7-9c50-cf95-83f19fa82bdc/5037300012407.jpg/400x400cc.jpg",
      joecolor: "b:111e39p:fefefes:e7f6fbt:cfd1d7q:bccbd4",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1638948472",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/e0/79/0d/e0790dba-65eb-26a3-a238-68d53ff8d7dd/mzaf_6422920340584019503.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/you-were-there-for-me/1638948219?i=1638948472&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/you-were-there-for-me/1638948219?i=1638948472&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "henry-moodie",
        id: "42",
        adamid: "1632006177",
      },
    ],
    url: "https://www.shazam.com/track/621856736/you-were-there-for-me",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "53279206",
    title: "Mera Dil Ye Pukare (From ''Nagin'')",
    subtitle: "Lata Mangeshkar",
    share: {
      subject: "Mera Dil Ye Pukare (From ''Nagin'') - Lata Mangeshkar",
      text: "I used Shazam to discover Mera Dil Ye Pukare (From ''Nagin'') by Lata Mangeshkar.",
      href: "https://www.shazam.com/track/53279206/mera-dil-ye-pukare-from-nagin",
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/ba/00/a3/ba00a36c-a017-c998-e6f0-e1bbb2d590e4/cover.jpg/400x400cc.jpg",
      twitter:
        "I used @Shazam to discover Mera Dil Ye Pukare (From ''Nagin'') by Lata Mangeshkar.",
      html: "https://www.shazam.com/snippets/email-share/53279206?lang=en&country=GB",
      avatar:
        "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/23/70/c6/2370c60d-71b7-01af-9bb3-44fba8311024/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/53279206",
    },
    images: {
      background:
        "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/23/70/c6/2370c60d-71b7-01af-9bb3-44fba8311024/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/ba/00/a3/ba00a36c-a017-c998-e6f0-e1bbb2d590e4/cover.jpg/400x400cc.jpg",
      coverarthq:
        "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/ba/00/a3/ba00a36c-a017-c998-e6f0-e1bbb2d590e4/cover.jpg/400x400cc.jpg",
      joecolor: "b:2b1710p:dec06fs:e6a887t:ba9e5cq:c08b6f",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1523488932",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2a/d7/62/2ad7626a-2536-3b83-b293-9a504dbf7963/mzaf_16364713283799038871.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/mera-dil-ye-pukare-from-nagin/1523488619?i=1523488932&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/mera-dil-ye-pukare-from-nagin/1523488619?i=1523488932&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "lata-mangeshkar",
        id: "42",
        adamid: "14291575",
      },
    ],
    url: "https://www.shazam.com/track/53279206/mera-dil-ye-pukare-from-nagin",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "615599170",
    title: "Ajas Gets To Know",
    subtitle: "Sushin Shyam",
    share: {
      subject: "Ajas Gets To Know - Sushin Shyam",
      text: "I used Shazam to discover Ajas Gets To Know by Sushin Shyam.",
      href: "https://www.shazam.com/track/615599170/ajas-gets-to-know",
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/54/0d/b4/540db480-86dc-4d2f-b48f-55ccf246be88/cover.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Ajas Gets To Know by Sushin Shyam.",
      html: "https://www.shazam.com/snippets/email-share/615599170?lang=en&country=GB",
      avatar:
        "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/3c/6b/73/3c6b730e-97c8-b273-fa05-bc4d9557e594/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/615599170",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/3c/6b/73/3c6b730e-97c8-b273-fa05-bc4d9557e594/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/54/0d/b4/540db480-86dc-4d2f-b48f-55ccf246be88/cover.jpg/400x400cc.jpg",
      coverarthq:
        "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/54/0d/b4/540db480-86dc-4d2f-b48f-55ccf246be88/cover.jpg/400x400cc.jpg",
      joecolor: "b:070e07p:fbf6bes:dad3dbt:cac799q:afacb0",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1623780579",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/9d/8d/31/9d8d3152-4ec5-7aef-ebe5-b9ecaa3cee49/mzaf_16464017861235804704.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/ajas-gets-to-know/1623778708?i=1623780579&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/ajas-gets-to-know/1623778708?i=1623780579&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "sushin-shyam",
        id: "42",
        adamid: "827484156",
      },
    ],
    url: "https://www.shazam.com/track/615599170/ajas-gets-to-know",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "635162262",
    title: 'Jhaanjar (From "Honeymoon")',
    subtitle: "B. Praak & Jaani",
    share: {
      subject: 'Jhaanjar (From "Honeymoon") - B. Praak & Jaani',
      text: 'I used Shazam to discover Jhaanjar (From "Honeymoon") by B. Praak & Jaani.',
      href: "https://www.shazam.com/track/635162262/jhaanjar-from-honeymoon",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/73/7b/d7/737bd73e-d551-59fb-53a1-552c1d0a6448/8903431903990_cover.jpg/400x400cc.jpg",
      twitter:
        'I used @Shazam to discover Jhaanjar (From "Honeymoon") by B. Praak & Jaani.',
      html: "https://www.shazam.com/snippets/email-share/635162262?lang=en&country=GB",
      avatar:
        "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/bb/6a/3d/bb6a3deb-6847-2bb5-21ee-f26c738537d3/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/635162262",
    },
    images: {
      background:
        "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/bb/6a/3d/bb6a3deb-6847-2bb5-21ee-f26c738537d3/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/73/7b/d7/737bd73e-d551-59fb-53a1-552c1d0a6448/8903431903990_cover.jpg/400x400cc.jpg",
      coverarthq:
        "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/73/7b/d7/737bd73e-d551-59fb-53a1-552c1d0a6448/8903431903990_cover.jpg/400x400cc.jpg",
      joecolor: "b:d3effbp:0d0d0es:192d0ft:353a3eq:3e543e",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1647734713",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/fa/cc/49/facc49e6-abdc-49bf-e8d5-e4ebd6e4efe7/mzaf_12647088822856168688.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/jhaanjar-from-honeymoon/1647734711?i=1647734713&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/jhaanjar-from-honeymoon/1647734711?i=1647734713&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "b-praak",
        id: "42",
        adamid: "747872156",
      },
      {
        alias: "jaani",
        id: "42",
        adamid: "1157930425",
      },
    ],
    url: "https://www.shazam.com/track/635162262/jhaanjar-from-honeymoon",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "637842265",
    title: 'Chann Sitare (From "Oye Makhna")',
    subtitle: "Ammy Virk, Avvy Sra & Harmanjeet Singh",
    share: {
      subject:
        'Chann Sitare (From "Oye Makhna") - Ammy Virk, Avvy Sra & Harmanjeet Singh',
      text: 'I used Shazam to discover Chann Sitare (From "Oye Makhna") by Ammy Virk, Avvy Sra & Harmanjeet Singh.',
      href: "https://www.shazam.com/track/637842265/chann-sitare-from-oye-makhna",
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/b0/a3/9b/b0a39bfe-8fef-35ce-fad0-07d8f0704b19/197187227402.jpg/400x400cc.jpg",
      twitter:
        'I used @Shazam to discover Chann Sitare (From "Oye Makhna") by Ammy Virk, Avvy Sra & Harmanjeet Singh.',
      html: "https://www.shazam.com/snippets/email-share/637842265?lang=en&country=GB",
      avatar:
        "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/51/72/94/51729410-bc0c-2493-2ae8-d9d0996e3e9d/mza_1113674329479822617.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/637842265",
    },
    images: {
      background:
        "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/51/72/94/51729410-bc0c-2493-2ae8-d9d0996e3e9d/mza_1113674329479822617.png/800x800cc.jpg",
      coverart:
        "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/b0/a3/9b/b0a39bfe-8fef-35ce-fad0-07d8f0704b19/197187227402.jpg/400x400cc.jpg",
      coverarthq:
        "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/b0/a3/9b/b0a39bfe-8fef-35ce-fad0-07d8f0704b19/197187227402.jpg/400x400cc.jpg",
      joecolor: "b:0e123fp:e4eef9s:11a2e5t:b9c2d3q:1085c4",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1650465469",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/e6/f0/b0/e6f0b019-37dd-2c9e-c6e6-d1caff4e08a6/mzaf_6117728659447332926.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/chann-sitare-from-oye-makhna/1650465278?i=1650465469&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/chann-sitare-from-oye-makhna/1650465278?i=1650465469&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "ammy-virk",
        id: "42",
        adamid: "492592838",
      },
      {
        alias: "avvy-sra",
        id: "42",
        adamid: "1212757470",
      },
      {
        alias: "harmanjeet-singh",
        id: "42",
        adamid: "1450435494",
      },
    ],
    url: "https://www.shazam.com/track/637842265/chann-sitare-from-oye-makhna",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "629717935",
    title: "Baller",
    subtitle: "Shubh",
    share: {
      subject: "Baller - Shubh",
      text: "I used Shazam to discover Baller by Shubh.",
      href: "https://www.shazam.com/track/629717935/baller",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e9/bd/93/e9bd9316-75a6-bc15-aebe-c737037bedf0/196925634489.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Baller by Shubh.",
      html: "https://www.shazam.com/snippets/email-share/629717935?lang=en&country=GB",
      avatar:
        "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/3c/fd/ae/3cfdae86-6f48-d7fb-cddf-706ccde4b24c/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/629717935",
    },
    images: {
      background:
        "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/3c/fd/ae/3cfdae86-6f48-d7fb-cddf-706ccde4b24c/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e9/bd/93/e9bd9316-75a6-bc15-aebe-c737037bedf0/196925634489.jpg/400x400cc.jpg",
      coverarthq:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e9/bd/93/e9bd9316-75a6-bc15-aebe-c737037bedf0/196925634489.jpg/400x400cc.jpg",
      joecolor: "b:bcbed7p:10100fs:252728t:323337q:43454b",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1641674741",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/cb/e0/c2/cbe0c24e-8fac-7f72-3ffc-6e13befbcb5f/mzaf_4386570819969846370.plus.aac.p.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/baller/1641674737?i=1641674741&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/baller/1641674737?i=1641674741&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "shubh",
        id: "42",
        adamid: "1585737475",
      },
    ],
    url: "https://www.shazam.com/track/629717935/baller",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "638232094",
    title: "Lima",
    subtitle: "SAADI ANANYA",
    share: {
      subject: "Lima - SAADI ANANYA",
      text: "I used Shazam to discover Lima by SAADI ANANYA.",
      href: "https://www.shazam.com/track/638232094/lima",
      image:
        "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/83/cc/79/83cc79da-3c18-f015-a52f-23e1f5ae0149/197187196555.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Lima by SAADI ANANYA.",
      html: "https://www.shazam.com/snippets/email-share/638232094?lang=en&country=GB",
      snapchat: "https://www.shazam.com/partner/sc/track/638232094",
    },
    images: {
      background:
        "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/83/cc/79/83cc79da-3c18-f015-a52f-23e1f5ae0149/197187196555.jpg/400x400cc.jpg",
      coverart:
        "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/83/cc/79/83cc79da-3c18-f015-a52f-23e1f5ae0149/197187196555.jpg/400x400cc.jpg",
      coverarthq:
        "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/83/cc/79/83cc79da-3c18-f015-a52f-23e1f5ae0149/197187196555.jpg/400x400cc.jpg",
      joecolor: "b:174152p:f6cacbs:3ddbedt:c9afb3q:35bccd",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1650881275",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/5b/8b/b1/5b8bb146-a7ca-80fe-1ac4-0b86af933724/mzaf_10005752991645022297.plus.aac.p.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/lima/1650881273?i=1650881275&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/lima/1650881273?i=1650881275&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "saadi-ananya",
        id: "42",
        adamid: "1604226814",
      },
    ],
    url: "https://www.shazam.com/track/638232094/lima",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "637262224",
    title: "Heer Ranjha",
    subtitle: "Rito Riba, Rajat Nagpal & Rana Sotal",
    share: {
      subject: "Heer Ranjha - Rito Riba, Rajat Nagpal & Rana Sotal",
      text: "I used Shazam to discover Heer Ranjha by Rito Riba, Rajat Nagpal & Rana Sotal.",
      href: "https://www.shazam.com/track/637262224/heer-ranjha",
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/cf/a2/90/cfa2908d-b8b2-a412-904e-4c70c520dcdc/196922225307_Cover.jpg/400x400cc.jpg",
      twitter:
        "I used @Shazam to discover Heer Ranjha by Rito Riba, Rajat Nagpal & Rana Sotal.",
      html: "https://www.shazam.com/snippets/email-share/637262224?lang=en&country=GB",
      snapchat: "https://www.shazam.com/partner/sc/track/637262224",
    },
    images: {
      background:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/cf/a2/90/cfa2908d-b8b2-a412-904e-4c70c520dcdc/196922225307_Cover.jpg/400x400cc.jpg",
      coverart:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/cf/a2/90/cfa2908d-b8b2-a412-904e-4c70c520dcdc/196922225307_Cover.jpg/400x400cc.jpg",
      coverarthq:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/cf/a2/90/cfa2908d-b8b2-a412-904e-4c70c520dcdc/196922225307_Cover.jpg/400x400cc.jpg",
      joecolor: "b:190521p:fffeffs:ed5326t:d0ccd2q:c24425",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1649890153",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/9e/1a/98/9e1a989e-0357-fd10-2313-3bd10b2ac3ef/mzaf_15936148173705398358.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/heer-ranjha/1649890151?i=1649890153&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/heer-ranjha/1649890151?i=1649890153&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "rito-riba",
        id: "42",
        adamid: "1646959884",
      },
      {
        alias: "rajat-nagpal",
        id: "42",
        adamid: "1182567717",
      },
      {
        alias: "rana-sotal",
        id: "42",
        adamid: "1512622058",
      },
    ],
    url: "https://www.shazam.com/track/637262224/heer-ranjha",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "580280101",
    title: "Daydream",
    subtitle: "Lily Meola",
    share: {
      subject: "Daydream - Lily Meola",
      text: "I used Shazam to discover Daydream by Lily Meola.",
      href: "https://www.shazam.com/track/580280101/daydream",
      image:
        "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/0f/a5/fb/0fa5fb52-11f3-9a90-98ad-6f8e8c6d3a11/1963620714490_cover.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Daydream by Lily Meola.",
      html: "https://www.shazam.com/snippets/email-share/580280101?lang=en&country=GB",
      avatar:
        "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/cb/6b/be/cb6bbeca-305b-2bc4-2ad2-13d014c8cdde/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/580280101",
    },
    images: {
      background:
        "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/cb/6b/be/cb6bbeca-305b-2bc4-2ad2-13d014c8cdde/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/0f/a5/fb/0fa5fb52-11f3-9a90-98ad-6f8e8c6d3a11/1963620714490_cover.jpg/400x400cc.jpg",
      coverarthq:
        "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/0f/a5/fb/0fa5fb52-11f3-9a90-98ad-6f8e8c6d3a11/1963620714490_cover.jpg/400x400cc.jpg",
      joecolor: "b:3b589ep:f7d9b7s:f7cf39t:d1bfb2q:d1b84d",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1612693064",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/89/ac/69/89ac699b-2f81-009d-480a-425f3da98ee2/mzaf_12772913006192773121.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/daydream/1612693063?i=1612693064&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/daydream/1612693063?i=1612693064&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "lily-meola",
        id: "42",
        adamid: "678241726",
      },
    ],
    url: "https://www.shazam.com/track/580280101/daydream",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "633165084",
    title: "Kho Gaye",
    subtitle: "Taaruk Raina",
    share: {
      subject: "Kho Gaye - Taaruk Raina",
      text: "I used Shazam to discover Kho Gaye by Taaruk Raina.",
      href: "https://www.shazam.com/track/633165084/kho-gaye",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/1d/1d/9f1d1d2b-4e6f-f43c-dc11-89e83dda8b80/8720766648408.png/400x400cc.jpg",
      twitter: "I used @Shazam to discover Kho Gaye by Taaruk Raina.",
      html: "https://www.shazam.com/snippets/email-share/633165084?lang=en&country=GB",
      snapchat: "https://www.shazam.com/partner/sc/track/633165084",
    },
    images: {
      background:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/1d/1d/9f1d1d2b-4e6f-f43c-dc11-89e83dda8b80/8720766648408.png/400x400cc.jpg",
      coverart:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/1d/1d/9f1d1d2b-4e6f-f43c-dc11-89e83dda8b80/8720766648408.png/400x400cc.jpg",
      coverarthq:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/1d/1d/9f1d1d2b-4e6f-f43c-dc11-89e83dda8b80/8720766648408.png/400x400cc.jpg",
      joecolor: "b:16a1b3p:090706s:28170et:0c2628q:24332f",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1645836448",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/34/f9/00/34f900f6-4105-ec7e-6bf1-5430fcacd34e/mzaf_13061919194848602559.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/kho-gaye/1645836224?i=1645836448&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/kho-gaye/1645836224?i=1645836448&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "taaruk-raina",
        id: "42",
        adamid: "1368308173",
      },
    ],
    url: "https://www.shazam.com/track/633165084/kho-gaye",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "372096534",
    title: "Sweet",
    subtitle: "BROCKHAMPTON",
    share: {
      subject: "Sweet - BROCKHAMPTON",
      text: "I used Shazam to discover Sweet by BROCKHAMPTON.",
      href: "https://www.shazam.com/track/372096534/sweet",
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/68/a7/1a/68a71ae5-bdd1-da68-ea6d-0879d4ddc126/888915443347_cover.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Sweet by BROCKHAMPTON.",
      html: "https://www.shazam.com/snippets/email-share/372096534?lang=en&country=GB",
      avatar:
        "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/60/00/cf/6000cf3a-c7f5-4812-b568-8919664ac78a/5b3d03a1-f5e0-46cf-bc73-58a79f5a7821_ami-identity-eccbce19c932c4feb6be7e3dcc393042-2022-11-07T23-14-23.005Z_cropped.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/372096534",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/60/00/cf/6000cf3a-c7f5-4812-b568-8919664ac78a/5b3d03a1-f5e0-46cf-bc73-58a79f5a7821_ami-identity-eccbce19c932c4feb6be7e3dcc393042-2022-11-07T23-14-23.005Z_cropped.png/800x800cc.jpg",
      coverart:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/68/a7/1a/68a71ae5-bdd1-da68-ea6d-0879d4ddc126/888915443347_cover.jpg/400x400cc.jpg",
      coverarthq:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/68/a7/1a/68a71ae5-bdd1-da68-ea6d-0879d4ddc126/888915443347_cover.jpg/400x400cc.jpg",
      joecolor: "b:161616p:e0e0e0s:55f706t:b7b7b7q:48ca09",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1274258402",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/cf/4c/3a/cf4c3acd-76c8-bb74-c1ca-804649eae774/mzaf_2942659939084020883.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/sweet/1274258258?i=1274258402&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/sweet/1274258258?i=1274258402&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: true,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "brockhampton",
        id: "42",
        adamid: "960102996",
      },
    ],
    url: "https://www.shazam.com/track/372096534/sweet",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "411626338",
    title: "I Was Never There",
    subtitle: "The Weeknd & Gesaffelstein",
    share: {
      subject: "I Was Never There - The Weeknd & Gesaffelstein",
      text: "I used Shazam to discover I Was Never There by The Weeknd & Gesaffelstein.",
      href: "https://www.shazam.com/track/411626338/i-was-never-there",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/db/22/4e/db224ee0-b058-5d06-9a8c-fa10662bd58e/18UMGIM17205.rgb.jpg/400x400cc.jpg",
      twitter:
        "I used @Shazam to discover I Was Never There by The Weeknd & Gesaffelstein.",
      html: "https://www.shazam.com/snippets/email-share/411626338?lang=en&country=GB",
      avatar:
        "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/55/f8/5c/55f85c40-3e34-e35f-ed2a-cf975e622059/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/411626338",
    },
    images: {
      background:
        "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/55/f8/5c/55f85c40-3e34-e35f-ed2a-cf975e622059/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/db/22/4e/db224ee0-b058-5d06-9a8c-fa10662bd58e/18UMGIM17205.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/db/22/4e/db224ee0-b058-5d06-9a8c-fa10662bd58e/18UMGIM17205.rgb.jpg/400x400cc.jpg",
      joecolor: "b:0d1615p:b8c7c6s:fa804bt:96a4a2q:cb6b40",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1363308574",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/c7/55/08/c7550814-f101-254f-ec37-528598a5d2e6/mzaf_6189203123700607482.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/i-was-never-there/1363308558?i=1363308574&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/i-was-never-there/1363308558?i=1363308574&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "the-weeknd",
        id: "42",
        adamid: "479756766",
      },
      {
        alias: "gesaffelstein",
        id: "42",
        adamid: "283928791",
      },
    ],
    url: "https://www.shazam.com/track/411626338/i-was-never-there",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "640456815",
    title: 'Apna Bana Le (From "Bhediya")',
    subtitle: "Arijit Singh, Sachin-Jigar & Amitabh Bhattacharya",
    share: {
      subject:
        'Apna Bana Le (From "Bhediya") - Arijit Singh, Sachin-Jigar & Amitabh Bhattacharya',
      text: 'I used Shazam to discover Apna Bana Le (From "Bhediya") by Arijit Singh, Sachin-Jigar & Amitabh Bhattacharya.',
      href: "https://www.shazam.com/track/640456815/apna-bana-le-from-bhediya",
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/2e/0b/c0/2e0bc070-112f-a827-6ad8-6bc64f7caaff/840214460180.png/400x400cc.jpg",
      twitter:
        'I used @Shazam to discover Apna Bana Le (From "Bhediya") by Arijit Singh, Sachin-Jigar & Amitabh Bhattacharya.',
      html: "https://www.shazam.com/snippets/email-share/640456815?lang=en&country=GB",
      avatar:
        "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/e1/e9/56/e1e956fc-919e-b2c9-924d-a8b54be35d3c/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/640456815",
    },
    images: {
      background:
        "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/e1/e9/56/e1e956fc-919e-b2c9-924d-a8b54be35d3c/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/2e/0b/c0/2e0bc070-112f-a827-6ad8-6bc64f7caaff/840214460180.png/400x400cc.jpg",
      coverarthq:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/2e/0b/c0/2e0bc070-112f-a827-6ad8-6bc64f7caaff/840214460180.png/400x400cc.jpg",
      joecolor: "b:240003p:a7d6f3s:91bbd6t:8dabc3q:7b95ac",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1653219849",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/09/51/0d/09510dea-6579-5cd0-b13b-696abc2c520b/mzaf_7170069118588673157.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/apna-bana-le-from-bhediya/1653219847?i=1653219849&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/apna-bana-le-from-bhediya/1653219847?i=1653219849&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "arijit-singh",
        id: "42",
        adamid: "484568188",
      },
      {
        alias: "sachin-jigar",
        id: "42",
        adamid: "376648045",
      },
      {
        alias: "amitabh-bhattacharya",
        id: "42",
        adamid: "330140017",
      },
    ],
    url: "https://www.shazam.com/track/640456815/apna-bana-le-from-bhediya",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "637756376",
    title: "Jaadugar",
    subtitle: "Mahbub Islam",
    share: {
      subject: "Jaadugar - Mahbub Islam",
      text: "I used Shazam to discover Jaadugar by Mahbub Islam.",
      href: "https://www.shazam.com/track/637756376/jaadugar",
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/90/a9/79/90a9794b-4094-aee3-ce33-2ffce21cdcd4/artwork.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Jaadugar by Mahbub Islam.",
      html: "https://www.shazam.com/snippets/email-share/637756376?lang=en&country=GB",
      avatar:
        "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9c/16/6c/9c166c13-8db3-e9cc-8f5e-6e301af82d9b/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/637756376",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9c/16/6c/9c166c13-8db3-e9cc-8f5e-6e301af82d9b/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/90/a9/79/90a9794b-4094-aee3-ce33-2ffce21cdcd4/artwork.jpg/400x400cc.jpg",
      coverarthq:
        "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/90/a9/79/90a9794b-4094-aee3-ce33-2ffce21cdcd4/artwork.jpg/400x400cc.jpg",
      joecolor: "b:281920p:feffffs:c7c7c7t:d3d0d2q:a7a4a5",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1653723002",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/ae/cc/92/aecc92b9-1bbe-9a95-6d8f-94648abcd163/mzaf_9564292677333961766.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/jaadugar/1653723000?i=1653723002&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/jaadugar/1653723000?i=1653723002&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "mahbub-islam",
        id: "42",
        adamid: "1566916414",
      },
    ],
    url: "https://www.shazam.com/track/637756376/jaadugar",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "607917333",
    title: "SNAP",
    subtitle: "Rosa Linn",
    share: {
      subject: "SNAP - Rosa Linn",
      text: "I used Shazam to discover SNAP by Rosa Linn.",
      href: "https://www.shazam.com/track/607917333/snap",
      image:
        "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/f7/26/e6f726ab-1827-dec4-1613-394b537db8e4/196589496959.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover SNAP by Rosa Linn.",
      html: "https://www.shazam.com/snippets/email-share/607917333?lang=en&country=GB",
      avatar:
        "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/75/4c/3b/754c3b37-5a16-c203-f6f6-ff5c3ddfa93e/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/607917333",
    },
    images: {
      background:
        "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/75/4c/3b/754c3b37-5a16-c203-f6f6-ff5c3ddfa93e/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/f7/26/e6f726ab-1827-dec4-1613-394b537db8e4/196589496959.jpg/400x400cc.jpg",
      coverarthq:
        "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/f7/26/e6f726ab-1827-dec4-1613-394b537db8e4/196589496959.jpg/400x400cc.jpg",
      joecolor: "b:f3f0ebp:2d2526s:382a2at:554d4dq:5d5251",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1646526227",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/6e/2b/f3/6e2bf33f-08c9-6286-b8c0-b7e7b8630d1b/mzaf_11852854497905823862.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/snap/1646526226?i=1646526227&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/snap/1646526226?i=1646526227&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "rosa-linn",
        id: "42",
        adamid: "1580652660",
      },
    ],
    url: "https://www.shazam.com/track/607917333/snap",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "605179296",
    title: "No Love",
    subtitle: "Shubh",
    share: {
      subject: "No Love - Shubh",
      text: "I used Shazam to discover No Love by Shubh.",
      href: "https://www.shazam.com/track/605179296/no-love",
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/a7/b3/80/a7b380b9-9e29-1642-566e-d1ca4b920886/196776912972.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover No Love by Shubh.",
      html: "https://www.shazam.com/snippets/email-share/605179296?lang=en&country=GB",
      avatar:
        "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/3c/fd/ae/3cfdae86-6f48-d7fb-cddf-706ccde4b24c/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/605179296",
    },
    images: {
      background:
        "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/3c/fd/ae/3cfdae86-6f48-d7fb-cddf-706ccde4b24c/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/a7/b3/80/a7b380b9-9e29-1642-566e-d1ca4b920886/196776912972.jpg/400x400cc.jpg",
      coverarthq:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/a7/b3/80/a7b380b9-9e29-1642-566e-d1ca4b920886/196776912972.jpg/400x400cc.jpg",
      joecolor: "b:101419p:e8e7fbs:9ca3fdt:bcbcceq:8086cf",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1635085707",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/ce/d5/f5/ced5f5a3-0d78-6262-a00b-acf4c48bd231/mzaf_5468968193847377053.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/no-love/1635085634?i=1635085707&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/no-love/1635085634?i=1635085707&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "shubh",
        id: "42",
        adamid: "1585737475",
      },
    ],
    url: "https://www.shazam.com/track/605179296/no-love",
    highlightsurls: {},
    properties: {},
  },
  {
    layout: "5",
    type: "MUSIC",
    key: "631663197",
    title: 'Veera Soora (From "Naane Varuvean")',
    subtitle: "Yuvanshankar Raja, Muthu Sirpi & Selva Raghavan",
    share: {
      subject:
        'Veera Soora (From "Naane Varuvean") - Yuvanshankar Raja, Muthu Sirpi & Selva Raghavan',
      text: 'I used Shazam to discover Veera Soora (From "Naane Varuvean") by Yuvanshankar Raja, Muthu Sirpi & Selva Raghavan.',
      href: "https://www.shazam.com/track/631663197/veera-soora-from-naane-varuvean",
      image:
        "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/45/66/9b/45669ba2-11c1-b998-8275-9c7730be39ad/197186925927.jpg/400x400cc.jpg",
      twitter:
        'I used @Shazam to discover Veera Soora (From "Naane Varuvean") by Yuvanshankar Raja, Muthu Sirpi & Selva Raghavan.',
      html: "https://www.shazam.com/snippets/email-share/631663197?lang=en&country=GB",
      avatar:
        "https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/5b/6b/e9/5b6be967-b25c-d12f-65f2-59c8807036fc/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/631663197",
    },
    images: {
      background:
        "https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/5b/6b/e9/5b6be967-b25c-d12f-65f2-59c8807036fc/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/45/66/9b/45669ba2-11c1-b998-8275-9c7730be39ad/197186925927.jpg/400x400cc.jpg",
      coverarthq:
        "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/45/66/9b/45669ba2-11c1-b998-8275-9c7730be39ad/197186925927.jpg/400x400cc.jpg",
      joecolor: "b:0a151bp:ffffffs:e2e4e1t:cdd0d1q:b7bbb9",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1643836544",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/d5/f0/7a/d5f07ab9-9f8b-119c-36ad-92904d3911b1/mzaf_2829276915264854996.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/veera-soora-from-naane-varuvean/1643836536?i=1643836544&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/veera-soora-from-naane-varuvean/1643836536?i=1643836544&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "yuvan-shankar-raja",
        id: "42",
        adamid: "117755361",
      },
      {
        alias: "muthu-sirpi",
        id: "42",
        adamid: "1554318158",
      },
      {
        alias: "selva-raghavan",
        id: "42",
        adamid: "982924443",
      },
    ],
    url: "https://www.shazam.com/track/631663197/veera-soora-from-naane-varuvean",
    highlightsurls: {},
    properties: {},
  },
];

interface SongAction {
  name: string;
  type: string;
  uri: string;
}

interface SongArtists {
  alias: string;
  id: string;
  adamid: string;
}

interface Charts {
  type: string;
  key: string;
  title: string;
  subtitle: string;
  images: {
    background: string;
  };
  hub: {
    type: string;
    image: string;
    actions: SongAction[];
  };
  artists: SongArtists[];
  layout: string;
  url: string;
  highlightsurls: object;
  properties: object;
  share: object;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Charts[]>
) {
  res.status(200).json(data);
}

export async function getChartsData() {
  return data;
}
