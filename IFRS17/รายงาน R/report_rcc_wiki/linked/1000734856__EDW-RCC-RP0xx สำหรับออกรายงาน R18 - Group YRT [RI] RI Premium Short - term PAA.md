# EDW-RCC-RP0xx สำหรับออกรายงาน R18 - Group YRT [RI] RI Premium Short - term PAA

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1000734856
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## EDW-RCC-RP0xx สำหรับออกรายงาน R18 - Group YRT [RI] RI Premium Short - term PAA ให้ฝ่ายคณิตศาสตร์

Process การออกรายงานมีเงื่อนไขดังนี้

1. สถานะดำเนินการจะต้องเป็น "ประมวลผลสำเร็จ" และผู้ใช้ทำการกดยืนยันข้อมูล จากหน้าจอ [EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930152455)
2. ระบบนำปี และเดือนที่ได้รับจากหน้าจอ ไปหาที่ตาราง [tx_rcc_output_r18](http://wiki.thaisamut.co.th/pages/viewpage.action?title=tx_rcc_output_r18&spaceKey=RDSADW)
3. ทำการ Generate ข้อมูลไปยัง Excel file โดยมีรายละเอียดดังนี้Share drive ให้วางไฟล์ไว้ที่ **$(Default Path)\IFRS17\Report R\XXXXXX_to_XXXXXX_YYYYYYYYYYYYYY** โดยที่ **XXXXXX** แทนข้อมูล Period และ **YYYYYYYYYYYYYY** แทนข้อมูลวันเวลาที่ประมวลผล
4. ชื่อไฟล์เป็น **R18_ReinGroupYRT_PreamiumCeded****_YYYYMM_to_YYYYMM.csv**
5. ให้ Sorting ตาม Period, PortfolioID

1. ใช้ข้อมูลจากตาราง [tx_rcc_output_r18](http://wiki.thaisamut.co.th/pages/viewpage.action?title=tx_rcc_output_r18&spaceKey=RDSADW) เพื่อออกรายงาน R18 ดังนี้ | No | CSV Column Name | Source - [tx_rcc_output_r18](http://wiki.thaisamut.co.th/display/RDSADW/tx_rcc_output_r18) | | --- | --- | --- | | 1 | Period | tx_rcc_output_r18.period | | 2 | PolicyNumber | tx_rcc_output_r18.policy_no | | 3 | PortfolioID | tx_rcc_output_r18.portfolio_id | | 4 | RIPortfolioID | tx_rcc_output_r18.ri_portfolio_id | | 5 | SalesChannel | tx_rcc_output_r18.sales_channel | | 6 | BusinessLine | tx_rcc_output_r18.business_line | | 7 | TreatyCode | tx_rcc_output_r18.treaty_code | | 8 | RIModeOfPayment | tx_rcc_output_r18.ri_mode_of_payment | | 9 | RIPayFrom | tx_rcc_output_r18.ri_pay_from | | 10 | RIPayTo | tx_rcc_output_r18.ri_pay_to | | 11 | PremiumType | tx_rcc_output_r18.premium_type | | 12 | SaleOption | tx_rcc_output_r18.sale_option | | 13 | RIGrossPremiumAmountLife | tx_rcc_output_r18.ri_gross_premium_life | | 14 | RIGrossPremiumAmountAccidentDeath | tx_rcc_output_r18.ri_gross_premium_accident_death | | 15 | RIGrossPremiumAmountMedAccident | tx_rcc_output_r18.ri_gross_premium_med_accident | | 16 | RIGrossPremiumAmountTPD | tx_rcc_output_r18.ri_gross_premium_tpd | | 17 | RIGrossPremiumAmountIPD | tx_rcc_output_r18.ri_gross_premium_ipd | | 18 | RIGrossPremiumAmountOPD | tx_rcc_output_r18.ri_gross_premium_opd | | 19 | RIGrossPremiumAmountDental | tx_rcc_output_r18.ri_gross_premium_dental | | 20 | RIGrossPremiumAmountOther | tx_rcc_output_r18.ri_gross_premium_other | | 21 | RIType | tx_rcc_output_r18.ri_type | | 22 | SubRIGroupID | tx_rcc_output_r18.sub_ri_group_id | | 23 | RIPremiumLife | tx_rcc_output_r18.ri_premium_life | | 24 | RIPremiumAccident | tx_rcc_output_r18.ri_premium_accident | | 25 | RIPremiumMedical | tx_rcc_output_r18.ri_premium_medical | | 26 | PolicyYear | tx_rcc_output_r18.policy_year |