import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  HttpClient} from '@angular/common/http';
import xml2js from 'xml2js';
import { HttpHeaders } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { SocialSharing } from '@ionic-native/social-sharing';
//import { ItemSliding } from 'ionic-angular';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  bookname:any;
  public s:any;
  public b:any;
  public cno:any;
  public chapternumber:any;
  public booknumber:any;

  //getting bookname step1
  inputone(){
    var b;
    //console.log('b',this.bookname)
    b = this.bookname
    if (this.bookname == '0')
      this.cno = 50;
      this.Genesis();       
    if (this.bookname == '1')
      this.cno = 40;
      this.Genesis();
    if (this.bookname == '2')
      this.cno = 27;
      this.Genesis(); 
    if (this.bookname == '3')
      this.cno = 36;
      this.Genesis();
    if (this.bookname == '4')
      this.cno = 34;
      this.Genesis(); 
    if (this.bookname == '5')
      this.cno = 24;
      this.Genesis(); 
    if (this.bookname == '6')
      this.cno = 21;
      this.Genesis(); 
    if (this.bookname == '7')
      this.cno = 4;
      this.Genesis(); 
    if (this.bookname == '8')
      this.cno = 31;
      this.Genesis(); 
    if (this.bookname == '9')
      this.cno = 24;
      this.Genesis();
    if (this.bookname == '10')
      this.cno = 22;
      this.Genesis(); 
    if (this.bookname == '11')
      this.cno = 25;
      this.Genesis(); 
    if (this.bookname == '12')
      this.cno = 29;
      this.Genesis(); 
    if (this.bookname == '13')
      this.cno = 36;
      this.Genesis();
    if (this.bookname == '14')
      this.cno = 10;
      this.Genesis(); 
    if (this.bookname == '15')
      this.cno = 13;
      this.Genesis(); 
    if (this.bookname == '16')
      this.cno = 10;
      this.Genesis(); 
    if (this.bookname == '17')
      this.cno = 42;
      this.Genesis();       
    if (this.bookname == '18')
      this.cno = 150;
      this.Genesis(); 
    if (this.bookname == '19')
      this.cno = 31;
      this.Genesis(); 
    if (this.bookname == '20')
      this.cno = 12;
      this.Genesis(); 
    if (this.bookname == '21')
      this.cno = 8;
      this.Genesis(); 
    if (this.bookname == '22')
      this.cno = 66;
      this.Genesis(); 
    if (this.bookname == '23')
      this.cno = 52;
      this.Genesis(); 
    if (this.bookname == '24')
      this.cno = 5;
      this.Genesis();
    if (this.bookname == '25')
      this.cno = 48;
      this.Genesis();
    if (this.bookname == '26')
      this.cno = 12;
      this.Genesis();; 
    if (this.bookname == '27')
      this.cno = 14;
      this.Genesis(); 
    if (this.bookname == '28')
      this.cno = 3;
      this.Genesis();
    if (this.bookname == '29')
      this.cno = 9;
      this.Genesis(); 
    if (this.bookname == '30')
      this.cno = 1;
      this.Genesis();
    if (this.bookname == '31')
      this.cno = 4;
      this.Genesis();
    if (this.bookname == '32')
      this.cno = 7;
      this.Genesis(); 
    if (this.bookname == '33')
      this.cno = 3;
      this.Genesis();
    if (this.bookname == '34')
      this.cno = 3;
      this.Genesis();
    if (this.bookname == '35')
      this.cno = 3;
      this.Genesis();
    if (this.bookname == '36')
      this.cno = 2;
      this.Genesis(); 
    if (this.bookname == '37')
      this.cno = 14;
      this.Genesis();
    if (this.bookname == '38')
      this.cno = 4;
      this.Genesis();
    if (this.bookname == '39')
      this.cno = 28;
      this.Genesis();
    if (this.bookname == '40')
      this.cno = 16;
      this.Genesis(); 
    if (this.bookname == '41')
      this.cno = 24;
      this.Genesis();
    if (this.bookname == '42')
      this.cno = 21;
      this.Genesis(); 
    if (this.bookname == '43')
      this.cno = 28;
      this.Genesis();
    if (this.bookname == '44')
      this.cno = 16;
      this.Genesis(); 
    if (this.bookname == '45')
      this.cno = 16;
      this.Genesis();
    if (this.bookname == '46')
      this.cno = 13;
      this.Genesis(); 
    if (this.bookname == '47')
      this.cno = 6;
      this.Genesis(); 
    if (this.bookname == '48')
      this.cno = 6;
      this.Genesis();
    if (this.bookname == '49')
      this.cno = 4;
      this.Genesis();
    if (this.bookname == '50')
      this.cno = 4;
      this.Genesis();
    if (this.bookname == '51')
      this.cno = 5;
      this.Genesis();
    if (this.bookname == '52')
      this.cno = 3;
      this.Genesis();
    if (this.bookname == '53')
      this.cno = 6;
      this.Genesis();
    if (this.bookname == '54')
      this.cno = 4;
      this.Genesis(); 
    if (this.bookname == '55')
      this.cno = 3;
      this.Genesis(); 
    if (this.bookname == '56')
      this.cno = 1;
      this.Genesis();
    if (this.bookname == '57')
      this.cno = 13;
      this.Genesis();
    if (this.bookname == '58')
      this.cno = 5;
      this.Genesis(); 
    if (this.bookname == '59')
      this.cno = 5;
      this.Genesis();
    if (this.bookname == '60')
      this.cno = 3;
      this.Genesis(); 
    if (this.bookname == '61')
      this.cno = 5;
      this.Genesis();
    if (this.bookname == '62')
      this.cno = 1;
      this.Genesis(); 
    if (this.bookname == '63')
      this.cno = 1;
      this.Genesis(); 
    if (this.bookname == '64')
      this.cno = 1;
      this.Genesis();
    if (this.bookname == '65')
      this.cno = 22;
      this.Genesis(); 

    
  }
  
  public states: any[];
  public sState: any;
  
  public items:any;
  public xmlItems:any;
  //public url:any;
  
