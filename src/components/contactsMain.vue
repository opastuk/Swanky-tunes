<template>
	<div>
		<div
			v-if="!error"
			class="contacts"
		>
			<div
				v-for="(contact, index) in contactsList"
				:key="index"
			>
				<h2 class="contacts__headline contacts__headline--bold">
					{{ contact[`${lang}_name`] }}
				</h2>
				<div
					v-for="(subcontact, subindex) in contact.contact_section"
					:key="subindex"
				>
					<p
						v-if="subcontact[`${lang}_name`]"
						class="contacts__value"
						style="margin: 0"
					>
						{{ subcontact[`${lang}_name`] }}:
					</p>
					<p
						class="contacts__value"
					>
						{{ subcontact.mail }}
					</p>
					<p
						v-if="subcontact.phone"
						class="contacts__value_phone"
					>
						Tel | WhatsApp: {{ subcontact.phone }}
					</p>
				</div>
			</div>
		</div>
		<div
			v-else
			class="contacts"
		>
			{{ descr.error }}
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import contacts from '../api/contacts';
import { mapState } from 'vuex';

@Component({
	computed:	mapState({
		lang: state => state.lang,
		descr: state => state.descr,
	})
})
export default class contactsMain extends Vue {
	contactsList = [];
	error = false;

	created() {
		contacts.getContacts().then((response) => {
			this.contactsList = response.data;
		}).catch((e) => this.error = true);
	}
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
    &_phone {
			margin-top: -25px;
			font-size: 16px;
		}
  }
}

@media (min-width: 920px) {
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
