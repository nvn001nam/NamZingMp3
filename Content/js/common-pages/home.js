"use strict";
$(document).ready(function () {
  let Mp3Player = {
    init: function () {
      this.renderElement();
      
      this.cssHtml();

      this.handleEventDOM();

      this.handleWithPluin();

      this.definePropertises();

      this.loadCurrentSong(1);

      this.handleMp3Event();
    },
    renderElement: function () {
      //render tab sidebar
      this.renderTabSideBar();

      this.renderTabSideBar2();

      // render suggest result searching bar
      this.renderSuggestResultSearchBar();

      // render my playlist
      this.renderMyPlayListSongs();

      // render personal artists
      this.renderPersonalArtists();

      // render layout theme
      this.renderLayoutTheme();

      // render personaL Playlist
      this.renderPersonalPlaylist();

      // render personal album
      this.renderPersonalAlbum();

      // render personal MV
      this.renderPersonalMV();

      // render maybe you care playlist
      this.renderMaybeYouCarePlaylist();

      // render explore suggest playlist
      this.renderExploreSuggestPlaylist();

      // render explore music for days
      this.renderExploreMusicForDays();
    },
    cssHtml: function () {
      // set height for left side bar
      this.setInnerHeightForSideBar();

      // set width for search header
      this.setWidthForHeaderWidthSearch();
    },
    handleEventDOM: function () {
      // display filter result of search bar
      Home.clickAddClass($("#search-container"), "active");

      // display content of tab pane
      this.displayContentOfTabPane();

      // sticky header with search when scroll down
      this.stickyHeaderWithSearch();

      // play list song when click library play btn
      this.playListSong();

      // active list song playing button
      this.activeListSongPlaying();

      // open layout container modal
      this.openLayoutContainerModal();

      // get data theme and set theme background
      this.getDataTheme();

      // open playlist in playlist track
      this.openPlaylistInPlaylistTrack();

      // change main content when click tap side bar
      this.swapTapSideBar();

      // make slide carousel for explore slider
      this.exploreSliderCarousel();

      // open modal iframe when click to MV
      this.openModalIframe();
    },
    handleWithPluin: function () {
      // slick
      this.UsingSlickSliderPlugin(true);
    },
    UsingSlickSliderPlugin: function (boolean) {

      if(boolean) {
        
      $("#render-artist").slick({
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: false,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              variableWidth: false,
            },
          },
          {
            breakpoint: 414,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              variableWidth: false,
            },
          },
        ],
      });

      $("#render-playlist").slick({
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: false,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              variableWidth: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              variableWidth: false,
            },
          },
          {
            breakpoint: 414,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              variableWidth: false,
            },
          },

        ],
      });
      } else {
        $("#render-artist").slick('unslick')

        $("#render-playlist").slick('unslick')
      }

      $(".container-default .slick-next.slick-arrow").addClass(
        "position-absolute"
      );
      $(".container-default .slick-prev.slick-arrow").addClass(
        "position-absolute"
      );
    },
    currentPlaylistIndex: 1,
    currentIndex: 0,
    isPlaying: false,
    isRepeat: false,
    isRandom: false,
    isMuted: false,
    handleMp3Event: function () {
      let _this = this;

      // play / pause song
      $("#play-btn")
        .unbind()
        .click(function (e) {
          e.preventDefault();
          $(".song__icon-playing").addClass("d-none");
          $(".song__icon-pause").addClass("d-none");

          if (_this.isPlaying) {
            _this.isPlaying = false;
            _this.pauseSong();
          } else {
            _this.isPlaying = true;
            _this.playSong();
          }
        });

      // play/pause song when click play button in track cd thumb
      $("#track__cd-playBtn")
        .unbind()
        .click(function (e) {
          _this.isPlaying = true;
          _this.playSong();
        });
      $("#track__cd-pauseBtn")
        .unbind()
        .click(function (e) {
          _this.isPlaying = false;
          $(".song__icon-playing").addClass("d-none");
          _this.pauseSong();
        });

      $("#track__controls-play")
        .unbind()
        .click(function (e) {
          if (_this.isPlaying) {
            _this.isPlaying = false;
            _this.pauseSong();
          } else {
            _this.isPlaying = true;
            _this.playSong();
          }
        });

      // next / prev song
      $("#next-song")
        .unbind()
        .click(function (e) {
          _this.isPlaying = true;
          $(".song__icon-playing").addClass("d-none");
          $(".song__icon-pause").addClass("d-none");

          if (_this.isRandom) {
            _this.playRandomSong();
            _this.playSong();
          } else {
            _this.currentIndex++;
            _this.loadCurrentSong(_this.currentPlaylistIndex);
            _this.playSong();
          }
        });
      $("#prev-song")
        .unbind()
        .click(function (e) {
          _this.currentIndex--;
          _this.loadCurrentSong(_this.currentPlaylistIndex);
          _this.removePlayingIcon();
          _this.playSong();
        });

      // random song
      $("#random-song")
        .unbind()
        .click(function (e) {
          if (_this.isRandom) {
            _this.isRandom = false;
            $(this).toggleClass("active");
          } else {
            _this.isRandom = true;
            $(this).toggleClass("active");
          }
        });

      // repeat song
      $("#repeat-song")
        .unbind()
        .click(function (e) {
          if (_this.isRepeat) {
            _this.isRepeat = false;
            $(this).toggleClass("active");
          } else {
            _this.isRepeat = true;
            $(this).toggleClass("active");
          }
        });

      // current time of song
      $("#audio")[0].ontimeupdate = function (e) {
        let currentTime = this.currentTime;
        let duration = this.duration;
        let percentSong = Math.floor((currentTime / duration) * 100);

        $(".time-start p").html(String(currentTime).toMMSS());
        $("#range").css({
          background: `linear-gradient(to right,
            var(--progressbar-active-bg) 0%,
            var(--progressbar-active-bg) ${percentSong}%,
            var(--progressbar-player-bg) ${percentSong}%,
            var(--progressbar-player-bg) 100%)`,
        });
        $("#range").val(percentSong);
      };

      $("#audio")[0].onloadedmetadata = function (e) {
        let currentTime = this.currentTime;
        let duration = this.duration;
        let percentSong = Math.floor((currentTime / duration) * 100);

        $("#range").css({
          background: `linear-gradient(to right,
             var(--progressbar-active-bg) 0%,
            var(--progressbar-active-bg) ${percentSong}%,
             var(--progressbar-player-bg) ${percentSong}%,
              var(--progressbar-player-bg) 100%)`,
        });
        $("#range").val(percentSong);

        $("#volumn").css({
          background: `linear-gradient(to right,
             var(--progressbar-active-bg) 0%,
              var(--progressbar-active-bg) ${Number(this.volume * 100)}%,
               var(--progressbar-player-bg) ${Number(this.volume * 100)}%,
                var(--progressbar-player-bg) 100%)`,
        });
      };

      // seek song
      $("#range")
        .unbind()
        .change(function (e) {
          _this.isPlaying = true;
          let seekTime = $(this).val();
          let currentTime =
            (Number(seekTime) * Number($("#audio")[0].duration)) / 100;

          $("#audio")[0].currentTime = currentTime;
          _this.playSong();
        });

      // next song when song ended
      $("#audio")[0].onended = function (e) {
        if (_this.isRandom) {
          _this.playRandomSong();
          $(".song__icon-pause").addClass("d-none");
          let $playingIcon = $(".song.active").find(".song__icon-playing");
          $playingIcon.removeClass("d-none");
        }

        if (_this.isRepeat) {
          _this.playSong();
        }

        if ((_this.isRandom && _this.isRepeat) == false) {
          _this.currentIndex++;
          _this.loadCurrentSong(_this.currentPlaylistIndex);
          $(".song__icon-playing").addClass("d-none");
          _this.playSong();
        }
      };

      // play song when click the playlist
      $(".song")
        .unbind()
        .click(function (e) {
          e.stopPropagation();

          let $this = $(this);
          let dataIndex = $this.data("index");
          let $playingIcon = $this.find(".song__icon-playing");
          let $dataPlaylist = $this.data("playlist");

          if ($dataPlaylist == 1) {
            _this.renderPlaylistToTrack(1);
            $("#track-cdThumb").attr(
              "src",
              "../Content/image/Avartar/Avatar.jpg"
            );
            $(".track__name h3").html("Nhạc Cá Nhân");
            $(`.song[data-index="${dataIndex}"]`).addClass("active");
          }

          _this.removePlayingIcon();
          _this.isPlaying = true;
          _this.currentIndex = dataIndex;
          _this.currentPlaylistIndex = $dataPlaylist;
          _this.loadCurrentSong(_this.currentPlaylistIndex);
          _this.handleMp3Event();

          $(".song__icon-playing").addClass("d-none");
          $this.addClass("active");
          $playingIcon.removeClass("d-none");
          _this.playSong();
        });

      // stop play when click current song
      $(".song.active")
        .unbind()
        .click(function (e) {
          if (_this.isPlaying) {
            _this.isPlaying = false;
            $(".song__icon-playing").addClass("d-none");
            _this.pauseSong();
          } else {
            _this.isPlaying = true;
            _this.playSong();
          }
        });

      // handle volumn of Song
      $("#volumn")
        .unbind()
        .change(function (e) {
          $("#audio")[0].volume = Number($(this).val()) / 100;
          $(this).css({
            background: `linear-gradient(to right,
               var(--progressbar-active-bg) 0%,
                var(--progressbar-active-bg) ${Number($(this).val())}%,
                 var(--progressbar-player-bg) ${Number($(this).val())}%,
                  var(--progressbar-player-bg) 100%)`,
          });
        });

      // mute volume when click the icon volume
      $(".volume-btn")
        .unbind()
        .click(function (e) {
          if (_this.isMuted) {
            _this.isMuted = false;
            $("#volume-mute").addClass("d-none");
            $("#volume-on").removeClass("d-none");
            $("#audio")[0].volume = Number($("#volumn").val() / 100);
          } else {
            _this.isMuted = true;
            $("#volume-mute").removeClass("d-none");
            $("#volume-on").addClass("d-none");
            $("#audio")[0].volume = 0;
          }
        });
    },

    // defineProp
    definePropertises: function () {
      Object.defineProperty(this, "currentPlaylist", {
        get: function () {
          return Home.PlaylistSong;
        },
      });
    },

    // render
    renderTabSideBar: function() {
      
      let results = Home.tabSidebar.map((result) => {
        return ` 
        <li class="list-item ${result.tab} tap-sideBar d-flex align-items-center ${result.isActive ? 'active' : ''} padt8 padb8 padr28 padl28"
                                aria-current="true">
                                <i class="${result.icon}"></i>
                                <h3 class="fz-13 ml8">${result.content}</h3>
                            </li>
        `;
      });

      $("#tabSidebar-1").html(results.join(""));
    },
    renderTabSideBar2: function() {
      let results = Home.tabSidebar2.map((result) => {
        return ` 
        <li class="list-item tab-personal tap-sideBar d-flex align-items-center ${result.isActive ? 'active' : ''} padt8 padb8 padr28 padl28"
                                aria-current="true">
                                <i class="${result.icon}"></i>
                                <h3 class="fz-13 ml8">${result.content}</h3>
                            </li>
        `;
      });

      $("#tabSidebar-2").html(results.join(""));
    },
    renderSuggestResultSearchBar: function () {
      let results = Home.SuggestResultSearchBar.map((result) => {
        return ` 
        <li class="list-group-item header__suggest-item d-lg-flex">
            <i class="bi bi-graph-up-arrow"></i>
            <p class="header__suggest-name ml12">${result.name}</p>
        </li>
        `;
      });

      $("#suggest-result").html(results.join(""));
    },
    renderMyPlayListSongs: function () {
      let songs = Home.PlaylistSong[1].map((song, index) => {
        return `
          <div class="song row no-gutters padt8 padb8 align-items-center" data-index="${index}" data-playlist="1">
            <div class="song-wrapper col-lg-6 col-sm-6">
                <div class="song-wrapper-primary row no-gutters align-items-center">
                    <div class="col-lg-1 col-sm-1 ">
                        <i class="bi bi-music-note-beamed ml8 fz-14 song__icon-note"></i>
                    </div>
                    <div class="col-lg-1 col-sm-1 position-relative">
                        <img class="song__img" src="${song.image}" alt="">
                        <div class="song__icon position-absolute">
                            <img src="../Content/image/Icon/icon-playing.gif" class="song__icon-playing playing d-none">
                            <i class="bi bi-play-fill fz-20 song__icon-pause d-none text-white"></i>
                        </div>
                    </div>
                    <div class="col-lg-1 col-sm-1"></div>
                    <div class="col-lg-9 col-sm-9">
                        <div class="d-flex flex-column">
                            <h3 id="song__name" class="fz-14 fz-sm-10">
                                ${song.name}
                            </h3>
                            <p id="song__author" class="fz-12 fz-sm-10">
                                ${song.author} 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-sm-6">
                <div class="row align-items-center">
                    <div class="col-lg-9 col-sm-9">
                        <h3 id="song__album" class="fz-12 lh-40 fz-sm-10 lh-sm-0">
                            ${song.album}
                        </h3>
                    </div>
                    <div class="col-lg-3 col-sm-3 text-center">
                        <h3 id="song__duration" class="fz-12 lh-40 fz-sm-10 lh-sm-0">
                            ${song.duration}
                        </h3>
                    </div>
                </div>
            </div>
    
        </div>
          `;
      });

      $("#my-playlist").html(songs.join(""));
    },
    renderPersonalArtists: function () {
      let artists = Home.PersonalArtists.map((artist) => {
        return `
          <div class=" artist__card">
                                                 <div class="artist__avatar">
                                                     <img src="${artist.image}" alt="">
                                                  </div>
                                                  <a href="#" class="artist__name d-block fz-14 text-center mt16 mb4 position-relative">
                                                    ${artist.name}
                                                    <div class="artist__desc pad16 position-absolute text-left">
                                                      <div class="artist__desc-info align-items-center d-flex justify-content-between mb16">
                                                          <div class="artist__desc-div d-flex align-items-center">
                                                              <div class="artist__desc-avatar">
                                                                  <img with="48" height="48" src="${artist.image}" alt="">
                                                              </div>
                                                              <div class="artist__desc-name ml12">
                                                                  <h3 class="fz-14 fw-600 medium cursor-pointer">${artist.name}</h3>
                                                                  <p class="artist__desc-like fz-12 fw-600">${artist.like}</p>
                                                              </div>
                                                          </div>
                                                          <div class="artist__desc-div">
                                                              <button class="play-thisArtist-Songs d-flex align-items-center">
                                                                  <i class="bi bi-shuffle fz-14"></i>
                                                                  <h3 class="fz-12 ml8">GÓC NHẠC</h3>
                                                              </button>
                                                          </div>
                                                      </div>
                                                      <p class="artist__desc-story mb16 fz-12 fw-400">
                                                        ${artist.desc}
                                                      </p>
                                                      <div class="artist__desc-newProduct">
                                                          <h3 class="fz-14 mb8 fw-600">Mới nhất</h3>
                                                          <div class="row">
                                                              <div class="col-lg-3">
                                                                  <div class="artist__desc-productImg">
                                                                      <img src="${artist.newProduct[1].product}" alt="" class="artist__desc-product cursor-pointer">
                                                                  </div>
                                                                  <h3 class="fz-12 mt8 cursor-pointer text-center">${artist.newProduct[1].name}</h3>
                                                              </div>
                                                              <div class="col-lg-3">
                                                                  <div class="artist__desc-productImg">
                                                                      <img src="${artist.newProduct[2].product}" alt="" class="artist__desc-product cursor-pointer">
                                                                  </div>
                                                                  <h3 class="fz-12 mt8 cursor-pointer text-center">${artist.newProduct[2].name}</h3>
                                                              </div>
                                                              <div class="col-lg-3">
                                                                  <div class="artist__desc-productImg">
                                                                      <img src="${artist.newProduct[3].product}" alt="" class="artist__desc-product cursor-pointer">
                                                                  </div>
                                                                  <h3 class="fz-12 mt8 cursor-pointer text-center">${artist.newProduct[3].name}</h3>
                                                              </div>
                                                              <div class="col-lg-3">
                                                                  <div class="artist__desc-productImg">
                                                                      <img src="${artist.newProduct[4].product}" alt="" class="artist__desc-product cursor-pointer">
                                                                  </div>
                                                                  <h3 class="fz-12 mt8 cursor-pointer text-center">${artist.newProduct[4].name}</h3>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  </a>
                                                  
                                             </div>
          `;
      });

      $("#render-artist").html(artists.join(""));
    },
    renderLayoutTheme: function () {
      let artists = Home.ArtistLayoutTheme.map((artist) => {
        return ` 
          <div class="col-lg-2-4 layout__content-parent">
              <div class="layout__content-div position-relative">
                  <img src="${artist.image}" alt="" class="layout__content-img">
                  <div class="layout__content-overlay justify-content-center padl24 padr24 flex-column position-absolute">
                      <button data-theme="${artist.dataTheme}" class="layout__content-useTheme fz-8 padt4 padb4 mb8">
                          ÁP DỤNG
                      </button>
                      <button class="layout__content-check fz-8 padt4 padb4">
                          XEM TRƯỚC
                      </button>
                  </div>
              </div>
              <h3 class="layout__content-name">
                  ${artist.name}
              </h3>
          </div>
          `;
      });

      let topics = Home.TopicLayoutTheme.map((topic) => {
        return `
        <div class="col-lg-2-4 layout__content-parent">
        <div class="layout__content-div position-relative">
            <img src="${topic.image}" alt="" class="layout__content-img">
            <div class="layout__content-overlay justify-content-center padl24 padr24 flex-column position-absolute">
                <button data-theme="${topic.dataTheme}" class="layout__content-useTheme fz-8 padt4 padb4 mb8">
                    ÁP DỤNG
                </button>
                <button class="layout__content-check fz-8 padt4 padb4">
                    XEM TRƯỚC
                </button>
            </div>
        </div>
        <h3 class="layout__content-name">
            ${topic.name}
        </h3>
      </div>
        `;
      });

      $(".layout__content-artist").html(artists.join(""));
      $(".layout__content-topic").html(topics.join(""));
    },
    renderPersonalPlaylist: function () {
      let playlists = Home.PersonalPlaylist.map((playlist) => {
        return `
        <div class="playlist__card" data-playlist="${playlist.dataPlaylist}">
            <div class="playlist__div position-relative">
                <img src="${playlist.image}" alt="" class="playlist__div-img">
                <div class="playlist__div playlist__div-icon position-absolute ">
                    <div class="playlist__div-actions d-flex align-items-center position-absolute">
                        <i class="bi bi-heart fz-20 cursor-pointer"></i>
                        <div class="playlist__div-rounded text-center">
                            <img with="18" height="18" class="mt16 d-none" src="../Content/image/Icon/icon-playing.gif" alt="">
                            <i class="bi bi-play-fill fz-36"></i>
                        </div>
                        <i class="bi bi-three-dots fz-20"></i>                                                   
                    </div>
                </div>
            </div>
            <div class="playlist__div-content">
                <h3 class="playlist__div-name mt8 mb4 fz-14 cursor-pointer fw-600">
                    ${playlist.name}
                </h3>
                <p class="playlist__div-author fz-12">
                    ${playlist.author}
                </p>
            </div>
        </div>
        `;
      });

      $("#render-playlist").html(playlists.join(""));
    },
    renderPersonalAlbum: function () {
      let albums = Home.PersonalAlbum.map((album, index) => {
        return `
        <div class="Album__item col-lg-3">
          <div class="Album__item-image position-relative">
              <img src="${album.albumImage}" alt="">
              <div class="Album__item-overlay position-absolute">
                  <div class="Album__item-play position-absolute">
                      <i id="Album-play-icon" class="bi bi-play-circle"></i>
                  </div>
              </div>
          </div>
          <div class="Album__item-desc">
              <div class="d-lg-flex align-items-center">
                  <div class="Album__item-content">
                      <h3 class="Album__item-title">${album.albumName}</h3>
                  </div>
              </div>
          </div>
        </div>
        `;
      });

      $("#render__personal-Album").html(albums.join(""));
    },
    renderPersonalMV: function () {
      let MVs = Home.listIframes.map((mv, index) => {
        return `
        <div class="MV__item col-lg-4">
          <div class="MV__item-dataUrl" data-url="${mv.url}"></div>
          <div class="MV__item-image position-relative">
              <img src="${mv.thumbnail}" alt="">
              <div class="MV__item-overlay position-absolute">
                  <a href="#" class="MV__item-play position-absolute">
                      <i id="MV-play-icon" class="bi bi-play-circle"></i>
                  </a>
                  <div class="MV__item-duration position-absolute">
                      <h3 id="MV-duration">${mv.MvDuration}</h3>
                  </div>
                  <div class="MV__item-remove position-absolute">
                      <i id="MV-remove-icon" class="bi bi-x"></i>
                  </div>
              </div>
          </div>
          <div class="MV__item-desc">
              <div class="d-lg-flex align-items-center">
                  <div class="MV__item-avartar">
                      <img src="${mv.thumbnail}" alt="">
                  </div>
                  <div class="MV__item-content">
                      <h3 class="MV__item-title">${mv.title}</h3>
                      <p class="MV__item-author">${mv.author}</p>
                  </div>
              </div>
          </div>
        </div>
        `;
      });

      $("#render__personal-MV").html(MVs.join(""));
    },
    renderPlaylistToTrack: function (playlist) {
      let songs = Home.PlaylistSong[playlist].map((song, index) => {
        return `
        <div class="song row no-gutters padt8 padb8" data-index="${index}" data-playlist="${song.dataPlaylist}">
          <div class="song-wrapper-default col-lg-6 col-sm-6">
              <div class=" row no-gutters align-items-center">
                  <div class="col-lg-1 col-sm-1">
                      <i class="bi bi-music-note-beamed ml8 fz-14 song__icon-note"></i>
                  </div>
                  <div class="is-40px col-lg-2 col-sm-2 position-relative">
                      <img class="song__img" src="${song.image}" alt="">
                      <div class="song__icon position-absolute">
                          <img src="../Content/image/Icon/icon-playing.gif" class="song__icon-playing playing d-none">
                          <i class="bi bi-play-fill fz-20 song__icon-pause text-white d-none"></i>
                      </div>
                  </div>                                                                                     
                  <div class="col-lg-9 col-sm-9 ml8">
                      <div class="d-flex flex-column">
                          <h3 id="song__name" class="fz-14">
                              ${song.name}
                          </h3>
                          <p id="song__author" class="fz-12">
                              ${song.author}
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-lg-6 col-sm-6">
              <div class="row align-items-center">
                  <div class="col-lg-9 col-sm-9">
                      <p id="song__album" class="fz-12 lh-40">
                          ${song.album}
                      </p>
                  </div>
                  <div class="col-lg-3 col-sm-3 text-center">
                      <h3 id="song__duration" class="fz-12 lh-40">
                          ${song.duration}
                      </h3>
                  </div>
              </div>
          </div>
      </div>
        `;
      });

      $("#render-track").html(songs.join(""));
    },
    renderMaybeYouCarePlaylist: function () {
      let playlists = Home.MaybeYouCareAboutList.map((playlist) => {
        return `
        <div class="playlist__card col" data-playlist="${playlist.dataPlaylist}">
            <div class="playlist__div position-relative">
                <img src="${playlist.image}" alt="" class="playlist__div-img">
                <div class="playlist__div playlist__div-icon position-absolute ">
                    <div class="playlist__div-actions d-flex align-items-center position-absolute">
                        <i class="bi bi-heart fz-20 cursor-pointer"></i>
                        <div class="playlist__div-rounded text-center">
                            <img with="18" height="18" class="mt16 d-none" src="../Content/image/Icon/icon-playing.gif" alt="">
                            <i class="bi bi-play-fill fz-36"></i>
                        </div>
                        <i class="bi bi-three-dots fz-20"></i>                                                   
                    </div>
                </div>
            </div>
            <div class="playlist__div-content">
                <h3 class="playlist__div-name mt8 mb4 fz-14 cursor-pointer fw-600">
                    ${playlist.name}
                </h3>
                <p class="playlist__div-author fz-12">
                    ${playlist.author}
                </p>
            </div>
        </div>
        `;
      });

      $("#carePlaylist").html(playlists.join(""));
    },
    renderExploreSuggestPlaylist: function () {
      let playlists = Home.ExploreSuggestList.map((playlist) => {
        return `
        <div class="playlist__card col-lg-3 mt20" data-playlist="">
            <div class="playlist__div position-relative">
                <img src="${playlist.image}" alt="" class="playlist__div-img">
                <div class="playlist__div playlist__div-icon position-absolute ">
                    <div class="playlist__div-actions d-flex align-items-center position-absolute">
                        <i class="bi bi-heart fz-20 cursor-pointer"></i>
                        <div class="playlist__div-rounded text-center">
                            <img with="18" height="18" class="mt16 d-none" src="../Content/image/Icon/icon-playing.gif" alt="">
                            <i class="bi bi-play-fill fz-36"></i>
                        </div>
                        <i class="bi bi-three-dots fz-20"></i>                                                   
                    </div>
                </div>
            </div>
            <div class="playlist__div-content">
                <h3 class="playlist__div-name mt8 mb4 fz-14 cursor-pointer fw-600">
                    ${playlist.name}
                </h3>
                <p class="playlist__div-author fz-12">
                    ${playlist.author}
                </p>
            </div>
        </div>
        `;
      });

      $("#render-explore-suggest").html(playlists.join(""));
    },
    renderExploreMusicForDays: function () {
      let date = new Date();
      let dayOfWeek = date.getDay();

      if (dayOfWeek == 1) {
        let playlists = Home.ExploreMusicForDaysPlaylist.Monday.map(
          (playlist) => {
            return `
        <div class="playlist__card col-lg-3 mt20" data-playlist="">
            <div class="playlist__div position-relative">
                <img src="${playlist.image}" alt="" class="playlist__div-img">
                <div class="playlist__div playlist__div-icon position-absolute ">
                    <div class="playlist__div-actions d-flex align-items-center position-absolute">
                        <i class="bi bi-heart fz-20 cursor-pointer"></i>
                        <div class="playlist__div-rounded text-center">
                            <img with="18" height="18" class="mt16 d-none" src="../Content/image/Icon/icon-playing.gif" alt="">
                            <i class="bi bi-play-fill fz-36"></i>
                        </div>
                        <i class="bi bi-three-dots fz-20"></i>                                                   
                    </div>
                </div>
            </div>
            <div class="playlist__div-content">
                <h3 class="playlist__div-name mt8 mb4 fz-14 cursor-pointer fw-600">
                    ${playlist.name}
                </h3>
                <p class="playlist__div-author fz-12">
                    ${playlist.author}
                </p>
            </div>
        </div>
        `;
          }
        );

        $("#render-musicForDays").html(playlists.join(""));
        $(".explore__musicForDays-title").html("Thứ Hai Thư Giãn");
      } else if (dayOfWeek == 2) {
        let playlists = Home.ExploreMusicForDaysPlaylist.Tuesday.map(
          (playlist) => {
            return `
        <div class="playlist__card col-lg-3 mt20" data-playlist="">
            <div class="playlist__div position-relative">
                <img src="${playlist.image}" alt="" class="playlist__div-img">
                <div class="playlist__div playlist__div-icon position-absolute ">
                    <div class="playlist__div-actions d-flex align-items-center position-absolute">
                        <i class="bi bi-heart fz-20 cursor-pointer"></i>
                        <div class="playlist__div-rounded text-center">
                            <img with="18" height="18" class="mt16 d-none" src="../Content/image/Icon/icon-playing.gif" alt="">
                            <i class="bi bi-play-fill fz-36"></i>
                        </div>
                        <i class="bi bi-three-dots fz-20"></i>                                                   
                    </div>
                </div>
            </div>
            <div class="playlist__div-content">
                <h3 class="playlist__div-name mt8 mb4 fz-14 cursor-pointer fw-600">
                    ${playlist.name}
                </h3>
                <p class="playlist__div-author fz-12">
                    ${playlist.author}
                </p>
            </div>
        </div>
        `;
          }
        );

        $("#render-musicForDays").html(playlists.join(""));
        $(".explore__musicForDays-title").html("Thứ Ba Dảy Đầm");
      } else if (dayOfWeek == 3) {
        let playlists = Home.ExploreMusicForDaysPlaylist.Wednesday.map(
          (playlist) => {
            return `
        <div class="playlist__card col-lg-3 mt20" data-playlist="">
            <div class="playlist__div position-relative">
                <img src="${playlist.image}" alt="" class="playlist__div-img">
                <div class="playlist__div playlist__div-icon position-absolute ">
                    <div class="playlist__div-actions d-flex align-items-center position-absolute">
                        <i class="bi bi-heart fz-20 cursor-pointer"></i>
                        <div class="playlist__div-rounded text-center">
                            <img with="18" height="18" class="mt16 d-none" src="../Content/image/Icon/icon-playing.gif" alt="">
                            <i class="bi bi-play-fill fz-36"></i>
                        </div>
                        <i class="bi bi-three-dots fz-20"></i>                                                   
                    </div>
                </div>
            </div>
            <div class="playlist__div-content">
                <h3 class="playlist__div-name mt8 mb4 fz-14 cursor-pointer fw-600">
                    ${playlist.name}
                </h3>
                <p class="playlist__div-author fz-12">
                    ${playlist.author}
                </p>
            </div>
        </div>
        `;
          }
        );

        $("#render-musicForDays").html(playlists.join(""));
        $(".explore__musicForDays-title").html("Thứ Tư Vui Vẻ");
      } else if (dayOfWeek == 4) {
        let playlists = Home.ExploreMusicForDaysPlaylist.Thursday.map(
          (playlist) => {
            return `
        <div class="playlist__card col-lg-3 mt20" data-playlist="">
            <div class="playlist__div position-relative">
                <img src="${playlist.image}" alt="" class="playlist__div-img">
                <div class="playlist__div playlist__div-icon position-absolute ">
                    <div class="playlist__div-actions d-flex align-items-center position-absolute">
                        <i class="bi bi-heart fz-20 cursor-pointer"></i>
                        <div class="playlist__div-rounded text-center">
                            <img with="18" height="18" class="mt16 d-none" src="../Content/image/Icon/icon-playing.gif" alt="">
                            <i class="bi bi-play-fill fz-36"></i>
                        </div>
                        <i class="bi bi-three-dots fz-20"></i>                                                   
                    </div>
                </div>
            </div>
            <div class="playlist__div-content">
                <h3 class="playlist__div-name mt8 mb4 fz-14 cursor-pointer fw-600">
                    ${playlist.name}
                </h3>
                <p class="playlist__div-author fz-12">
                    ${playlist.author}
                </p>
            </div>
        </div>
        `;
          }
        );

        $("#render-musicForDays").html(playlists.join(""));
        $(".explore__musicForDays-title").html("Thứ Năm Thảnh Thơi");
      } else if (dayOfWeek == 5) {
        let playlists = Home.ExploreMusicForDaysPlaylist.Friday.map(
          (playlist) => {
            return `
        <div class="playlist__card col-lg-3 mt20" data-playlist="">
            <div class="playlist__div position-relative">
                <img src="${playlist.image}" alt="" class="playlist__div-img">
                <div class="playlist__div playlist__div-icon position-absolute ">
                    <div class="playlist__div-actions d-flex align-items-center position-absolute">
                        <i class="bi bi-heart fz-20 cursor-pointer"></i>
                        <div class="playlist__div-rounded text-center">
                            <img with="18" height="18" class="mt16 d-none" src="../Content/image/Icon/icon-playing.gif" alt="">
                            <i class="bi bi-play-fill fz-36"></i>
                        </div>
                        <i class="bi bi-three-dots fz-20"></i>                                                   
                    </div>
                </div>
            </div>
            <div class="playlist__div-content">
                <h3 class="playlist__div-name mt8 mb4 fz-14 cursor-pointer fw-600">
                    ${playlist.name}
                </h3>
                <p class="playlist__div-author fz-12">
                    ${playlist.author}
                </p>
            </div>
        </div>
        `;
          }
        );

        $("#render-musicForDays").html(playlists.join(""));
        $(".explore__musicForDays-title").html("Thứ Sáu Đây Rồi");
      } else if (dayOfWeek == 6) {
        let playlists = Home.ExploreMusicForDaysPlaylist.Saturday.map(
          (playlist) => {
            return `
              <div class="playlist__card col-lg-3 mt20" data-playlist="">
                  <div class="playlist__div position-relative">
                      <img src="${playlist.image}" alt="" class="playlist__div-img">
                      <div class="playlist__div playlist__div-icon position-absolute ">
                          <div class="playlist__div-actions d-flex align-items-center position-absolute">
                              <i class="bi bi-heart fz-20 cursor-pointer"></i>
                              <div class="playlist__div-rounded text-center">
                                  <img with="18" height="18" class="mt16 d-none" src="../Content/image/Icon/icon-playing.gif" alt="">
                                  <i class="bi bi-play-fill fz-36"></i>
                              </div>
                              <i class="bi bi-three-dots fz-20"></i>                                                   
                          </div>
                      </div>
                  </div>
                  <div class="playlist__div-content">
                      <h3 class="playlist__div-name mt8 mb4 fz-14 cursor-pointer fw-600">
                          ${playlist.name}
                      </h3>
                      <p class="playlist__div-author fz-12">
                          ${playlist.author}
                      </p>
                  </div>
              </div>
              `;
          }
        );

        $("#render-musicForDays").html(playlists.join(""));
        $(".explore__musicForDays-title").html("Thứ Bảy Máu Chảy Về Tim");
      } else if (dayOfWeek == 7) {
        let playlists = Home.ExploreMusicForDaysPlaylist.Sunday.map(
          (playlist) => {
            return `
        <div class="playlist__card col-lg-3 mt20" data-playlist="">
            <div class="playlist__div position-relative">
                <img src="${playlist.image}" alt="" class="playlist__div-img">
                <div class="playlist__div playlist__div-icon position-absolute ">
                    <div class="playlist__div-actions d-flex align-items-center position-absolute">
                        <i class="bi bi-heart fz-20 cursor-pointer"></i>
                        <div class="playlist__div-rounded text-center">
                            <img with="18" height="18" class="mt16 d-none" src="../Content/image/Icon/icon-playing.gif" alt="">
                            <i class="bi bi-play-fill fz-36"></i>
                        </div>
                        <i class="bi bi-three-dots fz-20"></i>                                                   
                    </div>
                </div>
            </div>
            <div class="playlist__div-content">
                <h3 class="playlist__div-name mt8 mb4 fz-14 cursor-pointer fw-600">
                    ${playlist.name}
                </h3>
                <p class="playlist__div-author fz-12">
                    ${playlist.author}
                </p>
            </div>
        </div>
        `;
          }
        );

        $("#render-musicForDays").html(playlists.join(""));
        $(".explore__musicForDays-title").html("Cuối Tuần Lên Nhạc");
      }
    },

    // function
    getDataTheme: function () {
      $(".layout__content-useTheme")
        .unbind()
        .click(function (e) {
          let $theme = $(this).data("theme");
          let htmlTag = $("html")[0];
          let containerBackground = $(".container-default");
          let bg = {
            Artist: {
              IU: "../Content/image/Background/iu-wall.jpg",
              Jack: "../Content/image/Background/jack-wall.jpg",
              Jennie: "../Content/image/Background/jennie-wall.jpg",
              Jisoo: "../Content/image/Background/jisoo-wall.jpg",
              Rose: "../Content/image/Background/rose-wall.jpg",
            },
            Topic: {
              ZMA: "../Content/image/Background/zma.svg",
              London: "../Content/image/Background/london.jpg",
              Eiffel: "../Content/image/Background/eiffel.jpg",
            },
          };

          if ($theme === "blueZMA") {
            $("html").attr("data-theme", "blue");
            $(".container__player").addClass("zma-player");

            let styles = Home.CssRootTheme.map((item) => {
              return item.BlueTheme.ZMA;
            });

            htmlTag.style = styles.join("");
            $(containerBackground).css({
              "background-image": `url(${bg.Topic.ZMA})`,
            });
          } else if ($theme === "darkEiffel") {
            $(".container__player").removeClass("zma-player");
            $("html").attr("data-theme", "dark");

            let styles = Home.CssRootTheme.map((item) => {
              return item.DarkTheme;
            });

            htmlTag.style = styles.join("");
            $(containerBackground).css({
              "background-image": `url(${bg.Topic.Eiffel})`,
            });
          } else if ($theme === "blueLondon") {
            $(".container__player").removeClass("zma-player");
            $("html").attr("data-theme", "blue");

            let styles = Home.CssRootTheme.map((item) => {
              return item.BlueTheme.London;
            });

            htmlTag.style = styles.join("");
            $(containerBackground).css({
              "background-image": `url(${bg.Topic.London})`,
            });
          } else if ($theme === "grayIU") {
            $(".container__player").removeClass("zma-player");
            $("html").attr("data-theme", "gray");

            let styles = Home.CssRootTheme.map((item) => {
              return item.GrayTheme.IU;
            });

            htmlTag.style = styles.join("");
            $(containerBackground).css({
              "background-image": `url(${bg.Artist.IU})`,
            });
          } else if ($theme === "grayJennie") {
            $("html").attr("data-theme", "gray");

            let styles = Home.CssRootTheme.map((item) => {
              return item.GrayTheme.Jennie;
            });

            htmlTag.style = styles.join("");
            $(containerBackground).css({
              "background-image": `url(${bg.Artist.Jennie})`,
            });
          } else if ($theme === "lightJisoo") {
            $("html").attr("data-theme", "light");
            $(".container__player").removeClass("zma-player");

            let styles = Home.CssRootTheme.map((item) => {
              return item.LightTheme.Jisoo;
            });

            htmlTag.style = styles.join("");
            $(containerBackground).css({
              "background-image": `url(${bg.Artist.Jisoo})`,
            });
          } else if ($theme === "blueRose") {
            $("html").attr("data-theme", "blue");
            $(".container__player").removeClass("zma-player");

            let styles = Home.CssRootTheme.map((item) => {
              return item.BlueTheme.Rose;
            });

            htmlTag.style = styles.join("");
            $(containerBackground).css({
              "background-image": `url(${bg.Artist.Rose})`,
            });
          } else if ($theme === "brownJack") {
            $("html").attr("data-theme", "brown");
            $(".container__player").removeClass("zma-player");

            let styles = Home.CssRootTheme.map((item) => {
              return item.BrownTheme;
            });

            htmlTag.style = styles.join("");
            $(containerBackground).css({
              "background-image": `url(${bg.Artist.Jack})`,
            });
          }

          $(".modal-layout__container").removeClass("open");
        });
    },
    playRandomSong: function () {
      let _this = this;
      let newCurrentIndex = Math.floor(
        Math.random() * Home.PlaylistSong[_this.currentPlaylistIndex].length
      );
      this.currentIndex = newCurrentIndex;
      this.isPlaying = true;
      this.loadCurrentSong(_this.currentPlaylistIndex);
      $("#audio")[0].play();
      $("#play-btn__play").addClass("d-none");
      $("#play-btn__pause").removeClass("d-none");
    },
    loadCurrentSong: function (playlist) {
      $(".song").removeClass("active");

      $(`.song[data-playlist="${this.currentPlaylistIndex}"]`)[
        this.currentIndex
      ].classList.add("active");

      $("#player__img").attr(
        "src",
        `${Mp3Player.currentPlaylist[playlist][this.currentIndex].image}`
      );
      $(".player__desc-name h3").html(
        `${Mp3Player.currentPlaylist[playlist][this.currentIndex].name}`
      );
      $(".player__desc-name #author").html(
        `${Mp3Player.currentPlaylist[playlist][this.currentIndex].author}`
      );
      $("#audio").attr(
        "src",
        `${Mp3Player.currentPlaylist[playlist][this.currentIndex].source}`
      );
      $(".time-end p").html(
        `${Mp3Player.currentPlaylist[playlist][this.currentIndex].duration}`
      );
    },
    playListSong: function () {
      let _this = this;
      $(".library__heading-runPlaylist")
        .unbind()
        .click(function (e) {
          _this.renderPlaylistToTrack(1);
          _this.loadCurrentSong(1);
          _this.handleMp3Event();
          _this.isPlaying = true;

          $(".song")[0].classList.add("active");
          $(".container__right-content.active").removeClass("active");
          $(".container__right-track").addClass("active");
          $("#container__left .ul-list .list-item.active").removeClass(
            "active"
          );

          $("#play-btn__play").addClass("d-none");
          $("#play-btn__pause").removeClass("d-none");
          $("#my-playlist").html("");
          $("#audio")[0].play();
        });
    },
    setInnerHeightForSideBar: function () {
      // let height = window.innerHeight;
      // let playerContainer = document.querySelector(".container__player").offsetHeight ;

      setTimeout(function () {
        let createPlaylistOffsetTop = $("#create-playlist").offset().top;
        let navSidebar2OffsetTop = $("#nav-sidebar-2").offset().top;
        let navSidebar2Height =
          createPlaylistOffsetTop - navSidebar2OffsetTop + "px";
        $("#nav-sidebar-2").css({
          "max-height": `${navSidebar2Height}`,
        });
      }, 100);
      // $("#container__left").css({
      //   "max-height": `${countedHeight}`,
      // });
      // $(".container__right").css({
      //   "max-height": `${countedHeight}`,
      // });
    },
    setWidthForHeaderWidthSearch: function () {
      let containerLeft = $("#container__left")[0].offsetWidth + "px";

      $("#header__with-search").css({
        "margin-left": `${containerLeft}`,
      });
    },
    displayContentOfTabPane: function () {
      $(".nav-link-border-bottom")
        .unbind()
        .click(function (e) {
          let $this = $(this);
          let $parent = $this.closest(".nav-item");

          $(".nav-item").removeClass("active");
          $parent.addClass("active");
        });
    },
    stickyHeaderWithSearch: function () {
      $(".container__right")[0].onscroll = function (e) {
        let scrollTop = $(this).scrollTop();
        if (scrollTop > 10) {
          $("#container__right-header").addClass("is-sticky");
        } else {
          $("#container__right-header").removeClass("is-sticky");
        }
      };
    },
    activeListSongPlaying: function () {
      $("#playlist-running")
        .unbind()
        .click(function (e) {
          $(this).toggleClass("active");
        });
    },
    openLayoutContainerModal: function () {
      $("#layout__container")
        .unbind()
        .click(function (e) {
          e.stopPropagation();
          $(".modal-layout__container").addClass("open");
        });

      $(document).on("click", ".wrapper", function (e) {
        $(".modal-layout__container").removeClass("open");
      });

      $(".modal-layout__container .modal__body")
        .unbind()
        .click(function (e) {
          e.stopPropagation();
        });

      $("#layout__exit")
        .unbind()
        .click(function (e) {
          $(".modal-layout__container").removeClass("open");
        });
    },
    openPlaylistInPlaylistTrack: function () {
      let _this = this;
      $(".playlist__card")
        .unbind()
        .click(function (e) {
          e.preventDefault();
          let $this = $(this);
          let $dataPlaylist = $this.data("playlist");
          let $img = $this.find(".playlist__div-img");
          let $sourceImg = $img.attr("src");
          let $namePlaylist = $this.find(".playlist__div-name").text();

          _this.renderPlaylistToTrack($dataPlaylist);
          _this.handleMp3Event();

          $(".container__right-content.active").removeClass("active");
          $(".container__right-track").addClass("active");
          $("#track-cdThumb").attr("src", `${$sourceImg}`);
          $("#container__left .ul-list .list-item.active").removeClass(
            "active"
          );
          $(".track__name h3").html($namePlaylist);
        });

      $("#player__img")
        .unbind()
        .click(function (e) {
          // $("#my-playlist").html("");
          $(".container__right-content.active").removeClass("active");
          $(".container__right-track").addClass("active");
          $(".container__right-content.active").removeClass("active");
          $(".container__right-track").addClass("active");
          $("#container__left .ul-list .list-item.active").removeClass(
            "active"
          );
        });
    },
    swapTapSideBar: function () {
      let _this = this;

      $(".tap-sideBar")
        .unbind()
        .click(function (e) {
          $(".tap-sideBar").removeClass("active");
          $(".container__right-content").removeClass("active");
          $(this).addClass("active");

          let tapPersonal = document.querySelector(".tab-personal.active");
          let tapExplore = document.querySelector(".tab-explore.active");
          let tapRanking = document.querySelector(".tab-ranking.active");
          let tapRadio = document.querySelector(".tab-radio.active");
          let tapFollow = document.querySelector(".tab-follow.active");

          if (tapPersonal) {
            $(".container__right-personal").addClass("active");
            _this.UsingSlickSliderPlugin(false);
            _this.UsingSlickSliderPlugin(true);
            _this.renderMyPlayListSongs();
            _this.handleMp3Event();
          } else if (tapExplore) {
            $(".container__right-explore").addClass("active");
          }
        });
    },
    exploreSliderCarousel: function() {
      $(".explore__slider-next").unbind().click(function (e) {
        Remote(1, ".explore__slider", ".explore__slider-item");
      });

      $(".explore__slider-prev").unbind().click(function (e) {
        Remote(0, ".explore__slider", ".explore__slider-item");
      });

      function Remote(data, carouselElement, slideElement) {
        
        if(data == 1) {
          let nextItem = $(carouselElement).find($(`${slideElement}[data-numerical="next"]`));
          let dataNumberOfNextItem = $(nextItem).data("number");
          let slideLength = $(slideElement).length;
          let temp = dataNumberOfNextItem + 1;
          let secondTemp = dataNumberOfNextItem - 2;

          // swap caarourel to the first slide when next to the last slide
          if(slideLength < temp) {
            dataNumberOfNextItem = 1;
            let loopToFirst = $(carouselElement).find($(`${slideElement}[data-number="${dataNumberOfNextItem}"]`));
            $(loopToFirst).attr("data-numerical", "next");
          } 

          let firstItem = $(carouselElement).find($(`${slideElement}[data-numerical="first"]`));
          let lastItem = $(carouselElement).find($(`${slideElement}[data-numerical="last"]`));

          // catch the between slide when second temp is minus
          if(secondTemp < 0) {
            secondTemp = 5;
          } else if(secondTemp == 0) {
            secondTemp = 6;
          }

          let betweenItem = $(carouselElement).find($(`${slideElement}[data-number="${secondTemp}"]`));
          let swapNextItem = $(carouselElement).find($(`${slideElement}[data-number="${temp}"]`));

          $(firstItem).attr("data-numerical", "prev");
          $(firstItem).attr("data-actived", "false");
          
          $(lastItem).attr("data-numerical", "none");
          $(lastItem).attr("data-actived", "true");

          $(nextItem).attr("data-numerical", "last");
          $(nextItem).attr("data-actived", "true");

          $(swapNextItem).attr("data-numerical", "next");
          $(swapNextItem).attr("data-actived", "false");

          $(betweenItem).attr("data-numerical", "first");
          $(betweenItem).attr("data-actived", "true");
        }
      };
    },
    playSong: function () {
      let activeSong = $(".song.active");

      $("#play-btn__play").addClass("d-none");
      $("#play-btn__pause").removeClass("d-none");
      $(".track__cd").addClass("is-playing");
      $("#audio")[0].play();

      let $playingIcon = $(activeSong).find(".song__icon-playing");
      let $pauseIcon = $(activeSong).find(".song__icon-pause");
      $playingIcon.removeClass("d-none");
      $pauseIcon.addClass("d-none");

      $(".track__cd").removeClass("is-rollback");
      $(".track__cd").addClass("is-animated");
      $(".track__controls-play").addClass("d-none");
      $(".track__controls-pause").removeClass("d-none");
      $("#track__controls-desc").html("TẠM DỪNG");
    },
    pauseSong: function () {
      let activeSong = $(".song.active");

      $("#play-btn__play").removeClass("d-none");
      $("#play-btn__pause").addClass("d-none");
      $(".track__cd").removeClass("is-playing");
      $("#audio")[0].pause();

      let $pauseIcon = $(activeSong).find(".song__icon-pause");
      $pauseIcon.removeClass("d-none");

      $(".track__cd").addClass("is-rollback");
      $(".track__cd").removeClass("is-animated");
      $(".track__controls-play").removeClass("d-none");
      $(".track__controls-pause").addClass("d-none");
      $("#track__controls-desc").html("TIẾP TỤC PHÁT");
      setTimeout(function () {
        $(".track__cd").removeClass("is-rollback");
      }, 500);
    },
    removePlayingIcon: function () {
      $(".song__icon-pause").addClass("d-none");
      $(".song__icon-playing").addClass("d-none");
    },
    openModalIframe: function() {
      $(".MV__item").unbind().click(function(e) {
        const _this = this;
        const container = $(_this).find(".MV__item-dataUrl");
        const dataUrl = $(container).data("url");

        const iframeUrl =  $(".iframe-mv").attr("src")

        $(".modal-iframe").addClass("open");

        if(iframeUrl === "") {
          $(".iframe-mv").attr("src", dataUrl);
        } else if(iframeUrl === dataUrl) {
          console.log("continue iframe");
        } else {
          $(".iframe-mv").attr("src", dataUrl);
        }
      })

      // remove open modal iframe
      $(".modal-iframe").unbind().click(function(e) {
        $(".modal-iframe").removeClass("open");
      })
    },
  };

  Mp3Player.init();
});
