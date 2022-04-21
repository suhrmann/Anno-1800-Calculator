import { factories } from '../../data/anno1800params.js'
import icons  from '../../data/anno1800icons.js' 
import { Main } from 'electron';

class Factory {
    id: number;
    productionTime: number
    iconPath?: string;
    maintenanceReq: Maintenance;
    buildCost: BuildCost
    inputs: Array<Factory>
    isRootFactory: boolean
    minimumProductionTimeOfChain: number = -1 //always -1 if not a root factory
    minimumFactoryCount: number = 0


    constructor(factoryID: number, isRoot: boolean = true) {
        // get raw data
        const factoryInfo = factories.find((annoFactory: any) => annoFactory.guid === factoryID)
        const buildingIcons = [...icons.products.data, ...icons.factories.data]

        // assign attributes
        this.id = factoryID
        this.productionTime = factoryInfo?.tpmin ?? 1000;
        this.iconPath = buildingIcons.find((buildingIcon: any) => buildingIcon.guid === factoryID)?.iconPath
        this.maintenanceReq = new Maintenance()
        this.buildCost = new BuildCost()
        this.inputs = []
        this.isRootFactory = isRoot

        // fill maintenanceReq object
        factoryInfo?.maintenances.forEach(maintenanceObject => {
            this.maintenanceReq.addByID(maintenanceObject.Product, maintenanceObject.Amount)
        })

        // fill buildCost object
        // DATA MISSING!
        /* factoryInfo?.buildCost.forEach(buildCostObject => {
            this.buildCost.addByID(buildCostObject.Product, buildCostObject.Amount)
        }) */

        // recursive factory walk
        // walks all possible inputs, even those on another region and creates a Factory object for it.
        // since we do this in the constructor, this operation also happens on every created input.
        factoryInfo?.inputs?.forEach(input => {
            const precursors: Array<any> = factories.filter(annoFactory => annoFactory.outputs[0].Product === input.Product)
            precursors.forEach(precursor => {
                this.inputs.push(new Factory(precursor.guid, false))
            });
        })

        if (this.isRootFactory) {
            this.minimumProductionTimeOfChain = this.calculateMinimumProductionTime()
            this.calculateMinimumFactoryCount()
            this.calculateChainBuildCost()
            this.calculateChainMaintenance()
         } 
        
    }

    /**
     * Sums up the maintenance Objects of all Factories
     *
     * @return {Maintenance} A Maintenance Object containing all Maintenance workforce information
     */
    calculateChainMaintenance(): Maintenance {
        if (!this.isRootFactory) throw Error("This is no root factory")
        return new Maintenance()
    }

    _recursiveMaintenanceWalk(rootMaintenance: Maintenance)  {}

    /**
     * Sums up the maintenance Objects of all Factories
     *
     * @return {Maintenance} A Maintenance Object containing all Maintenance workforce information
     */
    calculateChainBuildCost(): BuildCost {
        if (!this.isRootFactory) throw Error("This is no root factory")
        return new BuildCost()
    }

    _recursiveBuildCostWalk(rootBuildCost: BuildCost)  {}

    calculateMinimumProductionTime(): number {
        if (!this.isRootFactory) throw Error("This is no root factory")
        return 0
    }

    _recursiveProductionTimeWalk(curentMinimum: number): number  {
        return 0
    }

    calculateMinimumFactoryCount(): void {
        if (!this.isRootFactory) throw Error("This is not the Root Factory")
        // how many factories are needed at least to build an efficient chain
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

    add(other: Maintenance): void {
        this.gold += other.gold
        this.farmers += other.farmers
        this.workers += other.workers
        this.artisans += other.artisans
        this.engineers += other.engineers
        this.scholars += other.scholars
        this.jornaleros += other.jornaleros
        this.obreros = +other.obreros
        this.explorers += other.explorers
        this.technicians += other.technicians
        this.shepherds += other.shepherds
        this.elders += other.elders
        this.errors += other.errors
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

class BuildCost{
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

    add(other: BuildCost): void {
        this.wood += other.wood
        this.bricks += other.bricks
        this.steel += other.steel
        this.windows += other.windows
        this.concrete += other.concrete
        this.wanza += other.wanza
        this.mudbricks += other.mudbricks
        this.errors += other.errors        
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
