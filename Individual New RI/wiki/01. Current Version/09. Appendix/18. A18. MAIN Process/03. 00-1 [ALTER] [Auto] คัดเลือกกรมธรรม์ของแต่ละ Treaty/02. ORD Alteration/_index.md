# ORD Alteration

> **Source:** http://wiki.thaisamut.co.th/display/RDSINRI/ORD+Alteration  
> **Page ID:** 1342079520  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty / ORD Alteration

---

ดึงข้อมูลกรมธรรม์
| **ดึงข้อมูลจาก Table [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt)** |
| --- |
| ข้อมูล | Description | Table | Field | Condition |
| Policy No | เลขที่กรมธรรม์ | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | policy_no |  |
| Base Plan Code | รหัสแบบประกันหลัก | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | plan_code |  |
| Rider Code | รหัสแบบประกันเพิ่มเติม | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | rider_code |  |
| Alteration Date | วันที่เปลี่ยนแปลง | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | alteration_date | ต้องอยู่ภายในช่วงของ Period การประมวลผล |
| Alteration Effective Date | วันที่มีผลสลักหลัง | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | alter_eff_date |  |
| Created Date | วันที่สร้างรายการ | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | created_date |  |
| Update Date | วันที่ปรับปรุงรายการล่าสุด | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | updated_date |  |
| Alteration Update Date | วันที่ปรับปรุงรายการสลักหลัง | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | update_alter_date |  |
| Lapse Date | วันที่ขาดผล | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | lapse_date |  |
| Maturity Date | วันที่สิ้นสุดกรมธรรม์ | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | maturity_date |  |
| Initial SA | ทุนประกันใหม่ BASE | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | initial_sa |  |
| Initial SA RIDER | ทุนประกันใหม่ RIDER | [tx_ri_ord_new_renew_dt](http://wiki.thaisamut.co.th/x/UgFgQg) | initial_sa_rider |  |
| Previous Initial SA | ทุนประกันเดิม | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | previous_initial_sa |  |
| Premium Base | ค่าเบี้ยแบบประกันหลัก | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | premium_base |  |
| Premium Extra Base | ค่าเบี้ยพิเศษแบบประกันหลัก | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | premium_extra_base |  |
| Alteration Code | รหัสประเภทสลักหลัง | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | alteration_code | **IRI-PS-002 นำเข้าข้อมูลกรมธรรม์สามัญ (Alteration) Auto** แสดงรายละเอียด [WS_RI_03 ค้นหากรมธรรม์ส่งประกันต่อสามัญ (Alteration) Auto](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1096450888)[IRI-PS-002 นำเข้าข้อมูลกรมธรรม์สามัญ (Alteration) Auto](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1113850412)[tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alteration_codeAlterationผลการ พิจารณาสถานะนำไปประมวลผล APเปลี่ยนแปลง Extra Premium- นำไปประมวลผล Alteration - กรณีถ้ามีการ Alteration ตรงครบรอบกับการส่ง Reinsurer ให้ออก Report ใน Sheet New & Renew - กรณีเป็นการคำนวณเพื่อเรียกเงินคืน จะจัดเก็บข้อมูลเป็นค่าบวก - กรณีเป็นการคำนวณเพื่อจ่ายเงิน จะจัดเก็บข้อมูลเป็นค่าลบA - ทำ 2 ครั้ง ไม่ทำหากตรงรอบ new renewCCCancel Rider(โดยลูกค้า)- นำไปประมวลผล Alteration - กรณีที่มีการส่ง Reinsurer หลังวันที่มีการ Alteration จะต้องคำนวณ Advance Premium Refund คืนทั้งหมดB - คืน Advance ทั้งหมดCDCancel Rider(โดยบริษัท)- นำไปประมวลผล Alteration - กรณีที่มีการส่ง Reinsurer หลังวันที่มีการ Alteration จะต้องคำนวณ Advance Premium Refund คืนทั้งหมดB - คืน Advance ทั้งหมดDEDecline- นำไปประมวลผล Alteration - ต้องนำทุกรายการที่เคยมีการส่ง Reinsurer มาประมวลผล Refund ทั้งหมด (รวมทั้ง Base และ Rider)C- คืนทุกรอบที่เคยส่งEXExtended- นำไปประมวลผล Alteration - กรณีถ้ามีการ Alteration ตรงครบรอบกับการส่ง Reinsurer ให้ออก Report ใน Sheet New & Renew - กรณีเป็นการคำนวณเพื่อเรียกเงินคืน จะจัดเก็บข้อมูลเป็นค่าบวก - กรณีเป็นการคำนวณเพื่อจ่ายเงิน จะจัดเก็บข้อมูลเป็นค่าลบE - ทำ 2 ครั้ง ไม่ทำหากตรงรอบ new renew และ ทำ Cancel Rider คืน Advance ทั้งหมดINเพิ่มทุน- นำไปประมวลผล Alteration - กรณีถ้ามีการ Alteration ตรงครบรอบกับการส่ง Reinsurer ให้ออก Report ใน Sheet New & Renew - กรณีเป็นการคำนวณเพื่อเรียกเงินคืน จะจัดเก็บข้อมูลเป็นค่าบวก - กรณีเป็นการคำนวณเพื่อจ่ายเงิน จะจัดเก็บข้อมูลเป็นค่าลบA - ทำ 2 ครั้ง ไม่ทำหากตรงรอบ new renewLPLapse- นำไปประมวลผล Alteration - กรณีที่มีการส่ง Reinsurer หลังวันที่มีการ Alteration จะต้องคำนวณ Advance Premium Refund คืนทั้งหมดB - คืน Advance ทั้งหมดNANew Rider(โดยลูกค้า)ไม่นำไปประมวลผล Alteration NBNew Rider(โดยบริษัท)ไม่นำไปประมวลผล Alteration REลดทุน- นำไปประมวลผล Alteration - กรณีถ้ามีการ Alteration ตรงครบรอบกับการส่ง Reinsurer ให้ออก Report ใน Sheet New & Renew - กรณีเป็นการคำนวณเพื่อเรียกเงินคืน จะจัดเก็บข้อมูลเป็นค่าบวก - กรณีเป็นการคำนวณเพื่อจ่ายเงิน จะจัดเก็บข้อมูลเป็นค่าลบA - ทำ 2 ครั้ง ไม่ทำหากตรงรอบ new renewREReinstate- นำไปประมวลผล Alteration - กรณีถ้ามีการ Alteration ตรงครบรอบกับการส่ง Reinsurer ให้ออก Report ใน Sheet New & Renew - กรณีเป็นการคำนวณเพื่อเรียกเงินคืน จะจัดเก็บข้อมูลเป็นค่าบวก - กรณีเป็นการคำนวณเพื่อจ่ายเงิน จะจัดเก็บข้อมูลเป็นค่าลบD - ทำตามรอบที่เกิดขึ้นของวันที่เริ่มต้นสัญญาRPReduced Paidup- นำไปประมวลผล Alteration - กรณีถ้ามีการ Alteration ตรงครบรอบกับการส่ง Reinsurer ให้ออก Report ใน Sheet New & Renew - กรณีเป็นการคำนวณเพื่อเรียกเงินคืน จะจัดเก็บข้อมูลเป็นค่าบวก - กรณีเป็นการคำนวณเพื่อจ่ายเงิน จะจัดเก็บข้อมูลเป็นค่าลบE - ทำ 2 ครั้ง ไม่ทำหากตรงรอบ new renew และ ทำ Cancel Rider คืน Advance ทั้งหมดSDSurrender- นำไปประมวลผล Alteration - กรณีที่มีการส่ง Reinsurer หลังวันที่มีการ Alteration จะต้องคำนวณ Advance Premium Refund คืนทั้งหมดB - คืน Advance ทั้งหมดASAuto Surrender [![](http://jira.thaisamut.co.th/images/icons/issuetypes/task.png)IRI-4151](http://jira.thaisamut.co.th/browse/IRI-4151) - [New-RI] เพิ่มเงื่อนไขประมวลผล ALTER สำหรับ Auto surrender (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) - นำไปประมวลผล Alteration - กรณีที่มีการส่ง Reinsurer หลังวันที่มีการ Alteration จะต้องคำนวณ Advance Premium Refund คืนทั้งหมดB - คืน Advance ทั้งหมด |
| Alteration | ผลการ พิจารณา | สถานะนำไปประมวลผล |  |
| AP | เปลี่ยนแปลง Extra Premium | - นำไปประมวลผล Alteration - กรณีถ้ามีการ Alteration ตรงครบรอบกับการส่ง Reinsurer ให้ออก Report ใน Sheet New & Renew - กรณีเป็นการคำนวณเพื่อเรียกเงินคืน จะจัดเก็บข้อมูลเป็นค่าบวก - กรณีเป็นการคำนวณเพื่อจ่ายเงิน จะจัดเก็บข้อมูลเป็นค่าลบ | A - ทำ 2 ครั้ง ไม่ทำหากตรงรอบ new renew |
| CC | Cancel Rider(โดยลูกค้า) | - นำไปประมวลผล Alteration - กรณีที่มีการส่ง Reinsurer หลังวันที่มีการ Alteration จะต้องคำนวณ Advance Premium Refund คืนทั้งหมด | B - คืน Advance ทั้งหมด |
| CD | Cancel Rider(โดยบริษัท) | - นำไปประมวลผล Alteration - กรณีที่มีการส่ง Reinsurer หลังวันที่มีการ Alteration จะต้องคำนวณ Advance Premium Refund คืนทั้งหมด | B - คืน Advance ทั้งหมด |
| DE | Decline | - นำไปประมวลผล Alteration - ต้องนำทุกรายการที่เคยมีการส่ง Reinsurer มาประมวลผล Refund ทั้งหมด (รวมทั้ง Base และ Rider) | C- คืนทุกรอบที่เคยส่ง |
| EX | Extended | - นำไปประมวลผล Alteration - กรณีถ้ามีการ Alteration ตรงครบรอบกับการส่ง Reinsurer ให้ออก Report ใน Sheet New & Renew - กรณีเป็นการคำนวณเพื่อเรียกเงินคืน จะจัดเก็บข้อมูลเป็นค่าบวก - กรณีเป็นการคำนวณเพื่อจ่ายเงิน จะจัดเก็บข้อมูลเป็นค่าลบ | E - ทำ 2 ครั้ง ไม่ทำหากตรงรอบ new renew และ ทำ Cancel Rider คืน Advance ทั้งหมด |
| IN | เพิ่มทุน | - นำไปประมวลผล Alteration - กรณีถ้ามีการ Alteration ตรงครบรอบกับการส่ง Reinsurer ให้ออก Report ใน Sheet New & Renew - กรณีเป็นการคำนวณเพื่อเรียกเงินคืน จะจัดเก็บข้อมูลเป็นค่าบวก - กรณีเป็นการคำนวณเพื่อจ่ายเงิน จะจัดเก็บข้อมูลเป็นค่าลบ | A - ทำ 2 ครั้ง ไม่ทำหากตรงรอบ new renew |
| LP | Lapse | - นำไปประมวลผล Alteration - กรณีที่มีการส่ง Reinsurer หลังวันที่มีการ Alteration จะต้องคำนวณ Advance Premium Refund คืนทั้งหมด | B - คืน Advance ทั้งหมด |
| NA | New Rider(โดยลูกค้า) | ไม่นำไปประมวลผล Alteration |  |
| NB | New Rider(โดยบริษัท) | ไม่นำไปประมวลผล Alteration |  |
| RE | ลดทุน | - นำไปประมวลผล Alteration - กรณีถ้ามีการ Alteration ตรงครบรอบกับการส่ง Reinsurer ให้ออก Report ใน Sheet New & Renew - กรณีเป็นการคำนวณเพื่อเรียกเงินคืน จะจัดเก็บข้อมูลเป็นค่าบวก - กรณีเป็นการคำนวณเพื่อจ่ายเงิน จะจัดเก็บข้อมูลเป็นค่าลบ | A - ทำ 2 ครั้ง ไม่ทำหากตรงรอบ new renew |
| RE | Reinstate | - นำไปประมวลผล Alteration - กรณีถ้ามีการ Alteration ตรงครบรอบกับการส่ง Reinsurer ให้ออก Report ใน Sheet New & Renew - กรณีเป็นการคำนวณเพื่อเรียกเงินคืน จะจัดเก็บข้อมูลเป็นค่าบวก - กรณีเป็นการคำนวณเพื่อจ่ายเงิน จะจัดเก็บข้อมูลเป็นค่าลบ | D - ทำตามรอบที่เกิดขึ้นของวันที่เริ่มต้นสัญญา |
| RP | Reduced Paidup | - นำไปประมวลผล Alteration - กรณีถ้ามีการ Alteration ตรงครบรอบกับการส่ง Reinsurer ให้ออก Report ใน Sheet New & Renew - กรณีเป็นการคำนวณเพื่อเรียกเงินคืน จะจัดเก็บข้อมูลเป็นค่าบวก - กรณีเป็นการคำนวณเพื่อจ่ายเงิน จะจัดเก็บข้อมูลเป็นค่าลบ | E - ทำ 2 ครั้ง ไม่ทำหากตรงรอบ new renew และ ทำ Cancel Rider คืน Advance ทั้งหมด |
| SD | Surrender | - นำไปประมวลผล Alteration - กรณีที่มีการส่ง Reinsurer หลังวันที่มีการ Alteration จะต้องคำนวณ Advance Premium Refund คืนทั้งหมด | B - คืน Advance ทั้งหมด |
| AS | Auto Surrender [![](http://jira.thaisamut.co.th/images/icons/issuetypes/task.png)IRI-4151](http://jira.thaisamut.co.th/browse/IRI-4151) - [New-RI] เพิ่มเงื่อนไขประมวลผล ALTER สำหรับ Auto surrender (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) | - นำไปประมวลผล Alteration - กรณีที่มีการส่ง Reinsurer หลังวันที่มีการ Alteration จะต้องคำนวณ Advance Premium Refund คืนทั้งหมด | B - คืน Advance ทั้งหมด |
| Alteration Case | คำอธิบายประเภทสลักหลัง | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | alteration_case |  |
| Policy Status | สถานะกรมธรรม์ | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | policy_status |  |
| Previous Policy Status | สถานะกรมธรรม์ก่อนหน้า | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | previous_policy_status |  |
| Commencement Date | วันที่เริ่มต้นสัญญา | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | commencement_date |  |
| Percent Copay (#COPAY Suthanee.sa 18/08/2025) | % copayment | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt) | copay_rate |  |

แยกสถานะ RE
RE1 = ลดทุน
RE2 = Reinstate
1. กรณี Alter Baseเปรียบเทียบ Previous Initial SA กับ Initial SAถ้า Previous Initial SA > Initial SA = RE1ถ้า Previous Initial SA = Initial SA = RE2
2. กรณี Alter Riderเปรียบเทียบ Previous Initial SA กับ Initial SA RIDERถ้า Previous Initial SA > Initial SA RIDER = RE1ถ้า Previous Initial SA = Initial SA RIDER = RE2

**หมายเหตุ** : กรณี Previous Initial SA < Initial SA RIDER หรือ Previous Initial SA < Initial SA = IN (เพิ่มทุน ไม่เกี่ยวกับส่วนนี้)

กระบวนการตรวจสอบรายการ Alter
1. ตรวจสอบ Treaty
**ตรวจสอบ Treaty เฉพาะ Rider หรือไม่**

ตรวจสอบ treaty ที่กำลังประมวลผลอยู่ ถ้า treaty_code = cf_lookup_catalog.lookup_key

ภายใต้ cf_lookup_catalog.parent_id = 1007400

![](/download/attachments/1342079520/check.png?version=2&modificationDate=1779329586997&api=v2) ใช่ ดำเนินการต่อที่ข้อ 2 [click](/display/RDSINRI/ORD+Alteration)

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) ไม่ใช่ ดำเนินการต่อที่ข้อ 14 [click](#ORDAlteration-14)

2. รายการ Alter LP / SD / SA / 6
**รายการ Alter มี Alter Code เป็น LP / SD / SA หรือไม่**

ตรวจสอบรายการ Alteration ที่กำลังประมวลผล [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alteration_code ถ้ามีค่าเท่ากับ LP, SD, SA

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) ใช่ ดำเนินการต่อที่ข้อ 3 [click](#ORDAlteration-3)

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) ไม่ใช่ ดำเนินการต่อที่ข้อ 4 [click](#ORDAlteration-4)

3. มีรายการ CC CD ของ Rider
**รายการที่มีเลขกรมธรรม์เดียวกัน มีรายการ CC CD ของ Rider แยกออกมาหรือไม่**

ตรวจสอบ

[tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).policy_no ที่มีค่าตรงกัน

[tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).rider_code ไม่เป็นค่าว่าง

[tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alteration_code เท่ากับ CC หรือ CD

[tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alter_eff_date มีค่าอยู่ในรอบความคุ้มครองเดียวกันกับรายการ [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alteration_code ถ้ามีค่าเท่ากับ LP, SD, SA

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) ใช่ ดำเนินการต่อที่ข้อ 5 [click](#ORDAlteration-5)

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) ไม่ใช่ ดำเนินการต่อที่ข้อ 6 [click](#ORDAlteration-6)

4. รายการ CC CD
**รายการ Alter มี Alter Code เป็น CC CD หรือไม่**

ตรวจสอบรายการ Alteration ที่กำลังประมวลผล [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alteration_code ถ้ามีค่าเท่ากับ CC, CD

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) ใช่ ดำเนินการต่อที่ข้อ 5 [click](#ORDAlteration-5)

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) ไม่ใช่ ดำเนินการต่อที่ข้อ 13 [click](#ORDAlteration-13)

5. รายการ CC CD มีรายการ Claim ในรอบเดียวกัน (ไม่สนใจว่าจะเป็น Claim อะไร)
**รายการ CC CD มีรายการ Claim ในรอบเดียวกันหรือไม่ (ไม่สนใจว่าจะเป็น Claim อะไร)**

ตรวจสอบ

| [tx_ri_ord_alteration_dt](/display/RDSINRI/03.+tx_ri_ord_alteration_dt) |  | [tx_ri_ord_master_claim_dt](/display/RDSINRI/tx_ri_ord_master_claim_dt) | [tx_ri_ord_health_claim_dt](/display/RDSINRI/tx_ri_ord_health_claim_dt) |
| --- | --- | --- | --- |
| policy_no | เท่ากับ | policy_no | policy_no |
| rider_code | เท่ากับ | rider_code | claim_type |
| alteration_code เท่ากับ CC หรือ CD |  |  |  |
| alter_eff_date | อยู่ในรอบความคุ้มครองเดียวกับ (Coverage From - To)ตรวจสอบได้จากรายการที่ต้องไปหยิบมาทำรายการ | event_date | accident_date หรือ admit_date |

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) ใช่ ดำเนินการต่อที่ข้อ 7 [click](#ORDAlteration-7)

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) ไม่ใช่ ดำเนินการต่อที่ข้อ 8 [click](#ORDAlteration-8)

6. รายการนั้นเคยทำรายการเคลมหรือยัง
**รายการนั้นเคยมีการทำรายการเคลมหรือยัง**

ตรวจสอบ

| [tx_ri_ord_alteration_dt](/display/RDSINRI/03.+tx_ri_ord_alteration_dt) |  | [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD) |
| --- | --- | --- |
| policy_no | เท่ากับ | policy_no |
| plan_code | เท่ากับ | plan_code |
| alteration_code เท่ากับ LP, SD, SA |  |  |
| alter_eff_date | อยู่ในรอบของ | coverage_from - coverage_to |
|  |  | est_hd_id_claim ไม่เป็นค่าว่างหรือ NULL |

****

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) ใช่ ดำเนินการต่อที่ข้อ 11 [click](#ORDAlteration-11)

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) ไม่ใช่ ดำเนินการต่อที่ข้อ 12 [click](#ORDAlteration-12)

7. ไม่ทำทั้ง LP SD SA CC CD รอไปทำที่ Claim อย่างเดียว
เลือกหยิบรายการที่เกี่ยวข้องทั้งหมด จากนั้น

ไม่ทำรายการ Alter รายการนั้น (ข้ามรายการนั้น) ที่มี alteration_code เท่ากับ LP, SD, SA, CC, CD ที่มีข้อมูลตรงกับรายการเคลม

และจะไปทำรายการที่กระบวนการเคลมแทน (เพื่อไม่ให้เกิดการ Refund ซ้ำซ้อนหรืออาจจะไม่ครบถ้วน)

**[click](/pages/createpage.action?spaceKey=RDSINRI&title=Alter&linkCreation=true&fromPageId=1342079520)**

ค้นหารายการที่เคยส่งประกันต่อ Alter
ตรวจสอบรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD)

| [tx_ri_ord_alteration_dt](/display/RDSINRI/03.+tx_ri_ord_alteration_dt) |  | [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD) |  |
| --- | --- | --- | --- |
| policy_no | เท่ากับ | policy_no |  |
| plan_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE plan_code | กรณีที่มีทั้ง Base และ Rider หมายถึงการ Alter Rider |
| rider_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDERplan_code |
| alter_eff_date | อยู่ในรอบของ | coverage_from - coverage_to | วันที่ alter_eff_date อยู่ในรอบส่งประกันต่อใด เรียกว่า **รายการตรงรอบมีผล**รายการที่เกิดขึ้นก่อนรอบ alter_eff_date เรียกว่า **รายการก่อนวันมีผล**รายการที่เกิดขึ้นหลังรอบ alter_eff_date เรียกว่า **รายการหลังวันมีผล** |
|  | เลือกเฉพาะรายการที่ | refund_flag = NULL |  |

- กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).ri_act_id ไม่เป็นค่าว่าง ให้นำข้อมูลไปหารายละเอียดอื่น ๆกรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_base_auto_dt](/display/RDSINRI/30.+tx_ri_act_base_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_base_facult_dt](/display/RDSINRI/32.+tx_ri_act_base_facult_dt) กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_auto_dt](/display/RDSINRI/31.+tx_ri_act_rider_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_facult_dt](/display/RDSINRI/33.+tx_ri_act_rider_facult_dt)

8. รายการนั้นเคยทำรายการเคลมหรือยัง
**รายการนั้นเคยมีการทำรายการเคลมหรือยัง**

ตรวจสอบ

| [tx_ri_ord_alteration_dt](/display/RDSINRI/03.+tx_ri_ord_alteration_dt) |  | [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD) |
| --- | --- | --- |
| policy_no | เท่ากับ | policy_no |
| plan_code | เท่ากับ | plan_code |
| alteration_code เท่ากับ LP, SD, SA |  |  |
| alter_eff_date | อยู่ในรอบของ | coverage_from - coverage_to |
|  |  | est_hd_id_claim ไม่เป็นค่าว่างหรือ NULL |

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) ใช่ ดำเนินการต่อที่ข้อ 9 [click](/display/RDSINRI/ORD+Alteration)

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) ไม่ใช่ ดำเนินการต่อที่ข้อ 10 [click](#ORDAlteration-1)

9. ไม่ทำรายการที่ตรงรอบนั้น ทั้ง LP SD SA CC CD แต่ Refund รอบอื่นปกติ
เลือกหยิบรายการที่เกี่ยวข้องทั้งหมด จากนั้น ทำรายการ LP SD SA CC CD

- ไม่ทำ **รายการตรงรอบมีผล ของทุก Alteration Code (ระบบจะไปดำเนินการในขั้นตอนการเคลม)**
- ไม่ทำ **รายการที่ est_hd_id_alter หรือ est_hd_id_claim ไม่เป็นค่าว่างหรือ NULL**
- **กรณีมี CC หรือ CD ให้เลือกทำที่ CC และ CD เมื่อทำ LP SD SA ต้องไม่ทำ Rider ซ้ำในรอบนั้น**

**[click](/pages/createpage.action?spaceKey=RDSINRI&title=Alter&linkCreation=true&fromPageId=1342079520)**

ค้นหารายการที่เคยส่งประกันต่อ Alter
ตรวจสอบรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD)

| [tx_ri_ord_alteration_dt](/display/RDSINRI/03.+tx_ri_ord_alteration_dt) |  | [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD) |  |
| --- | --- | --- | --- |
| policy_no | เท่ากับ | policy_no |  |
| plan_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE plan_code | กรณีที่มีทั้ง Base และ Rider หมายถึงการ Alter Rider |
| rider_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDERplan_code |
| alter_eff_date | อยู่ในรอบของ | coverage_from - coverage_to | วันที่ alter_eff_date อยู่ในรอบส่งประกันต่อใด เรียกว่า **รายการตรงรอบมีผล**รายการที่เกิดขึ้นก่อนรอบ alter_eff_date เรียกว่า **รายการก่อนวันมีผล**รายการที่เกิดขึ้นหลังรอบ alter_eff_date เรียกว่า **รายการหลังวันมีผล** |
|  | เลือกเฉพาะรายการที่ | refund_flag = NULL |  |

- กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).ri_act_id ไม่เป็นค่าว่าง ให้นำข้อมูลไปหารายละเอียดอื่น ๆกรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_base_auto_dt](/display/RDSINRI/30.+tx_ri_act_base_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_base_facult_dt](/display/RDSINRI/32.+tx_ri_act_base_facult_dt) กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_auto_dt](/display/RDSINRI/31.+tx_ri_act_rider_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_facult_dt](/display/RDSINRI/33.+tx_ri_act_rider_facult_dt)

10. ทำรายการ CC CD ตามปกติ แต่ไม่ทำ LP SD SA ของรายการที่ตรงรอบ
เลือกหยิบรายการที่เกี่ยวข้องทั้งหมด จากนั้น ทำรายการ LP SD SA CC CD

- ทำ **รายการ CC หรือ CD ตรงรอบมีผล**
- **กรณีมี CC หรือ CD ให้เลือกทำที่ CC และ CD เมื่อทำ LP SD SA ต้องไม่ทำ Rider ซ้ำในรอบนั้น******
- ไม่ทำ **รายการที่ est_hd_id_alter หรือ est_hd_id_claim ไม่เป็นค่าว่างหรือ NULL**

**[click](/pages/createpage.action?spaceKey=RDSINRI&title=Alter&linkCreation=true&fromPageId=1342079520)**

ค้นหารายการที่เคยส่งประกันต่อ Alter
ตรวจสอบรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD)

| [tx_ri_ord_alteration_dt](/display/RDSINRI/03.+tx_ri_ord_alteration_dt) |  | [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD) |  |
| --- | --- | --- | --- |
| policy_no | เท่ากับ | policy_no |  |
| plan_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE plan_code | กรณีที่มีทั้ง Base และ Rider หมายถึงการ Alter Rider |
| rider_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDERplan_code |
| alter_eff_date | อยู่ในรอบของ | coverage_from - coverage_to | วันที่ alter_eff_date อยู่ในรอบส่งประกันต่อใด เรียกว่า **รายการตรงรอบมีผล**รายการที่เกิดขึ้นก่อนรอบ alter_eff_date เรียกว่า **รายการก่อนวันมีผล**รายการที่เกิดขึ้นหลังรอบ alter_eff_date เรียกว่า **รายการหลังวันมีผล** |
|  | เลือกเฉพาะรายการที่ | refund_flag = NULL |  |

- กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).ri_act_id ไม่เป็นค่าว่าง ให้นำข้อมูลไปหารายละเอียดอื่น ๆกรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_base_auto_dt](/display/RDSINRI/30.+tx_ri_act_base_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_base_facult_dt](/display/RDSINRI/32.+tx_ri_act_base_facult_dt) กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_auto_dt](/display/RDSINRI/31.+tx_ri_act_rider_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_facult_dt](/display/RDSINRI/33.+tx_ri_act_rider_facult_dt)

