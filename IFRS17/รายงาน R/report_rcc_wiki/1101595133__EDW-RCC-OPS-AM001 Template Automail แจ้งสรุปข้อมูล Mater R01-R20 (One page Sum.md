# EDW-RCC-OPS-AM001 Template Automail แจ้งสรุปข้อมูล Mater R01-R20 (One page Summary)

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1101595133
- http status: 200
- source: Playwright MCP (seed page)

---
###### หน้าจอที่เกี่ยวข้อง

- [EDW-RCC-RP99 OnePageSummary_R01-R20 คณิตศาสตร์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1062961379)

###### Description

| No. | Topic | Description | |
| --- | --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | สำหรับแจ้งสรุปข้อมูล Mater R01-R20 (One page Summary) | |
| 2 | ผู้ใช้งาน (Target Users) | ฝ่ายคณิตศาสตร์ | |
| 3 | ข้อมูลที่ป้อนสู่ระบบ(Input) | ข้อมูลจากการประมวลผลรายงานคณิตศาสตร์ R01 - R20 | |
| 4 | ข้อมูลที่ได้จากระบบ(Output) | Email รายงานผลสรุปข้อมูล Mater R01-R20 (One page Summary) | |
| 5 | การกระทำกับหน้าจอ(Actions) | - | |
| 6 | อธิบายรายละเอียด(Description) | รายละเอียดของ Auto Email แจ้งแจ้งสรุปข้อมูล Mater R01-R20 (One page Summary) มีดังนี้ **รูปแบบ Auto Email ในระบบ** To | $emailRecipient |
| Subject | [EDW] แจ้งสรุปข้อมูล Mater R01-R20 ประจำเดือน ($period_from)**_**($period_to) | | |
| Text | เรียน ทีมคณิตศาสตร์เรื่อง แจ้งสรุปข้อมูล Mater R01-R20 โดยข้อมูลที่ผ่านการ Reconclie และอนุมัติจากฝ่ายบัญชีเรียบร้อยแล้ว **ช่วงประมวลผลข้อมูล** **: $period_from **ถึง** $period_to ให้แสดงเป็น ปี พ.ศ.****วัน เวลา ที่ประมวลผล : $created_date โดยใช้ Format เป็น DD/MM/YYYY HH:MM:SS** **ให้แสดงเป็น ปี พ.ศ.****Shared Drive Folder : $folder_name** Table | No of transactions | Amount |
| R01_OP_PremiumReceipt | $no_of_transaction | $sum_amount | |
| R02_OP_CommissionOverride | $no_of_transaction | $sum_amount | |
| R03_OP_Claim | $no_of_transaction | $sum_amount | |
| R04_OP_BenefitPayment | $no_of_transaction | $sum_amount | |
| R05_ULP_PremiumReceipt | $no_of_transaction | $sum_amount | |
| R06_ULP_CommissionOverride | $no_of_transaction | $sum_amount | |
| R07_ULP_Claim | $no_of_transaction | $sum_amount | |
| R08_ULP_BenefitPayment | $no_of_transaction | $sum_amount | |
| R09_ULP_OtherIncomeFee | $no_of_transaction | $sum_amount | |
| R10_GroupYRT_PremiumReceipt | $no_of_transaction | $sum_amount | |
| R11_GroupYRT_CommissionOverride | $no_of_transaction | $sum_amount | |
| R12_GroupYRT_Claim | $no_of_transaction | $sum_amount | |
| R13_ExpenseAllocation_By_Sub_GroupID | $no_of_transaction | $sum_amount | |
| R13_ExpenseAllocation_By_PortfolioID | $no_of_transaction | $sum_amount | |
| R13_AdvertisingBranding | $no_of_transaction | $sum_amount | |
| R13_AdvertisingProduct | $no_of_transaction | $sum_amount | |
| R13_SalesPromotion | $no_of_transaction | $sum_amount | |
| R14_PolicyLoan_AP (Repay/Prepay) | $no_of_transaction | $sum_amount | |
| R14_PolicyLoan_AP (Takeup/Compound Interest) | $sum_amount | | |
| R15_ReinIndiv_PremiumCeded | $no_of_transaction | $sum_amount | |
| R16_Reinlndiv_Commission | $no_of_transaction | $sum_amount | |
| R17_ReinIndiv_ClaimExpRec | $no_of_transaction | $sum_amount | |
| R18_ReinGroupYRT_PremiumCeded | $no_of_transaction | $sum_amount | |
| R19_ReinGroupYRT_Commission | $no_of_transaction | $sum_amount | |
| R20_ReinGroupYRT_ClaimExpRec | $no_of_transaction | $sum_amount | |

โดยรายละเอียดทั้งหมดตามไฟล์แนบ

**อีเมล์ฉบับนี้ส่งจากระบบอัตโนมัติ กรุณาอย่าตอบกลับ**

ขอแสดงความนับถือ

#### ตัวแปร ที่เปลี่ยนตามข้อมูลในระบบ

| ตัวแปร | คำอธิบาย |
| --- | --- |
| $emailRecipient | ผู้รับอีเมลฝ่ายคณิตศาสตร์ ดังนี้[porapol.li@ocean.co.th](mailto:porapol.li@ocean.co.th)[prapas.si@ocean.co.th](mailto:prapas.si@ocean.co.th)[passawon.wa@ocean.co.th](mailto:passawon.wa@ocean.co.th)[panupun.pl@ocean.co.th](mailto:panupun.pl@ocean.co.th) |
| $period | แสดงรอบการประมวลผลประจำเดือน ในรูปแบบ MM/YYYY รายละเอียด ดังนี้MM คือ เดือนแบบ 01-12YYYY คือ ปี พ.ศ. แบบ 2500-9999 |
| $table | ข้อมูลรายงาน |
| $no_of_transaction | แสดงจำนวน No of transactions |
| $sum_amount | แสดงจำนวนยอดรวม Amount |

**ตัวอย่าง Auto Email ที่ได้รับกรณีระบบตรวจสอบข้อมูลไฟล์ เรียบร้อยแล้ว**

| To | , , , | | |
| --- | --- | --- | --- |
| Subject | [EDW] แจ้งสรุปข้อมูล Mater R01-R20 ประจำเดือน 12/2566 | | |
| Text | Table | No of transactions | Amount |
| R01_OP_PremiumReceipt | 20 | 511,000.00 | |
| R02_OP_CommissionOverride | 14 | 305,400.00 | |
| R03_OP_Claim | 471 | 68,488.00 | |
| R04_OP_BenefitPayment | 471 | 71,364.00 | |
| R05_ULP_PremiumReceipt | 18 | 500,000.00 | |
| R06_ULP_CommissionOverride | 14 | 305,400.00 | |
| R07_ULP_Claim | 471 | 54,533.00 | |
| R08_ULP_BenefitPayment | 471 | 60,626.00 | |
| R09_ULP_OtherIncomeFee | 471 | 63,249.00 | |
| R10_GroupYRT_PremiumReceipt | 16 | 2,310,000.00 | |
| R11_GroupYRT_CommissionOverride | 14 | 2,771,150.00 | |
| R12_GroupYRT_Claim | 157 | 43,900.00 | |
| R13_ExpenseAllocation_By_Sub_GroupID | - - | 164,778,868.67 | |
| R13_ExpenseAllocation_By_PortfolioID | 164,778,868.67 | | |
| R13_AdvertisingBranding | 3,781,667.90 | | |
| R13_AdvertisingProduct | 616,549.81 | | |
| R13_SalesPromotion | 13,087,632.85 | | |
| R14_PolicyLoan_AP (Repay/Prepay) | 66,511 | 609,325.00 | |
| R14_PolicyLoan_AP (Takeup/Compound Interest) | 2,759,842.00 | | |
| R15_ReinIndiv_PremiumCeded | 7,719 | 28,571,608.00 | |
| R16_Reinlndiv_Commission | 3,653 | 29,201,997.00 | |
| R17_ReinIndiv_ClaimExpRec | 3,653 | 31,917,288.00 | |
| R18_ReinGroupYRT_PremiumCeded | 7,755 | 1,544,549,787.47 | |
| R19_ReinGroupYRT_Commission | 7,719 | 1,544,309,695.22 | |
| R20_ReinGroupYRT_ClaimExpRec | 7,719 | 1,544,309,695.22 | |

โดยรายละเอียดทั้งหมดตามไฟล์แนบ

**อีเมล์ฉบับนี้ส่งจากระบบอัตโนมัติ กรุณาอย่าตอบกลับ**

ขอแสดงความนับถือ