import {
  IonContent,
  IonList,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonAvatar,
  IonNote,
  IonListHeader
  
} from "@ionic/react";

import { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { refresh } from "ionicons/icons";
import { chevronDownCircleOutline } from "ionicons/icons";
import { chevronUpCircleOutline } from "ionicons/icons";
const Tab1: React.FC = () => {
  const [round, setRound] = useState(1);
  const [energy, setEnergy] = useState(3);
  let [dataEnergy, setArray] = useState([3]);
  let [dataRound, setRArray] = useState([1]);
  let [data, setData] = useState([{ Round: 1, Energy: 3 }]);
  let [logs,setUpLog]=useState(true)
  let [logbuttondown,setDownLog]=useState(false)
  
  let energy_add_button = false;
  let energy_min_button = false;
  let rounds = round;
  
  //let logbutton = false
  let hidelog = true

  if (energy >= 10) {
    energy_add_button = true;
  } else if (energy == 0) {
    energy_min_button = true;
  }
    const nextRound=()=> {
    //pushing enegry
    if (round > 1) {
      setArray((dataEnergy) => [energy, ...dataEnergy]);
      setRArray((dataRound) => [round, ...dataRound]);
      setData((data) => [{ Round: round, Energy: energy }, ...data]);
    }
    if (energy + 2 <= 10) {
      setEnergy(energy + 2);
    } else if (energy + 2 > 10) {
      let temp = 10 - energy;
      setEnergy(energy + temp);
    }
    setRound(round + 1);
    console.log(data);
    setUpLog(false)
  }

  const reset= ()=> {
    setRound(1);
    setEnergy(3);
    setData((data) => [{ Round: 1, Energy: 3, ...data }]);
    setUpLog(true)
    console.log(dataEnergy.length);
  }

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Energy Counter</IonTitle>
          <IonButton
            size="small"
            shape="round"
            fill="outline"
            slot="end"
            onClick={() => reset()}
          >
            <IonIcon icon={refresh} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Energy Counter</IonTitle>
          </IonToolbar>
        </IonHeader>
      
       

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Energy:{energy}</IonCardTitle>
            <IonCardSubtitle>Round: {round}</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonButton
              disabled={energy_add_button}
              shape="round"
              expand="block"
              color="success"
              onClick={() => setEnergy(energy + 1)}
            >
              Plus
            </IonButton>
            <IonButton
              disabled={energy_min_button}
              shape="round"
              expand="block"
              color="danger"
              onClick={() => setEnergy(energy - 1)}
              
            >
              Minus
            </IonButton>
          </IonCardContent>

          <IonCardContent>
            <IonButton
              shape="round"
              fill="outline"
              color="success"
              onClick={() => nextRound()}
            >
              Next Round
            </IonButton>
          </IonCardContent>
        </IonCard>


        <IonListHeader hidden = {logs}> Logs </IonListHeader>
        <IonCard hidden= {logs}>
          <IonList>
            {" "}
            {data.map((data, key) => {
              let x = 0;
              if (round == 1) {
                return "";
              }
              return (
                
                <li key={key}>
                  <IonList>
                    {" "}
                    <IonItem>
                      <IonLabel>Round: <IonNote slot="end" color="primary">{data.Round}</IonNote></IonLabel>
                      <IonLabel>Energy: <IonNote slot="end" color="primary">{data.Energy}</IonNote></IonLabel>                  
                    </IonItem>
                    
                    
                  
                  </IonList>{" "}
                </li>
              );
            })}{" "}
          </IonList>
        </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default Tab1;
