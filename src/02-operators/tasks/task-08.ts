/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const PricePerKwh: number = 1650;
const SolarDisc: number = 15/100;
const ESdisc: number = 5/100;

type EnergyUse = {
    PrevMeter: number
    CurrentMeter: number
    Solarinstalled: boolean
    EnergySavemode: boolean
}

const Benjamin: EnergyUse = {
    PrevMeter: 25640,
    CurrentMeter: 25892,
    Solarinstalled: true,
    EnergySavemode: false
}

const EnergyConsume: number = Benjamin.CurrentMeter - Benjamin.PrevMeter;
const AfterSolar = Benjamin.Solarinstalled == true ? (EnergyConsume - (EnergyConsume * SolarDisc)) * PricePerKwh : EnergyConsume *PricePerKwh ;
const AfterESmode = Benjamin.EnergySavemode == true ? (AfterSolar - (AfterSolar * ESdisc)) * PricePerKwh : AfterSolar * PricePerKwh;

console.log("=== Something Something Electricity ===");
console.log("Total Energy Consumption:", EnergyConsume);
console.log("Final Bill:", AfterESmode);
console.log("GEP Eligibility:", Benjamin.Solarinstalled == true && Benjamin.EnergySavemode == true && EnergyConsume < 300 ?
    "Eligible" : "Not Eligible"
);

