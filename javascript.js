const generateBtn = document.getElementById("generate-Btn");
const matSedelLista = document.getElementById("matsedel-lista");
const inköpsLista = document.getElementById("inköps-lista");
const rensaBtn = document.getElementById("rensa");
const matListaContainer = document.getElementById("matlista-container");
const veckoDagar = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"]


const matVaror = [
    { namn: "Rostbröd", kategori: "Bageri", ordning: 1 }, { namn: "Lingongrova", kategori: "Bageri", ordning: 2 }, { namn: "Pitabröd", kategori: "Bageri", ordning: 3 },
    { namn: "Knäckebröd", kategori: "Bageri", ordning: 4 }, { namn: "Potatis", kategori: "Frukt och grönt", ordning: 6 }, { namn: "Rödlök", kategori: "Frukt och grönt", ordning: 7 },
    { namn: "Gullök", kategori: "Frukt och grönt", ordning: 8 }, { namn: "Apelsin", kategori: "Frukt och grönt", ordning: 9 }, { namn: "Clementin", kategori: "Frukt och grönt", ordning: 10 },
    { namn: "Röda äpplen", kategori: "Frukt och grönt", ordning: 11 }, { namn: "Gröna äpplen", kategori: "Frukt och grönt", ordning: 12 }, { namn: "Päron", kategori: "Frukt och grönt", ordning: 13 },
    { namn: "Bananer", kategori: "Frukt och grönt", ordning: 14 }, { namn: "Sparris", kategori: "Frukt och grönt", ordning: 15 }, { namn: "Champinjoner", kategori: "Frukt och grönt", ordning: 16 },
    { namn: "Majskolv", kategori: "Frukt och grönt", ordning: 17 }, { namn: "Gurka", kategori: "Frukt och grönt", ordning: 18 }, { namn: "Tomater", kategori: "Frukt och grönt", ordning: 19 },
    { namn: "Advocado", kategori: "Frukt och grönt", ordning: 20 }, { namn: "Mariekex", kategori: "Kex och kakor", ordning: 21 }, { namn: "Digistivekex", kategori: "Kex och kakor", ordning: 22 },
    { namn: "FinnCrisp", kategori: "Kex och kakor", ordning: 23 }, { namn: "Inlagda oliver", kategori: "Tilltugg", ordning: 24 }, { namn: "Pizzakit", kategori: "Pizza", ordning: 25 },
    { namn: "Bea sås", kategori: "Såser", ordning: 26 }, { namn: "Rödvin sås", kategori: "Såser", ordning: 27 }, { namn: "Lax sås", kategori: "Såser", ordning: 28 },
    { namn: "Kycklingröra", kategori: "Pålägg", ordning: 29 }, { namn: "Prinskorv", kategori: "Kött", ordning: 30 }, { namn: "Korv", kategori: "Kött", ordning: 31 },
    { namn: "Falukorv", kategori: "Kött", ordning: 32 }, { namn: "Leverpastej", kategori: "Pålägg", ordning: 33 }, { namn: "Skinka", kategori: "Pålägg", ordning: 34 },
    { namn: "Babybell ost", kategori: "Tilltugg", ordning: 35 }, { namn: "Ryggbiff", kategori: "Kött", ordning: 36 }, { namn: "Lövbiff", kategori: "Kött", ordning: 37 },
    { namn: "Köttfärs", kategori: "Kött", ordning: 38 }, { namn: "Kassler", kategori: "Kött", ordning: 39 },{ namn: "Apelsinjuice", kategori: "Dryck", ordning: 40 },
    { namn: "Äppeljuice", kategori: "Dryck", ordning: 41 }, { namn: "Bärry", kategori: "Mellanmål", ordning: 42 }, { namn: "Kvarg", kategori: "Mellanmål", ordning: 43 },
    { namn: "Yoghurt", kategori: "Mellanmål", ordning: 44 }, { namn: "Creme fraice", kategori: "Mejeri", ordning: 45 }, { namn: "Gräddfil", kategori: "Mejeri", ordning: 46 },
    { namn: "Matlagningsgrädde", kategori: "Mejeri", ordning: 48 }, { namn: "Spraygrädde", kategori: "Mejeri", ordning: 49 }, { namn: "Ägg", kategori: "Fågel", ordning: 50 },
    { namn: "Bregott", kategori: "Mejeri", ordning: 51 }, { namn: "Steksmör", kategori: "Mejeri", ordning: 52 }, { namn: "Taco-bröd", kategori: "Tacos", ordning: 53 },
    { namn: "Taco-krydda", kategori: "Tacos", ordning: 54 }, { namn: "Taco-sås", kategori: "Tacos", ordning: 55 }, { namn: "Taco-chips", kategori: "Tacos", ordning: 56 },
    { namn: "Oliver", kategori: "Tilltugg", ordning: 57 }, { namn: "Salt", kategori: "Kryddor", ordning: 58 }, { namn: "Peppar", kategori: "Kryddor", ordning: 59 },
    { namn: "Köttbuljong", kategori: "Kryddor", ordning: 60 }, { namn: "Russin", kategori: "Mellanmål", ordning: 61 }, { namn: "Nutella", kategori: "Mellanmål", ordning: 62 },
    { namn: "Pulver-bea", kategori: "Såser", ordning: 64 }, { namn: "Pulver-hollandaise", kategori: "Såser", ordning: 65 }, { namn: "Olivolja", kategori: "Skafferi", ordning: 66 },
    { namn: "Majs", kategori: "Skafferi", ordning: 67 }, { namn: "Ketchup", kategori: "Skafferi", ordning: 68 }, { namn: "Senap", kategori: "Skafferi", ordning: 69 },
    { namn: "Tomatpuré", kategori: "Skafferi", ordning: 70 }, { namn: "Krossade tomater", kategori: "Skafferi", ordning: 71 }, { namn: "Ris", kategori: "Skafferi", ordning: 72 },
    { namn: "Matvete", kategori: "Skafferi", ordning: 73 }, { namn: "Nudlar", kategori: "Skafferi", ordning: 74 }, { namn: "Spaghetti", kategori: "Skafferi", ordning: 75 },
    { namn: "Makaroner", kategori: "Skafferi", ordning: 76 }, { namn: "Havregryn", kategori: "Skafferi", ordning: 77 }, { namn: "Kaffe", kategori: "Skafferi", ordning: 78 },
    { namn: "Toapapper", kategori: "Hygien", ordning: 79 }, { namn: "Hushållspapper", kategori: "Hygien", ordning: 80 }, { namn: "Diskmedel", kategori: "Rengöring", ordning: 81 },
    { namn: "Tvättmedel", kategori: "Rengöring", ordning: 82 }, { namn: "Toa-rengöring", kategori: "Rengöring", ordning: 83 }, { namn: "Toa-stavar", kategori: "Rengöring", ordning: 84 },
    { namn: "Coca Cola", kategori: "Dryck", ordning: 85 }, { namn: "Cashewnötter", kategori: "Tilltugg", ordning: 86 }, { namn: "Öl", kategori: "Dryck", ordning: 87 },
    { namn: "Soppåsar", kategori: "Förbrukningsvara", ordning: 82}, { namn: "Plastpåsar", kategori: "Förbrukningsvara", ordning: 82 }, { namn: "Aluminiumfolie", kategori: "Förbrukningsvara", ordning: 82 },
    { namn: "Bakplåtspapper", kategori: "Förbrukningsvara", ordning: 82}, { namn: "Ärtor", kategori: "Frysvaror", ordning: 88 }, { namn: "Herrgårdsgrönsaker", kategori: "Frysvaror", ordning: 88 },
    { namn: "Broccoli", kategori: "Frysvaror", ordning: 88 }, { namn: "Kycklingfilé", kategori: "Frysvaror", ordning: 89 }, { namn: "Kycklingkebab", kategori: "Frysvaror", ordning: 89 },
    { namn: "Laxfilé", kategori: "Frysvaror", ordning: 90}, { namn: "Torskrygg", kategori: "Frysvaror", ordning: 90 }, { namn: "Panerad torsk", kategori: "Frysvaror", ordning: 90 },
    { namn: "Fish nuggets", kategori: "Frysvaror", ordning: 90 }, { namn: "Fiskpinnar", kategori: "Frysvaror", ordning: 90 }, { namn: "Potatiskrocketter", kategori: "Frysvaror", ordning: 91 },
    { namn: "Pommes", kategori: "Frysvaror", ordning: 91 }, { namn: "Potatisbullar", kategori: "Frysvaror", ordning: 91 }, { namn: "Köttbullar", kategori: "Frysvaror", ordning: 92 },
    { namn: "Högrevsburgare", kategori: "Frysvaror", ordning: 93 }, {namn: "Fryspizza", kategori: "Frysvaror", ordning: 94 }, { namn: "Frysta kanelbullar", kategori: "Frysvaror", ordning: 95 },
    { namn: "Kladdkaka", kategori: "Frysvaror", ordning: 95 }, { namn: "Lättdryck", kategori: "Dryck", ordning: 96 }, { namn: "Tvål", kategori: "Hygien", ordning: 97 },
    { namn: "Schampoo", kategori: "Hygien", ordning: 97 }, { namn: "Balsam", kategori: "Hygien", ordning: 97 }, {namn: "Hårinpackning", kategori: "Hygien", ordning: 97 },
    { namn: "Kexchoklad", kategori: "Godis", ordning: 98 }, { namn: "Gott & blandat", kategori: "Godis", ordning: 98 }, { namn: "Piggelin", kategori: "Glass", ordning: 99 },
    { namn: "Strösselglass", kategori: "Glass", ordning: 99 },{ namn: "Halstabletter", kategori: "Godis", ordning: 100 }, { namn: "Salladskyckling", kategori: "Frysvaror", ordning: 89 },
    { namn: "Hamburgare", kategori: "Kött", ordning: 93 }, { namn: "Hamburgebröd", kategori: "Bageri", ordning: 2 }, { namn: "Ströbröd", kategori: "Skafferi", ordning: 72 },
    { namn: "Mjölk", kategori: "Dryck", ordning: 47 },{ namn: "Actimel", kategori: "Dryck", ordning: 42 },
];
const basVaror = [
    { namn: "Mjölk", mängd: 3, enhet: "pkt" },
    { namn: "Rostbröd", mängd: 1, enhet: "pkt" },
    { namn: "Röda äpplen", mängd: 5, enhet: "st" },
    { namn: "Gröna äpplen", mängd: 4, enhet: "st" },
    { namn: "Bananer", mängd: 5, enhet: "st" },
    { namn: "Gurka", mängd: 1, enhet: "st" },
    { namn: "Bärry", mängd: 5, enhet: "st" },
    { namn: "Kvarg", mängd: 3, enhet: "st" },
    { namn: "Kaffe", mängd: 1, enhet: "st" },
    { namn: "Coca cola", mängd: 1, enhet: "pkt" },
    { namn: "Halstabletter", mängd: 1, enhet: "st" },
    { namn: "Ägg", mängd: 4, enhet: "st" },
]
const matlista = [
    {
        id: 1,
        namn: "Spaghetti och köttfärssås",
        ingredients: [
            { namn: "Spaghetti", mängd: 350, enhet: "g" },
            { namn: "Köttfärs", mängd: 1000, enhet: "g" },
            { namn: "Krossade tomater", mängd: 2, enhet: "st" },
            { namn: "Oliver", mängd: 1, enhet: "st" },
            { namn: "Köttbuljong", mängd: 2, enhet: "st" },
            { namn: "Gullök", mängd: 1, enhet: "st"}],
        isHelgmat: true,

    },
    {
        id: 2,
        namn: "Lax och Potatis",
        ingredients: [
            { namn: "Laxfilé", mängd: 500, enhet: "g" },
            { namn: "Potatis", mängd: 500, enhet: "g" },
            { namn: "Ärtor", mängd: 200, enhet: "g" }],
        isHelgmat: false,
    },
    {
        id: 3,
        namn: "Tacos",
        ingredients: [
            { namn: "Köttfärs", mängd: 500, enhet: "g" },
            { namn: "Taco-krydda", mängd: 2, enhet: "st" },
            { namn: "Taco-sås", mängd: 1, enhet: "st" },
            { namn: "Creme fraice", mängd: 1, enhet: "st" },
            { namn: "Taco-chips", mängd: 1, enhet: "st" },
            { namn: "Taco-bröd", mängd: 1, enhet: "st" }],
        isHelgmat: true,
    },
    {
        id: 4,
        namn: "Prinskorv och Makaroner",
        ingredients: [
            { namn: "Prinskorv", mängd: 1, enhet: "pkt" },
            { namn: "Makaroner", mängd: 350, enhet: "g" }],
        isHelgmat: false,
    },
    {
        id: 5,
        namn: "Fish N Chips",
        ingredients: [
            { namn: "Panerad torsk", mängd: 1, enhet: "pkt" },
            { namn: "Pommes", mängd: 1, enhet: "st" }],
        isHelgmat: false,
    },
    {
        id: 6,
        namn: "Hamburgare med bröd",
        ingredients: [
            { namn: "Hamburgare", mängd: 1, enhet: "pkt" },
            { namn: "Hamburgebröd", mängd: 1, enhet: "pkt" }],
        isHelgmat: false,
    },
    {
        id: 7,
        namn: "Kyckling kebab och Ris",
        ingredients: [
            { namn: "Kycklingkebab", mängd: 1, enhet: "st" },
            { namn: "Ris", mängd: 300, enhet: "g" }],
        isHelgmat: true,
    },
    {
        id: 8,
        namn: "Lövbiff och Potatis",
        ingredients: [
            { namn: "Lövbiff", mängd: 700, enhet: "g" },
            { namn: "Potatis", mängd: 400, enhet: "g" },
            { namn: "Rödvin sås", mängd: 1, enhet: "st" }],
        isHelgmat: true,
    },
    {
        id: 9,
        namn: "Köttbullar och Makaroner",
        ingredients: [
            { namn: "Köttbullar", mängd: 500, enhet: "g" },
            { namn: "Makaroner", mängd: 350, enhet: "g" }],
        isHelgmat: false,
    },
    {
        id: 10,
        namn: "Kycklingsallad",
        ingredients: [
            { namn: "Salladskyckling", mängd: 1, enhet: "pkt" },
            { namn: "Makaroner", mängd: 350, enhet: "g" }],
        isHelgmat: false,
    },
    {
        id: 11,
        namn: "Köttfärsbiff och Potatis",
        ingredients: [
            { namn: "köttfärs", mängd: 1000, enhet: "g" },
            { namn: "Ägg", mängd: 2, enhet: "st" },
            { namn: "Gullök", mängd: 1, enhet: "st" },
            { namn: "Ströbröd", mängd: 2, enhet: "dl" },
            { namn: "Potatis", mängd: 500, enhet: "g" }],
        isHelgmat: true,
    }
];
const helgMat = matlista.filter((rätt) => rätt.isHelgmat).map((rätt) => rätt.namn); // plockar rätters namn som har isHelgMat och gör till array
const vardagsMat = matlista.filter((rätt) => !rätt.isHelgmat).map((rätt) => rätt.namn);



