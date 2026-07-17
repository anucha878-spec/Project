# EDW-RCC-RP0xx สำหรับออกรายงาน R04 - Ordinary Products [OP] Benefit payment GMM

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=975897314
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## EDW-RCC-RP0xx สำหรับออกรายงาน R04 - Ordinary Products [OP] Benefit payment GMM ให้ฝ่ายคณิตศาสตร์

Process การออกรายงานมีเงื่อนไขดังนี้

1. สถานะดำเนินการจะต้องเป็น "ประมวลผลสำเร็จ" และผู้ใช้ทำการกดยืนยันข้อมูล จากหน้าจอ [EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930152455)
2. ระบบนำปี และเดือนที่ได้รับจากหน้าจอ ไปหาที่ตาราง [tx_rcc_output_r04](http://wiki.thaisamut.co.th/display/RDSADW/tx_rcc_output_r04)
3. ทำการ Generate ข้อมูลไปยัง Excel file โดยมีรายละเอียดดังนี้Share drive ให้วางไฟล์ไว้ที่ **$(Default Path)\IFRS17\Report R\XXXXXX_to_XXXXXX_YYYYYYYYYYYYYY** โดยที่ **XXXXXX** แทนข้อมูล Period และ **YYYYYYYYYYYYYY** แทนข้อมูลวันเวลาที่ประมวลผล
4. ชื่อไฟล์เป็น **R04_OP_BenefitPayment_YYYYMM_to_YYYYMM.csv**
5. ให้ Sorting ตาม Period, PortfolioID

1. ใช้ข้อมูลจากตาราง [tx_rcc_output_r04](http://wiki.thaisamut.co.th/display/RDSADW/tx_rcc_output_r04) เพื่อออกรายงาน R04 ดังนี้ | No | CSV Column Name | Source - [tx_rcc_output_r04](http://wiki.thaisamut.co.th/display/RDSADW/tx_rcc_output_r04) | | --- | --- | --- | | 1 | Period | tx_rcc_output_r04.period | | 2 | PolicyNumber | tx_rcc_output_r04.policy_no | | 3 | PortfolioID | tx_rcc_output_r04.portfolio_id | | 4 | PlanCode | tx_rcc_output_r04.plan_code | | 5 | SalesChannel | tx_rcc_output_r04.sales_channel | | 6 | SalesChannelCode | tx_rcc_output_r04.sales_channel_code | | 7 | BusinessLine | tx_rcc_output_r04.business_line | | 8 | EffectiveDate | tx_rcc_output_r04.effective_date | | 9 | ModeOfPayment | tx_rcc_output_r04.mode_of_payment | | 10 | AnnualPremium | tx_rcc_output_r04.annual_premium | | 11 | ModalPremium | tx_rcc_output_r04.modal_premium | | 12 | PaidDate | tx_rcc_output_r04.paid_date | | 13 | PolicyLoanPrincipalAmount | tx_rcc_output_r04.policy_loan_principal_amount | | 14 | PolicyLoanInterestAmount | tx_rcc_output_r04.policy_loan_interest_amount | | 15 | APLPrincipalAmount | tx_rcc_output_r04.apl_principal_amount | | 16 | APLInterestAmount | tx_rcc_output_r04.apl_interest_amount | | 17 | OtherLiabilitiesAmount | tx_rcc_output_r04.other_liabilities_amount | | 18 | AnnualCoupon | tx_rcc_output_r04.annual_coupon | | 19 | MaturityBenefit | tx_rcc_output_r04.maturity_benefit | | 20 | AnnuityBenefit | tx_rcc_output_r04.annuity_benefit | | 21 | CertainAnnuityBenefit | tx_rcc_output_r04.certain_annuity_benefit | | 22 | LifeAnnuityBenefit | tx_rcc_output_r04.life_annuity_benefit | | 23 | NGMaturityBenefit | tx_rcc_output_r04.ng_maturity_benefit | | 24 | NGAnnualCoupon | tx_rcc_output_r04.ng_annual_coupon | | 25 | NGAnnuityBenefit | tx_rcc_output_r04.ng_annuity_benefit | | 26 | SurrenderBenefit | tx_rcc_output_r04.surrender_benefit | | 27 | Lapse | tx_rcc_output_r04.lapse | | 28 | Other | tx_rcc_output_r04.other | | 29 | SubGroupID | tx_rcc_output_r04.sub_group_id |