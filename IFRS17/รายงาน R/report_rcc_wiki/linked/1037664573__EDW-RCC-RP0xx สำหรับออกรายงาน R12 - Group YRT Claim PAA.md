# EDW-RCC-RP0xx สำหรับออกรายงาน R12 - Group YRT Claim PAA

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1037664573
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## EDW-RCC-RP0xx สำหรับออกรายงาน R12 - Group YRT Claim PAA ให้ฝ่ายคณิตศาสตร์

Process การออกรายงานมีเงื่อนไขดังนี้

1. สถานะดำเนินการจะต้องเป็น "ประมวลผลสำเร็จ" และผู้ใช้ทำการกดยืนยันข้อมูล จากหน้าจอ [EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930152455)
2. ระบบนำปี และเดือนที่ได้รับจากหน้าจอ ไปหาที่ตาราง [tx_rcc_output_r12](http://wiki.thaisamut.co.th/display/RDSADW/tx_rcc_output_r12)
3. ทำการ Generate ข้อมูลไปยัง Excel file โดยมีรายละเอียดดังนี้Share drive ให้วางไฟล์ไว้ที่ **$(Default Path)\IFRS17\Report R\XXXXXX_to_XXXXXX_YYYYYYYYYYYYYY** โดยที่ **XXXXXX** แทนข้อมูล Period และ **YYYYYYYYYYYYYY** แทนข้อมูลวันเวลาที่ประมวลผล
4. ชื่อไฟล์เป็น **R12_GroupYRT Claim_YYYYMM_to_YYYYMM.csv**
5. ให้ Sorting ตาม Period, PortfolioID

1. ใช้ข้อมูลจากตาราง [tx_rcc_output_r12](http://wiki.thaisamut.co.th/display/RDSADW/tx_rcc_output_r12) เพื่อออกรายงาน R12 ดังนี้ | No | CSV Column Name | Source - [tx_rcc_output_r12](http://wiki.thaisamut.co.th/display/RDSADW/tx_rcc_output_r12) | | --- | --- | --- | | 1 | Period | tx_rcc_output_r12.period | | 2 | PolicyNumber | tx_rcc_output_r12.policy_no | | 3 | PolicyYear | tx_rcc_output_r12.policy_year | | 4 | EffectiveDate | tx_rcc_output_r12.effective_date | | 5 | EndofCoverageDate | tx_rcc_output_r12.end_coverage_date | | 6 | PortfolioID | tx_rcc_output_r12.portfolio_id | | 7 | SaleChannel | tx_rcc_output_r12.sales_channel | | 8 | SalesChannelCode | tx_rcc_output_r12.sales_channel_code | | 9 | BusinessLine | tx_rcc_output_r12.business_line | | 10 | CertificateNo | tx_rcc_output_r12.certificate_no | | 11 | ClaimNo | tx_rcc_output_r12.claim_no | | 12 | ClaimEventDate | tx_rcc_output_r12.claim_event_date | | 13 | ClaimReportedDate | tx_rcc_output_r12.claim_reported_date | | 14 | ClaimStatus | tx_rcc_output_r12.claim_status | | 15 | ApproveDate | tx_rcc_output_r12.approve_date | | 16 | ClaimPaidDate | tx_rcc_output_r12.claim_paid_date | | 17 | Age | tx_rcc_output_r12.age | | 18 | Sex | tx_rcc_output_r12.sex | | 19 | AmountLife | tx_rcc_output_r12.amount_life | | 20 | AccidentDeath | tx_rcc_output_r12.accident_death | | 21 | MedAccident | tx_rcc_output_r12.med_accident | | 22 | AmountTPD | tx_rcc_output_r12.amount_tpd | | 23 | AmountIPD | tx_rcc_output_r12.amount_ipd | | 24 | AmountOPD | tx_rcc_output_r12.amount_opd | | 25 | AmountDental | tx_rcc_output_r12.amount_dental | | 26 | AmountOther | tx_rcc_output_r12.amount_other | | 27 | ReturnPremium | tx_rcc_output_r12.return_premium | | 28 | ExgratiaFlag | tx_rcc_output_r12.exgratia_flag |