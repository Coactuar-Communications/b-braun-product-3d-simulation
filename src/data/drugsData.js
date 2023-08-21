const drugsData = [
    {
      category: 'General Ward',
      subcategories: [
        {
          name: 'All Drugs',
          drugs: [
            { name: 'Heparin', mlValue: 10, iuValue: 10000 },
            { name: 'Insulin', mlValue: 5, iuValue: 5000 },
            { name: 'Nutricomp Energy', mlValue: '', iuValue: 'Custom Concentration' },

          ],
        },
        {
          name: 'Drugs 2',
          drugs: [
            { name: 'Heparin', mlValue: 10, iuValue: 10000 },
            { name: 'Insulin', mlValue: 5, iuValue: 5000 },
            { name: 'Nutricomp Energy', mlValue: 5, iuValue: 5000 },

          ],
        },
        {
          name: 'Favourites',
          drugs: [
            { name: 'Insulin', mlValue: 8, iuValue: 10000 },
            { name: 'Drug D', mlValue: 7, iuValue: 7000 },
          ],
        },
        // ... add more subcategories for General Ward
      ],
    },
    {
      category: 'Intensive Care Unit',
      subcategories: [
        {
          name: 'All Drugs',
          drugs: [
            { name: 'ABC', mlValue: 0, iuValue: 0 },
            { name: 'Alfentanil', mlValue: 50, iuValue: 25 },
            { name: 'Atracurium', mlValue: 50, iuValue: 500 },
            { name: 'Clonidine', mlValue: 50, iuValue: 750 },

            { name: 'DEF', mlValue: 0, iuValue: 0 },
            { name: 'Dobutamine', mlValue: 50, iuValue: 250 },
            { name: 'Dopamine', mlValue: 50, iuValue: 200 },
            { name: 'Dopexamine', mlValue: 50, iuValue: 50 },
            { name: 'Epinephrine', mlValue: 50, iuValue: 8 },
            { name: 'Fentanyl', mlValue: 50, iuValue: 2.5 },
            { name: 'Furosemide', mlValue: 50, iuValue: 50 },

            { name: 'GHI', mlValue: 0, iuValue: 0 },
            { name: 'Heparin', mlValue: 40, iuValue: 20000 },
            { name: 'Hydralazine', mlValue: 60, iuValue: 60 },
            { name: 'Insulin', mlValue: 1, iuValue: 1 },
            { name: 'Isoprenaline', mlValue: 500, iuValue: 1 },
   

            { name: 'JKL', mlValue: 0, iuValue: 0 },
            { name: 'Ketamine', mlValue: 50, iuValue: 50 },
            { name: 'Lignocaine 1%', mlValue: 1, iuValue: 10 },
            { name: 'Lignocaine 2%', mlValue: 1, iuValue: 20 },
           
            { name: 'MNO', mlValue: 0, iuValue: 0 },
            { name: 'Midazolam', mlValue: 50, iuValue: 50 },
            { name: 'Midazolam 100 mg/50mls', mlValue: 50, iuValue: 100 },
            { name: 'Milrinone', mlValue: 50, iuValue: 20 },
            { name: 'Milrinone 20mg/50 ml', mlValue: 1, iuValue: 10 },
            { name: 'Morphine', mlValue: 1, iuValue: 20 },
            { name: 'N/Saline', mlValue: 1, iuValue: 10 },
            { name: 'Noradrenaline', mlValue: 1, iuValue: 20 },
            { name: 'Nutricomp Energy', mlValue: 1, iuValue: 20 },


            { name: 'PQRS', mlValue: 0, iuValue: 0 },
            { name: 'Propofol 1%', mlValue: 1, iuValue: 20 },
            { name: 'Remifentanil 100mcg/ml', mlValue: 1, iuValue: 20 },

            { name: 'TUV', mlValue: 0, iuValue: 0 },
            { name: 'Vasopressin', mlValue: 1, iuValue: 20 },
            { name: 'Vecuronium', mlValue: 1, iuValue: 20 },
          
          ],
        },
        {
          name: 'All Drugs 2',
          drugs: [
            { name: 'ABC', mlValue: 0, iuValue: 0 },
            { name: 'Drug X', mlValue: 15, iuValue: 15000 },
            { name: 'Drug Y', mlValue: 8, iuValue: 8000 },
            { name: 'DEF', mlValue: 0, iuValue: 0 },
            { name: 'Drug X', mlValue: 15, iuValue: 15000 },
            { name: 'Drug Y', mlValue: 8, iuValue: 8000 },
            { name: 'GHI', mlValue: 0, iuValue: 0 },
            { name: 'JKL', mlValue: 0, iuValue: 0 },
            { name: 'MNO', mlValue: 0, iuValue: 0 },
            { name: 'PQRS', mlValue: 0, iuValue: 0 },
            { name: 'TUV', mlValue: 0, iuValue: 0 },
          ],
        },
        // ... add more subcategories for ICU
      ],
    },   {
      category: 'Intermediate Care Unit',
      subcategories: [
        {
          name: 'All Drugs',
          drugs: [
            { name: 'ABC', mlValue: 0, iuValue: 0 },
            { name: 'Alfentanil', mlValue: 50, iuValue: 25 },
            { name: 'Atracurium', mlValue: 50, iuValue: 500 },
            { name: 'Clonidine', mlValue: 50, iuValue: 750 },

            { name: 'DEF', mlValue: 0, iuValue: 0 },
            { name: 'Dobutamine', mlValue: 50, iuValue: 250 },
            { name: 'Dopamine', mlValue: 50, iuValue: 200 },
            { name: 'Dopexamine', mlValue: 50, iuValue: 50 },
            { name: 'Epinephrine', mlValue: 50, iuValue: 8 },
            { name: 'Fentanyl', mlValue: 50, iuValue: 2.5 },
            { name: 'Furosemide', mlValue: 50, iuValue: 50 },

            { name: 'GHI', mlValue: 0, iuValue: 0 },
            { name: 'Heparin', mlValue: 40, iuValue: 20000 },
            { name: 'Hydralazine', mlValue: 60, iuValue: 60 },
            { name: 'Insulin', mlValue: 1, iuValue: 1 },
            { name: 'Isoprenaline', mlValue: 500, iuValue: 1 },
   

            { name: 'JKL', mlValue: 0, iuValue: 0 },
            { name: 'Ketamine', mlValue: 50, iuValue: 50 },
            { name: 'Lignocaine 1%', mlValue: 1, iuValue: 10 },
            { name: 'Lignocaine 2%', mlValue: 1, iuValue: 20 },
           
            { name: 'MNO', mlValue: 0, iuValue: 0 },
            { name: 'Midazolam', mlValue: 50, iuValue: 50 },
            { name: 'Midazolam 100 mg/50mls', mlValue: 50, iuValue: 100 },
            { name: 'Milrinone', mlValue: 50, iuValue: 20 },
            { name: 'Milrinone 20mg/50 ml', mlValue: 1, iuValue: 10 },
            { name: 'Morphine', mlValue: 1, iuValue: 20 },
            { name: 'N/Saline', mlValue: 1, iuValue: 10 },
            { name: 'Noradrenaline', mlValue: 1, iuValue: 20 },
            { name: 'Nutricomp Energy', mlValue: 1, iuValue: 20 },


            { name: 'PQRS', mlValue: 0, iuValue: 0 },
            { name: 'Propofol 1%', mlValue: 1, iuValue: 20 },
            { name: 'Remifentanil 100mcg/ml', mlValue: 1, iuValue: 20 },

            { name: 'TUV', mlValue: 0, iuValue: 0 },
            { name: 'Vasopressin', mlValue: 1, iuValue: 20 },
            { name: 'Vecuronium', mlValue: 1, iuValue: 20 },
          
          ],
        },
        {
          name: 'All Drugs 2',
          drugs: [
            { name: 'ABC', mlValue: 0, iuValue: 0 },
            { name: 'Drug X', mlValue: 15, iuValue: 15000 },
            { name: 'Drug Y', mlValue: 8, iuValue: 8000 },
            { name: 'DEF', mlValue: 0, iuValue: 0 },
            { name: 'Drug X', mlValue: 15, iuValue: 15000 },
            { name: 'Drug Y', mlValue: 8, iuValue: 8000 },
            { name: 'GHI', mlValue: 0, iuValue: 0 },
            { name: 'JKL', mlValue: 0, iuValue: 0 },
            { name: 'MNO', mlValue: 0, iuValue: 0 },
            { name: 'PQRS', mlValue: 0, iuValue: 0 },
            { name: 'TUV', mlValue: 0, iuValue: 0 },
          ],
        },
        // ... add more subcategories for ICU
      ],
    },
    // ... add more categories here
  ];
  
  export default drugsData;