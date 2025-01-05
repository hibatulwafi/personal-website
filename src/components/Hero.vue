<template>
    <section id="hero" class="bg-yellow-500 text-white text-center p-16">
        <h1 class="text-5xl font-bold">
            <span>{{ typedText }}</span><span class="blinking-cursor">|</span>
        </h1>
        <p class="mt-4 text-lg">A passionate web developer creating stunning websites.</p>
        <button class="btn btn-primary mt-6">Get in Touch</button>
    </section>
</template>

<script>
export default {
    data() {
        return {
            fullText: "Hello, I'm [Your Name]", // Teks lengkap yang akan diketik
            typedText: '', // Teks yang sedang diketik
            typingSpeed: 100, // Kecepatan mengetik dalam milidetik
        };
    },
    mounted() {
        this.startTyping();
    },
    methods: {
        startTyping() {
            let index = 0;
            const interval = setInterval(() => {
                if (index < this.fullText.length) {
                    this.typedText += this.fullText[index];
                    index++;
                } else {
                    clearInterval(interval); // Hentikan interval setelah teks selesai
                }
            }, this.typingSpeed);
        },
    },
};
</script>

<style>
.blinking-cursor {
    font-weight: bold;
    animation: blink 0.8s step-start infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}
</style>