# 07-02 Mapping Template SOA Report (Estimate)

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1132102096  
> **Page ID:** 1132102096  
> **Path:** Home / Current Version / 03. User Interface Specification / 07. หน้าจอประมวลผล Estimate / 07-02 Mapping Template SOA Report (Estimate)

---

ตัวอย่างไฟล์ Template SOA Report
ตัวอย่างไฟล์: [SOA_Est_THREL_Ind_CI50_Rider_202212.xlsx](/download/attachments/1132102096/SOA_Est_THREL_Ind_CI50_Rider_202212.xlsx?version=4&modificationDate=1747893922438&api=v2)

***หมายเหตุ:***

- *รูปแบบการแสดงผลทั้งหมดให้อ้างอิงตามตัวอย่างไฟล์*
- *Export File เป็น excel*

รับ Parameter จากหน้าจอประมวลผล Estimate
| ข้อมูล | Parameter | ตัวอย่างข้อมูล |
| --- | --- | --- |
| ID ของรายการ | {EST_HD_ID} | 1 |
| Reinsurer | {REINSURER_CODE} | Thaire |
| Treaty Code | {TREATY_CODE} | THREL_Ind_CI50_Rider |
| Facultative | {FACULT_FLAG} | FALSE |
| Period | {PERIOD} | 202201 |
| Template File ID | {TEMPLATE_ID} | 432 |
| Template File Name | {TEMPLATE_NAME} | GIB_Ind_ORD_Med |

การตั้งชื่อไฟล์
หลักการตั้งชื่อไฟล์:

1. SOA_Est_[[tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).treaty_code]_[[tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).period]
2. ตรวจสอบ Facultative  [![](http://jira.thaisamut.co.th/images/icons/issuetypes/task.png)IRI-4063](http://jira.thaisamut.co.th/browse/IRI-4063) - [New-RI] ปรับเงื่อนไขการตั้งชื่อไฟล์ SOA (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved)  กรณี {FACULT_FLAG} = 'TRUE' > SOA_Est_[[tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).treaty_code]_[[tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).period]_Facกรณี {FACULT_FLAG} = 'FALSE' > SOA_Est_[[tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).treaty_code]_[[tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).period]

ตัวอย่างเช่น SOA_Est_ThaireRPUL_202201_Fac

การตั้งชื่อ Sheet
หลักการตั้งชื่อ Sheet

- Sheet ที่ 1: SOA-Internal_[[tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).period [YYYY]] ตัวอย่างเช่น SOA-Internal_2022
- Sheet ที่ 2: SOA-External_[[tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).period] ตัวอย่างเช่น SOA-External_202212

เงื่อนไขการดึงข้อมูล
1. เงื่อนไขการดึงข้อมูลในแต่ละ Sheet มีดังนี้ SOA-Internal: ทำการดึงข้อมูลจาก Table [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa) ที่ปีของ period ตรงกับ ปีของ parameter: {PERIOD} ทั้งหมด โดยตามขั้นตอนดังนี้ นำ parameter: {REINSURER_CODE}, parameter: {TREATY_CODE}, parameter: {PERIOD} ที่ได้จากข้อ 1 มาเทียบดังนี้parameter: {REINSURER_CODE} เทียบกับ [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).reinsurer_codeparameter: {TREATY_CODE} เทียบกับ [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).treaty_codeปี ของ parameter: {PERIOD} เทียบกับ ปีของ [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).periodจะได้ [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).idนำ [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).id มาเทียบกับ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).ri_est_hd_id และทำการดึงข้อมูลทั้งหมดตาม [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).ri_est_hd_id ที่ได้*****หมายเหตุ : กรณีที่บาง รายการ [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd) มีรายการไม่ครบทุก Period เช่น รายการ FAC ให้ระบบดึง [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd) ที่เป็น รายการล่าสุดมาแสดงในรายงานเสมอ  ถึงแม้ว่า [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).usage_status จะเป็น I ก็ตาม เพื่อให้ใน Report มีข้อมูลรายการครบทุกเดือน*** (suthanee.sa 04/07/2025)** **ตัวอย่างเช่น**parameter: {PERIOD} = 202205 ให้ดึงข้อมูล period 202201 - 202212SOA-External: ทำการดึงข้อมูล Table [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa) ตาม parameter: {PERIOD} โดยตามขั้นตอนดังนี้ นำ parameter: {REINSURER_CODE}, parameter: {TREATY_CODE}, parameter: {PERIOD} ที่ได้จากข้อ 1 มาเทียบดังนี้parameter: {REINSURER_CODE} เทียบกับ [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).reinsurer_codeparameter: {TREATY_CODE} เทียบกับ [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).treaty_codeปี ของ parameter: {PERIOD} เทียบกับ [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).periodจะได้ [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).idนำ [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).id มาเทียบกับ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).ri_est_hd_id และทำการดึงข้อมูลตาม [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).ri_est_hd_id ที่ได้**ตัวอย่างเช่น** period 202205 ให้ดึงข้อมูล period 202205