11. ทำรายการ LP / SD / SA / 6 ตามปกติ
เลือกหยิบรายการที่เกี่ยวข้องทั้งหมด จากนั้น ทำรายการ LP SD SA **แต่**

- ไม่ทำ **รายการตรงรอบมีผล**
- ไม่ทำ **รายการที่ est_hd_id_alter หรือ est_hd_id_claim ไม่เป็นค่าว่างหรือ NULL**

**[click](/pages/createpage.action?spaceKey=RDSINRI&title=CCCDLPSASD&linkCreation=true&fromPageId=1342079520)**

ค้นหารายการที่เคยส่งประกันต่อ Alter
ตรวจสอบรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD)

| [tx_ri_ord_alteration_dt](/display/RDSINRI/03.+tx_ri_ord_alteration_dt) |  | [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD) |  |
| --- | --- | --- | --- |
| policy_no | เท่ากับ | policy_no |  |
| plan_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE plan_code | กรณีที่มีทั้ง Base และ Rider หมายถึงการ Alter Rider |
| rider_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDERplan_code |
| alter_eff_date | อยู่ในรอบของ | coverage_from - coverage_to | วันที่ alter_eff_date อยู่ในรอบส่งประกันต่อใด เรียกว่า **รายการตรงรอบมีผล**รายการที่เกิดขึ้นก่อนรอบ alter_eff_date เรียกว่า **รายการก่อนวันมีผล**รายการที่เกิดขึ้นหลังรอบ alter_eff_date เรียกว่า **รายการหลังวันมีผล** |
|  | เลือกเฉพาะรายการที่ | refund_flag = NULL |  |

- กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).ri_act_id ไม่เป็นค่าว่าง ให้นำข้อมูลไปหารายละเอียดอื่น ๆกรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_base_auto_dt](/display/RDSINRI/30.+tx_ri_act_base_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_base_facult_dt](/display/RDSINRI/32.+tx_ri_act_base_facult_dt) กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_auto_dt](/display/RDSINRI/31.+tx_ri_act_rider_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_facult_dt](/display/RDSINRI/33.+tx_ri_act_rider_facult_dt)

12. ไม่ทำรายการที่ตรงรอบ แต่ทำรายการ Alter อื่นตาม Alter Code ปกติ
เลือกหยิบรายการที่เกี่ยวข้องทั้งหมด จากนั้น ทำรายการ ทำรายการ LP SD SA ปกติ **แต่**

- ไม่ทำ **รายการที่ est_hd_id_alter หรือ est_hd_id_claim ไม่เป็นค่าว่างหรือ NULL**

**[click](/pages/createpage.action?spaceKey=RDSINRI&title=Alter&linkCreation=true&fromPageId=1342079520)**

ค้นหารายการที่เคยส่งประกันต่อ Alter
ตรวจสอบรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD)

| [tx_ri_ord_alteration_dt](/display/RDSINRI/03.+tx_ri_ord_alteration_dt) |  | [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD) |  |
| --- | --- | --- | --- |
| policy_no | เท่ากับ | policy_no |  |
| plan_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE plan_code | กรณีที่มีทั้ง Base และ Rider หมายถึงการ Alter Rider |
| rider_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDERplan_code |
| alter_eff_date | อยู่ในรอบของ | coverage_from - coverage_to | วันที่ alter_eff_date อยู่ในรอบส่งประกันต่อใด เรียกว่า **รายการตรงรอบมีผล**รายการที่เกิดขึ้นก่อนรอบ alter_eff_date เรียกว่า **รายการก่อนวันมีผล**รายการที่เกิดขึ้นหลังรอบ alter_eff_date เรียกว่า **รายการหลังวันมีผล** |
|  | เลือกเฉพาะรายการที่ | refund_flag = NULL |  |

- กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).ri_act_id ไม่เป็นค่าว่าง ให้นำข้อมูลไปหารายละเอียดอื่น ๆกรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_base_auto_dt](/display/RDSINRI/30.+tx_ri_act_base_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_base_facult_dt](/display/RDSINRI/32.+tx_ri_act_base_facult_dt) กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_auto_dt](/display/RDSINRI/31.+tx_ri_act_rider_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_facult_dt](/display/RDSINRI/33.+tx_ri_act_rider_facult_dt)

13. ทำรายการ Alter ตาม Alter Code ปกติ
เลือกหยิบรายการที่เกี่ยวข้องทั้งหมด จากนั้น ทำรายการ Alter Code ปกติ

**[click](/pages/createpage.action?spaceKey=RDSINRI&title=Alter&linkCreation=true&fromPageId=1342079520)**

ค้นหารายการที่เคยส่งประกันต่อ Alter
ตรวจสอบรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD)

| [tx_ri_ord_alteration_dt](/display/RDSINRI/03.+tx_ri_ord_alteration_dt) |  | [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD) |  |
| --- | --- | --- | --- |
| policy_no | เท่ากับ | policy_no |  |
| plan_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE plan_code | กรณีที่มีทั้ง Base และ Rider หมายถึงการ Alter Rider |
| rider_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDERplan_code |
| alter_eff_date | อยู่ในรอบของ | coverage_from - coverage_to | วันที่ alter_eff_date อยู่ในรอบส่งประกันต่อใด เรียกว่า **รายการตรงรอบมีผล**รายการที่เกิดขึ้นก่อนรอบ alter_eff_date เรียกว่า **รายการก่อนวันมีผล**รายการที่เกิดขึ้นหลังรอบ alter_eff_date เรียกว่า **รายการหลังวันมีผล** |
|  | เลือกเฉพาะรายการที่ | refund_flag = NULL |  |

- กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).ri_act_id ไม่เป็นค่าว่าง ให้นำข้อมูลไปหารายละเอียดอื่น ๆกรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_base_auto_dt](/display/RDSINRI/30.+tx_ri_act_base_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_base_facult_dt](/display/RDSINRI/32.+tx_ri_act_base_facult_dt) กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_auto_dt](/display/RDSINRI/31.+tx_ri_act_rider_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_facult_dt](/display/RDSINRI/33.+tx_ri_act_rider_facult_dt)

14. รายการ Alter LP / SD / SA / 6
**รายการ Alter มี Alter Code เป็น LP / SD / SA หรือไม่**

ตรวจสอบรายการ Alteration ที่กำลังประมวลผล [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alteration_code ถ้ามีค่าเท่ากับ LP, SD, SA

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) ใช่ ดำเนินการต่อที่ข้อ 15 [click](#ORDAlteration-15)

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) ไม่ใช่ ดำเนินการต่อที่ข้อ 16 [click](#ORDAlteration-16)

15. มีรายการ CC CD ของ Rider
**รายการที่มีเลขกรมธรรม์เดียวกัน มีรายการ CC CD ของ Rider แยกออกมาหรือไม่**

ตรวจสอบ

[tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).policy_no ที่มีค่าตรงกัน

[tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).rider_code ไม่เป็นค่าว่าง

[tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alteration_code เท่ากับ CC หรือ CD

[tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alter_eff_date มีค่าอยู่ในรอบความคุ้มครองเดียวกันกับรายการ [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alteration_code ถ้ามีค่าเท่ากับ LP, SD, SA

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) ใช่ ดำเนินการต่อที่ข้อ 17 [click](#ORDAlteration-17)

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) ไม่ใช่ ดำเนินการต่อที่ข้อ 18 [click](#ORDAlteration-18)

16. ทำรายการ Alter ตาม Alter Code ปกติ
เลือกหยิบรายการที่เกี่ยวข้องทั้งหมด จากนั้น ทำรายการ Alter Code ปกติ

**[click](/pages/createpage.action?spaceKey=RDSINRI&title=Alter&linkCreation=true&fromPageId=1342079520)**

ค้นหารายการที่เคยส่งประกันต่อ Alter
ตรวจสอบรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD)

| [tx_ri_ord_alteration_dt](/display/RDSINRI/03.+tx_ri_ord_alteration_dt) |  | [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD) |  |
| --- | --- | --- | --- |
| policy_no | เท่ากับ | policy_no |  |
| plan_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE plan_code | กรณีที่มีทั้ง Base และ Rider หมายถึงการ Alter Rider |
| rider_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDERplan_code |
| alter_eff_date | อยู่ในรอบของ | coverage_from - coverage_to | วันที่ alter_eff_date อยู่ในรอบส่งประกันต่อใด เรียกว่า **รายการตรงรอบมีผล**รายการที่เกิดขึ้นก่อนรอบ alter_eff_date เรียกว่า **รายการก่อนวันมีผล**รายการที่เกิดขึ้นหลังรอบ alter_eff_date เรียกว่า **รายการหลังวันมีผล** |
|  | เลือกเฉพาะรายการที่ | refund_flag = NULL |  |

- กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).ri_act_id ไม่เป็นค่าว่าง ให้นำข้อมูลไปหารายละเอียดอื่น ๆกรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_base_auto_dt](/display/RDSINRI/30.+tx_ri_act_base_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_base_facult_dt](/display/RDSINRI/32.+tx_ri_act_base_facult_dt) กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_auto_dt](/display/RDSINRI/31.+tx_ri_act_rider_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_facult_dt](/display/RDSINRI/33.+tx_ri_act_rider_facult_dt)

17. รายการ CC CD มีรายการ Claim ในรอบเดียวกัน (ไม่สนใจว่าจะเป็น Claim อะไร)
**รายการ CC CD มีรายการ Claim ในรอบเดียวกันหรือไม่ (ไม่สนใจว่าจะเป็น Claim อะไร)**

ตรวจสอบ

| [tx_ri_ord_alteration_dt](/display/RDSINRI/03.+tx_ri_ord_alteration_dt) |  | [tx_ri_ord_master_claim_dt](/display/RDSINRI/tx_ri_ord_master_claim_dt) | [tx_ri_ord_health_claim_dt](/display/RDSINRI/tx_ri_ord_health_claim_dt) |
| --- | --- | --- | --- |
| policy_no | เท่ากับ | policy_no | policy_no |
| rider_code | เท่ากับ | rider_code | claim_type |
| alteration_code เท่ากับ CC หรือ CD |  |  |  |
| alter_eff_date | อยู่ในรอบความคุ้มครองเดียวกับ (Coverage From - To)ตรวจสอบได้จากรายการที่ต้องไปหยิบมาทำรายการ | event_date | accident_date หรือ admit_date |

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) ใช่ ดำเนินการต่อที่ข้อ 19 [click](#ORDAlteration-1)

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) ไม่ใช่ ดำเนินการต่อที่ข้อ 20 [click](/display/RDSINRI/ORD+Alteration)