// getting chapter number step2
  sam(){
    var s;
    s=this.sState.id
   // console.log('s:',this.sState.id)
    this.dispbibverse();
  }
  
  message:string = null;
  file:string = null;
  link:string = null;
  subject:string = null;
  constructor(public navCtrl: NavController,private socialSharing: SocialSharing,public alertCtrl: AlertController ,public http: HttpClient) {
    
  }
/*
  public shareTo(catIndex){
    let dataver = this.items.Verse[catIndex]
    var options = {
      message: dataver,
      subject: 'Item',
      chooserTitle: 'share Via...'
    }
    this.socialSharing.shareWithOptions(options).then((result)=>{
      console.log(options);
    });
    
  }


  share(slidingItem: ItemSliding) {
    this.socialSharing.share("demo").then(()=>{alert("sharing success");}).catch(() =>{
      alert("failed");
    });
    slidingItem.close();
  }
*/  
  
  // Step 3 displaying bible verse
  //b -- booknumber from inputone() 
  //s -- chapternumber from sam()
  dispbibverse()
   {
      this.loadXML();
   }

  loadXML()
   {
      
      //var booknumber;
      //booknumber = this.bookname;
      //var chapternumber; 
      //chapternumber= this.sState.id;
      //console.log('2nd printing s:',booknumber)
      //console.log('2nd printing b',chapternumber)
      
      this.http.get('/assets/data/bible.xml',
      {
        headers: new HttpHeaders()
        .set('Content-Type', 'text/xml')
        .append('Access-Control-Allow-Methods', 'GET')
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
        responseType:'text'
      })
      .subscribe((data)=>
      {
         this.parseXML(data)
         .then((data)=>
         {
            this.xmlItems = data;
            //console.log(data);
           
         });
      });
   }


   parseXML(data)
   {
    console.log('3rd printing s:',this.bookname)
    console.log('3rd printing b',this.sState.id)
    var d;
    var e;
    d=this.bookname;
    e=this.sState.id;
      return new Promise(resolve =>
      {
         var i,
             arr    = [],
             parser = new xml2js.Parser(
             {
                trim: true,
                explicitArray: true
             });

         parser.parseString(data, function (err, result)
         {
            var obj = result.Bible;
            //console.log(obj)
            //console.log(obj.Book[0])
            console.log(obj.Book[0].Chapter[0])
            console.log(obj.Book[0].Chapter[0].Verse)
            console.log('d',d)
            console.log('e',e)
            
            

            for (i in obj.Book[d].Chapter[e].Verse)
            {
              var item = obj.Book[d].Chapter[e].Verse[i];
              arr.push({
                Verse  : item._
                     
             });

              
            }


            resolve(arr);
            //console.log('Printing arr')
            //console.log(arr)
         });
      });
   }
  

  Genesis(){
    var statesnew = [];
    for (let i =1; i<=this.cno;i++){
      let newstates = {
        id:i-1,
        name:"Chapter " + i
      };
      statesnew.push(newstates);
    }
    this.states = statesnew;
    }
    
    
  
  }