รายละเอียดข้อมูลในไฟล์
Sheet 1 : SOA-Internal
ตัวอย่าง Template SOA Report - Sheet Internal
แสดงรายละเอียด
**SOA-Internal**

| **EDW Treaty Code** | **Estimated / Actual** | **Fac.** | **YYYY - MM** | **NOP** | **RI Premium** | **RI Premium refund** | **RI commission** | **RI commission refund** | **RI claim amount** | **RI Claim expense** | **Profit commission** | **Net Balance due to (+) / due from (-) Reinsurer** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| THREL_Ind_CI50_Rider | Estimated | N | 2022-01 | 33,099 | 8,171,554.98 | - | 27,343.56 | 1,277.32 | 8,366,693.00 | 1,200.00 | - | (222,404.26) |
|  |  |  | 2022-02 | 34,639 | 8,756,351.17 | 2,500.45 | - | 4,500.00 | 14,088,185.00 | - | - | (5,329,834.28) |
|  |  |  | 2022-03 | 36,179 | 9,069,344.05 | 200.78 | 34,333.00 | - | 9,194,201.00 | 500.00 | - | (159,890.73) |
|  |  |  | 2022-04 | 37,719 | 9,044,576.75 | - | - | - | 8,547,194.00 | - | - | 497,382.75 |
|  |  |  | 2022-05 | 39,259 | 8,171,554.98 | 504.00 | 76,821.00 | - | 8,366,693.00 | 500.00 | - | (272,963.02) |
|  |  |  | 2022-06 | 40,799 | 8,756,351.17 | - | 5,332.00 | - | - | 1,000.00 | - | 8,750,019.17 |
|  |  |  | 2022-07 | 42,339 | 9,069,344.05 | 2,500.45 | - | - | 9,194,201.00 | - | - | (127,357.40) |
|  |  |  | 2022-08 | 43,879 | 9,044,576.75 | 4,509.00 | - | - | 547,194.00 | 500.00 | - | 8,492,373.75 |
|  |  |  | 2022-09 | 45,419 | 8,171,554.98 | 2,500.45 | - | 8,739.00 | 8,366,693.00 | 1,000.00 | - | (189,899.47) |
|  |  |  | 2022-10 | 46,959 | 8,756,351.17 | - | - | - | 4,088,185.00 | 1,500.00 | - | 4,666,666.17 |
|  |  |  | 2022-11 | 48,499 | 9,069,344.05 | - | - | - | 9,194,201.00 | 2,000.00 | - | (126,856.95) |
|  |  |  | 2022-12 | 50,039 | 608,696.00 | 91,342.83 | - | - | 250,000.00 | 500.00 | 851,471.05 | (584,617.88) |
| **Total** | **** | **** | **-** | **498,828** | **96,689,600.10** | **104,057.96** | **143,829.56** | **14,516.32** | **80,203,440.00** | **8,700.00** | **851,471.05** | **15,392,617.85** |

****

เงื่อนไขการ Mapping ข้อมูล
ส่วน Header
| ข้อมูล | เงื่อนไขการ Mapping ข้อมูล |
| --- | --- |
| SOA-Internal | Fix "SOA-Internal" |

ส่วน Detail
**การเรียงข้อมูล:**เรียงลำดับตาม period ([tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).peroid) จากน้อยไปมาก****

**หมายเหตุ:**