18. รายการนั้นเคยทำรายการเคลมหรือยัง
**รายการนั้นเคยมีการทำรายการเคลมหรือยัง**

ตรวจสอบ

| [tx_ri_ord_alteration_dt](/display/RDSINRI/03.+tx_ri_ord_alteration_dt) |  | [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD) |
| --- | --- | --- |
| policy_no | เท่ากับ | policy_no |
| plan_code | เท่ากับ | plan_code |
| alteration_code เท่ากับ LP, SD, SA |  |  |
| alter_eff_date | อยู่ในรอบของ | coverage_from - coverage_to |
|  |  | est_hd_id_claim ไม่เป็นค่าว่างหรือ NULL |

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) ใช่ ดำเนินการต่อที่ข้อ 23 [click](#ORDAlteration-23)

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) ไม่ใช่ ดำเนินการต่อที่ข้อ 24 [click](/display/RDSINRI/ORD+Alteration)

19. ไม่ทำ CC CD รอไปทำที่ Claim อย่างเดียว แต่ทำ LP SD SA ปกติ
ไม่ทำ CC CD ที่ตรงรอบรายการเคลม รอไปทำที่ Claim อย่างเดียว แต่ทำ LP SD SA ปกติ และคืนเงินที่ Rider รอบอื่น ๆ ที่ไม่ตรงกับรอบเคลมตามปกติ

และจะไปทำรายการที่กระบวนการเคลมแทน (เพื่อไม่ให้เกิดการ Refund ซ้ำซ้อนหรืออาจจะไม่ครบถ้วน)

20. รายการนั้นเคยทำรายการเคลมหรือยัง
**รายการนั้นเคยมีการทำรายการเคลมหรือยัง**

ตรวจสอบ

| [tx_ri_ord_alteration_dt](/display/RDSINRI/03.+tx_ri_ord_alteration_dt) |  | [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD) |
| --- | --- | --- |
| policy_no | เท่ากับ | policy_no |
| plan_code | เท่ากับ | plan_code |
| alteration_code เท่ากับ LP, SD, SA |  |  |
| alter_eff_date | อยู่ในรอบของ | coverage_from - coverage_to |
|  |  | est_hd_id_claim ไม่เป็นค่าว่างหรือ NULL |

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) ใช่ ดำเนินการต่อที่ข้อ 21 [click](/display/RDSINRI/ORD+Alteration)

![](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) ไม่ใช่ ดำเนินการต่อที่ข้อ 22 [click](/display/RDSINRI/ORD+Alteration)

21. ไม่ทำรายการที่ตรงรอบนั้น ทั้ง CC CD แต่ Refund รอบอื่นปกติ
เลือกหยิบรายการที่เกี่ยวข้องทั้งหมด จากนั้น ทำรายการ LP SD SA **แต่**

- ไม่ทำรายการ CC CD ที่ตรงกันในรอบ **รายการตรงรอบมีผล** ไปทำที่รายการเคลมแทน

- ทำรายการตาม Alter Code LP SD SA  Plan Code และ Rider Code อื่นได้ตามปกติ
- ไม่ทำ **รายการที่ est_hd_id_alter หรือ est_hd_id_claim ไม่เป็น**ค่าว่างหรือ NULL****

**[click](/pages/createpage.action?spaceKey=RDSINRI&title=Alter&linkCreation=true&fromPageId=1342079520)**

ค้นหารายการที่เคยส่งประกันต่อ Alter
ตรวจสอบรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD)

| [tx_ri_ord_alteration_dt](/display/RDSINRI/03.+tx_ri_ord_alteration_dt) |  | [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD) |  |
| --- | --- | --- | --- |
| policy_no | เท่ากับ | policy_no |  |
| plan_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE plan_code | กรณีที่มีทั้ง Base และ Rider หมายถึงการ Alter Rider |
| rider_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDERplan_code |
| alter_eff_date | อยู่ในรอบของ | coverage_from - coverage_to | วันที่ alter_eff_date อยู่ในรอบส่งประกันต่อใด เรียกว่า **รายการตรงรอบมีผล**รายการที่เกิดขึ้นก่อนรอบ alter_eff_date เรียกว่า **รายการก่อนวันมีผล**รายการที่เกิดขึ้นหลังรอบ alter_eff_date เรียกว่า **รายการหลังวันมีผล** |
|  | เลือกเฉพาะรายการที่ | refund_flag = NULL |  |

- กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).ri_act_id ไม่เป็นค่าว่าง ให้นำข้อมูลไปหารายละเอียดอื่น ๆกรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_base_auto_dt](/display/RDSINRI/30.+tx_ri_act_base_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_base_facult_dt](/display/RDSINRI/32.+tx_ri_act_base_facult_dt) กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_auto_dt](/display/RDSINRI/31.+tx_ri_act_rider_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_facult_dt](/display/RDSINRI/33.+tx_ri_act_rider_facult_dt)

22. ทำ CC CD แยกของ Rider ตัวนั้น และทำ LP SD AS ของกรมและ Rider ตัวอื่นตามปกติ
เลือกหยิบรายการที่เกี่ยวข้องทั้งหมด จากนั้น ทำรายการ LP SD SA CC CD

- ไม่ทำ **รายการตรงรอบมีผล ของทุก Alteration Code (ระบบจะไปดำเนินการในขั้นตอนการเคลม)**
- ไม่ทำ **รายการที่ est_hd_id_alter หรือ est_hd_id_claim ไม่เป็นค่าว่างหรือ NULL**
- **กรณีมี CC หรือ CD ให้เลือกทำที่ CC และ CD เมื่อทำ LP SD SA ต้องไม่ทำ Rider ซ้ำในรอบนั้น**

**[click](/pages/createpage.action?spaceKey=RDSINRI&title=Alter&linkCreation=true&fromPageId=1342079520)**

ค้นหารายการที่เคยส่งประกันต่อ Alter
ตรวจสอบรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD)

| [tx_ri_ord_alteration_dt](/display/RDSINRI/03.+tx_ri_ord_alteration_dt) |  | [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD) |  |
| --- | --- | --- | --- |
| policy_no | เท่ากับ | policy_no |  |
| plan_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE plan_code | กรณีที่มีทั้ง Base และ Rider หมายถึงการ Alter Rider |
| rider_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDERplan_code |
| alter_eff_date | อยู่ในรอบของ | coverage_from - coverage_to | วันที่ alter_eff_date อยู่ในรอบส่งประกันต่อใด เรียกว่า **รายการตรงรอบมีผล**รายการที่เกิดขึ้นก่อนรอบ alter_eff_date เรียกว่า **รายการก่อนวันมีผล**รายการที่เกิดขึ้นหลังรอบ alter_eff_date เรียกว่า **รายการหลังวันมีผล** |
|  | เลือกเฉพาะรายการที่ | refund_flag = NULL |  |

- กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).ri_act_id ไม่เป็นค่าว่าง ให้นำข้อมูลไปหารายละเอียดอื่น ๆกรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_base_auto_dt](/display/RDSINRI/30.+tx_ri_act_base_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_base_facult_dt](/display/RDSINRI/32.+tx_ri_act_base_facult_dt) กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_auto_dt](/display/RDSINRI/31.+tx_ri_act_rider_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_facult_dt](/display/RDSINRI/33.+tx_ri_act_rider_facult_dt)

23. ไม่ทำรายการที่ตรงรอบ แต่ทำ LP SD AS ของกรมและ Rider ตัวอื่นตามปกติ
เลือกหยิบรายการที่เกี่ยวข้องทั้งหมด จากนั้น ทำรายการ LP SD SA CC CD

- ไม่ทำ **รายการตรงรอบมีผล ของทุก Alteration Code ที่ตรงกับรายการเคลม (ระบบจะไปดำเนินการในขั้นตอนการเคลม)**
- ไม่ทำ **รายการที่ est_hd_id_alter หรือ est_hd_id_claim ไม่เป็นค่าว่างหรือ NULL**
- **กรณีมี CC หรือ CD ให้เลือกทำที่ CC และ CD เมื่อทำ LP SD SA ต้องไม่ทำ Rider ซ้ำในรอบนั้น**

**[click](/pages/createpage.action?spaceKey=RDSINRI&title=Alter&linkCreation=true&fromPageId=1342079520)**

ค้นหารายการที่เคยส่งประกันต่อ Alter
ตรวจสอบรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD)

| [tx_ri_ord_alteration_dt](/display/RDSINRI/03.+tx_ri_ord_alteration_dt) |  | [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD) |  |
| --- | --- | --- | --- |
| policy_no | เท่ากับ | policy_no |  |
| plan_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE plan_code | กรณีที่มีทั้ง Base และ Rider หมายถึงการ Alter Rider |
| rider_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDERplan_code |
| alter_eff_date | อยู่ในรอบของ | coverage_from - coverage_to | วันที่ alter_eff_date อยู่ในรอบส่งประกันต่อใด เรียกว่า **รายการตรงรอบมีผล**รายการที่เกิดขึ้นก่อนรอบ alter_eff_date เรียกว่า **รายการก่อนวันมีผล**รายการที่เกิดขึ้นหลังรอบ alter_eff_date เรียกว่า **รายการหลังวันมีผล** |
|  | เลือกเฉพาะรายการที่ | refund_flag = NULL |  |

- กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).ri_act_id ไม่เป็นค่าว่าง ให้นำข้อมูลไปหารายละเอียดอื่น ๆกรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_base_auto_dt](/display/RDSINRI/30.+tx_ri_act_base_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_base_facult_dt](/display/RDSINRI/32.+tx_ri_act_base_facult_dt) กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_auto_dt](/display/RDSINRI/31.+tx_ri_act_rider_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_facult_dt](/display/RDSINRI/33.+tx_ri_act_rider_facult_dt)

24. ทำรายการ Alter ปกติ
เลือกหยิบรายการที่เกี่ยวข้องทั้งหมด จากนั้น ทำรายการ Alter Code ปกติ

**[click](/pages/createpage.action?spaceKey=RDSINRI&title=Alter&linkCreation=true&fromPageId=1342079520)**

ค้นหารายการที่เคยส่งประกันต่อ Alter
ตรวจสอบรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD)

| [tx_ri_ord_alteration_dt](/display/RDSINRI/03.+tx_ri_ord_alteration_dt) |  | [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD) |  |
| --- | --- | --- | --- |
| policy_no | เท่ากับ | policy_no |  |
| plan_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE plan_code | กรณีที่มีทั้ง Base และ Rider หมายถึงการ Alter Rider |
| rider_code | เท่ากับ | เฉพาะรายการ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDERplan_code |
| alter_eff_date | อยู่ในรอบของ | coverage_from - coverage_to | วันที่ alter_eff_date อยู่ในรอบส่งประกันต่อใด เรียกว่า **รายการตรงรอบมีผล**รายการที่เกิดขึ้นก่อนรอบ alter_eff_date เรียกว่า **รายการก่อนวันมีผล**รายการที่เกิดขึ้นหลังรอบ alter_eff_date เรียกว่า **รายการหลังวันมีผล** |
|  | เลือกเฉพาะรายการที่ | refund_flag = NULL |  |

- กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).ri_act_id ไม่เป็นค่าว่าง ให้นำข้อมูลไปหารายละเอียดอื่น ๆกรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_base_auto_dt](/display/RDSINRI/30.+tx_ri_act_base_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = BASE และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_base_facult_dt](/display/RDSINRI/32.+tx_ri_act_base_facult_dt) กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = FALSEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_auto_dt](/display/RDSINRI/31.+tx_ri_act_rider_auto_dt)กรณีที่ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).product_group = RIDER และ [tx_ri_send_reinsurer_period](/display/RDSINRI/60.+TX_RI_SEND_REINSURER_PERIOD).facult_flag = TRUEให้ค้นหารายละเอียดที่ [tx_ri_act_rider_facult_dt](/display/RDSINRI/33.+tx_ri_act_rider_facult_dt)

กระบวนการทำงานตาม Alteration Code
Click here to expand...
แสดงรายละเอียด
**
ใหม่
แบบ A ทำ 3 ครั้ง ไม่ทำหากตรงรอบ New Renew
แสดงรายละเอียด
เป็นการคำนวณ 3 ครั้งกรณีที่อยู่ระหว่างสัญญา และยังไม่ถึงรอบการส่งประกันต่อ

1. เช่น เมื่อต้นปี มีการส่งประกันต่อให้กับบริษัท RE แล้ว แต่มีการ Alteration ตอนกลางปี ที่เกี่ยวกับการปรับทุน จะต้องทำการขอเงินที่จ่ายไปแล้ว เฉพาะส่วนที่เหลือคืนก่อน คือการทำ [23 การประมวลผล RI Premium refund](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1119453421) - [30 การประมวลผล Total RI Extra commission refund](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1131446345) แล้วเก็บค่าเป็น +ทำการจ่ายเงินตามทุนใหม่ โดยประมวลผลใหม่ตั้งแต่ Actual SA ไปจนถึง Refund แล้วเก็บค่าเป็น -กรณีที่คำนวณตามทุนใหม่แล้ว ไปพบว่า SR น้อยกว่า Minimum SR ในขั้นตอนที่ 12 ไม่ต้องทำประมวลผล Refund ต่อ และถือว่ากรมธรรม์นั้น Plan code หรือ Rider นั้นจะไม่ต้องส่งประกันต่อแล้ว (suthanee.sa 17/01/2025)

**Ex.**

|  |  |  | Actual SA * Reserve Rate / 1000 | Actual SA - Reserve amount | Net Amount at Risk |  | Net Amount at Risk - Retention | SR | Total SR / Total NAR | RI Premium Rate * SR / 1000 | RI Premium * EMR / 100 | RI Premium * Comission Rate / 100 | RI Commission * EMR / 100 | (RI Premium + RI Extra Premium) - (RI Comission + RI Extra Comission) | RI Premium * (วันที่ไม่คุ้มครองทั้งหมด / วันที่ทั้งหมด) | RI Extra Premium * (วันที่ไม่คุ้มครองทั้งหมด / วันที่ทั้งหมด) | RI Comission * (วันที่ไม่คุ้มครองทั้งหมด / วันที่ทั้งหมด) | RI Extra Comission * (วันที่ไม่คุ้มครองทั้งหมด / วันที่ทั้งหมด) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  | Reserve Rate = 979.2545 |  |  | **Retention =**10000 |  |  |  | RI Premium Rate = 0.85 | EMR = 20% | Comission Rate = 50% | EMR = 20% | วันที่คุ้มครองไปแล้ว 180 | วันที่ไม่คุ้มครอง 186 | วันทั้งหมด 366 |  |  |
| **policy** | **Initail SA** | **Actual SA** | **Reserve amount** | **Net Amount at Risk** | **Total NAR** | **Retention** | **SR** | **Total SR** | **%RI Ratio** | **RI Premium** | **RI Extra Premium** | **RI Commission** | **RI Extra Commission** | **Net RI Premium** | **RI Premium refund** | **RI Extra Premium refund** | **RI Commission refund** | **RI Extra commission refund** |
| P01 | 100000.000 | 100000.000 | 9792.55 | 90207.46 | 90207.46 | 10000.000 | 80207.46 | 80207.46 | 0.89 | 68.18 | 13.64 | 34.09 | 6.82 | 40.91 | 34.65 | 6.93 | 17.32 | 3.46 |
| P01 (100000 > 120000) | 120000.000 | 120000.000 | 11751.05 | 108248.95 | 108248.95 | 10000.000 | 98248.95 | 98248.95 | 0.91 | 83.51 | 16.70 | 41.76 | 8.35 | 50.11 | -41.07 | -8.21 | -20.54 | -4.24 |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  | **Offset** | -6.42 | -1.28 | -3.21 | -0.78 |

