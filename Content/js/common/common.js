var Home = (function () {
  return {
    init: function () {
      this.onSomething();
    },
    onSomething: function () {
    },

    tabSidebar: [
      {
        id: 1,
        content: "Cá Nhân",
        isActive: true,
        icon: "bi bi-music-note-beamed fz-24 lh-24",
        tab: "tab-personal"
      },
      {
        id: 2,
        content: "Khám Phá",
        isActive:false,
        icon: "bi bi-vinyl fz-24 lh-24",
        tab: "tab-explore"

      },
      {
        id: 3,
        content: "#zingchart",
        isActive:false,
        icon: "bi bi-graph-up-arrow fz-24 lh-24",
        tab: "tab-ranking"

      },
      {
        id: 4,
        content: "Radio",
        isActive:false,
        icon: "bi bi-broadcast-pin fz-24 lh-24",
        tab: "tab-radio"

      },
      {
        id: 5,
        content: "Theo dõi",
        isActive:false,
        icon: "bi bi-bell fz-24 lh-24",
        tab: "tab-follow"

      },
    ],
    tabSidebar2: [
      {
        id: 1,
        content: "Nhạc Mới",
        isActive: false,
        icon: "bi bi-music-note-list fz-24 lh-24",
        tab: ""
      },
      {
        id: 2,
        content: "Thể Loại",
        isActive:false,
        icon: "bi bi-menu-app fz-24 lh-24",
        tab: ""
      },
      {
        id: 3,
        content: "Top 100",
        isActive:false,
        icon: "bi bi-star fz-24 lh-24",
        tab: "",
      },
      {
        id: 4,
        content: "MV",
        isActive:false,
        icon: "bi bi-camera-video fz-24 lh-24",
        tab: ""
      },
      {
        id: 5,
        content: "Bài Hát",
        isActive:false,
        icon: "bi bi-file-earmark-music-fill fz-24 lh-24",
        tab: ""
      },
      {
        id: 6,
        content: "PlayList",
        isActive:false,
        icon: "bi bi-music-note-list fz-24 lh-24",
        tab: ""
      },
      {
        id: 7,
        content: "Gần Đây",
        isActive:false,
        icon: "bi bi-clock-history fz-24 lh-24",
        tab: ""
      },
    ],
    SuggestResultSearchBar: [
      {
        name: "Karaoke",
      },
      {
        name: "Tháng 4 là lời nói dối của em",
      },
      {
        name: "Chạy ngay đi",
      },
      {
        name: "PODCAST",
      },
      {
        name: "Sơn Tùng - MTP",
      },
    ],
    PlaylistSong: {
      1: [
        {
          image: "../Content/image/Artist/MyPlaylist/lalatran.jpg",
          name: "Anh Yêu Vội Thế - Remix",
          author: "LaLa Trần",
          album: "",
          duration: "04:50",
          source:
            "../Content/music/MyPlaylist/AnhYeuVoiTheMeeRemix-LaLaTran-7202623.mp3",
            dataPlaylist: 1
        },
        {
          image: "../Content/image/Artist/MyPlaylist/baotienmotmobinhyen.jpg",
          name: "Bao Tiền Một Mớ Bình Yên",
          author: "14 Casper, Bon",
          album: "Bao Tiền Một Mớ Bình Yên? (Single)",
          duration: "05:00",
          source:
            "../Content/music/MyPlaylist/BaoTienMotMoBinhYen-14CasperBon-6897329.mp3",
            dataPlaylist: 1
        },
        {
          image: "../Content/image/Artist/MyPlaylist/sontung.jpg",
          name: "Buông Đôi Tay Nhau Ra",
          author: "Sơn Tùng - MTP",
          album: "",
          duration: "03:46",
          source:
            "../Content/music/MyPlaylist/BuongDoiTayNhauRa-SonTungMTP-4184408.mp3",
            dataPlaylist: 1
        },
        {
          image: "../Content/image/Artist/MyPlaylist/becauseimstupid.jpg",
          name: "Because I'm Stupid",
          author: "SS501",
          album: "Boys Over Flowers",
          duration: "04:21",
          source: "../Content/music/MyPlaylist/BecauseImStupid-SS501-205763.mp3",
          dataPlaylist: 1
        },
        {
          image: "../Content/image/Artist/MyPlaylist/hongphaivetinhyeu.jpg",
          name: "Bài Hát Này Hông Phải Về Tình Yêu",
          author: "Khôi Vũ",
          album: "Hông Về Tình Yêu (Single)",
          duration: "03:17",
          source: "../Content/music/MyPlaylist/Hong-Ve-Tinh-Yeu-Khoi-Vu.mp3",
          dataPlaylist: 1
        },
        {
          image: "../Content/image/Artist/MyPlaylist/didetrove.jpg",
          name: "Đi Để Trở Về",
          author: "Soobin Hoàng Sơn",
          album: "Xuân 2018",
          duration: "03:28",
          source:
            "../Content/music/MyPlaylist/DiDeTroVe-SoobinHoangSon-4726882.mp3",
            dataPlaylist: 1
        },
        {
          image: "../Content/image/Artist/MyPlaylist/monstar.jpg",
          name: "Giữ Lấy Làm Gì",
          author: "MONSTAR",
          album: "",
          duration: "03:21",
          source: "../Content/music/MyPlaylist/giulaylamgi-MONSTAR-7057197.mp3",
          dataPlaylist: 1
        },
        {
          image: "../Content/image/Artist/MyPlaylist/itnhungdailau.jpg",
          name: "Ít Nhưng Dài Lâu - Nam Con Remix",
          author: "Yan Nguyễn, Nam Con",
          album: "",
          duration: "03:24",
          source:
            "../Content/music/MyPlaylist/It Nhung Dai Lau Remix_ - Yan Nguyen_ Na.mp3",
            dataPlaylist: 1
        },
        {
          image: "../Content/image/Artist/MyPlaylist/moidodavoi.jpg",
          name: "Mới Đó Đã Vội",
          author: "Dương Hoàng Yến",
          album: "Mới Đó Đã Vội (Single)",
          duration: "05:06",
          source:
            "../Content/music/MyPlaylist/MoiDoDaVoi-DuongHoangYen-6812276.mp3",
            dataPlaylist: 1
        },
        {
          image: "../Content/image/Artist/MyPlaylist/more.jpg",
          name: "More",
          author: "Madison Beer, Lexie Liu, G-DLE",
          album: "K/DA All Out",
          duration: "03:36",
          source:
            "../Content/music/MyPlaylist/More-KDAMadisonBeerGIDLELexieLiuJairaBurnsSeraphine-6770633.mp3",
            dataPlaylist: 1
        },
  
        {
          image: "../Content/image/Artist/MyPlaylist/nhumotnguoidung.jpg",
          name: "Như Một Người Dưng - Cukak Remix",
          author: "Nguyễn Thạc Bảo Ngọc, Cukak",
          album: "Cukak Remix",
          duration: "03:41",
          source:
            "../Content/music/MyPlaylist/Nhu Mot Nguoi Dung Cukak Remix_ - Nguyen.mp3",
            dataPlaylist: 1
        },
        {
          image: "../Content/image/Artist/MyPlaylist/niz.jpg",
          name: "Short Skirt",
          author: "NIZ",
          album: "Short Skirt (Single)",
          duration: "02:40",
          source:
            "../Content/music/MyPlaylist/Short_Skirt_-_Niz_Em_la_Bad_girl_trong_b_vay_ng_n-M59VEx31D20.mp3",
            dataPlaylist: 1
        },
        {
          image: "../Content/image/Artist/MyPlaylist/standbyme.jpg",
          name: "Stand By Me",
          author: "Shinee",
          album: "Boys Over Flowers",
          duration: "04:04",
          source: "../Content/music/MyPlaylist/StandByMe-SHINee-193533.mp3",
          dataPlaylist: 1
        },
        {
          image:
            "../Content/image/Artist/MyPlaylist/vaicaunoicokhiennguoithaydoi.jpg",
          name: "Vaicaunoicokhiennguoithaydoi",
          author: "Grey D, Tlinh",
          album: "Vaicaunoicokhiennguoithaydoi (Single)",
          duration: "03:45",
          source:
            "../Content/music/MyPlaylist/Vaicaunoicokhiennguoithaydoi-GREYDDoanTheLanTlinh-7533673.mp3",
            dataPlaylist: 1
        },
        {
          image: "../Content/image/Artist/MyPlaylist/vimeanhbatchiatay.jpg",
          name: "Vì Mẹ Anh Bắt Chia Tay",
          author: "Karik, Miu Lê",
          album: "Vì Mẹ Anh Bắt Chia Tay (Single)",
          duration: "04:21",
          source:
            "../Content/music/MyPlaylist/ViMeAnhBatChiaTay-MiuLe-7503053.mp3",
            dataPlaylist: 1
        },
        {
          image: "../Content/image/Artist/MyPlaylist/zoom.jpg",
          name: "Zoom",
          author: "Jessie",
          album: "",
          duration: "02:45",
          source: "../Content/music/MyPlaylist/Zoom-Jessi-7197583.mp3",
          dataPlaylist: 1
        },
      ],
      2: [
        {
          image: "../Content/image/Artist/MyPlaylist/vimeanhbatchiatay.jpg",
          name: "Vì Mẹ Anh Bắt Chia Tay",
          author: "Karik, Miu Lê",
          album: "Vì Mẹ Anh Bắt Chia Tay (Official)",
          duration: "04:21",
          source:
            "../Content/music/TopHitsVPop/ViMeAnhBatChiaTay-MiuLe-7503053.mp3",
            dataPlaylist: 2
        },
        {
          image: "../Content/image/Artist/Personal/dongnhi.webp",
          name: "Bad Boy",
          author: "Đông Nhi",
          album: "Bad Boy (Official)",
          duration: "05:00",
          source:
            "../Content/music/TopHitsVPop/BadBoy-DongNhi-3599515.mp3",
            dataPlaylist: 2
        },
        {
          image: "../Content/image/Artist/MyPlaylist/baotienmotmobinhyen.jpg",
          name: "Bao Tiền Một Mớ Bình Yên",
          author: "Casper",
          album: "",
          duration: "04:59",
          source:
            "../Content/music/TopHitsVPop/BaoTienMotMoBinhYen-14CasperBon-6897329.mp3",
            dataPlaylist: 2
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/buayeu.jpg",
          name: "Bùa Yêu",
          author: "Bích Phương",
          album: "Bùa Yêu (Official)",
          duration: "04:01",
          source:
            "../Content/music/TopHitsVPop/BuaYeu-BichPhuong-5472208.mp3",
            dataPlaylist: 2
        },
        {
          image: "../Content/image/Artist/MyPlaylist/sontung.jpg",
          name: "Buông Đôi Tay Nhau Ra",
          author: "Sơn Tùng - MTP",
          album: "Buông Đôi Tay Nhau Ra (Single)",
          duration: "03:46",
          source:
            "../Content/music/TopHitsVPop/BuongDoiTayNhauRa-SonTungMTP-4184408.mp3",
            dataPlaylist: 2
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/deminoichomanghe.png",
          name: "Để Mị Nói Cho Mà Nghe",
          author: "Hoàng Thùy Linh",
          album: "Để Mị Nói Cho Mà Nghe (Official)",
          duration: "03:13",
          source:
            "../Content/music/TopHitsVPop/DeMiNoiChoMaNghe-HoangThuyLinh-6153588.mp3",
            dataPlaylist: 2
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/diduduadi.jpg",
          name: "Đi Đu Đưa Đi",
          author: "Bích Phương",
          album: "Đi Đu Đưa Đi (Official)",
          duration: "03:40",
          source:
            "../Content/music/TopHitsVPop/DiDuDuaDi-BichPhuong-6059493.mp3",
            dataPlaylist: 2
        },
      ],
      3: [
        {
          image: "../Content/image/Artist/MyPlaylist/vimeanhbatchiatay.jpg",
          name: "Vì Mẹ Anh Bắt Chia Tay",
          author: "Karik, Miu Lê",
          album: "Vì Mẹ Anh Bắt Chia Tay (Official)",
          duration: "04:21",
          source:
            "../Content/music/TopHitsVPop/ViMeAnhBatChiaTay-MiuLe-7503053.mp3",
            dataPlaylist: 3
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/thethai.jpg",
          name: "Thế Thái - Lofi",
          author: "Hương Ly",
          album: "Thế Thái (Single)",
          duration: "04:21",
          source:
            "../Content/music/Top100VPop/thethai.mp3",
            dataPlaylist: 3
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/trentinhbanduoitinhyeu.jpg",
          name: "Trên Tình Bạn Dưới Tình Yêu",
          author: "MIN",
          album: "Trên Tình Bạn Dưới Tình Yêu (Official)",
          duration: "04:21",
          source:
            "../Content/music/Top100VPop/trentinhbanduoitinhyeu.mp3",
            dataPlaylist: 3
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/loyeunguoidamsau.jpg",
          name: "Lỡ Yêu Người Đậm Sâu - Remix",
          author: "",
          album: "",
          duration: "04:21",
          source:
            "../Content/music/Top100VPop/loyeunguoidamsau.mp3",
            dataPlaylist: 3
        },
      ],
      4: [
        {
          image: "../Content/image/Playlist/PersonalPlaylist/cheating on you.jpg",
          name: "Cheating On You",
          author: "Charlie Puth",
          album: "Cheating On You (Official)",
          duration: "03:16",
          source:
            "../Content/music/TopUsUK/CheatingOnYou.mp3",
            dataPlaylist: 4
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/loltheme2020.jpg",
          name: "League Of Legends Theme 2020",
          author: "League Of Legends",
          album: "Finals 2020",
          duration: "02:39",
          source:
            "../Content/music/TopUsUK/LolTheme.mp3",
            dataPlaylist: 4
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/theriver.jpg",
          name: "The River",
          author: "Alexander Tam Trinh",
          album: "The River Hồng (Official)",
          duration: "03:31",
          source:
            "../Content/music/TopUsUK/River.mp3",
            dataPlaylist: 4
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/senorita.jpg",
          name: "Señorita",
          author: "Camila Cabello, Shawn Mendes",
          album: "Señorita (Official)",
          duration: "03:10",
          source:
            "../Content/music/TopUsUK/Senorita.mp3",
            dataPlaylist: 4
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/wayback.jpg",
          name: "Wayback",
          author: "Victone",
          album: "Victone (Best EDM)",
          duration: "03:28",
          source:
            "../Content/music/TopUsUK/WayBack.mp3",
            dataPlaylist: 4
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/monsters.jpg",
          name: "Monsters",
          author: "Katie",
          album: "",
          duration: "03:48",
          source:
            "../Content/music/TopUsUK/Monsters.mp3",
            dataPlaylist: 4
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/hero.jpg",
          name: "Hero",
          author: "Christina Perri",
          album: "",
          duration: "03:16",
          source:
            "../Content/music/TopUsUK/Hero.mp3",
            dataPlaylist: 4
        },
      ],
      5: [
        {
          image: "../Content/image/Playlist/PersonalPlaylist/lovescenario.jpg",
          name: "Love Scenario",
          author: "IKON",
          album: "Love Scenario (Single)",
          duration: "03:16",
          source:
            "../Content/music/TopKpop/lovescenario.mp3",
            dataPlaylist: 5
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/senoritakpop.jpg",
          name: "Senorita",
          author: "Gi-DLE",
          album: "I MADE",
          duration: "03:16",
          source:
            "../Content/music/TopKpop/senorita.mp3",
            dataPlaylist: 5
        },
      ],
      6: [

      ],
      7: [

      ],
      8: [
        {
          image: "../Content/image/Playlist/PersonalPlaylist/lck2022bgm.jpg",
          name: "2022 LCK Hightlight BGM",
          author: "LCK - League Of Legends",
          album: "LCK",
          duration: "11:30",
          source:
            "../Content/music/LoLMix/2022lckHightlightBgm.mp3",
            dataPlaylist: 8
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/lck2022bgm.jpg",
          name: "2022 LCK Victory BGM",
          author: "LCK - League Of Legends",
          album: "LCK",
          duration: "04:43",
          source:
            "../Content/music/LoLMix/2022lckVictoryBgm.mp3",
            dataPlaylist: 8
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/burnitalldown.jpg",
          name: "Burn It All Down",
          author: "League Of Legends",
          album: "2021 Worlds Champion Ship",
          duration: "03:31",
          source:
            "../Content/music/LoLMix/burnitalldown.mp3",
            dataPlaylist: 8
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/loltheme2020.jpg",
          name: "LoL Theme 2020",
          author: "League Of Legends",
          album: "2020 Worlds Champion Ship",
          duration: "02:40",
          source:
            "../Content/music/LoLMix/LolTheme.mp3",
            dataPlaylist: 8
        },
        {
          image: "../Content/image/Artist/MyPlaylist/more.jpg",
          name: "More",
          author: "League Of Legends",
          album: "K/DA ALL OUT",
          duration: "03:36",
          source:
            "../Content/music/LoLMix/more.mp3",
            dataPlaylist: 8
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/dynastie.jpg",
          name: "Dynasties",
          author: "League Of Legends",
          album: "ARCANE",
          duration: "02:57",
          source:
            "../Content/music/LoLMix/dynasties.mp3",
            dataPlaylist: 8
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/enemy.jpg",
          name: "ENEMY",
          author: "League Of Legends",
          album: "ARCANE",
          duration: "03:33",
          source:
            "../Content/music/LoLMix/enemy.mp3",
            dataPlaylist: 8
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/legendneverdie.jpg",
          name: "Legends Never Die",
          author: "League Of Legends",
          album: "2016 Worlds Champion Ship",
          duration: "02:58",
          source:
            "../Content/music/LoLMix/legendneverdie.mp3",
            dataPlaylist: 8
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/playground.webp",
          name: "Playground",
          author: "League Of Legends",
          album: "ARCANE",
          duration: "03:50",
          source:
            "../Content/music/LoLMix/playground.mp3",
            dataPlaylist: 8
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/rise.jpg",
          name: "Rise",
          author: "League Of Legends",
          album: "2017 Worlds Champion Ship",
          duration: "03:16",
          source:
            "../Content/music/LoLMix/rise.mp3",
            dataPlaylist: 8
        },
        {
          image: "../Content/image/Playlist/PersonalPlaylist/baddest.jpeg",
          name: "The Baddest",
          author: "League Of Legends",
          album: "K/DA ALL OUT",
          duration: "02:55",
          source:
            "../Content/music/LoLMix/thebaddest.mp3",
            dataPlaylist: 8
        },
      ]
    },
    PersonalArtists: [
      {
        image: "../Content/image/Artist/Personal/binz.webp",
        name: "Binz",
        like: "377K Quan Tâm",
        desc: "Là rapper người Mỹ gốc Việt có chất giọng tốt, kỹ thuật tốt cùng khả năng sáng tác điêu luyện,...",
        newProduct: {
          1: {
            name: "Don't Break My Heart",
            product: "../Content/image/Artist/MyPlaylist/dontbreakmyheart.jpg",
          },
          2: {
            name: "Don't Break My Heart",
            product:
              "../Content/image/Artist/MyPlaylist/dontbreakmyheart-2.jpg",
          },
          3: {
            name: "Cho Mình Em (Single)",
            product: "../Content/image/Artist/MyPlaylist/chominhem.jpg",
          },
          4: {
            name: "Freaky Squad",
            product: "../Content/image/Artist/MyPlaylist/freakysquad.jpg",
          },
        },
      },
      {
        image: "../Content/image/Artist/Personal/IU.webp",
        name: "IU",
        like: "295K Quan Tâm",
        desc: "IU - là nữ ca, nhạc sĩ và diễn viên nổi tiếng người Hàn Quốc. Cô được coi là một trong những nữ...",
        newProduct: {
          1: {
            name: "Pieces (Single)",
            product: "../Content/image/Artist/MyPlaylist/piecies.webp",
          },
          2: {
            name: "Precaution (Single)",
            product: "../Content/image/Artist/MyPlaylist/precaution.webp",
          },
          3: {
            name: "Mother Nature",
            product: "../Content/image/Artist/MyPlaylist/mothernature.webp",
          },
          4: {
            name: "Strawberry",
            product: "../Content/image/Artist/MyPlaylist/strawberry.webp",
          },
        },
      },
      {
        image: "../Content/image/Artist/Personal/jenie.webp",
        name: "Jennie",
        like: "222K Quan Tâm",
        desc: "",
        newProduct: {
          1: {
            name: "Solo (Single)",
            product: "../Content/image/Artist/MyPlaylist/solo.webp",
          },
          2: {
            name: "",
            product: "",
          },
          3: {
            name: "",
            product: "",
          },
          4: {
            name: "",
            product: "",
          },
        },
      },
      {
        image: "../Content/image/Artist/Personal/phuongly.webp",
        name: "Phương Ly",
        like: "104K Quan Tâm",
        desc: "Được biết đến qua Vietnam Idol 2007, có ngoại hình xinh đẹp, chất giọng trong trẻo và tư duy âm nhạc, Phương Ly ra mắt 'Crush On You' năm 2016 rồi đạt",
        newProduct: {
          1: {
            name: "Mặt Trời Của Em",
            product: "../Content/image/Artist/MyPlaylist/mattroicuaem.webp",
          },
          2: {
            name: "Missing You",
            product: "../Content/image/Artist/MyPlaylist/missingyou.webp",
          },
          3: {
            name: "Thằng Điên",
            product: "../Content/image/Artist/MyPlaylist/thangdien.webp",
          },
          4: {
            name: "",
            product: "",
          },
        },
      },
      {
        image: "../Content/image/Artist/Personal/sontung.webp",
        name: "Sơn Tùng - MTP",
        like: "2.3M Quan Tâm",
        desc: "Có chất giọng cao luyến láy cùng những bản hit RnB hay Dance Pop, Sơn Tùng M-TP là ca sĩ rất thành công, không chỉ nổi tiếng ở Việt Nam mà còn được khán",
        newProduct: {
          1: {
            name: "Lạc Trôi (Triple-D Remix)",
            product: "../Content/image/Artist/MyPlaylist/lactroitripled.jpg",
          },
          2: {
            name: "Chạy Ngay Đi (Single)",
            product: "../Content/image/Artist/MyPlaylist/chayngaydi.png",
          },
          3: {
            name: "Chạy Ngay Đi (Onion Remix)",
            product: "../Content/image/Artist/MyPlaylist/chayngaydionion.jpg",
          },
          4: {
            name: "Gia Đình Tôi Chọn",
            product: "../Content/image/Artist/MyPlaylist/giadinhtoichon.jpg",
          },
        },
      },
      {
        image: "../Content/image/Artist/Personal/sunihalinh.webp",
        name: "Suni Hạ Linh",
        like: "100K Quan Tâm",
        desc: "Suni Hạ Linh là một gương mặt trẻ theo đuổi dòng nhạc Pop, Ballad và được biết đến qua các ca khúc 'Em Đã Biết', 'Cảm Nắng', 'Không Sao Mà Em Đây'",
        newProduct: {
          1: {
            name: "",
            product: "",
          },
          2: {
            name: "",
            product: "",
          },
          3: {
            name: "",
            product: "",
          },
          4: {
            name: "",
            product: "",
          },
        },
      },
    ],
    TopicLayoutTheme: [
      {
        image: "../Content/image/Layout/eiffel.jpg",
        name: "Tháp Eiffel",
        dataTheme: "darkEiffel",
      },
      {
        image: "../Content/image/Layout/zma.jpg",
        name: "Zing Music Awards",
        dataTheme: "blueZMA",
      },
      {
        image: "../Content/image/Layout/london.png",
        name: "London",
        dataTheme: "blueLondon",
      },
    ],
    ArtistLayoutTheme: [
      {
        image: "../Content/image/Background/jack.jpg",
        name: "Jack",
        dataTheme: "brownJack",
      },
      {
        image: "../Content/image/Background/iu.jpg",
        name: "IU",
        dataTheme: "grayIU",
      },
      {
        image: "../Content/image/Background/jennie.jpg",
        name: "Jennie",
        dataTheme: "grayJennie",
      },
      {
        image: "../Content/image/Background/jisoo.jpg",
        name: "Jisoo",
        dataTheme: "lightJisoo",
      },
      {
        image: "../Content/image/Background/rose.jpg",
        name: "Rose",
        dataTheme: "blueRose",
      },
    ],
    CssRootTheme: [
      {
        BlueTheme: {
          London: `--layout-bg:#061d50;`,
          ZMA: `    --layout-bg: #37075d;
          --primary-bg: #6a39af;
          --queue-player-popup-bg: #5d218c;
          --purple-primary: #ed2b91;
          --link-text-hover: #fe63da;
          --sidebar-popup-bg: #572f90;
          --linear-gradient-bg: linear-gradient(to bottom, #740091, #2d1a4c);
          `,
          Rose: `--layout-bg:#061d50;`
        },
        GrayTheme: {
          Jennie: `
          --layout-bg:#bab8c3;
           --player-bg:#c6c4d1;
            --purple-primary:#346875;
             --primary-bg:#e2e7f5;
              --text-item-hover:#2a5e6b;`,
          IU: `--layout-bg: #e7dfdd;
          --purple-primary: #409abc;
          --text-item-hover: #409abc;`,
        },
        DarkTheme: `
        --layout-bg:#282828; 
        --primary-bg:#3d3d3d;`,
        BrownTheme: `
        --layout-bg:#767269; 
        --primary-bg:#565147; 
        --queue-player-popup-bg:#726c5e; 
        --purple-primary:#ac8e77; 
        --main-box-shadow:#4242421a; 
        --linear-gradient-bg:linear-gradient(to bottom, #656156, #574f40);
        `,
        GreenLightTheme: `--layout-bg:#b2d8db;`,
        LightTheme: {
          Jisoo: `
          `,
        }
      },
    ],
    PersonalPlaylist: [
      {
        image: "../Content/image/Playlist/PersonalPlaylist/Plist1.webp",
        name: "V-pop: Hits Quốc Dân",
        author: "Zing MP3",
        dataPlaylist: 2
      },
      {
        image: "../Content/image/Playlist/PersonalPlaylist/lcksummer2022.jpg",
        name: "League Of Legends - Playlist Mix",
        author: "Dương Hiệp",
        dataPlaylist: 8
      },
      {
        image: "../Content/image/Playlist/PersonalPlaylist/Plist2.webp",
        name: "Top 100 Nhạc V-Pop Hay Nhất",
        author: "Zing MP3",
        dataPlaylist: 3
      },
      {
        image: "../Content/image/Playlist/PersonalPlaylist/Plist3.webp",
        name: "Top 100 Nhạc Âu Mỹ Hay Nhất",
        author: "Zing MP3",
        dataPlaylist: 4
      },
      {
        image: "../Content/image/Playlist/PersonalPlaylist/Plist4.webp",
        name: "Top 100 Nhạc Hàn Hay Nhất",
        author: "Zing MP3",
        dataPlaylist: 5
      },
      {
        image: "../Content/image/Playlist/PersonalPlaylist/Plist5.jpg",
        name: "Tuyển Tập Sơn Tùng MTP",
        author: "Zing MP3",
        dataPlaylist: 6
      },
      {
        image: "../Content/image/Playlist/PersonalPlaylist/Plist6.webp",
        name: "Nhạc Phim Bất Hủ Hàn Quốc",
        author: "Zing MP3",
        dataPlaylist: 7
      },
      {
        image: "../Content/image/Playlist/PersonalPlaylist/Plist8.webp",
        name: "Nhạc Phim Hàn Quốc Hay Nhất 2017",
        author: "Zing MP3",
        dataPlaylist: 9
      }
    ],
    PersonalAlbum: [
      {
        albumName: "Để Mị Nói Cho Mà Nghe",
        albumImage: "../Content/image/Album/Personal/deminoichomanghe.webp",
      },
    ],
    PersonalMV: [
      {
        MvSource: "https://www.youtube.com/watch?v=kt_cs4b-8Zc",
        MvImage: "../Content/image/MV/camgiaclucayserasao.webp",
        MvName: "Cảm Giác Lúc Ấy Sẽ Ra Sao",
        MvAuthor: "LOU Hoàng",
        MvDuration: "13:06",
        AuthorAvatar: "../Content/image/Artist/MV/louhoang.jpg",
      },
      {
        MvSource: "https://www.youtube.com/watch?v=GwCUbhE0TY0",
        MvImage: "../Content/image/MV/motbuocyeuvandamdau.webp",
        MvName: "Một Bước Yêu Vạn Dặm Đau",
        MvAuthor: "Mr.Siro",
        MvDuration: "11:54",
        AuthorAvatar: "../Content/image/Artist/MV/mrsiro.jpg",
      },
      {
        MvSource: "https://www.youtube.com/watch?v=1ZRb1we80kM",
        MvImage: "../Content/image/MV/goodboy.webp",
        MvName: "GOOD BOY",
        MvAuthor: "GD X TAEYANG",
        MvDuration: "04:13",
        AuthorAvatar: "../Content/image/Artist/MV/gdxtaeyang.png",
      },
      {
        MvSource: "https://www.youtube.com/watch?v=Amq-qlqbjYA",
        MvImage: "../Content/image/MV/asifitsyourlast.webp",
        MvName: "AS IF IT'S YOUR LAST",
        MvAuthor: "BLACKPINK",
        MvDuration: "03:36",
        AuthorAvatar: "../Content/image/Artist/MV/blackpink.jpg",
      },
      {
        MvSource: "https://www.youtube.com/watch?v=2ips2mM7Zqw",
        MvImage: "../Content/image/MV/bangbangbang.webp",
        MvName: "BANG BANG BANG",
        MvAuthor: "BIGBANG",
        MvDuration: "03:50",
        AuthorAvatar: "../Content/image/Artist/MV/bigbang.jpg",
      },
      {
        MvSource: "https://www.youtube.com/watch?v=ioNng23DkIM",
        MvImage: "../Content/image/MV/howyoulikethat.webp",
        MvName: "How You Like That",
        MvAuthor: "BLACKPINK",
        MvDuration: "03:03",
        AuthorAvatar: "../Content/image/Artist/MV/blackpink.jpg",
      },
    ],
    MaybeYouCareAboutList: [
      {
        image: "../Content/image/Playlist/MaybeYouCare/care2.webp",
        name: "Đỉnh Cao Zing MP3 ",
        author: "Jack 5 Triệu, Kay - ATM, JayKii, Bích Phương,",
        dataPlaylist: ""
      },
      {
        image: "../Content/image/Playlist/MaybeYouCare/care4.webp",
        name: "Đỉnh Cao Zing MP3 ",
        author: "Jack 5 Triệu, Kay - ATM, JayKii, Bích Phương,",
        dataPlaylist: ""
      },
      {
        image: "../Content/image/Playlist/MaybeYouCare/care5.webp",
        name: "Đỉnh Cao Zing MP3 ",
        author: "Jack 5 Triệu, Kay - ATM, JayKii, Bích Phương,",
        dataPlaylist: ""
      },
      {
        image: "../Content/image/Playlist/MaybeYouCare/care6.webp",
        name: "Đỉnh Cao Zing MP3 ",
        author: "Jack 5 Triệu, Kay - ATM, JayKii, Bích Phương,",
        dataPlaylist: ""
      },
    ],
    ExploreSuggestList: [
      {
        image: "../Content/image/Playlist/Explore/Suggest/ballad.webp",
        name: "2010s Ballad",
        author: "Sam Smith, Adele, Calum Scott, Taylor Swift, Alan Walker, Justin Bieber",
      },
      {
        image: "../Content/image/Playlist/Explore/Suggest/edm.webp",
        name: "2015s EDM",
        author: "Alan Walker, Martin Gatrix, K-ICM, TheFatRat",
      },
      {
        image: "../Content/image/Playlist/Explore/Suggest/remix.webp",
        name: "2020s Remix",
        author: "K-ICM, Masew, Tilo",
      },
      {
        image: "../Content/image/Playlist/Explore/Suggest/vpop.webp",
        name: "Best VPOP",
        author: "Bích Phương, Sơn Tùng - MTP, Đông Nhi, Ánh Phương, Dương Hiệp",
      },
    ],
    ExploreMusicForDaysPlaylist: {
      Monday: [
        {
          name: "Nhạc Cho Thứ Hai",
          image: "../Content/image/Playlist/Explore/MusicForDays/Monday.webp",
          author: "Thứ 2 là phải nhảy theo những track Remix thịnh hành nhất hiện nay",
        },
        {
          name: "K-Pop Dance",
          image: "../Content/image/Playlist/Explore/MusicForDays/kpopdance.webp",
          author: "Đốt cháy năng lượng bằng những vũ đạo đỉnh nhất thế giới hiện tại"
        },
        {
          name: "Nhà Nhà Nghe Gì",
          image: "../Content/image/Playlist/Explore/MusicForDays/onhanghegi.webp",
          author: "Va vào những giai điệu nhà nhà đều nghe"
        },
        
        {
          name: "Lắc Lư Cho Hết Buồn",
          image: "../Content/image/Playlist/Explore/MusicForDays/lacluchohetbuon.webp",
          author: "Lắc lự quên hết mọi buồn phiền với những giai điệu hay nhất hiện nay"
        },
      ],
      Tuesday: [
        {
          name: "Nhạc Cho Thứ Ba",
          image: "../Content/image/Playlist/Explore/MusicForDays/Tuesday.webp",
          author: "Thứ 3 là phải nhảy theo những track Remix thịnh hành nhất hiện nay",
        },
        {
          name: "K-Pop Dance",
          image: "../Content/image/Playlist/Explore/MusicForDays/kpopdance.webp",
          author: "Đốt cháy năng lượng bằng những vũ đạo đỉnh nhất thế giới hiện tại"
        },
        {
          name: "Nhà Nhà Nghe Gì",
          image: "../Content/image/Playlist/Explore/MusicForDays/onhanghegi.webp",
          author: "Va vào những giai điệu nhà nhà đều nghe"
        },
        
        {
          name: "Lắc Lư Cho Hết Buồn",
          image: "../Content/image/Playlist/Explore/MusicForDays/lacluchohetbuon.webp",
          author: "Lắc lự quên hết mọi buồn phiền với những giai điệu hay nhất hiện nay"
        },
      ],
      Wednesday: [

      ],
      Thursday: [

      ],
      Friday: [

      ],
      Saturday: [
        {
          name: "Nhạc Cho Thứ Bảy",
          image: "../Content/image/Playlist/Explore/MusicForDays/Saturday.webp",
          author: "Thứ 7 là phải nhảy theo những track Remix thịnh hành nhất hiện nay",
        },
        {
          name: "K-Pop Dance",
          image: "../Content/image/Playlist/Explore/MusicForDays/kpopdance.webp",
          author: "Đốt cháy năng lượng bằng những vũ đạo đỉnh nhất thế giới hiện tại"
        },
        {
          name: "Nhà Nhà Nghe Gì",
          image: "../Content/image/Playlist/Explore/MusicForDays/onhanghegi.webp",
          author: "Va vào những giai điệu nhà nhà đều nghe"
        },
        
        {
          name: "Lắc Lư Cho Hết Buồn",
          image: "../Content/image/Playlist/Explore/MusicForDays/lacluchohetbuon.webp",
          author: "Lắc lự quên hết mọi buồn phiền với những giai điệu hay nhất hiện nay"
        },
      ],
      Sunday: [

      ]
    },
    listIframes: [
      {
        id: 1,
        title: "Chỉ Là Muốn Nói (300) - Khải",
        author: "Khải",
        view: "12 Tr luot xem",
        dayPass: "1 năm trước",
        MvDuration: "03:50",
        url: "https://www.youtube.com/embed/uUB7wnWeMdM",
        thumbnail: "https://i.ytimg.com/vi/uUB7wnWeMdM/sddefault.jpg",
      },
      {
        id: 2,
        title:
          "Người Em Từng Yêu - Ngân Ngân | Official Music Video 4k - Người Từng Làm Em Khóc...",
        author: "Ngân Ngân",
        view: "2,8 Tr lượt xem",
        dayPass: "5 tháng trước",
        MvDuration: "03:50",
        url: "https://www.youtube.com/embed/UylGrTfmHBU?list=RDC4QhZvTqhnI",
        thumbnail: "https://i.ytimg.com/vi/UylGrTfmHBU/maxresdefault.jpg",
      },
      {
        id: 3,
        title: "THICHTHICH - PHƯƠNG LY | OFFICIAL MV",
        author: "PHƯƠNG LY",
        view: "19 Tr luot xem",
        dayPass: "6 tháng trước",
        MvDuration: "03:50",
        url: "https://www.youtube.com/embed/OqdA6DKV1Fs",
        thumbnail: "https://i.ytimg.com/vi/OqdA6DKV1Fs/maxresdefault.jpg",
      },
      {
        id: 4,
        title: "NÀNG THƠ x YẾU ĐUỐI | Hoàng Dũng ft. Khán giả [at CONCERT 25]",
        author: "Hoàng Dũng",
        view: "10 Tr luot xem",
        dayPass: "2 năm trước",
        MvDuration: "03:50",
        url: "https://www.youtube.com/embed/GRWNTUThd1I",
        thumbnail: "https://i.ytimg.com/vi/GRWNTUThd1I/maxresdefault.jpg",
      },
  
      {
        id: 5,
        title:
          "ANH CỨ BƯỚC ĐI ĐI REMIX TIKTOK | Tú Na Cover x DJ Trang Moon | Ân Tình Sang Trang Remix",
        author: "Tú Na Cover x DJ Trang Moon",
        view: "1.1 Tr luot xem",
        dayPass: "2 tháng trước",
        MvDuration: "03:50",
        url: "https://www.youtube.com/embed/MH4jbv32kMY",
        thumbnail: "https://i.ytimg.com/vi/MH4jbv32kMY/maxresdefault.jpg",
      },

      {
        id: 6,
        title:
          "TỪNG THƯƠNG REMIX | Phan Duy Anh ft DJ Trang Moon | Vì quá yêu em nên anh mang hết duyên mình...",
        author: "Phan Duy Anh ft DJ Trang Moon",
        view: "1.1 Tr luot xem",
        dayPass: "2 tháng trước",
        MvDuration: "03:50",
        url: "https://www.youtube.com/embed/bajY1LZD0go",
        thumbnail: "https://i.ytimg.com/vi/bajY1LZD0go/maxresdefault.jpg",
      },
    ],
    iframeUrl: [
      {
        id: 1,
        url: "https://www.youtube.com/embed/uUB7wnWeMdM",
        title: "Chỉ Là Muốn Nói (300) - Khải",
      },
      {
        id: 2,
        url: "https://www.youtube.com/embed/UylGrTfmHBU?list=RDC4QhZvTqhnI",
        title:
          "Người Em Từng Yêu - Ngân Ngân | Official Music Video 4k - Người Từng Làm Em Khóc...",
      },
      {
        id: 3,
        url: "https://www.youtube.com/embed/OqdA6DKV1Fs",
        title: "THICHTHICH - PHƯƠNG LY | OFFICIAL MV",
      },
      {
        id: 4,
        url: "https://www.youtube.com/embed/GRWNTUThd1I",
        title: "NÀNG THƠ x YẾU ĐUỐI | Hoàng Dũng ft. Khán giả [at CONCERT 25]",
      },
      {
        id: 5,
        url: "https://www.youtube.com/embed/MH4jbv32kMY",
        title:
          "ANH CỨ BƯỚC ĐI ĐI REMIX TIKTOK | Tú Na Cover x DJ Trang Moon | Ân Tình Sang Trang Remix",
      },
    ],
    clickAddClass: function($selector, $className) {
      $selector.unbind().click(function (e) {
        e.stopPropagation();
        $selector.addClass($className);
      });
      $(".wrapper").unbind().click(function (e) {
        $selector.removeClass($className)
      });
    },
  };
})();

$(function () {
  Home.init();
});
