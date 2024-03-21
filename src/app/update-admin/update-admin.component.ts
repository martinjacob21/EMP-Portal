import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AmdinService } from '../services/amdin.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  @Output() onAdminChange = new EventEmitter()

  adminDetails: any = {}
  editAdminStatus: boolean = false
  profilePicture: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhtFJc9v3hEBfhJiOhYMS_60ieEbiOjPJyxl8F2dIBw&s"

  constructor(private adminAPI: AmdinService,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.adminAPI.getAdminDetails().subscribe((res: any) => {
      this.adminDetails = res
      if (res.profilePicture) {
        this.profilePicture = res.profilePic
      }
    })
  }
  editAdminBtn() {
    this.editAdminStatus = true
  }
  onCancel(){
    this.editAdminStatus=false
  }

  getFile(event:any){
    let file = event.target.files[0]
    let fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = (event:any)=>{
      console.log(event.target.result);
      this.profilePicture = event.target.result
      this.adminDetails.profilePic = event.target.result
      
    }
  }
editAdmin(){
  this.adminAPI.updateAdminAPI(this.adminDetails).subscribe({
    next:(res:any)=>{
      this.editAdminStatus = false
      this.toaster.success("Admin details update successfully....")
      sessionStorage.setItem("adminDetails",JSON.stringify(res))
      this.onAdminChange.emit(res.name)
    },
    error:(reason:any)=>{
      console.log(reason);
      
      this.toaster.warning("Updation failed... Please try after some time !!")
    }
  })
}

}
