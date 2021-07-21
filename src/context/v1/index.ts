import { Router } from "express";
import AddressBook from "./address-book";

const router = Router();

router.use("/address-book", AddressBook);

export default router;
