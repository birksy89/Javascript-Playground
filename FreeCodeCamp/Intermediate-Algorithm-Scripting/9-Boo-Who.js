
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.

  if(typeof(bool) === "boolean"){
    // variable is a boolean
      console.log("Yep");
      bool = true;
  }
  else{
    console.log("no");
    bool = false;
  }

  return bool;
}

booWho(true)
