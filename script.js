// // Function to download the CV as a PDF
// function telechargerCV() {
//     // Sélectionnez la partie du CV à convertir (évite d'inclure le bouton de téléchargement)
//     const element = document.getElementById('cv');
    
//     // Options du PDF
//     const opt = {
//         margin: [5, 5, 5, 5], 
//         filename: 'CV_Cheickna_Hamala.pdf',
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { 
//             scale: 1, // Améliore la qualité
//             useCORS: true, // Permet le chargement des images externes
//             logging: true, // Désactive les lo gs pour plus de rapidité
//             scrollX:0,
//             scrollY:50,
//         },
//         jsPDF: { 
//             unit: 'mm', 
//             format: 'a4', 
//             // orientation: 'portrait' 
//         }
//     };

//     // Générer et télécharger le PDF
//     html2pdf().set(opt).from(element).save();
// }

let mon_btn =
document.getElementById('mon_btn');
mon_btn.addEventListener('click',function () {
    
    let simp = 
    document.getElementById('cv')
    html2pdf().from(simp).save('mon_cv.pdf')
})


// change coulaure
let themes = ['theme-bleu', 'theme-vert', 'theme-rouge'];
let themeIndex = 0;

function changerTheme() {
    const cv = document.querySelector('.cv-contener');
    
    // Retire tous les anciens thèmes
    themes.forEach(t => cv.classList.remove(t));
    
    // Applique le prochain thème
    const nouveauTheme = themes[themeIndex];
    cv.classList.add(nouveauTheme);
    
    // Passe au thème suivant
    themeIndex = (themeIndex + 1) % themes.length;
}