- กรณีข้อมูลเป็น 0 หรือ NULL ให้แสดงเป็น "-"
- กรณีจำนวนเงินติดลบ ให้แสดงเป็นวงเล็บ ตัวอย่างเช่น -127,357.40 แสดงเป็น (127,357.40)

| ข้อมูล | เงื่อนไขการ Mapping ข้อมูล |
| --- | --- |
| EDW Treaty Code | [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).treaty_codeแสดงเฉพาะแถวแรกของข้อมูล |
| Estimated / Actual | Fix "Estimated"แสดงเฉพาะแถวแรกของข้อมูล |
| Fac. | [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).facult_flag กรณีเป็น true ให้แสดง "Y"กรณีเป็น false ให้แสดง "N"แสดงเฉพาะแถวแรกของข้อมูล |
| YYYY - MM | [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).peroid [YYYY] + "-" + [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).peroid [MM]กรณีไม่มีค่าแสดง 0 |
| NOP | [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).nopกรณีไม่มีค่าแสดง 0 |
| RI Premium | [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).total_ri_premกรณีไม่มีค่าแสดง 0 |
| RI Premium refund | [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).total_ri_prem_refundกรณีไม่มีค่าแสดง 0 |
| RI commission | [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).total_ri_commกรณีไม่มีค่าแสดง 0 |
| RI commission refund | [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).total_ri_comm_refundกรณีไม่มีค่าแสดง 0 |
| RI claim amount | [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).total_ri_claim_amountกรณีไม่มีค่าแสดง 0 |
| RI Claim expense | [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).total_ri_claim_expenseกรณีไม่มีค่าแสดง 0 |
| Profit commission | [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).total_profit_commกรณีไม่มีค่าแสดง 0 |
| Net Balance due to (+) / due from (-) Reinsurer | [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).net_balance_due_to_reinsurerกรณีไม่มีค่าแสดง 0 |
| Total |
| YYYY - MM | แสดง - |
| NOP | ผลรวมของ NOPกรณีไม่มีค่าแสดง 0 |
| RI Premium | ผลรวมของ RI Premiumกรณีไม่มีค่าแสดง 0 |
| RI Premium refund | ผลรวมของ RI Premium refundกรณีไม่มีค่าแสดง 0 |
| RI commission | ผลรวมของ RI commissionกรณีไม่มีค่าแสดง 0 |
| RI commission refund | ผลรวมของ RI commission refundกรณีไม่มีค่าแสดง 0 |
| RI claim amount | ผลรวมของ RI claim amountกรณีไม่มีค่าแสดง 0 |
| RI Claim expense | ผลรวมของ RI Claim expenseกรณีไม่มีค่าแสดง 0 |
| Profit commission | ผลรวมของ Profit commissionกรณีไม่มีค่าแสดง 0 |
| Net Balance due to Reinsurer | ผลรวมของ Net Balance due to Reinsurerกรณีไม่มีค่าแสดง 0 |

