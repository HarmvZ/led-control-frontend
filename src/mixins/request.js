export default {
  data () {
    return {
      baseURL: process.env.API_BASE_URL,
    };
  },
  methods: {
    async request (options) {
      try {
        const response = await this.$axios({
          baseURL: this.baseURL,
          ...options,
        });
        return response;
      } catch (error) {
        this.$q.notify({
          message: error.toString(),
          position: 'top',
          color: 'negative',
          icon: 'report_problem',
          actions: [{
            label: 'Retry',
            handler: () => this.request(options),
          }],
        });
      }
    },
  },
};
