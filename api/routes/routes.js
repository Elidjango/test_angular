const express = require("express");
const router = express.Router();

// -> Controllers
const _ControllerEmployee = require("../controllers/ControllerEmployee");

router.get("/employee/list/all",
    _ControllerEmployee.AllEmployee
);

router.get("/employee/list/paperbin",
    _ControllerEmployee.ListPaperbinEmployee
);

router.get("/employee/list/:id",
    _ControllerEmployee.DetailEmployee
);

router.post("/employee/add",
    _ControllerEmployee.AddEmployee
);

router.put("/employee/update/:id",
    _ControllerEmployee.UpdateEmployee
);

router.put("/employee/paperbin/:id",
    _ControllerEmployee.PaperbinEmployee
);

router.delete("/employee/delete/:id",
    _ControllerEmployee.DeleteEmployee
);

router.get("/",
    (req, res) => {
        res.send({Status: "Is Works"});
    }
);

module.exports = router;