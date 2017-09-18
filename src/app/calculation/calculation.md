# Formula Documentation

### 1. Dashboard
#### 1.1 Yearly calculation
##### 1.1.1 Calculation of Gross Profit in dollar ($):
```
GP_CENTS = (currentYear.total_labor_profit_cents + currentYear.total_parts_profit_cents + currentYear.total_sublet_profit_cents - currentYear.total_discount_cents);
GP$ =  GP_CENTS * 100
    
Where, 
    GP_CENTS = Gross profit in cents,
    GP$ = Gross profit in dollar
```
##### 1.1.2 Calculation of Gross profit in percentage (%):
If current year gross sales cents is not zero then 
```
GP% = (GP_CENTS/ currentYear.gross_sales_cents)*100;
    
Where, 
     GP_CENTS = Gross profit in cents from 1.1.1 calculation
```


#### 1.2 Monthly calculation
##### 1.2.1 Calculation of Gross Profit in dollar ($):
```
GP_CENTS = (currentMonth.total_labor_profit_cents + currentMonth.total_parts_profit_cents + currentMonth.total_sublet_profit_cents - currentMonth.total_discount_cents);
GP$ =  GP_CENTS * 100
    
Where, 
    GP_CENTS = Gross profit in cents,
    GP$ = Gross profit in dollar
```

##### 1.2.2 Calculation of Gross profit in percentage (%):
If current month gross sales cents is not zero then 
```
GP% = (GP_CENTS/ currentMonth.gross_sales_cents)*100;
    
Where, 
    GP_CENTS = Gross profit in cents from 1.2.1 calculation
```


#### 1.3 Daily calculation
##### 1.3.1 Calculation of Gross Profit in dollar ($):
```
GP_CENTS = (currentDay.total_labor_profit_cents + currentDay.total_parts_profit_cents + currentDay.total_sublet_profit_cents - currentDay.total_discount_cents);
GP$ =  GP_CENTS * 100
    
Where, 
    GP_CENTS = Gross profit in cents,
    GP$ = Gross profit in dollar
```

##### 1.3.2 Calculation of Gross profit in percentage (%):
If current month gross sales cents is not zero then 
```
GP% = (GP_CENTS/ currentDay.gross_sales_cents)*100;
    
Where, 
    GP_CENTS = Gross profit in cents from 1.3.1 calculation
```

### 2. Summary reports [Yearly, Year to date, Monthly, Month to date, specific date, daily]
##### 2.1 Types of summary reports
1. Yearly :   
    First day of year let say `2017-01-01 00:00:00:000`
    ```
    startDateTime : YYYY-MM-DD HH:mm:ss:SSS //date and time format
    startDateTime : 2017-01-01 00:00:00:000
    ```
    Last day of year will be `2017-12-31 24:59:59:999`  
    ```
    EndDateTime : YYYY-MM-DD HH:mm:ss:SSS //date and time format
    EndDateTime : 2017-12-31 24:59:59:999
    ```
2. Year To date:  
    First day of year let say `2017-01-01 00:00:00:000`
    ```
    StartDateTime : YYYY-MM-DD HH:mm:ss:SSS //date and time format
    StartDateTime : 2017-01-01 00:00:00:000
    ```
    The end date and time will be set here. let say you want to get record till today then you have set the current date and time here.
    ```
    EndDateTime : YYYY-MM-DD HH:mm:ss:SSS //date and time format
    EndDateTime : 2017-09-18 01:55:00:000
    ```
          
3. Monthly:  
    First day of month let say `2017-02-01 00:00:00:000`
    ```
    StartDateTime : YYYY-MM-DD HH:mm:ss:SSS //date and time format
    StartDateTime : 2017-02-01 00:00:00:000
    ```
    The end date of the same month `2017-02-28 24:59:59:999`
    ```
    EndDateTime : YYYY-MM-DD HH:mm:ss:SSS //date and time format
    EndDateTime : 2017-02-28 24:59:59:999 
    ```
          
4. Month to date  
    First day of month let say `2017-09-01 00:00:00:000`
    ```
    StartDateTime : YYYY-MM-DD HH:mm:ss:SSS //date and time format
    StartDateTime : 2017-09-01 00:00:00:000
    ```
    The end date and time will be set here. let say you want to get record till today then you have set the current date and time here.
    ```
    EndDateTime : YYYY-MM-DD HH:mm:ss:SSS //date and time format
    EndDateTime : 2017-09-18 01:55:00:000
    ```
