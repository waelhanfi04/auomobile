
export class Car {
  id:number
  title:string
  availablity:string
  phone:string
  city:string
  brand:string
  model:string
  price:string
  color:string
  carrosserie:string
  guarantee:string
  month:string
  year:string
  category:string
  pictures:any
  address:string
  motorization:string
  mileage:string
  energy:string
  transmission:string
  powerFiscal:string
  gearbox:string
  description:string
  seatingCapacity:string
  numberDoors:string
  insideEquipment:any
  outsideEquipment:any
  securityEquipment:any
  
  constructor(data: any) {
    this.id=data?.id
    this.title=data?.title
    this.availablity=data?.availablity
    this.phone=data?.phone
    this.city=data?.city
    this.brand=data?.brand
    this.model=data?.model
    this.price=data?.price
    this.color=data?.color
    this.carrosserie=data?.carrosserie
    this.guarantee=data?.guarantee
    this.month=data?.month
    this.year=data?.year
    this.category=data?.category
    this.pictures=data?.pictures || data?.pictureVoitures
    this.address=data?.address
    this.motorization=data?.motorization
    this.mileage=data?.mileage
    this.energy=data?.energy
    this.transmission=data?.transmission
    this.powerFiscal=data?.powerFiscal
    this.gearbox=data?.gearbox
    this.description=data?.description
    this.seatingCapacity=data?.seatingCapacity
    this.numberDoors=data?.numberDoors
    this.insideEquipment=data?.insideEquipment || data?.insideEquipmentVoiture
    this.outsideEquipment=data?.outsideEquipment || data?.outsideEquipmentVoiture
    this.securityEquipment=data?.securityEquipment || data?.securityEquipmentVoiture
  }
}