[https://docs.google.com/spreadsheets/d/1B8wgOLeNbPzGmdJAaqIsgMEwlrPDqn-xrK-5lzEmQvU/edit?gid=1469885611#gid=1469885611](https://docs.google.com/spreadsheets/d/1B8wgOLeNbPzGmdJAaqIsgMEwlrPDqn-xrK-5lzEmQvU/edit?gid=1469885611#gid=1469885611)

แบบ B คืน Advance ทั้งหมด
แสดงรายละเอียด
ตรวจสอบทุกรายการ New/Renew ที่เคยส่งประกันต่อหลังจากวันที่มีการเปลี่ยนแปลงทั้งหมด ต้องทำ Refund คืนทุกรอบที่เกิดขึ้น ของรายการ Base Plan Code หรือ Rider Code ที่มีการเปลี่ยนแปลง

แบบ C คืนทุกรอบที่เคยส่ง
แสดงรายละเอียด
ตรวจสอบรายการ New / Renew ทุกรอบที่เคยส่งประกันต่อของทั้ง Base Plan Code และ Rider Code ต้องทำการ Refund ทั้งหมด

**
ใหม่
แบบ D ทำตามรอบที่เกิดขึ้นของวันที่เริ่มต้นสัญญา
แสดงรายละเอียด
เกิดจากกรมธรรม์มีการหยุดชำระ และกลับมาชำระใหม่ ต้องตรวจสอบวันที่เริ่มสัญญา

- ถ้าเป็นวันเดียวกัน ต้องสร้างรายการส่งประกันต่อ จากรายการเดิม เช่น เดิมส่งประกันต่อถึงเดือน 3 มีการ Lapse ของกรมธรรม์ตั้งแต่เดือน 4 ถึงเดือน 5 และกลับมาชำระต่อที่เดือน 6 ต้องสร้างรายการที่จะส่งในรอบเดือน 6 ทั้งหมด 3 รายการ คือ รายการของเดือน 4 5 และ 6
- ถ้าเป็นคนละวันกัน แปลว่าวันที่เริ่มต้นสัญญามีการเปลี่ยนแปลง ระบบจะทำการดึงกรมธรรม์ไปประมวลผลตามวันที่เริ่มต้นสัญญาใหม่ก่อนแล้ว จึงไม่ต้องดำเนินการใด ๆ ที่ Alteration

1. ตรวจสอบเพิ่มเติมกรณี tx_ri_est_alt_dt.policy_status_desc = **Reinstate (RE2)**
2. ตรวจสอบวันที่เริ่มต้นสัญญา [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).commencement_date กับ [tx_ri_est_policy_dt](http://wiki.thaisamut.co.th/display/RDSINRI/14.+tx_ri_est_policy_dt).commencement_date ที่มี policy_no เดียวกัน ในการส่งประกันต่อรอบล่าสุดถ้ามีค่าเท่ากัน ให้สร้างรายการส่งประกันต่อ ต่อจากรอบการส่งประกันต่อล่าสุด มาจนถึงรอบปัจจุบันโดยคำนวณตามรายก่อนก่อนหน้าที่เคยทำ refund ไปแล้วแต่ให้กลับค่าเป็นลบ ที่ [RI Premium refund](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1119453421) และ [RI Commission refund](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1119453423)Actual (กรณีเจอรายการที่ Actual)    แสดงรายละเอียด  **รายละเอียด**     Base             Auto      tx_ri_act_base_auto_dt      prem_refund_lifeprem_refund_extra_lifetotal_prem_refundcomm_refund_lifecomm_refund_extra_lifetotal_comm_refundnet_ri_premium_refundFAC      tx_ri_act_base_facult_dt      prem_refund_life_facprem_refund_extra_life_factotal_prem_refund_faccomm_refund_life_faccomm_refund_extra_life_factotal_comm_refund_facnet_ri_premium_refundRider                                                                           Auto                                     tx_ri_act_rider_auto_dt                                     prem_refund_riderprem_refund_extra_riderprem_refund_addprem_refund_extra_addprem_refund_ttdprem_refund_extra_ttdprem_refund_tpdprem_refund_extra_tpdprem_refund_compremium_refund_rider_g1premium_refund_rider_g2premium_refund_rider_g3premium_refund_rider_g4premium_refund_rider_g5premium_refund_rider_g6premium_refund_rider_sptotal_prem_refundcomm_refund_ridercomm_refund_addcomm_refund_ttdcomm_refund_tpdcomm_refund_extra_ridercomm_refund_extra_addcomm_refund_extra_ttdcomm_refund_extra_tpdtotal_comm_refundtotal_prem_refund_add total_prem_refund_tpd total_prem_refund_ttd total_prem_refund_rider total_comm_refund_add total_comm_refund_tpd total_comm_refund_ttd total_comm_refund_rider net_ri_premium_add_refundnet_ri_premium_tpd_refundnet_ri_premium_ttd_refundnet_ri_premium_rider_refundFAC                                     tx_ri_act_rider_facult_dt                                     prem_refund_rider_facprem_refund_extra_rider_facprem_refund_add_facprem_refund_extra_add_facprem_refund_ttd_facprem_refund_extra_ttd_facprem_refund_tpd_facprem_refund_extra_tpd_facprem_refund_com_facpremium_refund_rider_g1_facpremium_refund_rider_g2_facpremium_refund_rider_g3_facpremium_refund_rider_g4_facpremium_refund_rider_g5_facpremium_refund_rider_g6_facpremium_refund_rider_sp_factotal_prem_refund_faccomm_refund_rider_faccomm_refund_add_faccomm_refund_ttd_faccomm_refund_tpd_faccomm_refund_extra_rider_faccomm_refund_extra_add_faccomm_refund_extra_ttd_faccomm_refund_extra_tpd_factotal_comm_refund_factotal_prem_refund_add total_prem_refund_tpd total_prem_refund_ttd total_prem_refund_rider total_comm_refund_add total_comm_refund_tpd total_comm_refund_ttd total_comm_refund_rider net_ri_premium_add_refundnet_ri_premium_tpd_refundnet_ri_premium_ttd_refundnet_ri_premium_rider_refund   Estimate (กรณีเจอรายการที่ Estimate)    แสดงรายละเอียด  **รายละเอียด**     Base             Auto      tx_ri_est_base_auto_dt      prem_refund_lifeprem_refund_extra_lifetotal_prem_refundcomm_refund_lifecomm_refund_extra_lifetotal_comm_refundnet_ri_premium_refundFAC      tx_ri_est_base_facult_dt      prem_refund_life_facprem_refund_extra_life_factotal_prem_refund_faccomm_refund_life_faccomm_refund_extra_life_factotal_comm_refund_facnet_ri_premium_refundRider                                                                           Auto                                     tx_ri_est_rider_auto_dt                                     prem_refund_riderprem_refund_extra_riderprem_refund_addprem_refund_extra_addprem_refund_ttdprem_refund_extra_ttdprem_refund_tpdprem_refund_extra_tpdprem_refund_compremium_refund_rider_g1premium_refund_rider_g2premium_refund_rider_g3premium_refund_rider_g4premium_refund_rider_g5premium_refund_rider_g6premium_refund_rider_sptotal_prem_refundcomm_refund_ridercomm_refund_addcomm_refund_ttdcomm_refund_tpdcomm_refund_extra_ridercomm_refund_extra_addcomm_refund_extra_ttdcomm_refund_extra_tpdtotal_comm_refundtotal_prem_refund_add total_prem_refund_tpd total_prem_refund_ttd total_prem_refund_rider total_comm_refund_add total_comm_refund_tpd total_comm_refund_ttd total_comm_refund_rider net_ri_premium_add_refundnet_ri_premium_tpd_refundnet_ri_premium_ttd_refundnet_ri_premium_rider_refundFAC                                     tx_ri_est_rider_facult_dt                                     prem_refund_rider_facprem_refund_extra_rider_facprem_refund_add_facprem_refund_extra_add_facprem_refund_ttd_facprem_refund_extra_ttd_facprem_refund_tpd_facprem_refund_extra_tpd_facprem_refund_com_facpremium_refund_rider_g1_facpremium_refund_rider_g2_facpremium_refund_rider_g3_facpremium_refund_rider_g4_facpremium_refund_rider_g5_facpremium_refund_rider_g6_facpremium_refund_rider_sp_factotal_prem_refund_faccomm_refund_rider_faccomm_refund_add_faccomm_refund_ttd_faccomm_refund_tpd_faccomm_refund_extra_rider_faccomm_refund_extra_add_faccomm_refund_extra_ttd_faccomm_refund_extra_tpd_factotal_comm_refund_factotal_prem_refund_add total_prem_refund_tpd total_prem_refund_ttd total_prem_refund_rider total_comm_refund_add total_comm_refund_tpd total_comm_refund_ttd total_comm_refund_rider net_ri_premium_add_refundnet_ri_premium_tpd_refundnet_ri_premium_ttd_refundnet_ri_premium_rider_refund   ถ้า [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).commencement_date มีค่ามากกว่า ไม่ต้องดำเนินการอะไร เพราะกรมธรรม์จะเริ่มตามรอบใหม่ของวันที่เริ่มสัญญา

แบบ E ทำ 3 ครั้ง ไม่ทำหากตรงรอบ new renew และ ทำ Cancel Rider คืน Advance ทั้งหมด
แสดงรายละเอียด
ทำเหมือนรูปแบบ A และ รูปแบบ B (เฉพาะ Rider เท่านั้น)

แบบ F - คืน Refund ในรอบนั้น
แสดงรายละเอียด
ประมวลผลรายการที่มีการ Alteration ของ Base หรือ Rider ที่เกิดขึ้นตามรอบการเปลี่ยนแปลงเท่านั้น

แบบ A ทำ 2 ครั้ง ไม่ทำหากตรงรอบ New Renew
**ตรวจสอบเพิ่มเติมกรณี [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alteration_code = AP**,**IN, RE1**

1. ทำรายการ [23 การประมวลผล RI Premium refund](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1119453421) - [30 การประมวลผล Total RI Extra commission refund](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1131446345) ค่าที่ดึงมาตามรอบวันที่ [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alter_eff_date แล้วบันทึกค่าลงเป็น บวก +ทั้งนี้กรณีพบว่ามีการประมวลผล กรมธรรม์เดียวกัน ใน Base หรือ Rider เดียวกัน ที่มีการ Alteration รอบเดียวกับ New / Renew ไม่ต้องนำกรมธรรม์นั้นมาประมวลผล Alter(chanapai.gi 13/03/2025) เก็บข้อมูล Current Effective From ของรอบแรกไว้ใน {FIRST_EFFECTIVE_DATE_FROM} เพื่อนำไปคำนวณ {NUM_OF_DAY_COVER_IN_YEAR} สำหรับรอบถัดไปทำรายการประมวลผลใหม่โดยใช้ข้อมูลจาก Table Landing [tx_ri_ord_new_renew_dt](http://wiki.thaisamut.co.th/x/UgFgQg) ให้ประมวลผลตั้งแต่[01 การประมวลผล Actual SA](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471509) - [30 การประมวลผล Total RI Extra commission refund](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1131446345)(suthanee.sa 17/01/2025) ถ้าประมวลผลใหม่แล้ว ไปพบว่า SR น้อยกว่า Minimum SR ในขั้นตอนที่ 12 ไม่ต้องทำประมวลผล Refund ต่อ และถือว่ากรมธรรม์นั้น Plan code หรือ Rider นั้นจะไม่ต้องส่งประกันต่อแล้ว แต่ถ้ายังพบว่า SR มากกว่า Minimum SR ให้บันทึกค่าใน Table Mapping 2 Type คือNew หรือ RENEW โดยมี Current effect from - to เป็นระยะเวลาตั้งแต่วันที่มีผล ไปจบครบรอบเดิมกรณี Base ให้นำวัน [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alter_eff_date บันทึกลงใน[tx_ri_est_policy_dt](http://wiki.thaisamut.co.th/x/rQIAQw).coverage_fromกรณี Rider ให้นำวัน [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alter_eff_date บันทึกลงในAuto - [tx_ri_est_rider_auto_dt](http://wiki.thaisamut.co.th/x/KQFKQw).coverage_from_riderFAC - [tx_ri_est_rider_facult_dt](http://wiki.thaisamut.co.th/x/LwFKQw).coverage_from_riderALTER ค่า Refund เป็น ลบ -

**หมายเหตุ**

ถ้าวันที่ Alteration อยู่ในรอบของการประมวลผล New / Renew รอบเดียวกัน ไม่ต้องนำไปประมวลผล เช่น  **กรณีรายปี** วันเริ่มสัญญา = 8/05/2022 Alteration Date = 14/05/2024 Period = 2024/05 มีการประมวลผลข้อมูลใน Renew เพื่อส่ง **ประกันต่อ (Reinsurer)** แล้ว ไม่ต้องประมวลผลในส่วนของ Alteration  **กรณีรายเดือน** เนื่องจากต้องมีการส่ง **ประกันต่อ (Reinsurer)** ทุกเดือน หากมีการ Alteration ตาม Code ดังกล่าว ไม่ต้องประมวลผลในส่วนของ Alteration

แบบ B คืน Advance ทั้งหมด
ตรวจสอบเพิ่มเติมกรณี [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alteration_code = **CC, CD, LP, SD ,AS  [![](http://jira.thaisamut.co.th/images/icons/issuetypes/task.png)IRI-4151](http://jira.thaisamut.co.th/browse/IRI-4151) - [New-RI] เพิ่มเงื่อนไขประมวลผล ALTER สำหรับ Auto surrender (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved)**

1. ให้ตรวจสอบ [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alter_eff_date ของรายการจากนั้นตรวจสอบว่าตั้งแต่ [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alter_eff_date จนถึง Period ปัจจุบัน มีการส่ง **ประกันต่อ (Reinsurer)**ไปทั้งหมดกี่ครั้ง เช่น กรมธรรม์ A เคยส่ง **ประกันต่อ (Reinsurer)** มาแล้ว 5 เดือน โดย Base ส่งตั้งแต่เดือน 1 - 5 Rider ส่งตั้งแต่เดือน 2 - 5  ส่วน [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alter_eff_date อยู่ในรอบเดือนที่ 3 หมายความว่า จะได้รายการที่ส่ง **ประกันต่อ (Reinsurer)**ที่ไม่มีผลแล้ว (จ่าย Advance Premium) โดย Rider ตั้งแต่เดือน 3 - 5 จะได้รายการที่เคยส่ง **ประกันต่อ (Reinsurer)** ที่ไม่มีผลแล้ว (จ่าย Advance Premium) โดยจะได้ Rider ได้ทั้งหมด 3 Record สำหรับนำไปประมวลผลต่อ  **หมายเหตุ :**  1. จ่าย Advance Premium คือ การจ่ายเบี้ยไปทั้งที่มีการขอยกเลิกสัญญาแล้ว แต่ยังไม่มีผลอนุมัติรายการยกเลิกเข้ามา จากตัวอย่างคือขอยกเลิกสัญญาย้อนหลังเดือน 3 แต่รับรู้จริงเดือน 5 ทำให้มีการจ่าย Advance Premium ไปก่อนแล้ว 2. CC และ CD คือการยกเลิกเฉพาะ Rider จึงต้องค้นหาข้อมูลรายการที่เป็นของ Rider 3. กรณีเป็น LP, SD, AS เป็นรายการทำมาที่ BASE ต้องตรวจสอบการส่งประกันต่อของทั้ง BASE และ Rider ของกรมธรรม์นั้นทั้งหมดเสมอ (suthanee.sa 10/11/2025)

แบบ C คืนทุกรอบที่เคยส่ง
1. ตรวจสอบเพิ่มเติมกรณี [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alteration_code = **DE**ให้ตรวจสอบทุกรายการที่เคยส่ง **ประกันต่อ (Reinsurer)** ภายใต้ Treaty นี้ ทั้ง Base และ Rider ทั้งหมดสำหรับการประมวลผล Alteration เช่น กรมธรรม์ A เคยส่ง **ประกันต่อ (Reinsurer)** มาแล้ว 3 เดือน โดย  Base ส่งตั้งแต่เดือน 1 - 3 Rider ส่งตั้งแต่เดือน 2 - 3 จะได้รายการที่เคยส่ง **ประกันต่อ (Reinsurer)** โดยแยกตาม Base และ Rider ได้ทั้งหมด 5 Record สำหรับนำไปประมวลผลต่อ  หมายเหตุ : DE คือการบอกล้างทั้งกรมธรรม์ ต้องค้นหารายการทั้ง Base และ Rider

แบบ D ทำตามรอบที่เกิดขึ้นของวันที่เริ่มต้นสัญญา
1. ตรวจสอบเพิ่มเติมกรณี [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alteration_code = **RE2 Reinstate**
2. ตรวจสอบวันที่เริ่มต้นสัญญา [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).commencement_date กับ [tx_ri_est_policy_dt](http://wiki.thaisamut.co.th/x/rQIAQw).commencement_date ที่มี policy_no เดียวกัน ในการส่งประกันต่อรอบล่าสุด

1. ถ้ามีค่าเท่ากัน ให้สร้างรายการส่งประกันต่อ ต่อจากรอบการส่งประกันต่อล่าสุด มาจนถึงรอบปัจจุบันถ้า [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).commencement_date มีค่ามากกว่า ไม่ต้องดำเนินการอะไร เพราะกรมธรรม์จะเริ่มตามรอบใหม่ของวันที่เริ่มต้นสัญญา

แบบ E ทำ 2 ครั้ง ไม่ทำหากตรงรอบ new renew และ ทำ Cancel Rider คืน Advance ทั้งหมด
**ตรวจสอบเพิ่มเติมกรณี [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alteration_code = EX, RP**

1. Base Plan Code ทำรายการ 2 ครั้งทำรายการ [23 การประมวลผล RI Premium refund](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1119453421) - [30 การประมวลผล Total RI Extra commission refund](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1131446345) ค่าที่ดึงมาตามรอบวันที่ [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alter_eff_date แล้วบันทึกค่าลงเป็น บวก +ทั้งนี้กรณีพบว่ามีการประมวลผล กรมธรรม์เดียวกัน ใน Base หรือ Rider เดียวกัน ที่มีการ Alteration รอบเดียวกับ New / Renew ไม่ต้องนำกรมธรรม์นั้นมาประมวลผล Alter (chanapai.gi 13/03/2025) เก็บข้อมูล Current Effective From ของรอบแรกไว้ใน {FIRST_EFFECTIVE_DATE_FROM} เพื่อนำไปคำนวณ {NUM_OF_DAY_COVER_IN_YEAR} สำหรับรอบถัดไป ทำรายการประมวลผลใหม่โดยใช้ข้อมูลจาก Table Landing [tx_ri_ord_new_renew_dt](http://wiki.thaisamut.co.th/x/UgFgQg) ให้ประมวลผลตั้งแต่[01 การประมวลผล Actual SA](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471509) - [30 การประมวลผล Total RI Extra commission refund](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1131446345)(suthanee.sa 17/01/2025) ถ้าประมวลผลใหม่แล้ว ไปพบว่า SR น้อยกว่า Minimum SR ในขั้นตอนที่ 12 ไม่ต้องทำประมวลผล Refund ต่อ และถือว่ากรมธรรม์นั้น Plan code หรือ Rider นั้นจะไม่ต้องส่งประกันต่อแล้วแต่ถ้ายังพบว่า SR มากกว่า Minimum SR ให้บันทึกค่าใน Table Mapping 2 Type คือNew หรือ RENEW โดยมี Current effect from - to เป็นระยะเวลาตั้งแต่วันที่มีผล ไปจบครบรอบเดิมกรณี Base ให้นำวัน [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alter_eff_date บันทึกลงใน[tx_ri_est_policy_dt](http://wiki.thaisamut.co.th/x/rQIAQw).coverage_fromกรณี Rider ให้นำวัน [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alter_eff_date บันทึกลงในAuto - [tx_ri_est_rider_auto_dt](http://wiki.thaisamut.co.th/x/KQFKQw).coverage_from_riderFAC - [tx_ri_est_rider_facult_dt](http://wiki.thaisamut.co.th/x/LwFKQw).coverage_from_riderRIDER Codeให้ทำรายการเหมือนสถานะ **CC****(suthanee.sa 26/01/2025)**

**หมายเหตุ**

ถ้าวันที่ Alteration อยู่ในรอบของการประมวลผล New / Renew รอบเดียวกัน ไม่ต้องนำไปประมวลผล เช่น  **กรณีรายปี** วันเริ่มสัญญา = 8/05/2022 Alteration Date = 14/05/2024 Period = 2024/05 มีการประมวลผลข้อมูลใน Renew เพื่อส่ง **ประกันต่อ (Reinsurer)** แล้ว ไม่ต้องประมวลผลในส่วนของ Alteration  **กรณีรายเดือน** เนื่องจากต้องมีการส่ง **ประกันต่อ (Reinsurer)** ทุกเดือน หากมีการ Alteration ตาม Code ดังกล่าว ไม่ต้องประมวลผลในส่วนของ Alteration

แบบ NEW ออก Report เท่านั้น (#COPAY Suthanee.sa 14/08/2025)
1. ตรวจสอบเพิ่มเติมกรณี [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alteration_code = **CP**
2. ตรวจสอบหารายการเดิมด้วยวันที่ [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alter_eff_date ต้องอยู่ในช่วงของ tx_ri_est_policy_dt.coverage_from - tx_ri_est_policy_dt.coverage_toนำค่า tx_ri_est_policy_dt.copay_percent ของรายการเดิม เก็บไว้ใน {BEFORE_PER_COPAY}นำค่า [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).copay_rate เก็บไว้ใน {CURRENT_PER_COPAY}
3. กรณีกรมธรรม์นั้นตรงตามรอบส่งประกันต่อพอดี (Sheet New Renew) ไม่ต้องออก Report Alteration