5. Specific day/daily summery
    let say you want summery report for 1st, february 2017  `2017-02-01 00:00:00:000`
    ```
    StartDateTime : YYYY-MM-DD HH:mm:ss:SSS //date and time format
    StartDateTime : 2017-02-01 00:00:00:000
    ```
    The end date and time will be `2017-02-01 24:59:59:999`
    ```
    EndDateTime : YYYY-MM-DD HH:mm:ss:SSS //date and time format
    EndDateTime : 2017-02-01 24:59:59:999
    ```

##### 2.2 Query Response
  we can get following field based on type of report e.g. yearly, year to date and so on from section 2.1 by querying SQL server:
  
```
  saleCount = Total no. of record
  DayCount = Total no. of records we get after grouping by all records on field `close_day`  
  AvgSaleCents = Average value of `total_cents`
  GrossSalesCents= Summation of `total_cents`   
  TotalTaxPaidCents =  Summation of `tax_paid_cents`  
  TotalLaborSoldCents = Summation of `labor_total_cents`
  TotalLaborCostCents = Summation of `labor_actual_cost_cents`  
  TotalLaborProfitCents = Summation of `labor_profit_cents`  
  TotalLaborSoldSeconds = Summation of `labor_sold_sec`  
  TotalLaborActualSeconds = Summation of `labor_actual_sec`  
  TotalPartsSoldCents = Summation of `parts_total_cents`  
  TotalPartsCostCents = Summation of `parts_actual_cost_cents`  
  TotalPartsProfitCents = Summation of `parts_profit_cents`  
  TotalSubletSoldCents = Summation of `sublet_total_cents`  
  TotalSubletCostCents = Summation of `sublet_actual_cost_cents`  
  TotalSubletProfitCents = Summation of `sublet_profit_cents`  
  
  TotalLaborDiscountedCents = Summation of `labor_discounted_cents`  
  TotalPartsDiscountedCents = Summation of `parts_discounted_cents`  
  TotalSubletDiscountedCents = Summation of `sublet_discounted_cents`  
  TotalOtherDiscountedCents = Summation of `other_discounted_cents`  
  
```
##### 2.3 Calculation
##### 2.3.1 Gross sales after tax cents [GrossSalesAfterTaxCents]
```
GrossSalesAfterTaxCents = GrossSalesCents + TotalTaxPaidCents

Where,
    GrossSalesCents, TotalTaxPaidCents we got from SQL query [Check section 2.2 query response]
```

##### 2.3.2 Total discount cents [TotalDiscountCents]
```
TotalDiscountCents = TotalLaborDiscountedCents + TotalPartsDiscountedCents + TotalSubletDiscountedCents + TotalOtherDiscountedCents

Where,
    TotalLaborDiscountedCents, TotalPartsDiscountedCents, TotalSubletDiscountedCents, TotalOtherDiscountedCents we got from SQL query [Check section 2.2 query response]
```

##### 2.3.3 Total other sold cents [TotalOtherSoldCents]
```
TotalOtherSoldCents = TotalTaxPaidCents

Where,
    TotalTaxPaidCents we got from SQL query [Check section 2.2 query response]
```

##### 2.3.4 Total labor sold cents after discounts [TotalLaborSoldCentsAfterDiscounts]
```
TotalLaborSoldCentsAfterDiscounts = TotalLaborSoldCents + TotalLaborDiscountedCents

Where,
    TotalLaborSoldCents, TotalLaborDiscountedCents we got from SQL query [Check section 2.2 query response]
```

##### 2.3.5 Total part sold cents after discounts [TotalPartsSoldCentsAfterDiscounts]
```
TotalPartsSoldCentsAfterDiscounts = TotalPartsSoldCents + TotalPartsDiscountedCents

Where,
    TotalPartsSoldCents, TotalPartsDiscountedCents we got from SQL query [Check section 2.2 query response]   
```

##### 2.3.6 Total sublet sold cents after discounts [TotalSubletSoldCentsAfterDiscounts]
```
TotalSubletSoldCentsAfterDiscounts = TotalSubletSoldCents + TotalSubletDiscountedCents

Where,
    TotalSubletSoldCents, TotalSubletDiscountedCents we got from SQL query [Check section 2.2 query response]
```

##### 2.3.7 Average labor sold cents [AvgLaborSoldCents]
```
AvgLaborSoldCents = TotalLaborSoldCents / saleCount

Where,
    TotalLaborSoldCents, saleCount we got from SQL query [Check section 2.2 query response]
```

##### 2.3.8 Average labor sold seconds [AvgLaborSoldSeconds]
```
AvgLaborSoldSeconds = TotalLaborSoldSeconds / saleCount

Where,
    TotalLaborSoldSeconds, saleCount we got from SQL query [Check section 2.2 query response]   
```

##### 2.3.9 Average labor cost cents [AvgLaborCostCents]
```
AvgLaborCostCents = TotalLaborCostCents / saleCount

Where,
    TotalLaborCostCents, saleCount we got from SQL query [Check section 2.2 query response]
```

