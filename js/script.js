const { createApp } = Vue;

const app = createApp ({
    data() {
        return {
            userColor: "",
            imgSrc: "https://wallpapercave.com/wp/wp3588278.jpg",
            widthImg: "width_img",
            bgColor: ""

        }
    },

    methods: {
        color: function () {
            this.bgColor = this.userColor;
            console.log(this.bgColor);
        }
    }
});

app.mount("#app");