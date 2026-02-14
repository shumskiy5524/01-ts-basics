interface Status {
    status: "loading" | "success" | "error";
}
function logStatus(status: Status): void {
  if (status.status === "loading") {
    console.log("Loading...");
  } else if (status.status === "success") {
    console.log("Success!");
  } else if (status.status === "error") {
    console.log("Something went wrong");
  }
}

logStatus({status: "loading"});