# tx_mps_landing_claim

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_claim
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_landing_claim-TOC) ] [ [Convention](#tx_mps_landing_claim-Convention) ] [ [Table : tx_mps_landing_claim](#tx_mps_landing_claim-Table:tx_mps_landing_claim) ]

## Convention

Description: ข้อมูล Transaction MPS เตรียมข้อมูลสินไหม Claim

## Table : tx_mps_landing_claim

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_landing_claim_id | PK | Numeric | 8 | | not null | รหัสของตาราง | | | | 1 |
| 2 | claim_no | | varchar | 25 | | not null | Channel | Mapping Field | | | |
| สาขา และ E-Claim | [tx_ncl_apv_header](http://wiki.thaisamut.co.th/display/RDSCLMS/tx_ncl_apv_header).claim_no | | | | | | | | | | |
| Web Claim & API Web | [tx_ncl_web_header](http://wiki.thaisamut.co.th/display/RDSCLMS/tx_ncl_web_header).claim_no | | | | | | | | | | |
| Fax Claim | [tx_ncl_fax_header](http://wiki.thaisamut.co.th/display/RDSCLMS/tx_ncl_fax_header).claim_no | | | | | | | | | | |

6900/12-2566/00014-013policy_no

varchar20 not null

เลขกรมธรรม์

| Channel | Mapping Field |
| --- | --- |
| สาขา และ E-Claim | [tx_ncl_apv_header](http://wiki.thaisamut.co.th/display/RDSCLMS/tx_ncl_apv_header).policy_no |
| Web Claim & API Web | [tx_ncl_web_header](http://wiki.thaisamut.co.th/display/RDSCLMS/tx_ncl_web_header).policy_no |
| Fax Claim | [tx_ncl_fax_header](http://wiki.thaisamut.co.th/display/RDSCLMS/tx_ncl_fax_header).policy_no |

7615514affliction_code

varchar40

รหัสหมวดความคุ้มครอง

| Channel | Mapping Field |
| --- | --- |
| สาขา และ E-Claim | [tx_ncl_category](http://wiki.thaisamut.co.th/display/RDSCLMS/tx_ncl_category).affliction_code |
| Web Claim & API Web | [tx_ncl_category](http://wiki.thaisamut.co.th/display/RDSCLMS/tx_ncl_category).affliction_code |
| Fax Claim | [tx_ncl_fax_bill_category](http://wiki.thaisamut.co.th/display/RDSCLMS/tx_ncl_fax_bill_category).affliction_code |

CI17_Lethal_1103015policy_type varchar4

ประเภทกรมธรรม์

- [ms_ncl_coverage_type](http://wiki.thaisamut.co.th/display/RDSCLMS/ms_ncl_coverage_type).policy_type
ORD6rider_id numeric10,0

รหัสสัญญาเพิ่มเติม

- [ms_ncl_coverage_type](http://wiki.thaisamut.co.th/display/RDSCLMS/ms_ncl_coverage_type).rider_id
417benefit_stage varchar255

ระดับความรุนแรงของโรคร้ายแรง

- [ms_ncl_coverage_type](http://wiki.thaisamut.co.th/display/RDSCLMS/ms_ncl_coverage_type).benefit_state
disease8benefit_abbr varchar20

รหัสย่อชื่อกลุ่มความคุ้มครองของโรคร้ายแรง

- [ms_ncl_coverage_type](http://wiki.thaisamut.co.th/display/RDSCLMS/ms_ncl_coverage_type).benefit_abbr
CI029status_claim varchar10

สถานะการอนุมัติสินไหม

| Channel | Mapping Field |
| --- | --- |
| สาขา และ E-Claim | [tx_ncl_apv_header](http://wiki.thaisamut.co.th/display/RDSCLMS/tx_ncl_apv_header).approval_status |
| Web Claim & API Web | [tx_ncl_web_header](http://wiki.thaisamut.co.th/display/RDSCLMS/tx_ncl_web_header).approve_status |
| Fax Claim | [tx_ncl_fax_relation_policy](http://wiki.thaisamut.co.th/display/RDSCLMS/tx_ncl_fax_relation_policy).approval_status |

AP

10channel varchar20

ช่องทาง Claim

BRAN,ECLM,FCLM,WCLM,TRUEH,I-CLAIM11transaction_date Timestamp not nullวันที่ดำเนินการ 2022-08-18 12:37:3712created_date Timestamp not nullวันที่สร้างรายการ 2022-08-18 12:37:3713created_by Varchar50 not nullผุ้สร้างรายการ boss14updated_date Timestamp วันที่อัพเดทรายการ 2022-08-18 12:37:3715updated_by Varchar50 ผู้อัพเดทรายการล่าสุด boss16migrate_flag Varchar1

Y = Migrate ข้อมูลเคลมจากฐานข้อมูลเก่า **ห้ามลบ**

N = ไม่ใช่การ Migrate ข้อมูลเคลมจากฐานข้อมูลเก่า

Y