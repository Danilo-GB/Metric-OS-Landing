<template>
  <!-- Faq Area Start -->
  <section class="nuxa-faq-area section_100" id="elemFaq">
    <b-container>
      <b-row>
        <b-col lg="6">
          <div class="faq-right">
            <b-img-lazy
              alt="faqs"
              v-bind:src="require('../assets/img/faqs.png')"
            />
          </div>
        </b-col>
        <b-col lg="6">
          <div class="faq-left">
            <div class="site-heading" data-aos="fade-down">
              <h2>Frequently Asked <span>Questions</span></h2>
            </div>
            <div class="accordion" role="tablist">
              <b-card
                class="mb-1 faq_accordian_header border-0"
                no-body
                data-aos="fade-down"
              >
                <b-card-header
                  class="p-1 faq_accordian_header"
                  header-tag="header"
                  role="tab"
                >
                  <b-link v-b-toggle.accordion-1 class="collapsed">
                    How to buy the products? #1
                  </b-link>
                </b-card-header>
                <b-collapse
                  id="accordion-1"
                  accordion="my-accordion"
                  role="tabpanel"
                  visible
                >
                  <b-card-body class="faq_accordian_body">
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card
                class="mb-1 faq_accordian_header border-0"
                no-body
                data-aos="fade-down"
              >
                <b-card-header
                  class="p-1 faq_accordian_header"
                  header-tag="header"
                  role="tab"
                >
                  <b-link v-b-toggle.accordion-2 class="collapsed">
                    How much price of the product? #2
                  </b-link>
                </b-card-header>
                <b-collapse
                  id="accordion-2"
                  accordion="my-accordion"
                  role="tabpanel"
                  visible
                >
                  <b-card-body class="faq_accordian_body">
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card
                class="mb-1 faq_accordian_header border-0"
                no-body
                data-aos="fade-down"
              >
                <b-card-header
                  class="p-1 faq_accordian_header"
                  header-tag="header"
                  role="tab"
                >
                  <b-link v-b-toggle.accordion-3 class="collapsed">
                    How can i get refund? #3
                  </b-link>
                </b-card-header>
                <b-collapse
                  id="accordion-3"
                  accordion="my-accordion"
                  role="tabpanel"
                  visible
                >
                  <b-card-body class="faq_accordian_body">
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card
                class="mb-1 faq_accordian_header border-0"
                no-body
                data-aos="fade-down"
              >
                <b-card-header
                  class="p-1 faq_accordian_header"
                  header-tag="header"
                  role="tab"
                >
                  <b-link v-b-toggle.accordion-4 class="collapsed">
                    How to use the product? #4
                  </b-link>
                </b-card-header>
                <b-collapse
                  id="accordion-4"
                  accordion="my-accordion"
                  role="tabpanel"
                  visible
                >
                  <b-card-body class="faq_accordian_body">
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- Faq Area End -->
</template>

<script>
export default {
  name: "FaqArea",
  data() {
    return {
      text: "craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
    };
  },
};
</script>

<style scoped></style>
