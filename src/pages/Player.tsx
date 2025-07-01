
import PlayerCard from '../components/PlayerCard'

// Image imports (make sure these exist in ../assets/img/)
import Max from '../assets/img/maxverste.webp'
import Leclerc from '../assets/img/leclerc.webp'
import Hamilton from '../assets/img/hamilton.webp'
import Norris from '../assets/img/norris.webp'
import Russell from '../assets/img/russell.webp'
import Piastri from '../assets/img/piastri.webp'
import Sainz from '../assets/img/sainz.webp'
import Alonso from '../assets/img/alonso.webp'
import Perez from '../assets/img/perez.webp'
import Albon from '../assets/img/albon.webp'

const Player = () => {
  return (
    <div className='bg-gray-200 pb-10'>
      <div className='flex flex-wrap gap-5 justify-center p-4 '>

        <PlayerCard
          img={Max}
          name="Max Verstappen"
          title="3× World Champion"
          age={27}
          team="Red Bull Racing"
          Car="RB20"
          jersey={1}
          bio="Dutch driver known for dominant, aggressive style. Red Bull's superstar and F1's top driver of the early 2020s."
          partner="Kelly Piquet"
        />

        <PlayerCard
          img={Leclerc}
          name="Charles Leclerc"
          title="Multiple GP Winner"
          age={27}
          team="Scuderia Ferrari"
          Car="SF-25"
          jersey={16}
          bio="Monegasque driver famous for raw pace and poles. Ferrari's leader, chasing his first title."
          partner="Alexandra Saint Mleux"
        />

        <PlayerCard
          img={Hamilton}
          name="Lewis Hamilton"
          title="7× World Champion"
          age={40}
          team="Scuderia Ferrari"
          Car="SF-25"
          jersey={44}
          bio="British legend tied for most championships in history. Joined Ferrari for 2025."
          partner="Single"
        />

        <PlayerCard
          img={Norris}
          name="Lando Norris"
          title="Multiple Podiums"
          age={25}
          team="McLaren F1 Team"
          Car="MCL39"
          jersey={4}
          bio="British driver with big fan following. Fast, consistent, and known for his humour."
          partner="Single"
        />

        <PlayerCard
          img={Russell}
          name="George Russell"
          title="Brazil 2022 GP Winner"
          age={27}
          team="Mercedes-AMG PETRONAS"
          Car="W15"
          jersey={63}
          bio="Calm, analytical British driver. Mercedes' big hope for the future."
          partner="Carmen Montero Mundt"
        />

        <PlayerCard
          img={Piastri}
          name="Oscar Piastri"
          title="2021 F2 Champion"
          age={24}
          team="McLaren F1 Team"
          Car="MCL39"
          jersey={81}
          bio="Australian prodigy. Calm under pressure, tipped as a future champion."
          partner="Private"
        />

        <PlayerCard
          img={Sainz}
          name="Carlos Sainz Jr."
          title="Singapore 2023 GP Winner"
          age={30}
          team="Audi F1 Team"
          Car="Audi F1 Car 2025"
          jersey={55}
          bio="Spanish driver known for consistency. Leads Audi's new F1 project."
          partner="Rebecca Donaldson"
        />

        <PlayerCard
          img={Alonso}
          name="Fernando Alonso"
          title="2× World Champion"
          age={43}
          team="Aston Martin Aramco"
          Car="AMR25"
          jersey={14}
          bio="Legendary Spaniard still competitive in his 40s. Key to Aston Martin's rise."
          partner="Andrea Schlager"
        />

        <PlayerCard
          img={Perez}
          name="Sergio Pérez"
          title="Multiple GP Wins"
          age={35}
          team="TBD (2025)"
          Car="TBD"
          jersey={11}
          bio="Mexican ace known for tire management and race-day comebacks. Uncertain seat in 2025."
          partner="Carola Martínez"
        />

        <PlayerCard
          img={Albon}
          name="Alex Albon"
          title="Rising Star"
          age={29}
          team="Williams Racing"
          Car="FW47"
          jersey={23}
          bio="Thai-British driver leading Williams' return to competitiveness."
          partner="Lily He"
        />

      </div>
    </div>
  )
}

export default Player
