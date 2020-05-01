let botoesLikeEl = document.querySelectorAll(".like");
let botoesDeslikeEl = document.querySelectorAll(".dislike")

for (let botao of botoesLikeEl) {

    botao.addEventListener("click", () => {

        alert("Thanks!!!");

    });

}

for (let botao of botoesDeslikeEl) {

    botao.addEventListener("click", () => {

        alert(":(");

    });

}