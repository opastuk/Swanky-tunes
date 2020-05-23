<template>
	<div>
		<div class="contacts">
			<h2 class="contacts__headline contacts__headline--bold">
				General Manager
			</h2>
			<p class="contacts__value">
				mgmt@swankytunes.com
			</p>
			<h2 class="contacts__headline contacts__headline--bold">
				Press Inquiries
			</h2>
			<p class="contacts__value">
				mgmt@swankytunes.com
			</p>
			<h2 class="contacts__headline contacts__headline--bold">
				Booking Agents
			</h2>
			<p class="contacts__value">
				ASIA (excl. INDIA): <br />
				robb@supermodifiedagency.com
			</p>
			<h2 class="contacts__headline">
				N&S AMERICA/EU/UK/<br class="contacts__br" />ME/INDIA/AUS/NZ:
			</h2>
			<p class="contacts__value">
				jochen@ourmusicgroup.nl
			</p>
			<h2 class="contacts__headline">
				RUS/CIS:
			</h2>
			<p class="contacts__value">
				booking@effective-records.ru
			</p>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class contactsMain extends Vue {
}
</script>

<style scoped lang="less">
.contacts {
  height: 100%;
  .flex-container();
  &__headline {
    .reset-text();
    font-size: 16px;
    line-height: 26px;
    font-weight: normal;
  }
  &__headline--bold {
    font-weight: bold;
  }
  &__value {
    .reset-text();
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 25px;
    text-decoration: underline;
  }
}

@media (min-width: 768px) {
  .contacts {
    width: 350px;
    height: auto;
    text-align: center;

		&__headline {
			font-size: 16px;
		}
		&__value {
			font-size: 16px;
		}
    &__br {
      display: none;
    }
  }
}
</style>
