const authKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExNyIsImNvbnN1bWVyTmFtZSI6IkludGVydmlld3MiLCJjb25zdW1lclR5cGUiOiIxIiwibmJmIjoxNjE5Nzc1NTY2LCJleHAiOjE5MzUzMDgzNjYsImlhdCI6MTYxOTc3NTU2Nn0.OIbvEbkNecLDOky7bI_fi1r6yxgLxwcFAvy6hbvKpTY";

new Vue({
  el: "#app",
  data: {
    postcode: "co3 4rx",
    addresses: [],
    errorMessage: null,
    loading: false,
    baseUrl:
      "https://6kb2p9kgb0.execute-api.eu-west-2.amazonaws.com/production/api/v1/addresses/"
  },
  methods: {
    postcodeIsValid() {
      const RE = /[A-Za-z][1-9] [1-9][A-Za-z]{2}/;

      return RE.test(this.postcode);
    },
    handleRequest(e) {
      e.preventDefault();

      if (this.loading === true) return;

      if (this.postcodeIsValid() == false) {
        this.errorMessage = "Please enter a valid postcode.";
        return;
      }

      this.errorMessage = null;

      const url = `${this.baseUrl}?postcode=${this.postcode}`;

      this.loading = true;

      axios
        .get(url, {
          headers: {
            Authorization: authKey
          }
        })
        .then((res) => {
          this.addresses = res.data.data.address;
        })
        .catch(() => {
          this.errorMessage = "Something went wrong. Please try again.";
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
});