const genereraMatLista = () => {
    matListaContainer.innerHTML = "";
    const vardagsRätter = [...vardagsMat].sort(() => Math.random() - 0.5).splice(0, 5);
    const helgdagsRätter = [...helgMat].sort(() => Math.random() - 0.5).splice(0, 2);

    const allaRätter = [...vardagsRätter, ...helgdagsRätter];

    allaRätter.forEach((rätt, index) => {
        matListaContainer.innerHTML += `<p>${veckoDagar[index]}: ${rätt}</p>`
    });
    genereraInköpsLista(allaRätter);
};

const genereraInköpsLista = (valdaRätter) => {
    inköpsLista.innerHTML = "";
    let inköpsObjekt = {};
    valdaRätter.forEach((valdRätt) => {
        const rätt = matlista.find(rätt => rätt.namn.toLowerCase() === valdRätt.toLowerCase());

        if (rätt) {
            rätt.ingredients.forEach((ingredient) => {
                const matVara = matVaror.find(matvara => matvara.namn.toLowerCase() === ingredient.namn.toLowerCase() );

                if (matVara) {

                    if (inköpsObjekt[matVara.namn]) {
                        inköpsObjekt[matVara.namn].mängd += ingredient.mängd;
                    }else {
                        inköpsObjekt[matVara.namn] = {
                            namn: matVara.namn,
                            mängd: ingredient.mängd,
                            enhet: ingredient.enhet    || "",
                        }
                    }
                } else {
                    console.error(`Ingrediensen "${ingredient.namn}" hittades inte i matVarorlistan`);
                }

            })

        } else {
            console.error(`Rätten "${valdRätt}" hittades inte i matlista`);
        }
    });

    basVaror.forEach((basVara) => {
        if (inköpsObjekt[basVara.namn]) {
            inköpsObjekt[basVara.namn].mängd += (basVara.mängd);
        } else {
            inköpsObjekt[basVara.namn] = { ...basVara, mängd: Number(basVara.mängd)};
        }
    })
    const orderMap ={};
    matVaror.forEach((item) => {
        orderMap[item.namn] = item.ordning;
    })
    console.log(orderMap)
        const sorteradeIngredienser = Object.values(inköpsObjekt).sort((a, b) => {
            return (orderMap[a.namn] || 999) - (orderMap[b.namn] || 999);
        });



    sorteradeIngredienser.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.namn}: ${item.mängd} ${item.enhet}`;
        inköpsLista.append(li)
    })
};



generateBtn.addEventListener("click", () => {
    genereraMatLista();

})
rensaBtn.addEventListener("click", () => {
    matListaContainer.innerHTML = "";
    inköpsLista.innerHTML = "";
    inköpsObjekt = {};
})