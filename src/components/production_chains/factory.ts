import { factories } from '../../data/anno1800params.js'
import icons  from '../../data/anno1800icons.js' 

class Factory {
    id: number;
    productionTime?: number;
    iconPath?: string;
    maintenanceReq: Maintenance;
    buildCost: BuildMaterial
    inputs: Array<Factory>


    constructor(factoryID: number) {
        const buildingIcons = [...icons.products.data, ...icons.factories.data]
        this.id = factoryID
        const factoryInfo = factories.find((annoFactory: any) => annoFactory.guid === factoryID)
        this.productionTime = factoryInfo?.tpmin;
        this.iconPath = buildingIcons.find((buildingIcon: any) => buildingIcon.guid === factoryID)?.iconPath
        this.maintenanceReq = new Maintenance()
        this.buildCost = new BuildMaterial()
        this.inputs = []

        factoryInfo?.maintenances.forEach(maintenanceObject => {
            this.maintenanceReq.addByID(maintenanceObject.Product, maintenanceObject.Amount)
        })

        // recursive factory walk
        // walks all possible factories, even those on another region
        factoryInfo?.inputs?.forEach(input => {
            const precursors: Array<any> = factories.filter(annoFactory => annoFactory.outputs[0].Product === input.Product)
            precursors.forEach(precursor => {
                this.inputs.push(new Factory(precursor.guid))
            });
        })
    }
}

class Maintenance{
    gold: number;
    farmers: number;
    workers: number
    artisans: number
    engineers: number
    scholars: number
    jornaleros: number
    obreros: number
    explorers: number
    technicians: number
    shepherds: number
    elders: number
    errors: number

    constructor() {
        this.gold = 0
        this.farmers = 0
        this.workers = 0
        this.artisans = 0
        this.engineers = 0
        this.scholars = 0
        this.jornaleros = 0
        this.obreros = 0
        this.explorers = 0
        this.technicians = 0
        this.shepherds = 0
        this.elders = 0
        this.errors = 0
    }

    addByID(id: number, amount: number): boolean {
        switch (id) {
            case 1010017:
                this.gold += amount
                return true
                break;
            case 1010052:
                this.farmers += amount
                return true
                break;
            case 1010115:
                this.workers += amount
                return true
                break;        
            case 1010116:
                this.artisans += amount            
                return true    
                break;
            case 1010117:
                this.engineers += amount              
                return true  
                break;
            case 124478:
                this.scholars += amount                
                return true
                break;
            case 1010366:
                this.jornaleros += amount                
                return true
                break;
            case 1010367:
                this.obreros += amount                
                return true
                break;
            case 112653:
                this.explorers += amount                
                return true
                break;
            case 112654:
                this.technicians += amount                
                return true
                break;
            case 114340:
                this.shepherds += amount                
                return true
                break;
            case 114341:
                this.elders += amount                
                return true
                break;
            default:
                this.errors += amount
                return false
                break;
        }
    }
}

class BuildMaterial{
    wood: number
    bricks: number
    steel: number
    windows: number
    concrete: number
    wanza: number
    mudbricks: number
    errors: number


    constructor() {
        this.wood = 0
        this.bricks = 0
        this.steel = 0
        this.windows = 0
        this.concrete = 0
        this.wanza = 0
        this.mudbricks = 0
        this.errors = 0
    }

    addByID(id: number, amount: number): boolean {
        switch (id) {
            case 1010196:
                this.wood += amount
                return true
                break;
            case 1010205:
                this.bricks += amount
                return true
                break;
            case 1010218:
                this.steel += amount
                return true
                break;
            case 1010207:
                this.windows += amount
                return true
                break;
            case 1010202:
                this.concrete += amount
                return true
                break;
            case 114356:
                this.wanza += amount
                return true
                break;
            case 114402:
                this.mudbricks += amount
                return true
                break;            
            default:
                this.errors += amount
                return false
                break;
        }
    }
}