##### 2.3.10 Average labor actual seconds [AvgLaborActualSeconds]
```
AvgLaborActualSeconds = TotalLaborActualSeconds / saleCount

Where,
    TotalLaborActualSeconds, saleCount we got from SQL query [Check section 2.2 query response]
```

##### 2.3.11 Average labor profit cents [AvgLaborProfitCents]
```
AvgLaborProfitCents = TotalLaborProfitCents / saleCount;

Where,
    TotalLaborProfitCents, saleCount we got from SQL query [Check section 2.2 query response]
```

##### 2.3.12 Average part sold cents [AvgPartsSoldCents]
```
AvgPartsSoldCents  = TotalLaborProfitCents / saleCount;

Where,
    TotalLaborProfitCents, saleCount we got from SQL query [Check section 2.2 query response]
```

##### 2.3.13 Average part cost cents [AvgPartsCostCents]
```
AvgPartsCostCents  = TotalSubletCostCents / saleCount;

Where,
    TotalSubletCostCents, saleCount we got from SQL query [Check section 2.2 query response]
```

##### 2.3.14 Average part sold cents [AvgPartsProfitCents]
```
AvgPartsProfitCents  = TotalPartsProfitCents / saleCount;

Where,
    TotalPartsProfitCents, saleCount we got from SQL query [Check section 2.2 query response]
```

##### 2.3.15 Average sublet sold cents [AvgPartsSoldCents]
```
AvgSubletSoldCents  = TotalSubletSoldCents / saleCount;

Where,
    TotalSubletCostCents, saleCount we got from SQL query [Check section 2.2 query response]
```

##### 2.3.16 Average sublet cost cents [AvgSubletCostCents]
```
AvgSubletCostCents  = TotalSubletCostCents / saleCount;

Where,
    TotalSubletCostCents, saleCount we got from SQL query [Check section 2.2 query response]
```

##### 2.3.17 Average sublet profit cents [AvgSubletProfitCents]
```
AvgSubletProfitCents  = TotalSubletProfitCents / saleCount;

Where,
    TotalSubletCostCents, saleCount we got from SQL query [Check section 2.2 query response]
```

##### 2.3.18 Average discount cents [AvgDiscountCents]
```
AvgDiscountCents  =   TotalLaborDiscountedCents +  TotalPartsDiscountedCents + TotalSubletDiscountedCent + TotalOtherDiscountedCents

Where,
    TotalLaborDiscountedCents,  TotalPartsDiscountedCents, TotalSubletDiscountedCent, TotalOtherDiscountedCents we got from SQL query [Check 2.2 query response]
```

##### 2.3.18 Average other sold cents [AvgOtherSoldCents]
```
AvgOtherSoldCents  =   TotalTaxPaidCents / saleCount;

Where,
     TotalTaxPaidCents, saleCount we got from SQL query [Check section 2.2 query response]
```

##### 2.3.19 Average sale after tax cents [AvgSaleAfterTaxCents]
```
AvgSaleAfterTaxCents  =   GrossSalesAfterTaxCents / saleCount

Where,
     GrossSalesAfterTaxCents [Check section 2.3.1], saleCount we got from SQL query [Check section 2.2 query response]
```

##### 2.3.21 Labor sold cents per second [LaborSoldCentsPerSecond]
```
LaborSoldCentsPerSecond  =   AvgLaborSoldCents / AvgLaborSoldSeconds

Where,
     AvgLaborSoldCents [Check section 2.3.7], AvgLaborSoldSeconds [Check section 2.3.8]
```

##### 2.3.22 Labor cost cents per second sold [LaborCostCentsPerSecondSold]
```
LaborCostCentsPerSecondSold  =   AvgLaborCostCents / AvgLaborSoldSeconds

Where,
     AvgLaborCostCents [Check section 2.3.9],  AvgLaborSoldSeconds [Check section 2.3.8]   
```

##### 2.3.23 Daily gross sales cents[DailyGrossSalesCents]
```
DailyGrossSalesCents  =   GrossSalesCents / DayCount

Where,
      GrossSalesCents [Check section 2.2], DayCount [Check section 2.2]  
```

##### 2.3.24 Daily gross sales after tax cents [DailyGrossSalesAfterTaxCents]
```
DailyGrossSalesAfterTaxCents  =   GrossSalesAfterTaxCents / DayCount

Where,
      GrossSalesCents [Check section 2.3.1], DayCount [Check section 2.2]  
```

##### 2.3.25 Daily average sale count [DailyAvgSaleCount]
```
DailyAvgSaleCount  =   saleCount / DayCount

Where,
      saleCount [Check section 2.2], DayCount [Check section 2.2]  
```
