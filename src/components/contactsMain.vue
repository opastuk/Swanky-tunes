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
					{{ contact.location ? '' : contact.name }}
				</h2>
				<p
					class="contacts__value"
					v-html="formatContactsWithLocation(contact)"
				/>
			</div>
		</div>
		<div
			v-else
			class="contacts"
		>
			Возникли технические неполадки - зайдите позже!
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import contacts from '../api/contacts';

@Component
export default class contactsMain extends Vue {
	contactsList = [];
	error = false;

	created() {
		contacts.getContacts().then((response) =>{
			this.contactsList = response.data;
			const indexOfFirstBooking = this.contactsList.findIndex((el) => el.name === 'Booking Agents');

			this.contactsList.splice(indexOfFirstBooking, 0, {name: 'Booking Agents'});
		}).catch((e) => this.error = true);
	}

	formatContactsWithLocation(contact) {
		if (contact.location) {
			return `${contact.location}: <br> ${contact.mail}`;
		} else {
			return contact.mail;
		}
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
