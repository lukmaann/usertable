import Chance from "chance";

const chance=Chance()
const fakename=()=>{
    return chance.name({ nationality: 'en' })
}

export default fakename;