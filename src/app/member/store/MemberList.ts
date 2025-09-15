import { create } from "zustand";
  interface TodoInterface{
    id:number;
    nameTH: string;
    nameEN: string;
    heightCm: number;
    age: number;
    imageUrl: string;
    group: string;
  }
  interface memberInterface {
    memberList: TodoInterface[];
  }

  export const useMebers = create<memberInterface>(() =>({

    memberList: [
        { id:1, nameTH: "อลัน พศวีร์ ศรีอรุโณทัย", nameEN: "Alan", heightCm: 185, age: 23 , imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2UgGReenEh3d13Ym82N9ri8LEpQLFZDVyzQ&s" ,group:"BUS"}, 
        { id:2, nameTH: "มาร์ค กฤษณ์ กัญจนาทิพย์", nameEN: "Marckris", heightCm: 172, age: 22 ,imageUrl: "https://cms.dmpcdn.com/dara/2023/06/13/4d3ff9c0-09ab-11ee-a127-f38a6013778b_webp_original.webp",group:"BUS" }, 
        { id:3, nameTH: "ขุนพล ปองพล ปัญญามิตร", nameEN: "Khunpol", heightCm: 179, age: 22 , imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/74/Pongpol_Panyamit.jpg" ,group:"BUS"}, 
        { id:4, nameTH: "ฮาร์ท ชุติวัฒน์ จันเคน", nameEN: "Heart", heightCm: 174, age: 22 ,imageUrl:"https://kprofiles.com/wp-content/uploads/2023/08/HEART_Bus-565x800.jpeg",group:"BUS" }, 
        { id:5, nameTH: "จินวุค คิม", nameEN: "Jinwook", heightCm: 178, age: 21 ,imageUrl:"https://kprofiles.com/wp-content/uploads/2023/08/JINWOOK_Bus-900x636.jpeg",group:"BUS" }, 
        { id:6, nameTH: "ไทย ชญานนท์ ภาคฐิน", nameEN: "Thai", heightCm: 178, age: 20 ,imageUrl:"https://kprofiles.com/wp-content/uploads/2023/08/THAI_Bus-565x800.jpeg",  group:"BUS"}, 
        { id:7, nameTH: "เน็กซ์ ณัฐกิตติ์ แช่มดารา", nameEN: "Nex", heightCm: 180, age: 20 ,imageUrl:"https://kprofiles.com/wp-content/uploads/2023/08/NEX_bus-900x636.jpeg", group:"BUS" }, 
        { id:8, nameTH: "ภู ธัชชัย ลิ้มปัญญากุล", nameEN: "Phu", heightCm: 180, age: 20 ,imageUrl:"https://kprofiles.com/wp-content/uploads/2023/08/PHUTATCHAI_Bus-900x636.jpeg", group:"BUS" }, 
        { id:9, nameTH: "คอปเปอร์ เดชาวัต พรเดชาพิพัฒ", nameEN: "Copper", heightCm: 173, age: 19 ,imageUrl:"https://kprofiles.com/wp-content/uploads/2023/08/COPPER_Bus-900x636.jpeg",  group:"BUS"}, 
        { id:10, nameTH: "เอเอ อชิรกรณ์ สุวิทยะเสถียร", nameEN: "AA", heightCm: 178, age: 19 ,imageUrl:"https://kprofiles.com/wp-content/uploads/2023/08/AA_Bus-565x800.jpeg", group:"BUS" }, 
        { id:11, nameTH: "จั๋ง ธีร์ บุญเสริมสุวงศ์", nameEN: "Jungt", heightCm: 173, age: 19 ,imageUrl:"https://kprofiles.com/wp-content/uploads/2023/08/JUNGT_Bus-565x800.jpeg", group:"BUS" }, 
        { id:12, nameTH: "ภีม วสุพล พรพนานุรักษ์", nameEN: "Peem", heightCm: 187, age: 19 ,imageUrl:"https://kprofiles.com/wp-content/uploads/2023/08/PEEMWASU_Bus-565x800.jpeg", group:"BUS" }
    ]
}));