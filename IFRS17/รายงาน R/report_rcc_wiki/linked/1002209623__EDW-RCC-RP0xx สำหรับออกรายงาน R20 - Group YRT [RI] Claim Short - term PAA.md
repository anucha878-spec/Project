# EDW-RCC-RP0xx สำหรับออกรายงาน R20 - Group YRT [RI] Claim Short - term PAA

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1002209623
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## EDW-RCC-RP0xx สำหรับออกรายงาน R20 - Group YRT [RI] Claim Short - term PAA ให้ฝ่ายคณิตศาสตร์

Process การออกรายงานมีเงื่อนไขดังนี้

1. สถานะดำเนินการจะต้องเป็น "ประมวลผลสำเร็จ" และผู้ใช้ทำการกดยืนยันข้อมูล จากหน้าจอ [EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930152455)
2. ระบบนำปี และเดือนที่ได้รับจากหน้าจอ ไปหาที่ตาราง [tx_rcc_output_r20](http://wiki.thaisamut.co.th/display/RDSADW/tx_rcc_output_r20)
3. ทำการ Generate ข้อมูลไปยัง Excel file โดยมีรายละเอียดดังนี้Share drive ให้วางไฟล์ไว้ที่ **$(Default Path)\IFRS17\Report R\XXXXXX_to_XXXXXX_YYYYYYYYYYYYYY** โดยที่ **XXXXXX** แทนข้อมูล Period และ **YYYYYYYYYYYYYY** แทนข้อมูลวันเวลาที่ประมวลผล
4. ชื่อไฟล์เป็น **R20_ReinGroupYRT_ClaimExpRec****_YYYYMM_to_YYYYMM.csv**
5. ให้ Sorting ตาม Period, PortfolioID

1. ใช้ข้อมูลจากตาราง [tx_rcc_output_r20](http://wiki.thaisamut.co.th/display/RDSADW/tx_rcc_output_r20) เพื่อออกรายงาน R20 ดังนี้ | No | CSV Column Name | Source - [tx_rcc_output_r20](http://wiki.thaisamut.co.th/display/RDSADW/tx_rcc_output_r20) | | --- | --- | --- | | 1 | Period | tx_rcc_output_r20.period | | 2 | PolicyNumber | tx_rcc_output_r20.policy_no | | 3 | PortfolioID | tx_rcc_output_r20.portfolio_id | | 4 | RIPortfolioID | tx_rcc_output_r20.ri_portfolio_id | | 5 | SalesChannel | tx_rcc_output_r20.sales_channel | | 6 | BusinessLine | tx_rcc_output_r20.business_line | | 7 | TreatyCode | tx_rcc_output_r20.treaty_code | | 8 | CertificateNo | tx_rcc_output_r20.certificate_no | | 9 | Age | tx_rcc_output_r20.age | | 10 | Sex | tx_rcc_output_r20.sex | | 11 | ClaimEventDate | tx_rcc_output_r20.claim_event_date | | 12 | ClaimRecoveryDate | tx_rcc_output_r20.claim_recovery_date | | 13 | SaleOption | tx_rcc_output_r20.sale_option | | 14 | RecoveryAmountLife | tx_rcc_output_r20.recovery_amount_life | | 15 | RecoveryAmountAccidentDeath | tx_rcc_output_r20.recovery_amount_accident_death | | 16 | RecoveryAmountMedAccident | tx_rcc_output_r20.recovery_amount_med_accident | | 17 | RecoveryAmountTPD | tx_rcc_output_r20.recovery_amount_tpd | | 18 | RecoveryAmountIPD | tx_rcc_output_r20.recovery_amount_ipd | | 19 | RecoveryAmountOPD | tx_rcc_output_r20.recovery_amount_opd | | 20 | RecoveryAmountDental | tx_rcc_output_r20.recovery_amount_dental | | 21 | RecoveryAmountOther | tx_rcc_output_r20.recovery_amount_other | | 22 | ReturnPremium | tx_rcc_output_r20.return_premium | | 23 | ClaimRecoveryExpense | tx_rcc_output_r20.claim_recovery_expense | | 24 | ProfitCommission | tx_rcc_output_r20.profit_commission | | 25 | RIType | tx_rcc_output_r20.ri_type | | 26 | SubRIGroupID | tx_rcc_output_r20.sub_ri_group_id | | 27 | PaidAmountLife | tx_rcc_output_r20.paid_amount_life | | 28 | PaidAmountAccidentDeath | tx_rcc_output_r20.paid_amount_accident_death | | 29 | PaidAmountHealth | tx_rcc_output_r20.paid_amount_health | | 30 | PaidAmountAccidentNonDeath | tx_rcc_output_r20.paid_amount_accident_non_death | | 31 | PaidAmountTPD | tx_rcc_output_r20.paid_amount_tpd | | 32 | PolicyYear | tx_rcc_output_r20.policy_year | | 33 | RIPeriod | tx_rcc_output_r20.ri_period | | 34 | ClaimNo | tx_rcc_output_r20.claim_no |