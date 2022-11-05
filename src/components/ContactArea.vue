<template>
  <!-- Contact Area Start -->
  <section class="nuxa-contact-area section_100" id="elemContact">
    <b-container>
      <b-row>
        <b-col lg="12">
          <div class="site-heading" data-aos="fade-down">
            <h2>Lets Get In <span>Touch</span></h2>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="5">
          <div class="contact-info">
            <div class="single-contact-info" data-aos="fade-right">
              <div class="contact-info-icon">
                <i class="fa fa-map-marker"></i>
              </div>
              <div class="contact-info-text">
                <h3>Our head office</h3>
                <p>202, Grasselli Street.</p>
              </div>
            </div>
            <div class="single-contact-info" data-aos="fade-right">
              <div class="contact-info-icon">
                <i class="fa fa-phone"></i>
              </div>
              <div class="contact-info-text">
                <h3>Call Us On</h3>
                <p>9123-456-78</p>
              </div>
            </div>
            <div class="single-contact-info" data-aos="fade-right">
              <div class="contact-info-icon">
                <i class="fa fa-envelope"></i>
              </div>
              <div class="contact-info-text">
                <h3>Email Us At</h3>
                <p>info@example.com</p>
              </div>
            </div>
          </div>
        </b-col>
        <b-col lg="7">
          <div class="contact-form">
            <div class="heading-line-two"></div>
            <b-alert v-model="showSuccessAlert" variant="success" dismissible>
              Message Sent Successfully!
            </b-alert>
            <b-form id="contact-form" @submit.stop.prevent="onSubmit">
              <b-row>
                <b-col cols="12" md="6">
                 <p>
                   <b-form-input v-model="contact.name" placeholder="Name" :state="validateState('name')"></b-form-input>
                   <b-form-invalid-feedback class="text-left">The Name Field is Required</b-form-invalid-feedback>
                 </p>
                </b-col>
                <b-col cols="12" md="6">
                  <p>
                    <b-form-input v-model="contact.subject" placeholder="Subject"></b-form-input>
                    <b-form-invalid-feedback :state="validateState('subject')">The Subject Field is Required</b-form-invalid-feedback>
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" md="6">
                  <p>
                    <b-form-input v-model="contact.email" type="email" placeholder="Email" :state="validateState('email')"></b-form-input>
                    <b-form-invalid-feedback class="text-left">Enter a Valid Email</b-form-invalid-feedback>
                  </p>
                </b-col>
                <b-col cols="12" md="6">
                  <p>
                    <b-form-input v-model="contact.phone" placeholder="Phone" type="tel"></b-form-input>
                  </p>
                </b-col>
                <b-col lg="12">
                  <p>
                    <b-form-textarea v-model="contact.message" id="textarea-large" size="lg" placeholder="Your Message..." :state="validateState('message')"></b-form-textarea>
                    <b-form-invalid-feedback class="text-left">The Message Field is Required</b-form-invalid-feedback>
                  </p>
                </b-col>
                <b-col lg="12">
                  <p>
                    <b-button class="nuxa-btn" type="submit">Send Message <span></span></b-button>
                  </p>
                </b-col>
              </b-row>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- Contact Area End -->
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "ContactArea",
  mixins: [validationMixin],
  data() {
    return {
      contact: {
        name: '',
        subject: '',
        email: '',
        phone: '',
        message: ''
      },
      showSuccessAlert: false
    }
  },
  validations: {
    contact: {
      name: {
        required
      },
      subject: {
        required
      },
      email: {
        required,
        email: email
      },
      message: {
        required
      }
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.contact[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.contact = {
        name: '',
        subject: '',
        email: '',
        phone: '',
        message: ''
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.contact.$touch();
      if (this.$v.contact.$anyError) {
        return;
      }
      this.showSuccessAlert = true;
      this.resetForm();
    }
  }
}
</script>

<style scoped>

</style>
