$(document).ready(function(){
//Start Syntax//
// $(document).ready(function(){
//Your Code Here
// });
//End Syntax //
    
//Start Events //

//start click//
$(".click").click(function () {
        $(".p_Click").hide();
    });
//     //end click//

//         //start dblclick//
        $(".dblclick").dblclick(function () {
        $(".p_Dblclick").hide();
    });
//          //end dblclick//
    
//          //start Mouseenter //
         $(".Mouse_enter_leave").mouseenter(function () {
             $(".p_Mouseenter").css("color", "#f00");
             $(".p_Mouseleave").css("color","#fff");
  
    });
//          //end Mouseenter //
    
//          //start Mouseleave //
         $(".Mouse_enter_leave").mouseleave(function () {
       
             $(".p_Mouseleave").css("color", "#f00");
             $(".p_Mouseenter").css("color", "#fff");
    });
    //end Mouseleave //

      //start Hover //
    $(".hover").hover(
        function () {
      
            $(".p_Hover").css("color", "#ff0");
           
        },
        function () {
      
            $(".p_Hover").css("color", "#fff");
           
             }
         );
      //end Hover //
    //End Events //
    
//Start Effects //
    //Start Hide //
    $(".Hide").click(function () {
        $(".p_Hide").hide(2000);
    });
        
//End  Hide//
    
    //Start show //
    $(".show").click(function () {
        $(".p_show").show(2000);
    });
        
//End  show//
    
    //Start Toggle //
    $(".Toggle").click(function () {
        $(".p_Toggle").toggle(2000);
    });
        //End  Toggle//
    //End  Effects//


//Start Effects Fade //
    //Start FadeIn //
    $(".FadeIn").click(function () {
        $(".p_FadeIn").fadeIn(2000);
        $(".p_FadeOut").fadeIn(2000);
        $(".p_FadeTo").fadeTo(2000, 1);
    });
        
//End  FadeIn//
    
    //Start FadeOut //
    $(".FadeOut").click(function () {
        $(".p_FadeOut").fadeOut(2000);
        $(".p_FadeIn").fadeOut(2000);
    });
        
//End  FadeOut//
    
    //Start FadeToggle //
    $(".FadeToggle").click(function () {
        $(".p_FadeToggle").fadeToggle(2000);
    });
        
//End  FadeToggle//
    
    //Start FadeTo //
    $(".FadeTo").click(function () {
        $(".p_FadeTo").fadeTo(2000, 0.3, function () { $(".p_FadeTo").css("color", "#ff0") });
    });
    
//End  FadeTo//
//End  Effects Fade//


//Start Effects slide //
//Start FadeIn //
$(".SlideDown").click(function () {
        $(".div_SlideDown").slideDown(2000);
        $(".div_SlideUp").slideDown(2000);
    });
        
    //End  FadeIn//
    
    //Start FadeOut //
    $(".SlideUp").click(function () {
        $(".div_SlideUp").slideUp(2000);
        $(".div_SlideDown").slideUp(2000);
    });
    
    //End  FadeOut//
    
    //Start FadeToggle //
    $(".SlideToggle").click(function () {
        $(".div_SlideToggle").slideToggle(2000);
    });
    
    //End  FadeToggle//
    //End  Effects slide//
    
    //Start Effects Animate //
    $(".Animate").click(function () {
        $(".div_Animate").animate({
        width: "550px",
        height:"100px",
        borderRadius: "1px solid rgba(0, 0, 0, 0.101)",
        borderRadius: "20px",
        fontSize: "30px"
    },2000);
    //animate____2
    $(".div_Animate").animate({
        width: "150px",
        height:"30px",
        opacity:"0.3",
        fontSize: "10px"
        
    }, 2000);
    
    //start absolut//
    $(".div_Animateabsolute").animate( {
        top:"10px",   width: "550px",
        height:"100px",
        borderRadius: "1px solid rgba(0, 0, 0, 0.101)",
        borderRadius: "20px",
        fontSize: "30px"
        
    }, 2000);
    $(".div_Animateabsolute").animate( {
        top:"10px", 
        width: "150px",
        height:"30px",
        opacity:"0.3",
        fontSize: "10px"
        
    }, 2000);
    //end absolut//
});

//End Effects  Animate//

//Start Effects Stop  //
$(".Stop").click(function () {
    $(".Effects_Stop").stop(false,true);
    
});
 $(".Effects_Stop").animate( {
     
    width: "500px",

     borderRadius: "1px solid rgba(0, 0, 0, 0.101)",
    borderRadius: "20px",
    opacity:"0.3",
    fontSize: "30px"
    
}, 2000);
$(".Effects_Stop").animate( {
    width:"1000px",
    opacity:"0.6"

}, 2000);
$(".Effects_Stop").animate( {
    width:"2000px",
    opacity:"1"
}, 2000);

//End Effects Stop //
//Start  //
    
//End  //
    
//Start Effects_Chain  //
    $(".Effects_Chain").click(function () {
        $(".divEffects_Chain")
        .css("color", "#fF0")
            .slideUp(2000)
            .slideDown(2000)
            .hide(2000).show(2000)
            .animate({
                width: "1000px",
                opacity: "0.6"

            }, 2000)
            .fadeOut(2000)
            .fadeIn(2000)
            ;
});
//End Effects_Chain //
    
//Start Html Get Set Elements And Attributes //
$(".Get_Elementstext").click(function () {
        $(".Get_Elementsdiv").text($(".Get_Elementsptext").text());
    
});
    //button//
    $(".Get_Elementshtml").click(function () {
        //Element//
    $(".Get_Elementsdiv").html($(".Get_Elementsphtml").html());
   
    
    });


    $(".Set_Elementsin").click(function () {
        //Element//
    $(".Set_Elementsdiv").html($(".Set_Elementsinput").val());
   
    
    });
    

$(".Attributes_Elements").click(function () {
    $(".Attributes_Elementsdiv").text($(".attr").attr("href"));
   
});
$(".Attributes_Elementschanging").click(function () {
    
    $(".attr").attr("href", "www.google.com")
    //او ممكن تغير اكتر من حاجة
    $(".attr").attr(
        {
            "href": "www.google.com",
            "title": "google",
                       
        }
        )
        
    });
    
    //End Html Get Set Elements And Attributes //
    
    //Start Html Append  AppendTo  Prepend  PrependTo  Before  After //
    $(".Appendbt").click(function () {
        $("section").append("<div> Add Div By Append </div>");
  });
    $(".AppendTobt").click(function () {
        $("<div> Add Div By AppendTo </div>").appendTo("section");
        });
    $(".Prependbt").click(function () {
        $("section").brepend("<div> Add Div By Prepend </div>");
  });
    $(".PrependTobt").click(function () {
        $("<div> Add Div By PrependTo </div>").prependTo("section");
  });
    $(".Beforebt").click(function () {
        $("section").before("<div> Add Div By Before </div>");
  });
    $(".Afterbt").click(function () {
        $("section").after("<div> Add Div By After </div>");
  });
    
    
//End Html Append  AppendTo  Prepend  PrependTo  Before  After //
    
//Start  Html Remove Empty Element//
$(".RemoveElement").click(function () {
    $(".RemoveElementdiv").remove();
 
});
$(".RemoveElementbyContains").click(function () {
  
    $(".RemoveElementdiv").remove(":contains('Remove')");
});

$(".EmptyElement").click(function () {
    $(".EmptyElementdiv").empty();
});

//End  Html Remove Empty Element//
    
//Start Code Html Dealing With Css Classes//
    $(".Add_Classes").click(function () {
        $(this).width("+="+100);
        $(this).height("+="+100);
    //class=2 ==> addclass And be
        //class مفيهاش قيم هيمسح كل ال  remove لو   
        // div , button ممكن إضافة اكثر من عنصر بال فصل بينهما
        // first ===> هنا بتفلتر يعني هتختار الاول
        // Last  ===> هنا بتفلتر يعني هتختار الاخير
        // :eq(4)  ===> هنا بتفلتر يعني هتختار المكتوب
        // :contains('Remove')  ===>   هنا بتفلتر يعني هتختار  الي في الكلمة
        $("p:eq(4) , .Add_Classes ").toggleClass("addclass  brb").removeClass("mahmoud");
        
          });
//End Code Html Dealing With Css Classes //
    
//Start Html Css Get Set //

    $(".Get").click(function () {
        let stylecss = $(".inputgetStyle").val();
        $(".inputget").val($(" .inputget").css(stylecss));
    });

    $(".Set").click(function () {
        let stylecss = $(".inputgetStyle").val();
        let color = $(".inputset").val();
        $("p").css( stylecss ,color);
    });
//End Html Css Get Set  //
    
//Start Html Dimensions //
    //Start Width//
    $(".Width").click(function () {
        //لتذويد  العرض
        $(this).width("+="+100);
        //بيطلع العرض فقط widthال 
        let widthd=$(".container").width();
        //بيطلع العرض والهوامش الداخلية والخارجية  innerWidth ال 
        let innerwidth=$(".container").innerWidth();
         // بيطلع العرض والهوامش الداخلية والخارجية والبادانج outerWidth ال 
         let outerwidthtrue=$(".container").outerWidth(true);
         // بيطلع العرض والهوامش الداخلية والبادانج outerWidth ال 
        let outerwidth=$(".container").outerWidth();
        
        $("<p class= 'Dimensionsp'> 'widthd' </p>").appendTo("section");
        $(".Dimensionsp").text(" Width : "+widthd+"px");

        $("<p class= 'Dimensionspinner'> 'widthd' </p>").appendTo("section");
        $(".Dimensionspinner").text(" innerwidth : "+innerwidth+"px");

        $("<p class= 'Dimensionspouter'> 'widthd' </p>").appendTo("section");
        $(".Dimensionspouter").text(" outerwidth : "+outerwidth+"px");

        $("<p class= 'Dimensionspoutertrue'> 'widthd' </p><br/><br/><br/>").appendTo("section");
        $(".Dimensionspoutertrue").text(" outerwidth(true) : "+outerwidthtrue+"px");
        
        if (widthd>625)
        {
            $(".Dimensionsp").css("background", "rgba(255, 255, 255, 0.1)");
        }
       
        if (innerwidth>625)
        {
            $(".Dimensionspinner").css("background", "rgba(255, 255, 255, 0.2)");
        }
       
        if (outerwidth>625)
        {
            $(".Dimensionspouter").css("background", "rgba(330, 330, 330, 0.3)");
        }
       
        if (outerwidthtrue>625)
        {
            $(".Dimensionspoutertrue").css("background", "rgba(470, 470, 470, 0.4)");
        }
       
    });
    $(".right").click(function () {
     
        $(".right").width("+="+100);
        $(".lift").width("-="+100);
    });
    
    $(".lift").click(function () {

        
        $(".lift").width("+="+100);
        $(".right").width("-="+100);

    });
     //End Width//
     //Start Height//
    $(".Height").click(function () {
        $(this).height("+="+100);
        //بيطلع الطول فقط height ال 
        let heighdiv=$(".containerHeight").height();
        //بيطلع العرض والهوامش الداخلية والخارجية  innerWidth ال 
        let innerheighdiv=$(".containerHeight").innerHeight();
        //  // بيطلع العرض والهوامش الداخلية والخارجية والبادانج outerWidth ال 
        let outerheighdiv=$(".containerHeight").outerHeight();
        //  // بيطلع العرض والهوامش الداخلية والبادانج outerWidth ال 
        let outerheighdivtruye=$(".containerHeight").outerHeight(true);

        $("<p class='heightp'> </p>").appendTo("section");
        $("<p class='innerheighp'> </p>").appendTo("section");
        $("<p class='outerheighp'> </p>").appendTo("section");
        $("<p class='outerheighdivtruyep'> </p><br/><br/><br/>").appendTo("section");

        $(".heightp").text(" This Is Height : "+heighdiv+"px");
        $(".innerheighp").text(" This Is innerHeighDiv : "+innerheighdiv+"px");
        $(".outerheighp").text(" This Is outerHeighDiv : "+outerheighdiv+"px");
        $(".outerheighdivtruyep").text(" This Is outerHeighDiv(true): "+outerheighdivtruye+"px");

        if (heighdiv>100)
        {
            $(".heightp").css("background", "rgba(255, 255, 255, 0.1)");
        }
  
        if (innerheighdiv>225)
        {
            $(".innerheighp").css("background", "rgba(255, 255, 255, 0.2)");
        }
        if (outerheighdiv>225)
        {
            $(".outerheighp").css("background", "rgba(255, 255, 255, 0.3)");
        }
        if (outerheighdivtruye>225)
        {
            $(".outerheighdivtruyep").css("background", "rgba(255, 255, 255, 0.4)");
        }
  
        
      
    });

    $(".liftheight").click(function () {
     
        $(".liftheight").height("+="+100);
        $(".rightheight").height("-="+100);
    });
    
    $(".rightheight").click(function () {

        
        $(".rightheight").height("+="+100);
        $(".liftheight").height("-="+100);

    });
     //End Height//
//End  Html Dimensions//
   
    
//Start Traversing Parent Parents ParentsUntil  //
      //start Parent//
$(".Parent").click(function () {
    $(".spanParent").parent().css("border","3px solid #040");
   

});
    //start Parents//
    //اختيار العنصر يطبق عليه 
$(".Parents").click(function () {
    $(".spanParent").parents().css("border","10px solid #040");
   

});
    //وقوف عند الكلاس المحدد
$(".Parents_class").click(function () {
    $(".spanParent").parents(".divParent").css("border","10px solid #040");
   

});
    //start ParentsUntil//
$(".ParentsUntil").click(function () {
    $(".spanParent").parentsUntil("section").css("border","10px solid #040");
   

});

    
//End  Traversing Parent Parents ParentsUntil //
    

    
//Start Traversing Children Find //
    //Start Children//
    $(".Children").click(function () {
        $(".sectionChildren").children().css("border","10px solid #000");
    });
   //Children_class //
    //تحديد العنصر
    $(".Children_class").click(function () {
        $(".divChildren").children(".pChildren").css("border","10px solid #000");
    });
   

    // Start Find//
       //Find_class //
    //تحديد العنصر
    // * ممكن تحديد العناصر كلها عن طريقة ال 
    $(".Find_class").click(function () {
        let inputtext=$("input").val();
        $(".sectionFind").find("."+inputtext).css("border","10px solid #000");
    });

//End  Traversing Children Find//
    
// Start Traversing Siblings Next Previous //
    //Start Siblings//
    $(".Siblings").click(function () {
        //تحديد كل العناصر معدا المحدد
        $(".Siblingsdiv:contains('Div 2 Siblings')").siblings().css("border", "5px solid #060");
        
    });
    //click div , p
    $(".Siblingsdiv , .Siblingsp").click(function () {
        //اختفاء كل العناصر معدا المحدد
        $(this).siblings().fadeToggle(2000);
      });
    
//Start Next//
  $(".Next").click(function () {
    //تحديد كل العناصر معدا المحدد
    $(".Nextdiv").next().css("border","5px solid #060");
  });
  

  $(".Nextdiv , .Nextp").click(function () {
    //اختفاء كل العناصر معدا المحدد
    $(this).next().slideToggle(2000);
  });
  $(".Nextdivv , .Nextpp").click(function () {
    //اختفاء كل العناصر معدا المحدد
    $(this).nextAll().css("background", "#0f0");
  });
 
  //بستخدام الكلاس
  $(".Nextdiv , .Nextp").click(function () {
    //اختفاء كل العناصر معدا المحدد
    $(this).next(".Nextpp").slideToggle(2000);
  });

//Start Previous//
  $(".Previous").click(function () {
    //تحديد كل العناصر معدا المحدد
    $(".Previousdiv").prev().css("border","5px solid #060");
  });
  $(".Previousdiv , .Previousp").click(function () {
    //اختفاء كل العناصر معدا المحدد
    $(this).prev().slideToggle(2000);
  });
    //بستخدام الكلاس
  $(".Previousdiv , .Previousp").click(function () {
    //اختفاء كل العناصر معدا المحدد
    $(this).prev(".Previouspp").slideToggle(2000);
  });
    
  $(".Previousdivv , .Previouspp").click(function () {
    //اختفاء كل العناصر معدا المحدد
    $(this).prevAll().css("background", "#00f");
  });
//End  Traversing Siblings Next Previous//
    
//Start //
    // $(".").click(function () {
        // $("body").css("background","none");
       
//   });

//End  //
    
//Start //
    // $(".").click(function () {
        // $("body").css("background","none");
       
//   });

//End  //
    
//Start //
    // $(".").click(function () {
        // $("body").css("background","none");
       
//   });

//End  //
    
//Start //
    // $(".").click(function () {
        // $("body").css("background","none");
       
//   });

//End  //
    
//Start //
    // $(".").click(function () {
        // $("body").css("background","none");
       
//   });

//End  //
    
//Start //
    // $(".").click(function () {
        // $("body").css("background","none");
       
//   });

//End  //
    
//Start //
    // $(".").click(function () {
        // $("body").css("background","none");
       
//   });

//End  //
    
//Start //
    // $(".").click(function () {
        // $("body").css("background","none");
       
//   });

//End  //
    
//Start //
    // $(".").click(function () {
        // $("body").css("background","none");
       
//   });

//End  //
    
//Start //
    // $(".").click(function () {
        // $("body").css("background","none");
       
//   });

//End  //




   
});