ส่วน Footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | คำอธิบายเพิ่มเติม | Format | Example |
| --- | --- | --- | --- | --- | --- |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm |  |  | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  |  |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่สร้างไฟล์ : ""วันที่ประมวลผล : " |  |  |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | กรณี Estimate[tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).created_dateกรณี Actual[tx_ri_act_hd](http://wiki.thaisamut.co.th/display/RDSINRI/25.+tx_ri_act_hd).created_date | Format : dd/mm/yyyy ปีคศ. hh:mm |  |  | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้สร้างไฟล์ : ""ผู้ประมวลผล : " |  |  |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | กรณี Estimate[tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).created_byกรณี Actual[tx_ri_act_hd](http://wiki.thaisamut.co.th/display/RDSINRI/25.+tx_ri_act_hd).created_by |  |  |  | edw_actuarial_01 |

Sheet 2 : SOA-External
ตัวอย่าง Template SOA Report - Sheet External
แสดงรายละเอียด
| **Statement of Account** |
| --- |
| **December, 2022** |
|  |  |  |  |  |  |  |  |  |  |  |  |
| No. 2022.12 |  |  |  |  |  |  |  |  |  |  | Date : 06.02.2024 |
| Reinsurer : Thaire Life Assurance Public Co., Ltd. |  |  |  |  |  |  |  |  |  |  | Currency : THB |
| Treaty : CI50 Rider Reinsurance Business |  |  |  |  |  |  |  |  |  |  | Ceding company : Ocean Life |
| Treaty Effective Date : June 1, 2019 |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |
| **DUE TO REINSURER** | **DUE FROM REINSURER** |
| Reinsurance premium : | New Business | - LIFE |  |  | - | Commission : | 1 st yr. | - LIFE |  |  | - |
|  |  | - AD&D |  |  | - |  |  | - AD&D |  |  | - |
|  |  | - TPD |  |  | - |  |  | - TPD |  |  | - |
|  |  | - TTD |  |  | - |  |  | - TTD |  |  | - |
|  |  | - MEDICAL |  |  | 245,440.00 |  |  | - MEDICAL |  |  | - |
|  | TOTAL |  |  | 245,440.00 |  | TOTAL |  |  | - |
|  | Renewal Business | - LIFE |  |  | - |  | Renewal | - LIFE |  |  | - |
|  | (1 st yr.) | - AD&D |  |  | - |  |  | - AD&D |  |  | - |
|  |  | - TPD |  |  | - |  |  | - TPD |  |  | - |
|  |  | - TTD |  |  | - |  |  | - TTD |  |  | - |
|  |  | - MEDICAL |  |  | - |  |  | - MEDICAL |  |  | - |
|  | TOTAL |  |  | - |  | TOTAL |  |  | - |
|  | Renewal Business | - LIFE |  |  | - | Premium Refund : | 1 st yr. | - LIFE |  |  | - |
|  | (Renewal) | - AD&D |  |  | - |  |  | - AD&D |  |  | - |
|  |  | - TPD |  |  | - |  |  | - TPD |  |  | - |
|  |  | - TTD |  |  | - |  |  | - TTD |  |  | - |
|  |  | - MEDICAL |  |  | 363,256.00 |  |  | - MEDICAL |  |  | 29,315.50 |
|  | TOTAL |  |  | 363,256.00 |  | TOTAL |  |  | 29,315.50 |
| Commission Refund : | 1 st yr. | - LIFE |  |  | - |  | Renewal | - LIFE |  |  | - |
|  |  | - AD&D |  |  | - |  |  | - AD&D |  |  | - |
|  |  | - TPD |  |  | - |  |  | - TPD |  |  | - |
|  |  | - TTD |  |  | - |  |  | - TTD |  |  | - |
|  |  | - MEDICAL |  |  | - |  |  | - MEDICAL |  |  | 53,226.33 |
|  | TOTAL |  |  | - |  | TOTAL |  |  | 53,226.33 |
|  | Renewal | - LIFE |  |  | - |  | 1 st yr. Claim | - LIFE |  |  | - |
|  |  | - AD&D |  |  | - |  |  | - AD&D |  |  | - |
|  |  | - TPD |  |  | - |  |  | - TPD |  |  | - |
|  |  | - TTD |  |  | - |  |  | - TTD |  |  | - |
|  |  | - MEDICAL |  |  | - |  |  | - MEDICAL |  |  | 5,730.00 |
|  | TOTAL |  |  | - |  | TOTAL |  |  | 5,730.00 |
|  | 1 st yr. Claim | - LIFE |  |  | - |  | Renewal Claim | - LIFE |  |  | - |
|  |  | - AD&D |  |  | - |  |  | - AD&D |  |  | - |
|  |  | - TPD |  |  | - |  |  | - TPD |  |  | - |
|  |  | - TTD |  |  | - |  |  | - TTD |  |  | - |
|  |  | - MEDICAL |  |  | - |  |  | - MEDICAL |  |  | 3,071.00 |
|  | TOTAL |  |  | - |  | TOTAL |  |  | 3,071.00 |
|  | Renewal Claim | - LIFE |  |  | - | Claim : | 1 st yr. | - LIFE |  |  | - |
|  |  | - AD&D |  |  | - |  |  | - AD&D |  |  | - |
|  |  | - TPD |  |  | - |  |  | - TPD |  |  | - |
|  |  | - TTD |  |  | - |  |  | - TTD |  |  | - |
|  |  | - MEDICAL |  |  | - |  |  | - MEDICAL |  |  | 50,000.00 |
|  |  |  |  |  |  |  |  |  |  |  |  |
|  | TOTAL |  |  | - |  | TOTAL |  |  | 50,000.00 |
| Revival Premiums | 1 st yr. | - LIFE |  |  | - |  | Renewal | - LIFE |  |  | - |
|  |  | - AD&D |  |  | - |  |  | - AD&D |  |  | - |
|  |  | - TPD |  |  | - |  |  | - TPD |  |  | - |
|  |  | - TTD |  |  | - |  |  | - TTD |  |  | - |
|  |  | - MEDICAL |  |  | - |  |  | - MEDICAL |  |  | 200,000.00 |
|  | TOTAL |  |  | - |  | TOTAL |  |  | 200,000.00 |
|  | Renewal | - LIFE |  |  | - |  | Claim Expenses | - INVESTIGATION FEE |  |  | - |
|  |  | - AD&D |  |  | - |  |  | - LEGAL FEE |  |  | - |
|  |  | - TPD |  |  | - |  |  | - EX GRATIA- MEDICAL EVIDENCE |  |  | 500.00 |
|  |  | - TTD |  |  | - |  | TOTAL |  |  | 500.00 |
|  |  | - MEDICAL |  |  | - | Admin. Commission (Remittance) : |  |  |  |  | - |
|  | TOTAL |  |  | - | Experience Refund Share : |  |  |  |  | - |
|  |  |  |  |  |  | Profit Commission : |  |  |  |  | 851,471.05 |
| **SUB TOTAL** |  |  |  |  | **608,696.00** | **SUB TOTAL** |  |  |  |  | **1,193,313.88** |
| **DUE TO REINSURER** |  |  |  |  |  | **DUE FROM REINSURER** |  |  |  |  | **584,617.88** |
| Remark: |  |  |  |  |  |  |  |  |  |  |  |

เงื่อนไขการ Mapping ข้อมูล
ส่วน Header
| ข้อมูล | เงื่อนไขการ Mapping ข้อมูล |
| --- | --- |
| Statement of Account | Fix "Statement of Account" |
| January, 2022 | [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).period [MMMM] แปลงเป็นชื่อเดือนภาษาอังกฤษ + ", " + [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).period [YYYY] |
| No. 2022.01 | "No. " + [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).period [YYYY] + "." + [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).period [MM] |
| Reinsurer : Thaire Life Assurance Public Co., Ltd. | ตรวจสอบ Facultative (suthanee.sa 17/09/2025)กรณี {FACULT_FLAG} = 'TRUE' > "Reinsurer : " + [cf_reinsurer](http://wiki.thaisamut.co.th/display/RDSINRI/cf_reinsurer).reinsurer_name + "(Fac)"กรณี {FACULT_FLAG} = 'FALSE' > "Reinsurer : " + [cf_reinsurer](http://wiki.thaisamut.co.th/display/RDSINRI/cf_reinsurer).reinsurer_name |
| Treaty : CI50 Rider Reinsurance Business | "Treaty : " + [cf_treaty](http://wiki.thaisamut.co.th/display/RDSINRI/01.+cf_treaty).treaty_name |
| Treaty Effective Date : June 1, 2019 | "Treaty Effective Date : " + [cf_treaty](http://wiki.thaisamut.co.th/display/RDSINRI/01.+cf_treaty).effective_date_from |
| Date : 06.02.2024 | "Date : " + system date |
| Currency : THB | Fix "Currency : THB" |
| Ceding company : Ocean Life | Fix "Ceding company : Ocean Life" |

ส่วน Detail
**Step1 :** นำ parameter: {TEMPLATE_ID} ไปเทียบกับ [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_template_file_id

**Step2 :** ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id ตามรายละเอียดดังนี้

**หมายเหตุ:** กรณีข้อมูลเป็น 0 หรือ NULL ให้แสดงเป็น "-"

แสดงรายละเอียด
| ข้อมูล | เงื่อนไขการ Mapping ข้อมูล |
| --- | --- |
| **DUE TO REINSURER** |
| Reinsurance premium : |
| New Business |
| - LIFE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 1กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - AD&D | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 2กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TPD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 3กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TTD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 4กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - MEDICAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 5กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (1, 2, 3, 4, 5) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| Renewal Business (1 st yr.) |
| - LIFE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 6กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_renew_1y_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - AD&D | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 7กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_renew_1y_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TPD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 8กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_renew_1y_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TTD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 9กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_renew_1y_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - MEDICAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 10กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_renew_1y_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (6, 7, 8, 9, 10) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_renew_1y_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| Renewal Business (Renewal) |
| - LIFE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 11กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - AD&D | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 12กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TPD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 13กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TTD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 14กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - MEDICAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 15กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_renew_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (11, 12, 13, 14, 15) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| Commission Refund : |
| 1 st yr. |
| - LIFE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 16กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - AD&D | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 17กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TPD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 18กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TTD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 19กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - MEDICAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 20กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (16, 17, 18, 19, 20) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| Renewal |
| - LIFE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 21กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - AD&D | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 22กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TPD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 23กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TTD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 24กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - MEDICAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 25กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_renew_medicalมาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (21, 22, 23, 24, 25) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| 1 st yr. Claim |
| - LIFE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 26กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_new_claim_lifeมาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - AD&D | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 27กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_new_claim_addมาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TPD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 28กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_new_claim_tpdมาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TTD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 29กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_new_claim_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - MEDICAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 30กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_new_claim_medicalมาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (26, 27, 28, 29, 30) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_new_claim_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| Renewal Claim |
| - LIFE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 31กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_renew_claim_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - AD&D | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 32กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_renew_claim_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TPD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 33กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_renew_claim_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TTD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 34กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_renew_claim_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - MEDICAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 35กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_renew_claim_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (31, 32, 33, 34, 35) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_refund_renew_claim_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| Revival Premiums |
| 1 st yr. |
| - LIFE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 36กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).revival_prem_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - AD&D | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 37กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).revival_prem_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TPD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 38กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).revival_prem_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TTD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 39กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).revival_prem_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - MEDICAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 40กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).revival_prem_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (36, 37, 38, 39, 40) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).revival_prem_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| Renewal |
| - LIFE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 41กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).revival_prem_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - AD&D | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 42กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).revival_prem_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TPD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 43กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).revival_prem_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TTD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 44กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).revival_prem_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - MEDICAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 45กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).revival_prem_renew_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (41, 42, 43, 44, 45) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).revival_prem_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| SUB TOTAL | [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).sub_total_due_to_reinsurerกรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| DUE TO REINSURER | [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).due_to_reinsurer[tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).due_to_reinsurer > 0 ให้แสดง [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).due_to_reinsurer[tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).due_to_reinsurer <= 0 ให้แสดงค่าว่าง |
| **DUE FROM REINSURER** |
| Commission : |
| 1 st yr. |
| - LIFE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 46กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - AD&D | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 47กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TPD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 48กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TTD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 49กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - MEDICAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 50กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (46, 47, 48, 49, 50) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| Renewal |
| - LIFE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 51กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - AD&D | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 52กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TPD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 53กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TTD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 54กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - MEDICAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 55กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_renew_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (51, 52, 53, 54, 55) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).comm_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| Premium Refund : |
| 1 st yr. |
| - LIFE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 56กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - AD&D | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 57กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TPD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 58กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TTD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 59กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - MEDICAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 60กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (56, 57, 58, 59, 60) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| Renewal |
| - LIFE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 61กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - AD&D | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 62กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TPD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 63กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TTD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 64กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - MEDICAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 65กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_renew_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (61, 62, 63, 64, 65) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| 1 st yr. Claim |
| - LIFE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 66กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_new_claim_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - AD&D | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 67กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_new_claim_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TPD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 68กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_new_claim_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TTD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 69กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_new_claim_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - MEDICAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 70กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_new_claim_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (66, 67, 68, 69, 70) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_new_claim_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| Renewal Claim |
| - LIFE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 71กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_renew_claim_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - AD&D | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 72กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_renew_claim_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TPD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 73กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_renew_claim_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TTD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 74กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_renew_claim_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - MEDICAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 75กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_renew_claim_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (71, 72, 73, 74, 75) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).prem_refund_renew_claim_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| Claim : |
| 1 st yr. |
| - LIFE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 76กรณีพบข้อมูลให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).claim_new_life มาแสดง (suthanee.sa 08/07/2025)กรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - AD&D | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 77กรณีพบข้อมูลให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).claim_new_add มาแสดง (suthanee.sa 08/07/2025)กรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TPD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 78กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).claim_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TTD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 79กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).claim_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - MEDICAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 80กรณีพบข้อมูลให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).claim_new_medical มาแสดง (suthanee.sa 08/07/2025)กรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (76, 77, 78, 79, 80) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).claim_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| Renewal |
| - LIFE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 81กรณีพบข้อมูลให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).claim_renew_life มาแสดง (suthanee.sa 08/07/2025) กรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - AD&D | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 82กรณีพบข้อมูลให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).claim_renew_add มาแสดง (suthanee.sa 08/07/2025)กรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TPD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 83กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).claim_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - TTD | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 84กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).claim_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - MEDICAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 85กรณีพบข้อมูลให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).claim_renew_medical มาแสดง (suthanee.sa 08/07/2025) กรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (81, 82, 83, 84, 85) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).claim_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| Claim Expenses |
| - INVESTIGATION FEE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 86กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).claim_exp_investigation_fee มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - LEGAL FEE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 87กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).claim_exp_legal_fee มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| - EX GRATIA- MEDICAL EVIDENCE | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 88กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).claim_exp_ex_gratia มาแสดงกรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).claim_exp_med มาแสดง กรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| TOTAL | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id in (86, 87, 88) กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).claim_exp_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| Admin. Commission (Remittance) : | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 89กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).admin_comm_remittance มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| Experience Refund Share : | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 90กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).experience_refund_share มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| Profit Commission : | ค้นหา [cf_soa_template](http://wiki.thaisamut.co.th/display/RDSINRI/cf_soa_template).cf_soa_column_id = 91กรณีพบข้อมูล ให้นำ [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).profit_comm มาแสดง กรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| SUB TOTAL | [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).sub_total_due_from_reinsurerกรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |
| DUE FROM REINSURER | [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).due_from_reinsurer[tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).due_from_reinsurer < 0 ให้แสดง [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).due_from_reinsurer (ให้แสดงค่าเป็น บวกเสมอ)[tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).due_from_reinsurer >= 0 ให้แสดงค่าว่าง |

ส่วน Footer
| ข้อมูล | เงื่อนไขการ Mapping ข้อมูล |
| --- | --- |
| Remark: | [tx_ri_est_soa](http://wiki.thaisamut.co.th/display/RDSINRI/37.+tx_ri_est_soa).remark |

| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | คำอธิบายเพิ่มเติม | Format | Example |
| --- | --- | --- | --- | --- | --- |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm |  |  | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  |  |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่สร้างไฟล์ : ""วันที่ประมวลผล : " |  |  |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | กรณี Estimate[tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).created_dateกรณี Actual[tx_ri_act_hd](http://wiki.thaisamut.co.th/display/RDSINRI/25.+tx_ri_act_hd).created_date | Format : dd/mm/yyyy ปีคศ. hh:mm |  |  | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้สร้างไฟล์ : ""ผู้ประมวลผล : " |  |  |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | กรณี Estimate[tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).created_byกรณี Actual[tx_ri_act_hd](http://wiki.thaisamut.co.th/display/RDSINRI/25.+tx_ri_act_hd).created_by |  |  |  | edw_actuarial_01 |

บันทึก Log ผู้ทำการ Export File หลังจากออกรายงานเรียบร้อยแล้ว
หลังจากที่ระบบทำการออกรายงานเรียบร้อยแล้ว ให้ทำการบันทึก log ลง Table
lg_export_report
โดยมีรายละเอียดดังนี้
| **Attribute Name** | เงื่อนไขการ Mapping ข้อมูล | ตัวอย่างข้อมูล |
| --- | --- | --- |
| lg_export_report_id | running no. | 1 |
| report_file_name | ชื่อไฟล์รายงาน | SOA_Act_THREL_Ind_ORD_2019_2024Q1.xlsx |
| created_by | username ของผู้กดออกรายงาน | edw_actuarial_01 |
| created_date | Now() | 2024-04-05 10:03:59 |
