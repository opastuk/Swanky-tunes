<template>
	<div class="music-cards__wrapper">
		<loader v-show="!loaded" />
		<div
			v-if="!error"
			v-show="loaded"
			class="music-cards__container"
		>
			<div
				v-for="(song, index) in songCard"
				:key="index"
				class="music-cards__item"
			>
				<music-track
					:song="song"
					@playing="preventOthers"
					@loaded="ready"
				/>
			</div>
		</div>
		<div
			v-else
			class="music_cards__container"
		>
			{{ descr.error }}
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import musicTrack from '@/components/musicTrack.vue';
import music from '../api/music.js';
import Loader from '@/components/Loader.vue';
import { mapState } from 'vuex';

@Component({
	components: { musicTrack, Loader },
	computed:	mapState({
		descr: state => state.descr,
	})

})
export default class MusicCards extends Vue {
  songCard = [];
	loaded = false;
	error = false;
  songs = [];

  mounted() {
  	music.getTracks()
  		.then((response) => {
  			this.songCard = response.data;
  			this.songCard.sort(function(prevSong, nextSong) {
  				const prevRealise = new Date(prevSong.date);
  				const nextRealise = new Date(nextSong.date);

  				return prevRealise - nextRealise;
  			}).reverse();
  		}).catch((e) => {
  			this.error = true;
  			this.loaded = true;
  		});
  }

  ready(){
  	this.loaded = true;
  }

  preventOthers(song) {
  	if (!this.songs.includes(song)) {
  		this.songs.push(song);
  	}
  	this.songs.forEach((el) => {
  		if (el !== song) {
  			el.stop();
  			el.onstop;
  		}
  	});

  }
}
</script>

<style scoped lang="less">
.music-cards {
	&__loader-container{
		display: flex;
		align-items: center;
		height: 100%;
	}
	&__loader {
		margin: 0 auto;
	}
  &__wrapper {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    max-width: 90%;
    margin: 0 auto;
  }

  &__container {
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
		&::-webkit-scrollbar {
			background-color: rgba(0, 0, 0, 0);
		}
  }

  &__item {
    height: fit-content;
    flex-basis: 20%;
    -ms-flex: auto;
    width: 250px;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
  }
}

@media (max-width: 1333px) {
  .music-cards__item {
    flex-basis: 33.33%;
  }
}
@media (max-width: 1073px) {
  .music-cards__item {
    flex-basis: 33.33%;
  }
}
@media (max-width: 815px) {
  .music-cards__item {
    flex-basis: 50%;
  }
}
@media(max-width: 620px) {
  .col {
    clear: both;
    float: none;
    margin-left: auto;
    margin-right: auto;
    width: auto !important;
  }
}
@media (max-width: 555px) {
  .music-cards__item {
    flex-basis: 100%;
  }
}
</style>
