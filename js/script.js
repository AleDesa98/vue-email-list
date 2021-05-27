var app = new Vue(
    {
        el: "#root",
        data: {
            numeroEmail: 10,
            randomMail: []
        },
        mounted: function() {
            for (i = 0; i < this.numeroEmail; i++) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (result) => {
                    this.randomMail.push(result.data.response);
                })
            }
        }
    }
)