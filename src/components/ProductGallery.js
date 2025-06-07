import './ProductGallery.css';
import Slider from './Slider'

const sliderData = [
  [
    { src: 'images/store_operating_licenses/licensing_1.jpg', alt: "Το Σπήλαιο", label:'Άδεια λειτουργίας Επιχείρησης Μαζικής Εστίασης & Αναψυχής - Πυρασφάλεια - Μελέτη & Επίβλεψη Εργασιών.' },
    { src: 'images/store_operating_licenses/licensing_2.jpg', alt: "Εστιατόριο στην περιοχή του Αγίου Σουλά", label:'Πλήρη παρακολούθηση των εργασιών ανακαίνισης' },
    { src: 'images/store_operating_licenses/licensing_3.jpg', alt: "CoffeBox", label:'Αδειοδότηση του καταστήματος' },
    { src: 'images/store_operating_licenses/licensing_4.jpg', alt: "ZipLine Rhodes", label:'Αδειοδότηση του καταστήματος' },
    { src: 'images/store_operating_licenses/licensing_5.jpg', alt: "Oki · Asian Cuisine", label:'Αδειοδότηση του καταστήματος' },
    { src: 'images/store_operating_licenses/licensing_6.jpg', alt: "Mr. Crepyto", label:'Αδειοδότηση του καταστήματος' },
    // { src: 'images/store_operating_licenses/licensing_7.jpg', alt: "Ισόγειας Οικοδομής", label:'Αδειοδότηση' },
    { src: 'images/store_operating_licenses/licensing_8.jpg', alt: "BarberShop", label:'Αδειοδότηση του καταστήματος' },
    { src: 'images/store_operating_licenses/licensing_9.jpg', alt: "Street Barbers", label:'Αδειοδότηση του καταστήματος' },
    { src: 'images/store_operating_licenses/licensing_10.jpg', alt: "Εστιατόριο OLIO Pizza & Pasta", label:'Αδειοδότηση του καταστήματος' },
    { src: 'images/store_operating_licenses/licensing_11.jpg', alt: "ΝΕΩΝ Street Food", label:'Αδειοδότηση του καταστήματος' },
    { src: 'images/store_operating_licenses/licensing_12.jpg', alt: "BarberShop by V&M LIBERIS", label:'Αδειοδότηση του καταστήματος' },
    { src: 'images/store_operating_licenses/licensing_13.jpg', alt: "Καντίνα στις πήγες της Καλλιθέας", label:'Αδειοδότηση του καταστήματος' },
    { src: 'images/store_operating_licenses/licensing_14.jpg', alt: "Το Μαγειρίο του Θολάρου", label:'Αδειοδότηση του καταστήματος' },
    { src: 'images/store_operating_licenses/licensing_15.jpg', alt: "IceRolls", label:'Αδειοδότηση του καταστήματος' },
    { src: 'images/store_operating_licenses/licensing_16.jpg', alt: "Domino's Pizza", label:'Αδειοδότηση του καταστήματος' },
    { src: 'images/store_operating_licenses/licensing_17.jpg', alt: "Thai Restaurant LOTUS", label:'Αδειοδότηση του καταστήματος' }
  ],
  [
    { src: 'images/autoCADVisualization/autoCADVisualization_1.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_2.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_3.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_4.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_5.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_6.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_7.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_8.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_9.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_10.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_11.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_12.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_13.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_14.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_15.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_16.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_17.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_18.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_19.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_20.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_22.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_23.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_24.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_25.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_26.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_27.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_28.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_29.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_30.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_31.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_32.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_33.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_34.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_35.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_36.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_37.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_38.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_39.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_40.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_41.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_42.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_43.jpg', alt: "Ground Plan", },
    { src: 'images/autoCADVisualization/autoCADVisualization_44.jpg', alt: "Ground Plan", },

  ],
    [
    { src: 'images/EnergyUpgrade/EnergyUpgrade_1.jpg', alt: "Energy Upgrade" },
    { src: 'images/EnergyUpgrade/EnergyUpgrade_2.jpg', alt: "Energy Upgrade" },
    { src: 'images/EnergyUpgrade/EnergyUpgrade_3.jpg', alt: "Energy Upgrade" },
    { src: 'images/EnergyUpgrade/EnergyUpgrade_4.jpg', alt: "Energy Upgrade" },
    { src: 'images/EnergyUpgrade/EnergyUpgrade_5.jpg', alt: "Energy Upgrade" },
    { src: 'images/EnergyUpgrade/EnergyUpgrade_6.jpg', alt: "Energy Upgrade" },
    { src: 'images/EnergyUpgrade/EnergyUpgrade_7.jpg', alt: "Energy Upgrade" },
    { src: 'images/EnergyUpgrade/EnergyUpgrade_8.jpg', alt: "Energy Upgrade" },
    { src: 'images/EnergyUpgrade/EnergyUpgrade_9.jpg', alt: "Energy Upgrade" },
    { src: 'images/EnergyUpgrade/EnergyUpgrade_10.jpg', alt: "Energy Upgrade" },
    { src: 'images/EnergyUpgrade/EnergyUpgrade_11.jpg', alt: "Energy Upgrade" },
    { src: 'images/EnergyUpgrade/EnergyUpgrade_12.jpg', alt: "Energy Upgrade" },
    { src: 'images/EnergyUpgrade/EnergyUpgrade_13.jpg', alt: "Energy Upgrade" },
  ],
];

function ProductGallery() {
  return (
    <div className='cards'> 
      <h1>Licensing</h1>
      <Slider images={sliderData[0]} />
      <h1>Building Plans</h1>
      <Slider images={sliderData[1]} />
      <h1>Energy Upgrade</h1>
      <Slider images={sliderData[2]} />

      {/* <h2>building_permits</h2>
      <Slider images={sliderData[1]} /> */}


    </div>
  )
}

export default ProductGallery
