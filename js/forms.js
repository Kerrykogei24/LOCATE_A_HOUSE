function LocateAhouse(location, houseSize) {
    this.location = location;
    this.houseSize = houseSize;
    this.landlordNo = 0;
    this.rentAmount = 0;
};

LocateAhouse.prototype.housePrice = function () {
    if (this.location === "ALLSOAPS") {
        if (this.houseSize === "BUNGALOW") {
            this.rentAmount = 30000;
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.rentAmount = 20000;
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.rentAmount = 15000;
        } else if (this.houseSize === "BEDSITTER") {
            this.rentAmount = 10000;
        } else if (this.houseSize === "SINGLE") {
            this.rentAmount = 5000;
        }
    } else if (this.location === "RONGAI") {
        if (this.houseSize === "BUNGALOW") {
            this.rentAmount = 35000;
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.rentAmount = 23000;
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.rentAmount = 18000;
        } else if (this.houseSize === "BEDSITTER") {
            this.rentAmount = 13000;
        } else if (this.houseSize === "SINGLE") {
            this.rentAmount = 6000;
        }
    } else if (this.location === "NGONG") {
        if (this.houseSize === "BUNGALOW") {
            this.rentAmount = 32500;
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.rentAmount = 21000;
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.rentAmount = 17500;
        } else if (this.houseSize === "BEDSITTER") {
            this.rentAmount = 8500;
        } else if (this.houseSize === "SINGLE") {
            this.rentAmount = 4500;
        }
    } else if (this.location === "KANGEMI") {
        if (this.houseSize === "BUNGALOW") {
            this.rentAmount = 31500;
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.rentAmount = 18000;
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.rentAmount = 15500;
        } else if (this.houseSize === "BEDSITTER") {
            this.rentAmount = 7500;
        } else if (this.houseSize === "SINGLE") {
            this.rentAmount = 4700;
        }
    } else if (this.location === "KAHAWA-WENDANI") {
        if (this.houseSize === "BUNGALOW") {
            this.rentAmount = 31500;
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.rentAmount = 18000;
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.rentAmount = 15500;
        } else if (this.houseSize === "BEDSITTER") {
            this.rentAmount = 7500;
        } else if (this.houseSize === "SINGLE") {
            this.rentAmount = 4700;
        }
    } else if (this.location === "KAHAWA-SUKARI") {
        if (this.houseSize === "BUNGALOW") {
            this.rentAmount = 31500;
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.rentAmount = 18000;
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.rentAmount = 15500;
        } else if (this.houseSize === "BEDSITTER") {
            this.rentAmount = 7500;
        } else if (this.houseSize === "SINGLE") {
            this.rentAmount = 4700;
        }
    } else if (this.location === "KINOO") {
        if (this.houseSize === "BUNGALOW") {
            this.rentAmount = 36000;
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.rentAmount = 19500;
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.rentAmount = 16500;
        } else if (this.houseSize === "BEDSITTER") {
            this.rentAmount = 9500;
        } else if (this.houseSize === "SINGLE") {
            this.rentAmount = 5500;
        }
    };
}; $(document).ready(function () {
    $("#house").submit(function (event) {
        event.preventDefault(); var location = $("#location").val(); var houseSize = $("#house-size").val(); var newTenant = new LocateAhouse(location, houseSize);
        newTenant.housePrice();
        newTenant.landNo();
        // console.log(newTenant.landlordNo);
        // alert(newTenant.rentAmount)
        // console.log(newTenant.rentAmount);
        alert("The house in " + location + " is " + houseSize + " and the total rent amount Ksh. " + newTenant.rentAmount);
    });
});
LocateAhouse.prototype.landNo = function (location, houseSize) {
    if (this.location === "ALLSOAPS") {
        if (this.houseSize === "BUNGALOW") {
            this.landlordNo = "The landLord No is +25476342134";
            alert(this.landlordNo);
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.landlordNo = "The landLord No is +2547630987";
            alert(this.landlordNo);
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.landlordNo = "The landLord name Steve +254755849302";
            alert(this.landlordNo);
        } else if (this.houseSize === "BEDSITTER") {
            this.landlordNo = "The landLord name Kerry +254723834058";
            alert(this.landlordNo);
        } else if (this.houseSize === "SINGLE") {
            this.landlordNo = "The landLord name Christine +254733029384";
            alert(this.landlordNo);
        }
    }
    else if (this.location === "RONGAI") {
        if (this.houseSize === "BUNGALOW") {
            this.landlordNo = "The landLord No is +25476342134";
            alert(this.landlordNo);
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.landlordNo = "The landLord No is +2547630987";
            alert(this.landlordNo);
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.landlordNo = "The landLord name Jaloch felix +254755849302";
            alert(this.landlordNo);
        } else if (this.houseSize === "BEDSITTER") {
            this.landlordNo = "The landLord name Ashley Kirigo +254723834058";
            alert(this.landlordNo);
        } else if (this.houseSize === "SINGLE") {
            this.landlordNo = "The landLord name Sharon Anyango +254733029384";
            alert(this.landlordNo);
        }
    };

};
