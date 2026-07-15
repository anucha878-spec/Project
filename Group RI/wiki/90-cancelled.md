===== PAGE 1289389354 | Function Support =====
(empty page)


===== PAGE 1294991852 | Function Support > cancle =====
(empty page)


===== PAGE 1307934993 | Function Support > cancle > - =====
(empty page)


===== PAGE 1295483243 | Function Support > cancle > (ยกเลิก) IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual =====
# 

### สิทธิ์การเข้า
- เจ้าหน้าที่ฝ่ายประกันกลุ่ม

### Assumption
- ผู้ใช้งานต้อง Log in เข้าใช้งานอย่างถูกต้อง
- ผู้ใช้งานต้องมีสิทธิ์การเข้าถึงหน้าจอ

### Screen Overview
- ใช้สำหรับ นำเข้าไฟล์ข้อมูลกรมธรรม์ Unname เข้าสู่ระบบ Group Reinsurance เพื่อใช้ในการ ประมวลผล Actual ของกลุ่มกรมธรรม์ Unname Policy โดยมีการกำหนดขั้นตอนและสิทธิ์การใช้งานแยกตาม Maker และ Checker

### Screen Design
สำหรับ Maker
สำหรับ Checker
IRI-GRP-SD02-01 - หน้าจอ นำเข้าข้อมูล Unname Policy Actual
IRI-GRP-SD02-02 - หน้าจอ Popup นำเข้าไฟล์ข้อมูล
IRI-GRP-SD02-03 - หน้าจอ Popup ยืนยันไฟล์ข้อมูล
IRI-GRP-SD02-04 - หน้าจอ Popup ยกเลิกไฟล์ข้อมูล
IRI-GRP-SD02-05 - หน้าจอ Popup Unname Policy Actual (Success Data)
IRI-GRP-SD02-06 - หน้าจอ Popup Unname Policy Actual (Error Data)
Description
| No. | หัวข้อ | รายละเอียด |
| 1 | วัตถุประสงค์ (Objective) | เพื่อให้สามารถ นำเข้าไฟล์ข้อมูลกรมธรรม์ Unname Policy (Excel) เข้าสู่ระบบได้อย่างถูกต้องเพื่อใช้ข้อมูลที่นำเข้าในการ ประมวลผล Actual ของระบบ Reinsurance โดยนำเข้าเป็นรายไตรมาสเพื่อรองรับกระบวนการ Maker – Checker ในการตรวจสอบและอนุมัติข้อมูลเพื่อให้สามารถ ตรวจสอบผลการนำเข้าข้อมูลย้อนหลัง ได้ (Success / Error)เพิ่ม / ลบ / แก้ไข / File Unname Policy |
| 2 | ผู้ใช้งาน และ สิทธิ์ที่ได้รับ(Target Users and authorization) | เจ้าหน้าที่ฝ่ายประกันกลุ่ม ประกอบด้วย สิทธิ Maker และ Checkerลำดับฟังก์ชันสิทธิ คำอธิบายโดยย่อ1นำเข้าไฟล์ (Unname Policy Actual)Makerเลือกและอัปโหลดไฟล์ Excel ข้อมูลกรมธรรม์ Unname เข้าสู่ระบบ2ส่งอนุมัติMakerส่งข้อมูลให้ Checker ตรวจสอบ3อนุมัติCheckerยืนยันและอนุมัติข้อมูลนำเข้า4ยกเลิกMaker / Checkerยกเลิกไฟล์นำเข้าที่ไม่ถูกต้อง5ตรวจสอบผลนำเข้าMaker / Checkerดูผลการนำเข้า (Success / Error) และประวัติย้อนหลัง |
| 3 | การกระทำกับหน้าจอ (Actions) | Maker และ Checkerกด Dropdown “ข้อมูลประจำไตรมาส” เพื่อดูข้อมูลย้อนหลังในเดือนก่อนหน้ากดปุ่ม "ยกเลิก" เพื่อยกเลิกการนำเข้าข้อมูลกดจำนวนรายการที่นำเข้าเพื่อดู Success Data และ Error Data ได้Makerกดปุ่ม "นำเข้าไฟล์ข้อมูล" เพื่อนำเข้าข้อมูลในรูปแบบไฟล์ Excel (.xlsx)กดปุ่ม "ยืนยันส่งอนุมัติ" สำหรับ Maker เพื่อส่งต่อให้ทาง Checker ตรวจสอบข้อมูลCheckerกดปุ่ม "อนุมัติ" สำหรับ Checker เพื่อยืนยันอนุมัติข้อมูล |
| 4 | อธิบายรายละเอียด (Description) | รายละเอียดของหน้าจอมีดังนี้1. เงื่อนไขการแสดงข้อมูลFieldTypeValidation/ ActionDefaultข้อมูลประจำไตรมาสDropdownแสดงเป็น DropdownList รายการ ดูจาก system date แสดง YYYY/QQ และ นับถอยจาก system date ไป 2 ปี covert เป็นปี พ.ศ.มกราคม ถึง มีนาคม = Q1เมษายน ถึง มิถุนายน = Q2กรกฎาคม ถึง กันยายน = Q3ตุลาคม ถึง ธันวาคม = Q4system date แสดง YYYY/QQเช่น 2568/Q42. ตารางแสดงผลข้อมูลFieldDescriptionValidation/ ActionExampleครั้งที่ลำดับของการนำเข้าข้อมูลในระบบ (เรียงตามวันที่และเวลา)ระบบสร้างอัตโนมัติ และแสดงลำดับล่าสุดด้านบน1ดำเนินการปุ่ม "อนุมัติ"ปุ่ม "อนุมัติ"ปุ่มสำหรับ Checker กดเพื่อยืนยันอนุมัติข้อมูลอนุมัติดำเนินการปุ่ม "ยืนยันส่งอนุมัติ"ปุ่ม "ยืนยันส่งอนุมัติ"ปุ่มสำหรับ Maker กดเพื่อส่งให้ทาง Checker ตรวจสอบข้อมูลยืนยันส่งอนุมัติดำเนินการปุ่ม "ยกเลิก"ปุ่ม "ยกเลิก"ปุ่มสำหรับ Maker และ Checker ยกเลิกข้อมูลไฟล์นำเข้ายกเลิกวันที่และเวลาดำเนินการวันที่และเวลาที่มีการนำเข้าไฟล์ข้อมูลแสดงผลรูปแบบ DD/MM/YYYY HH:MM:SS รายละเอียด ดังนี้DD คือ วันที่แบบ 01-31MM คือ เดือนแบบ 01-12YYYY คือ ปี พ.ศ. แบบ 2500-9999HH คือ ชั่วโมง แบบ 00-24MM คือ นาที แบบ 00-60SS คือ วินาที แบบ 00-6005/06/2568 09:30:00ผู้ดำเนินการผู้นำเข้าข้อมูลไฟล์แสดงผลในรูปแบบ Login IDclaims.deสถานะสถานะข้อมูลแสดงสถานะข้อมูล (อ้างอิง สถานะ จาก Appendix A08. สถานะรายการข้อมูลในหน้าจอ สำหรับ Maker และ Checker)รอยืนยันส่งอนุมัติSuccess Dataจำนวนรายการ ที่นำเข้าสำเร็จแสดงผลรวมของ จำนวนรายการ จากไฟล์นำเข้าข้อมูล ที่นำเข้าสำเร็จเมื่อคลิกจะแสดงรายละเอียดข้อมูลนำเข้าไฟล์ IRI-GRP-SD03-05 - หน้าจอ Popup Unname Policy Actual (Success Data)1Error Dataจำนวนรายการ ที่นำเข้าไม่สำเร็จแสดงผลรวมของ จำนวนรายการ จากไฟล์นำเข้าข้อมูล ที่นำเข้าไม่สำเร็จเมื่อคลิกจะแสดงรายละเอียดข้อมูลนำเข้าไฟล์ พร้อมแสดงหมายเหตุของรายการที่ Error ใน column "Remark" IRI-GRP-SD03-06 - หน้าจอ Popup Unname Policy Actual (Error Data)1หมายเหตุหมายเหตุของรายการข้อมูลแสดงหมายเหตุล่าสุดที่ระบุจากการ Update ข้อมูลเข้าระบบ, การยืนยันข้อมูลนำเข้า, การยกเลิกข้อมูลนำเข้า, หรือ Error Message จากระบบกรณีพบ Invalid Data Formatปรับแก้ข้อมูล3. ปุ่ม "นำเข้าไฟล์ข้อมูล" เพื่อเลือกและอัปโหลดไฟล์ Excel ข้อมูลกรมธรรม์ Unname เข้าสู่ระบบเพื่อใช้ในการประมวลผล Actual หรือเลือก ระบุ “ไม่มีข้อมูลนำเข้าประจำไตรมาส” ในกรณีที่ไม่มีไฟล์ข้อมูลสำหรับรอบเดือนนั้น โดยแสดงปุ่มตามเงื่อนไขสถานะ A08. สถานะรายการข้อมูลในหน้าจอ สำหรับ Maker และ Checker เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ IRI-GRP-SD03-02 - หน้าจอ Popup นำเข้าไฟล์ข้อมูล Unname Policy Actualหมายเหตุ: รูปแบบไฟล์นำเข้า ดังนี้ ชื่อคอลัมน์ จากไฟล์นำเข้าคำอธิบายตัวอย่างPolicyNoเลขกรมธรรม์GL4635Effective Dateวันที่คุ้มครอง01/07/2025End Dateวันที่สิ้นความคุ้มครอง30/06/2025PeriodEffective Date ในแต่ละเดือน01/07/2024No. of InsuredPreviousจำนวนสมาชิกทั้งหมดจาก Period ก่อนหน้า22,905Additionจำนวนสมาชิกที่เพิ่มขึ้นใน Period นี้0Cancellationจำนวนสมาชิกที่ลดลงใน Period นี้0Totalจำนวนสมาชิกทั้งหมดใน Period นี้22,905PremiumLifeเบี้ยชีวิต3,321,225.00Accidentเบี้ยอุบัติเหตุ1,145,250.00Med. Acc.เบี้ยค่ารักษาพยาบาลอุบัติเหตุ0.00TPDเบี้ย TPD0.00E1เบี้ยชีวิต (Extra)0.00IPเบี้ย IPD0.00OPเบี้ย OPD0.00Dentalเบี้ย ทันตกรรม0.00Med. Totalเบี้ยค่ารักษาพยาบาลทั้งหมด0.00Totalเบี้ยทั้งหมด4,466,475.00 |

# Functional Specification
ส่วนการระบุเงื่อนไขการแสดงข้อมูล
| No. | Component Name | Type | Validation/ Action | Default |
| 1 | ข้อมูลประจำไตรมาส | Dropdown List | แสดงข้อมูลของ ไตรมาส ที่เลือกรายการ | ไตรมาส ปัจจุบัน |
ส่วนการแสดงข้อมูล
| No. | Component Name | Type | Description | Validation/ Action | Default |
| ตารางแสดงผลการค้นหา |
| 1 | ครั้งที่ | Text | แสดงจำนวนรายการนำเข้าข้อมูลในรอบการประมวลผลปัจจุบัน | แสดงผลรายการล่าสุดไว้บนสุด | 1 |
| 2 | ดำเนินการ | Button | ปุ่ม อนุมัติ | เงื่อนไขการ Enable ปุ่ม ตาม A08. สถานะรายการข้อมูลในหน้าจอ สำหรับ Maker และ Checkerเมื่อกดปุ่มจะเปิด Screen IRI-GRP-SD03-03 - หน้าจอ Popup ยืนยันไฟล์ข้อมูล เพื่อยืนยันอนุมัติข้อมูล พร้อมทั้งสามารถระบุหมายเหตุได้ หลังจากดำเนินการเสร็จสิ้น หากสำเร็จ ปรับสถานะรายการเป็น "ยืนยันนำเข้าข้อมูลสำเร็จ" (ยกเลิก)tx_rig_unname_hd.status = '7'หากไม่สำเร็จ ไม่ปรับสถานะรายการ |  |
|  |  |  | ปุ่มยืนยันส่งอนุมัติ | เงื่อนไขการ Enable ปุ่ม ตาม A08. สถานะรายการข้อมูลในหน้าจอ สำหรับ Maker และ Checkerเมื่อกดปุ่มจะเปิด Screen IRI-GRP-SD03-03 - หน้าจอ Popup ยืนยันไฟล์ข้อมูล เพื่อส่ง Checker ตรวจสอบ พร้อมทั้งสามารถระบุหมายเหตุได้ หลังจากดำเนินการเสร็จสิ้น หากสำเร็จ ปรับสถานะรายการเป็น "รออนุมัติข้อมูล"(ยกเลิก)tx_rig_unname_hd.status = '5'หากไม่สำเร็จ ไม่ปรับสถานะรายการ |  |
|  |  |  | ปุ่มยกเลิก | เงื่อนไขการ Enable ปุ่ม ตาม A08. สถานะรายการข้อมูลในหน้าจอ สำหรับ Maker และ Checkerเมื่อกดปุ่มจะเปิด Screen IRI-GRP-SD03-04 - หน้าจอ Popup ยกเลิกไฟล์ข้อมูล เพื่อยืนยันการยกเลิกข้อมูล พร้อมทั้งสามารถระบุหมายเหตุได้หลังจากดำเนินการเสร็จสิ้น หากสำเร็จ ปรับสถานะเป็น “ยกเลิกข้อมูล”(ยกเลิก)tx_rig_unname_hd.status = '6'หากไม่สำเร็จ ไม่ปรับสถานะรายการ |  |
| 3 | วันที่และเวลาดำเนินการ | Text | แสดงวันและเวลานำเข้าข้อมูล | (ยกเลิก)tx_rig_unname_hd.created_date |  |
| 4 | ผู้ดำเนินการ | Text | แสดงผู้นำเข้าข้อมูล | (ยกเลิก)tx_rig_unname_hd.created_by |  |
| 5 | สถานะ | Text | แสดงสถานะข้อมูล | (ยกเลิก)tx_rig_unname_hd.status |  |
| 6 | Success Data | Link | แสดงผลรวมของ จำนวนรายการ จากไฟล์นำเข้าข้อมูล ที่นำเข้าสำเร็จ | (ยกเลิก)tx_rig_unname_hd.sum_records(ยกเลิก)tx_rig_unname_hd.imp_file_available = True(ยกเลิก)tx_rig_unname_hd.unuse_flag = False |  |
| 7 | Error Data | Link | แสดงผลรวมของ จำนวนรายการ จากไฟล์นำเข้าข้อมูล ที่นำไม่เข้าสำเร็จ | (ยกเลิก)tx_rig_unname_hd.sum_records(ยกเลิก)tx_rig_unname_hd.err_file_available = True |  |
| 8 | หมายเหตุ | Text | แสดงหมายเหตุของรายการข้อมูล | (ยกเลิก)tx_rig_unname_hd.remark |  |


===== PAGE 1295483688 | Function Support > cancle > (ยกเลิก) IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual > IRI-GRP-SD03-02 - หน้าจอ Popup นำเข้าไฟล์ข้อมูล Unname Policy Actual =====
# /*<![CDATA[*/
div.rbtoc1782955806476 {padding: 0px;}
div.rbtoc1782955806476 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955806476 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/

Screen Design
Description

# Screen Design
IRI-GRP-SD03-02 - หน้าจอ Popup นำเข้าไฟล์ข้อมูล
ตัวอย่างไฟล์นำเข้าข้อมูลจาก User: Unname_Policy_Actual.xlsx
อ้างอิง: รูปแบบเอกสารนำเข้าไฟล์ Unname Policy Actual

# Description
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | นำเข้าไฟล์ข้อมูล Unname Policy Actual |
| 2 | ผู้ใช้งาน(Target Users) | เจ้าหน้าที่ฝ่ายประกันกลุ่ม (เฉพาะ Maker) |
| 3 | การกระทำกับหน้าจอ(Actions) | ใส่หมายเหตุ ของรายการข้อมูลเลือก check box ไม่มีข้อมูลนำเข้าประจำไตรมาสนำเข้าไฟล์ข้อมูล Unname Policy Actual |
| 4 | อธิบายรายละเอียด(Description) | เมื่อกด ปุ่ม "นำเข้าไฟล์ข้อมูล" ใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual ระบบจะแสดงหน้าจอ IRI-GRP-SD03-02 - หน้าจอ Popup นำเข้าไฟล์ข้อมูล รายละเอียดดังนี้ระบบแสดงค่า “ประจำไตรมาส” ตาม Dropdown ที่เลือกจาก IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actualกรณีไม่มีข้อมูลนำเข้าประจำไตรมาส นั้นๆ จะต้อง "Checkbox ไม่มีข้อมูลนำเข้าประจำไตรมาส"หากกดปุ่มปิด หรือ “ยกเลิก” ระบบปิดหน้าจอ และกลับสู่หน้าจอหลัก หากกดปุ่ม “บันทึก” ระบบดำเนินการ ดังนี้ตรวจสอบว่ามีการทำรายการหรือไม่กรณีมีการเลือก "Checkbox" ไม่มีข้อมูลนำเข้า ให้กลับสู่หน้าจอหลัก พร้อมทั้งแสดงรายการเพื่อยืนยัน พร้อมหมายเหตุ "ไม่มีข้อมูล Update ในรอบปัจจุบัน"กรณีมีการ Upload File ข้อมูล ให้ดำเนินการตรวจสอบต่อในข้อ bกรณีไม่ได้เลือก Checkbox และ ไม่ได้ Upload File จะ Disable ปุ่มบันทึกตรวจสอบ Format ไฟล์นำเข้า โดยนามสกุลที่สามารถ Upload ไฟล์ได้เฉพาะ xlsxหากไม่เป็น Excel ระบบแสดง Popup ข้อความ "ไม่สามารถทำรายการได้ เนื่องจากรูปแบบไฟล์นำเข้าไม่ถูกต้อง" และจบกระบวนการทำงานหากเป็น Excel ระบบแสดง Popup ข้อความ “ระบบกำลังประมวลผลข้อมูล” และระบบปรับสถานะรายการเป็น “กำลังดำเนินการ”นำเข้า Excel ไฟล์ข้อมูลระบบทำการตรวจสอบความถูกต้องของไฟล์นำเข้า ซึ่งหากพบ error มากกว่า 1 เคส ให้แสดงหมายเหตุต่อกันโดยมี , คั่น โดยตรวจสอบตามรายการดังนี้ตรวจสอบ จำนวนคอลัมน์ ของไฟล์นำเข้าว่าถูกต้องหรือไม่หากพบจำนวนคอมลัมน์ไม่ถูกต้อง หรือพบ data เป็นค่าว่าง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "รูปแบบไฟล์ไม่ถูกต้อง"แสดงหมายเหตุ "จำนวน Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์"หากพบ ให้ดำเนินการตรวจสอบในข้อถัดไปตรวจสอบ ชื่อคอลัมน์ ว่าถูกต้องหรือไม่หากพบว่าไม่ถูกต้อง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "รูปแบบไฟล์ไม่ถูกต้อง"แสดงหมายเหตุ "ชื่อ Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์"หากชื่อคอลัมน์ถูกต้อง ให้ดำเนินการตรวจสอบในข้อถัดไปตรวจสอบข้อมูลของแต่ละคอลัมน์ ว่าตรงตาม Data Type ที่กำหนดหรือไม่ เช่น ต้องเป็นตัวเลขเท่านั้นหากพบว่าไม่ตรงตาม Data Type ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "ข้อมูลไม่ถูกต้องตามรูปแบบที่กำหนด"หากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไปตรวจสอบข้อมูลที่เป็นวันที่ (Date) ว่าถูกต้องหรือไม่ในกรณีที่ เป็นค่าว่าง จากไฟล์นำเข้า หรือ ไม่เป็นรูปแบบ dd/mm/yyyy (ปี ค.ศ.) หรือ เป็นวันที่ที่ไม่มีอยู่จริงในปฎิทินหากพบว่าไม่ถูกต้อง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "พบข้อมูลวันที่ ไม่ถูกต้อง"และบันทึกข้อมูลในลงตาราง header และ detailหากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไปตรวจสอบข้อมูลว่าเป็นรายการ Duplicate หรือไม่หากพบว่า Duplicate ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "พบรายการซ้ำ"หากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไป5. ตรวจสอบว่าสามารถดึงข้อมูลกรมธรรม์ตามในไฟล์นำเข้าได้หรือไม่ นำค่าต่อไปนี้ที่ระบุจากไฟล์นำเข้า ตรวจสอบกับ WS_RIG_009 ดึงข้อมูลสำหรับ investigate expense TBC เดี๋ยวต้องเปลี่ยนเป็นตารางที่ฟีดมาPolicyNoEffective DateEnd Dateหากไม่สามารถดึงข้อมูลข้างต้นได้ครบทุกรายการ ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ “ไม่พบรายการข้อมูลในฐานข้อมูลประกันกลุ่ม”6. บันทึกข้อมูลในไฟล์นำเข้าลงตาราง header และ detailตาราง header บันทึกค่าตาม (ยกเลิก)tx_rig_unname_hdตาราง detail บันทึกค่าตาม (ยกเลิก)tx_rig_unname_act_dt7. หากดำเนินการบันทึกข้อมูลเสร็จสิ้น ระบบดำเนินการ ดังนี้กรณีสำเร็จ ปรับสถานะเป็น “รอยืนยันส่งอนุมัติ”(ยกเลิก)tx_rig_unname_hd.status = '4'กรณีไม่สำเร็จ ปรับสถานะ "นำเข้าไม่สำเร็จ" พร้อมแจ้ง Error ที่ “หมายเหตุ” โดยจะแสดง System Error ตามที่พบ |


===== PAGE 1295712463 | Function Support > cancle > (ยกเลิก) IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual > IRI-GRP-SD03-05 - หน้าจอ Popup Unname Policy Actual (Success Data) =====
# /*<![CDATA[*/
div.rbtoc1782955806427 {padding: 0px;}
div.rbtoc1782955806427 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955806427 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/

Screen Design
Description

# Screen Design
IRI-GRP-SD03-05 - หน้าจอ Popup Unname Policy Actual (Success Data)

# Description
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | แสดงข้อมูลจากไฟล์นำเข้า ที่นำเข้าสำเร็จ |
| 2 | ผู้ใช้งาน(Target Users) | เจ้าหน้าที่ฝ่ายประกันกลุ่ม |
| 3 | การกระทำกับหน้าจอ(Actions) | สามารถตรวจสอบความถูกต้อง ของไฟล์ที่นำเข้าสำเร็จ |
| 4 | อธิบายรายละเอียด(Description) | เมื่อกด link จำนวนรายการ ของ Success Data ใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual ระบบจะแสดงหน้าจอ IRI-GRP-SD03-05 - หน้าจอ Popup Unname Policy Actual (Success Data) รายละเอียดดังนี้ชื่อคอลัมน์ ตามไฟล์นำเข้าแสดงค่าจากตาราง tx_rig_unname_act_dtPolicyNopolicy_numberEffective Dateeffective_dateEnd Dateend_datePeriodperiod_dateNo. of InsuredPreviousinsured_previousAdditioninsured_additionCancellationinsured_cancellationTotalinsured_totalPremiumLifepremium_lifeAccidentpremium_accidentMed. Acc.premium_med_accTPDpremium_tpdE1premium_e1IPpremium_ipOPpremium_opDentalpremium_dentalMed. Totalpremium_med_totalTotalpremium_total |


===== PAGE 1295712471 | Function Support > cancle > (ยกเลิก) IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual > IRI-GRP-SD03-06 - หน้าจอ Popup Unname Policy Actual (Error Data) =====
# /*<![CDATA[*/
div.rbtoc1782955806970 {padding: 0px;}
div.rbtoc1782955806970 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955806970 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/

Screen Design
Description

# Screen Design
IRI-GRP-SD03-05 - หน้าจอ Popup Unname Policy Actual (Error Data)

# Description
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | แสดงข้อมูลจากไฟล์นำเข้า ที่นำเข้าไม่สำเร็จ |
| 2 | ผู้ใช้งาน(Target Users) | เจ้าหน้าที่ฝ่ายประกันกลุ่ม |
| 3 | การกระทำกับหน้าจอ(Actions) | สามารถตรวจสอบความถูกต้อง ของไฟล์ที่นำเข้าไม่สำเร็จ |
| 4 | อธิบายรายละเอียด(Description) | เมื่อกด link จำนวนรายการ ของ Error Data ใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual ระบบจะแสดงหน้าจอ IRI-GRP-SD03-06 - หน้าจอ Popup Unname Policy Actual (Error Data) รายละเอียดดังนี้ชื่อคอลัมน์ ตามไฟล์นำเข้าแสดงค่าจากตาราง tx_rig_unname_act_dtPolicyNopolicy_numberEffective Dateeffective_dateEnd Dateend_datePeriodperiod_dateNo. of InsuredPreviousinsured_previousAdditioninsured_additionCancellationinsured_cancellationTotalinsured_totalPremiumLifepremium_lifeAccidentpremium_accidentMed. Acc.premium_med_accTPDpremium_tpdE1premium_e1IPpremium_ipOPpremium_opDentalpremium_dentalMed. Totalpremium_med_totalTotalpremium_totalRemarkremark |


===== PAGE 1295483786 | Function Support > cancle > (ยกเลิก) IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual > รูปแบบเอกสารนำเข้าไฟล์ Unname Policy Actual =====
ไฟล์นำเข้าสำหรับ IRI-GRP-SD03-02 - หน้าจอ Popup นำเข้าไฟล์ข้อมูล Unname Policy Actual
| ชื่อคอลัมน์ จากไฟล์นำเข้า | คำอธิบาย | ตัวอย่าง | บันทึกค่าลง (ยกเลิก)tx_rig_unname_act_dt |
| PolicyNo | เลขกรมธรรม์ | GL4635 | policy_number |
| Effective Date | วันที่คุ้มครอง | 01/07/2025 | effective_date |
| End Date | วันที่สิ้นความคุ้มครอง | 30/06/2025 | end_date |
| Period | Effective Date ในแต่ละเดือน | 01/07/2024 | period_date |
| No. of Insured |
| Previous | จำนวนสมาชิกทั้งหมดจาก Period ก่อนหน้า | 22,905 | insured_previous |
| Addition | จำนวนสมาชิกที่เพิ่มขึ้นใน Period นี้ | 0 | insured_addition |
| Cancellation | จำนวนสมาชิกที่ลดลงใน Period นี้ | 0 | insured_cancellation |
| Total | จำนวนสมาชิกทั้งหมดใน Period นี้ | 22,905 | insured_total |
| Premium |
| Life | เบี้ยชีวิต | 3,321,225.00 | premium_life |
| Accident | เบี้ยอุบัติเหตุ | 1,145,250.00 | premium_accident |
| Med. Acc. | เบี้ยค่ารักษาพยาบาลอุบัติเหตุ | 0.00 | premium_med_acc |
| TPD | เบี้ย TPD | 0.00 | premium_tpd |
| E1 | เบี้ยชีวิต (Extra) | 0.00 | premium_e1 |
| IP | เบี้ย IPD | 0.00 | premium_ip |
| OP | เบี้ย OPD | 0.00 | premium_op |
| Dental | เบี้ย ทันตกรรม | 0.00 | premium_dental |
| Med. Total | เบี้ยค่ารักษาพยาบาลทั้งหมด | 0.00 | premium_med_total |
| Total | เบี้ยทั้งหมด | 4,466,475.00 | premium_total |
กรณีพบ Error Invalid Data Format ระบบแสดง Column “Remark”
| ชื่อคอลัมน์ จากไฟล์นำเข้า | คำอธิบาย | ตัวอย่าง | บันทึกค่าลง (ยกเลิก)tx_rig_unname_act_dt |
| Remark | หมายเหตุจาก Error File | ข้อมูลไม่ถูกต้องตามรูปแบบที่กำหนด | remark |


===== PAGE 1293386034 | Function Support > cancle > (ยกเลิก)ms_rig_import_status =====
| Database | ri group | Link Previous Version | - |
| Table | ms_rig_import_status | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-22 | Description | เก็บสถานะการนำเข้าข้อมูล |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | ms_status_id | numeric | 8 | Y | เลขที่ Running | 1 | auto generate |
| 2 |  | import_status_name | varchar | 50 | Y | สถานะการนำเข้าข้อมูล | กำลังดำเนินการ |  |
| 3 |  | begin_date | date |  | Y | วันที่เริ่มใช้งาน Config | 2023-06-04 |  |
| 4 |  | expire_date | date |  | Y | วันที่สิ้นสุดการใช้งาน Config | 2999-12-31 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-04 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | boss |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-04 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้อัพเดทรายการล่าสุด | boss |  |

#### Data
| ms_status_id | import_status_name | begin_date | expire_date | create_date | create_by | update_date | update_by |
| 1 | กำลังดำเนินการ | 2025-10-22 | 2999-12-31 | 2025-10-22 | SYSTEM | 2025-10-22 | SYSTEM |
| 2 | รูปแบบไฟล์ไม่ถูกต้อง | 2025-10-22 | 2999-12-31 | 2025-10-22 | SYSTEM | 2025-10-22 | SYSTEM |
| 3 | นำเข้าไม่สำเร็จ | 2025-10-22 | 2999-12-31 | 2025-10-22 | SYSTEM | 2025-10-22 | SYSTEM |
| 4 | รอยืนยันส่งอนุมัติ | 2025-10-22 | 2999-12-31 | 2025-10-22 | SYSTEM | 2025-10-22 | SYSTEM |
| 5 | รออนุมัติข้อมูล | 2025-10-22 | 2999-12-31 | 2025-10-22 | SYSTEM | 2025-10-22 | SYSTEM |
| 6 | ยกเลิกข้อมูล | 2025-10-22 | 2999-12-31 | 2025-10-22 | SYSTEM | 2025-10-22 | SYSTEM |
| 7 | ยืนยันนำเข้าข้อมูลสำเร็จ | 2025-10-22 | 2999-12-31 | 2025-10-22 | SYSTEM | 2025-10-22 | SYSTEM |

#### wiki ที่เกี่ยวข้อง
- A08. สถานะรายการข้อมูลหน้าจอ นำเข้าข้อมูล Investigate Expense


===== PAGE 1319109099 | Function Support > cancle > (ยกเลิก)RIG-RP-022 Est_GIB_{YYYY}{MM} (STD) =====
(empty page)


===== PAGE 1319109134 | Function Support > cancle > (ยกเลิก)RIG-RP-022 Est_GIB_{YYYY}{MM} (STD)RIG-RP-023 Est_Daiichi_{YYYY}{MM} (STD) =====
(empty page)


===== PAGE 1319109136 | Function Support > cancle > (ยกเลิก)RIG-RP-024 Est_Thaire_{YYYY}{MM} (STD) =====
(empty page)


===== PAGE 1319109138 | Function Support > cancle > (ยกเลิก)RIG-RP-025 BDR Act_Daiichi_{YYYY}{QQ} (EDW) =====
TOC
/*<![CDATA[*/
div.rbtoc1782955807435 {padding: 0px;}
div.rbtoc1782955807435 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955807435 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- Report template version
- การกำหนด File Path File Path
- File Path
- Report template Description Sheet Name
- Sheet Name
- การเรียงลำดับข้อมูล การเรียงลำดับข้อมูล
- การเรียงลำดับข้อมูล
- การแสดง Report footer

## Report template version
| Update Date | Edit By | Source/File Name | File Type | Remark | Redmine |
| 16/02/2026 | suthanee.sa | Act_Daiichi_YYYYQQ_export | xlsx |  |  |
| 23/02/2026 | suthanee.sa | Act_Daiichi_YYYYQQ_export_V2 | xlsx |  | https://redmine.ochi.link/issues/53670 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR Report RI Actual ของสัญญา Gibraltarนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ |

## การกำหนด File Path
| File Path |  |
| \groupri\actual\{period}\report_bdr\Act_Daiichi_{YYYY}{QQ} .xlsx | {YYYY}{QQ} ได้มาจาก tx_rig_act_hd.closing_quarter |

## Report template Description
| Sheet Name |
| Act_Thaire_{YYYY}{QQ}_export |
| No. | Column Name | Description | Table | Field | alignment | Example |
| 1 | Pol. No | เลขกรมธรรม์ | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | policy_no | left | GH4495 |
| 2 | Comm.Date | วันเริ่มสัญญาครั้งแรก | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | ri_com_date | center | 01/12/2018 |
| 3 | Eff.Date | วันที่ต่อสัญญา | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | effective_date_from | center | 01/12/2018 |
| 4 | RI Premium Life | เบี้ยประกันภัยต่อ ความคุ้มครองชีวิต | tx_rig_act_bdr_new_renew | tot_re_nb_prem_life + tot_re_ren_prem_life | right | 1,000.15 |
| 5 | RI Premium Accident | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต | tx_rig_act_bdr_new_renew | tot_re_nb_prem_add + tot_re_ren_prem_add | right | 1,000.15 |
| 6 | RI Premium Med.Acc. | เบี้ยประกันภัยต่อความคุ้มครอง |  | 0 | right | 1,000.15 |
| 7 | RI Premium TPD | เบี้ยประกันภัยต่อความคุ้มครอง |  | 0 | right | 1,000.15 |
| 8 | RI Premium E1 | เบี้ยประกันภัยต่อความคุ้มครอง |  | 0 | right | 1,000.15 |
| 9 | RI Premium IPD | เบี้ยประกันภัยต่อความคุ้มครอง |  | 0 | right | 1,000.15 |
| 10 | RI Premium OPD | เบี้ยประกันภัยต่อความคุ้มครอง |  | 0 | right | 1,000.15 |
| 11 | RI Premium Dental | เบี้ยประกันภัยต่อความคุ้มครอง Dental |  | 0 | right | 1,000.15 |
| 12 | Total Medical Premium | เบี้ยประกันภัยต่อความคุ้มครอง Medical |  | 0 | right | 1,000.15 |
| 13 | Total Premium | ผลรวมเบี้ยประกันภัยต่อ |  | tot_re_nb_prem_life + tot_re_ren_prem_life + tot_re_nb_prem_add + tot_re_ren_prem_add | right | 1,000.15 |
| 14 | RI Commission Life | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิต | tx_rig_act_bdr_new_renew | tot_com_life | right | 1,000.15 |
| 15 | RI Commission Accident | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_act_bdr_new_renew | tot_com_add | right | 1,000.15 |
| 16 | RI Commission Med.Acc | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วน |  | 0 | right | 1,000.15 |
| 17 | RI Commission TPD | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วน |  | 0 | right | 1,000.15 |
| 18 | RI Commission IPD | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วน IPD |  | 0 | right | 1,000.15 |
| 19 | RI Commission OPD | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วน OPD |  | 0 | right | 1,000.15 |
| 20 | RI Commission Dental | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วน Dental |  | 0 | right | 1,000.15 |
| 21 | Total RI Commission | ผลรวมจำนวนค่าคอมมิชชั่น |  | tot_com_life + tot_com_add | right | 1,000.15 |
| 22 | Total RI Dividend |  |  | 0 | right | 1,000.15 |
| 23 | RI Claim Life | จำนวนค่าเคลม | tx_rig_act_bdr_claim | sum_re_claim_life | right | 1,000.15 |
| 24 | RI Claim Accident | จำนวนค่าเคลม | tx_rig_act_bdr_claim | sum_re_claim_acc | right | 1,000.15 |
| 25 | RI Claim Med.Acc | จำนวนค่าเคลม | tx_rig_act_bdr_claim | sum_re_claim_med_acc | right | 1,000.15 |
| 26 | RI Claim TPD | จำนวนค่าเคลม | tx_rig_act_bdr_claim | sum_re_claim_tpd + sum_re_claim_dismem | right | 1,000.15 |
| 27 | RI Claim IPD | จำนวนค่าเคลม | tx_rig_act_bdr_claim | sum_re_claim_ipd | right | 1,000.15 |
| 28 | RI Claim OPD | จำนวนค่าเคลม | tx_rig_act_bdr_claim | sum_re_claim_opd | right | 1,000.15 |
| 29 | RI Claim Dental | จำนวนค่าเคลม | tx_rig_act_bdr_claim | sum_re_claim_dental | right | 1,000.15 |
| 30 | Total RI Claim | ผลรวมจำนวนค่าเคลม | tx_rig_act_bdr_claim | sum_re_claim_life + sum_re_claim_acc + sum_re_claim_med_acc + sum_re_claim_tpd + sum_re_claim_dismem + sum_re_claim_ipd + sum_re_claim_opd + sum_re_claim_dental | right | 1,000.15 |
| 31 | Claim Return Premium |  |  | 0 | right | 1,000.15 |
| 32 | Claim Expense |  | tx_rig_act_bdr_claim | re_claim_inv | right | 1,000.15 |
| 33 | Claim Recovery Date |  |  | null | right | 1,000.15 |
| 34 | Data Quarter | Quarter ของข้อมูลที่ใช้ในการรายงาน | tx_rig_act_hd | closing_quarter | center | 2024Q4 |
| 35 | RI Period | รอบประมวลผลตามรอบปิดบัญชี | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | policy_ri_period | center | 201812 |

## การเรียงลำดับข้อมูล
| การเรียงลำดับข้อมูล |
| Group By1. รายการที่มีเฉพาะเบี้ย และ รายการที่มีทั้งเบี้ยและเคลมรายการเหล่านี้มีค่า ไม่เป็น 0 tx_rig_est_bdr.ri_prem_1st_life, ri_prem_1st_add, ri_prem_1st_tpd, ri_prem_1st_med, ri_prem_1st_tot, ri_prem_renew_life, ri_prem_renew_add, ri_prem_renew_tpd, ri_prem_renew_med, ri_prem_renew_tot2. รายการที่มีเฉพาะเคลมรายการเหล่านี้ไม่มีค่าหรือเป็น 0 tx_rig_est_bdr.ri_prem_1st_life, ri_prem_1st_add, ri_prem_1st_tpd, ri_prem_1st_med, ri_prem_1st_tot, ri_prem_renew_life, ri_prem_renew_add, ri_prem_renew_tpd, ri_prem_renew_med, ri_prem_renew_totOrder by เลขกรมธรรม์ (policy_no) จากน้อยไปมาก (ASC)กรณี policy_no เดียวกัน ให้เรียงตามปีกรมธรรม์ (policy_year) จากน้อยไปมาก (ASC) |

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1319109504 | Function Support > cancle > (ยกเลิก)RIG-RP-026 Act_GIB_{YYYY}{QQ} (STD) =====
(empty page)


===== PAGE 1319109507 | Function Support > cancle > (ยกเลิก)RIG-RP-027 Act_Daiichi_{YYYY}{QQ} (STD) =====
(empty page)


===== PAGE 1319109510 | Function Support > cancle > (ยกเลิก)RIG-RP-028 Act_GIB_{YYYY}{QQ} (STD) =====
(empty page)


===== PAGE 1291714675 | Function Support > cancle > (ยกเลิก)tx_rig_claim_death_dt =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_claim_death_dt | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-15 | Description | เก็บข้อมูล detail ของรายการสินไหมประกันกลุ่มเฉพาที่อนุมัติ (Death) |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | Condition |
| 1 | PK | rig_claim_death_id | numeric | 8 | Y | เลขที่ Running | 1 | auto generate |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. | 1 | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | period | varchar | 5 | Y | งวด | 202104 |  |
| 4 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ | GH4639 |  |
| 5 |  | claim_no | varchar | 12 |  | หมายเลขการเคลม | 202104002740 |  |
| 6 |  | reinsur_no | varchar | 10 |  | เลขที่กรมธรรม์ ประกันต่อ | RG250 |  |
| 7 |  | certno | varchar | 8 |  | หมายเลขสมาชิก | 950 |  |
| 8 |  | claim_type | varchar | 10 |  | ประเภทรับแจ้ง | IPD |  |
| 9 |  | effective_date | datetime |  |  | วันที่คุ้มครอง | 2024-07-01 0:00:00 |  |
| 10 |  | policy_year | int | 2 |  | ปีกรมธรรม์ | 7 |  |
| 11 |  | age | int | 2 |  | อายุของผู้เอาประกัน | 26 |  |
| 12 |  | gender | varchar | 1 |  | เพศ | F |  |
| 13 |  | accident_date | datetime |  |  | วันที่เกิดเหตุ | 2021-04-04 12:12:00 |  |
| 14 |  | approve_date | datetime |  |  | วันที่อนุมัติ | 2021-04-05 13:27:31 |  |
| 15 |  | sum_insured_life | int | 25,2 |  | ทุนประกันชีวิต | 600,000.00 |  |
| 16 |  | sum_insured_acc | int | 25,2 |  | ทุนประกันชีวิต อุบัติเหตุ | 600,000.00 |  |
| 17 |  | sum_insured_med | int | 25,2 |  | ทุนค่ารักษาจาก อุบัติเหตุ | 600,000.00 |  |
| 18 |  | sum_insured_tpd | int | 25,2 |  | ทุนประกันชีวิต ทุพพลภาพ | 600,000.00 |  |
| 19 |  | claim_life | int | 25,2 |  | เคลมชีวิต | 600,000.00 |  |
| 20 |  | claim_acc | int | 25,2 |  | เคลมอุบัติเหตุ | 600,000.00 |  |
| 21 |  | claim_tpd | int | 25,2 |  | เคลมทุพพลภาพ | 600,000.00 |  |
| 22 |  | total_claim | int | 25,2 |  | จำนวนเงินที่จ่าย | 600,000.00 |  |
| 23 |  | payment_date | datetime |  |  | วันที่จ่ายเงิน | 2021-06-18 0:00:00 |  |
| 24 |  | claim_cause | varchar | 80 |  | สาเหตุการเคลม | Acute gastroenteritis |  |
| 25 |  | ri_investigation_expense | int | 25,2 |  | ค่าใช้จ่ายในการสืบสวน | 0 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1291715113 | Function Support > cancle > (ยกเลิก)tx_rig_claim_health_dt =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_claim_health_dt | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-15 | Description | เก็บข้อมูล detail ของรายการสินไหมประกันกลุ่มเฉพาที่อนุมัติ (Health) |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | Condition |
| 1 | PK | rig_claim_health_id | numeric | 8 | Y | เลขที่ Running | 1 | auto generate |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. | 1 | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | period | varchar | 5 | Y | งวด | 202104 |  |
| 4 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ | GH4639 |  |
| 5 |  | claim_no | varchar | 12 |  | หมายเลขการเคลม | 202104002740 |  |
| 6 |  | reinsur_no | varchar | 10 |  | เลขที่กรมธรรม์ ประกันต่อ | RG250 |  |
| 7 |  | certno | varchar | 8 |  | หมายเลขสมาชิก | 950 |  |
| 8 |  | claim_type | varchar | 10 |  | ประเภทรับแจ้ง | IPD |  |
| 9 |  | effective_date | datetime |  |  | วันที่คุ้มครอง | 2024-07-01 0:00:00 |  |
| 10 |  | policy_year | int | 2 |  | ปีกรมธรรม์ | 7 |  |
| 11 |  | age | int | 2 |  | อายุของผู้เอาประกัน | 26 |  |
| 12 |  | gender | varchar | 1 |  | เพศ | F |  |
| 13 |  | accident_date | datetime |  |  | วันที่เกิดเหตุ | 2021-04-04 12:12:00 |  |
| 14 |  | approve_date | datetime |  |  | วันที่อนุมัติ | 2021-04-05 13:27:31 |  |
| 15 |  | sum_insured_life | int | 25,2 |  | ทุนประกันชีวิต | 600,000.00 |  |
| 16 |  | sum_insured_acc | int | 25,2 |  | ทุนประกันชีวิต อุบัติเหตุ | 600,000.00 |  |
| 17 |  | sum_insured_med | int | 25,2 |  | ทุนค่ารักษาจาก อุบัติเหตุ | 600,000.00 |  |
| 18 |  | sum_insured_tpd | int | 25,2 |  | ทุนประกันชีวิต ทุพพลภาพ | 600,000.00 |  |
| 19 |  | claim_life | int | 25,2 |  | เคลมชีวิต | 600,000.00 |  |
| 20 |  | claim_acc | int | 25,2 |  | เคลมอุบัติเหตุ | 600,000.00 |  |
| 21 |  | claim_tpd | int | 25,2 |  | เคลมทุพพลภาพ | 600,000.00 |  |
| 22 |  | total_claim | int | 25,2 |  | จำนวนเงินที่จ่าย | 600,000.00 |  |
| 23 |  | payment_date | datetime |  |  | วันที่จ่ายเงิน | 2021-06-18 0:00:00 |  |
| 24 |  | claim_cause | varchar | 80 |  | สาเหตุการเคลม | Acute gastroenteritis |  |
| 25 |  | ri_investigation_expense | int | 25,2 |  | ค่าใช้จ่ายในการสืบสวน | 0 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1291715106 | Function Support > cancle > (ยกเลิก)tx_rig_claim_tpd_dt =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_claim_tpd_dt | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-15 | Description | เก็บข้อมูล detail ของรายการสินไหมประกันกลุ่มเฉพาที่อนุมัติ (Dis/TPD) |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | Condition |
| 1 | PK | rig_claim_tpd_id | numeric | 8 | Y | เลขที่ Running | 1 | auto generate |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. | 1 | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | period | varchar | 5 | Y | งวด | 202104 |  |
| 4 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ | GH4639 |  |
| 5 |  | claim_no | varchar | 12 |  | หมายเลขการเคลม | 202104002740 |  |
| 6 |  | reinsur_no | varchar | 10 |  | เลขที่กรมธรรม์ ประกันต่อ | RG250 |  |
| 7 |  | certno | varchar | 8 |  | หมายเลขสมาชิก | 950 |  |
| 8 |  | claim_type | varchar | 10 |  | ประเภทรับแจ้ง | IPD |  |
| 9 |  | effective_date | datetime |  |  | วันที่คุ้มครอง | 2024-07-01 0:00:00 |  |
| 10 |  | policy_year | int | 2 |  | ปีกรมธรรม์ | 7 |  |
| 11 |  | age | int | 2 |  | อายุของผู้เอาประกัน | 26 |  |
| 12 |  | gender | varchar | 1 |  | เพศ | F |  |
| 13 |  | accident_date | datetime |  |  | วันที่เกิดเหตุ | 2021-04-04 12:12:00 |  |
| 14 |  | approve_date | datetime |  |  | วันที่อนุมัติ | 2021-04-05 13:27:31 |  |
| 15 |  | sum_insured_life | int | 25,2 |  | ทุนประกันชีวิต | 600,000.00 |  |
| 16 |  | sum_insured_acc | int | 25,2 |  | ทุนประกันชีวิต อุบัติเหตุ | 600,000.00 |  |
| 17 |  | sum_insured_med | int | 25,2 |  | ทุนค่ารักษาจาก อุบัติเหตุ | 600,000.00 |  |
| 18 |  | sum_insured_tpd | int | 25,2 |  | ทุนประกันชีวิต ทุพพลภาพ | 600,000.00 |  |
| 19 |  | claim_life | int | 25,2 |  | เคลมชีวิต | 600,000.00 |  |
| 20 |  | claim_acc | int | 25,2 |  | เคลมอุบัติเหตุ | 600,000.00 |  |
| 21 |  | claim_tpd | int | 25,2 |  | เคลมทุพพลภาพ | 600,000.00 |  |
| 22 |  | total_claim | int | 25,2 |  | จำนวนเงินที่จ่าย | 600,000.00 |  |
| 23 |  | payment_date | datetime |  |  | วันที่จ่ายเงิน | 2021-06-18 0:00:00 |  |
| 24 |  | claim_cause | varchar | 80 |  | สาเหตุการเคลม | Acute gastroenteritis |  |
| 25 |  | ri_investigation_expense | int | 25,2 |  | ค่าใช้จ่ายในการสืบสวน | 0 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1293123895 | Function Support > cancle > (ยกเลิก)tx_rig_exp_dt =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_exp_dt | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-21 | Description | เก็บข้อมูล detail ของรายการใน IRI-GRP-SD01 หน้าจอ นำเข้าข้อมูล Investigate Expense |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | rig_exp_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | FK | rig_exp_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. |  | จาก (ยกเลิก)tx_rig_exp_hd.rig_exp_hd_id |
| 3 |  | policy_no | varchar | 8 | Y | เลขที่กรมธรรม์ | GH1663 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD01 หน้าจอ นำเข้าข้อมูล Investigate Expense |
| 4 |  | policy_year | numeric | 3 |  | ปีกรมธรรม์ | 18 | รับค่าจาก WS_RIG_009 ดึงข้อมูลสำหรับ investigate expense |
| 5 |  | first_date | date |  |  | วันเริ่มสัญญาครั้งแรก |  | รับค่าจาก WS_RIG_009 ดึงข้อมูลสำหรับ investigate expense'2023-08-11 00:00:00.000' >> '2023-08-11' |
| 6 |  | promise_date | date |  | Y | วันเริ่มสัญญาปีปัจจุบัน |  | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD01 หน้าจอ นำเข้าข้อมูล Investigate Expense'01/07/2023' >> '2023-07-01' |
| 7 |  | expire_date | date |  |  | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น |  | รับค่าจาก WS_RIG_009 ดึงข้อมูลสำหรับ investigate expense'2023-08-11 00:00:00.000' >> '2023-08-11' |
| 8 |  | policy_status | varchar | 1 |  | สถานะของกรมธรรม์ จากประกันกลุ่ม | I | รับค่าจาก WS_RIG_009 ดึงข้อมูลสำหรับ investigate expense |
| 9 |  | cert_no | numeric | 10 | Y | หมายเลขสมาชิก | 05290 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD01 หน้าจอ นำเข้าข้อมูล Investigate Expense |
| 10 |  | claim_no | varchar | 20 |  | หมายเลขการเคลม | 202401007755 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD01 หน้าจอ นำเข้าข้อมูล Investigate Expense |
| 11 |  | approved_date | date |  |  | วันที่อนุมัติ |  | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD01 หน้าจอ นำเข้าข้อมูล Investigate Expense'01/07/2023' >> '2023-07-01' |
| 12 |  | investigation_expense | numeric | 12,2 |  | ค่าใช้จ่ายในการสืบสวนสอบสวน | 3,000.00 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD01 หน้าจอ นำเข้าข้อมูล Investigate Expense |
| 13 |  | unname | numeric | 1 |  | ระบุว่าเป็นกรมธรรม์ Unname | 1 | รับค่าจาก WS_RIG_009 ดึงข้อมูลสำหรับ investigate expense |
| 14 |  | type | varchar | 15 |  | ประเภทชุดข้อมูลที่ดึงจากตาราง | glpolicy | รับค่าจาก WS_RIG_009 ดึงข้อมูลสำหรับ investigate expense |
| 15 |  | reinsured_no | varchar | 10 |  | เลขประกันภัยต่อ |  | รับค่าจาก WS_RIG_009 ดึงข้อมูลสำหรับ investigate expense |
| 16 |  | remark | varchar |  |  | หมายเหตุจาก Error File |  | จำนวน Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์ |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1292862108 | Function Support > cancle > (ยกเลิก)tx_rig_exp_hd =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_exp_hd | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-20 | Description | เก็บข้อมูล header ของรายการใน IRI-GRP-SD01 หน้าจอ นำเข้าข้อมูล Investigate Expense |
| Updated By | pongsathorn.pa |  |  |
| Updated Date (yyyy-mm-dd ) | 2025-10-15 |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | rig_exp_hd_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 |  | process_code | varchar | 20 | Y | Code ของ Process |  |  |
| 3 |  | status | numeric | 2 | Y | สถานะรายการข้อมูล | ยกเลิกข้อมูล | อ้างอิง A08. สถานะรายการข้อมูลในหน้าจอ สำหรับ Maker และ Checker |
| 4 |  | quarter | numeric | 6 | Y | งวดทำรายการ | 2025Q4 | รับค่าจากหน้าจอ |
| 5 |  | sum_record | numeric | 12 | Y | จำนวนรวมรายการ | 1,000 | count จำนวนกรมธรรม์จากไฟล์ |
| 6 |  | imp_file_name | varchar | 500 |  | ชื่อไฟล์ที่นำเข้าสำเร็จ | 2025Q4_Investigate_Expense.xlsx |  |
| 7 |  | imp_file_available | boolean |  | Y | นำเข้าไฟล์สำเร็จหรือไม่ | True | True = นำเข้าสำเร็จFalse = นำเข้าไม่สำเร็จ |
| 8 |  | err_file_name | varchar | 500 |  | ชื่อไฟล์ที่นำเข้าไม่สำเร็จ | 2025Q4_Investigate_Expense.xlsx |  |
| 9 |  | err_file_available | boolean |  | Y | มี file error หรือไม่ | False | True = มีFalse = ไม่มี |
| 10 |  | no_data_flag | boolean |  | Y | ไม่มีข้อมูลนำเข้าใน period นั้นใช่หรือไม่ | False | True = ใช่ (ไม่มีข้อมูลนำเข้า)False = ไม่ใช่ |
| 11 |  | unuse_flag | boolean |  | Y | Flag สำหรับระบุว่ายังใช้งานหรือไม่ | True | True : ไม่ใช้งานแล้วFalse : ยังใช้งาน |
| 12 |  | remark | varchar | 500 |  | หมายเหตุ | จำนวน Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์ |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1292239124 | Function Support > cancle > (ยกเลิก)tx_rig_list_act_dt =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_list_act_dt | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-17 | Description | เก็บข้อมูล detail ของ List of policy กธ.ที่ส่ง reinsurance ของ Actual |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | rig_list_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. |  | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | reinsured_no | varchar | 10 | Y | เลขประกันภัยต่อ |  |  |
| 4 |  | policy_no | varchar | 8 | Y | เลขที่กรมธรรม์ | GH1663 |  |
| 5 |  | policy_year | numeric | 3 | Y | ปีกรมธรรม์ | 18 |  |
| 6 |  | first_date | date |  |  | วันเริ่มสัญญาครั้งแรก |  | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 7 |  | promise_date | date |  |  | วันเริ่มสัญญาปีปัจจุบัน |  | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 8 |  | expire_date | date |  |  | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น |  | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 9 |  | pay_type | numeric | 1 |  | ประเภทการชำระเบี้ย | 1 |  |
| 10 |  | payment_mode | varchar | 20 |  | ประเภทการชำระเบี้ย สำหรับออกรายงานให้ user | Annual | QuarterlyAnnualSemi AnnualMonthly |
| 11 |  | policy_name | varchar | 100 |  | ชื่อกรมธรรม์ | อี ซี เอฟ พรีซิชั่น (ประเทศไทย) จำกัด |  |
| 12 |  | nature_of_business | varchar | 250 |  | ประเภทของธุรกิจ |  |  |
| 13 |  | policy_status | varchar | 1 |  | สถานะของกรมธรรม์ จากประกันกลุ่ม | I |  |
| 14 |  | policy_status_report | varchar | 20 |  | สถานะของกรมธรรม์ สำหรับออกรายงานให้ user | Inforce |  |
| 15 |  | ri_status | varchar | 20 |  | สถานะของกรมธรรม์ สำหรับ Group RI | Inforce |  |
| 16 |  | lapse_date | date |  |  | วันที่ไม่ต่อสัญญา |  | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 17 |  | policy_no_old | varchar | 8 |  | เลขกรมธรรม์เก่า (สำหรับกรมธรรม์ที่มีการเปลี่ยนเลขกรมธรรม์ทุกปี) | GL1742 |  |
| 18 |  | expreience_refund | numeric | 1 |  | เงินคืนตามประสบการณ์ | 1 |  |
| 19 |  | expreience_rf_report | varchar | 3 |  | เงินคืนตามประสบการณ์ สำหรับออกรายงานให้ user | Yes | YesNo |
| 20 |  | unname | numeric | 1 |  | ระบุว่าเป็นกรมธรรม์ Unname | 1 |  |
| 21 |  | type | varchar | 15 |  | ประเภทชุดข้อมูลที่ดึงจากตาราง | glpolicy | glpolicygloldpolicy |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1292239090 | Function Support > cancle > (ยกเลิก)tx_rig_mem_ov_dt =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_mem_ov_dt | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-17 | Description | เก็บข้อมูล สมาชิกที่อายุเกิน xx ปีของแต่ละกรมธรรม์ |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | rig_mem_ov_id | numeric | 8 | Y | เลขที่ Running | 1 | auto generate |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. | 1 | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | period | varchar | 6 | Y | งวดที่ | 202104 |  |
| 4 |  | policy_no | varchar | 8 | Y | เลขที่กรมธรรม์ | GH4709 |  |
| 5 |  | effective_date | date | 3 | Y | วันที่คุ้มครอง | 2019-01-01 |  |
| 6 |  | payment_mode | varchar | 20 |  | ประเภทการจ่าย | Annual |  |
| 7 |  | cert_no | date | 5 |  | เลขที่สมาชิก | 3 |  |
| 8 |  | age | numeric | 3 |  | อายุ | 70 |  |
| 9 |  | sum_insure_acc | numeric | 25,2 |  | ทุนอุบัติเหตุ | 200,000.00 |  |
| 10 |  | premium_acc | numeric | 25,2 |  | เบี้ยอุบัติเหตุ | 480 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1291420098 | Function Support > cancle > (ยกเลิก)tx_rig_policy_all_dt =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_policy_all_dt | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-14 | Description | เก็บข้อมูล detail ของรายการกรมธรรม์ประกันกลุ่มที่ user ต้องการ |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | rig_policy_all_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. |  | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | policy_no | varchar | 8 | Y | เลขที่กรมธรรม์ | GH1663 |  |
| 4 |  | policy_year | numeric | 3 | Y | ปีกรมธรรม์ | 18 |  |
| 5 |  | policy_doc_date | date |  |  | วันที่ออกกรมธรรม์ |  | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 6 |  | first_date | date |  |  | วันเริ่มสัญญาครั้งแรก |  | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 7 |  | promise_date | date |  |  | วันเริ่มสัญญาปีปัจจุบัน |  | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 8 |  | reinsur_date | date |  |  | วันที่ต่อสัญญาครั้งต่อไป |  | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 9 |  | reinsur_no | varchar | 10 |  | เลขที่กรมธรรม์ ประกันต่อ | 2311016 |  |
| 10 |  | repolicy_no | varchar | 8 |  | กรมธรรม์ ประกันต่อเลขที่ | DG002 |  |
| 11 |  | re_year | numeric | 3 |  | กรมธรรม์ ประกันต่อปีที่ |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1295483828 | Function Support > cancle > (ยกเลิก)tx_rig_unname_act_dt =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_unname_act_dt | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-30 | Description | เก็บข้อมูล detail ของรายการใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | unname_act_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | FK | unname_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. |  | จาก (ยกเลิก)tx_rig_unname_hd.unname_hd_id |
| 3 |  | policy_number | varchar | 8 | Y | เลขที่กรมธรรม์ | GH1663 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| 4 |  | effective_date | date |  | Y | วันที่คุ้มครองของกรมธรรม์ |  | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual'01/07/2023' >> '2023-07-01' |
| 5 |  | end_date | date |  | Y | วันที่สิ้นความคุ้มครอง |  | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| 6 |  | period_date | date |  | Y | Effective Date ในแต่ละเดือน |  | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| 7 |  | insured_previous | numeric | 8 |  | จำนวนสมาชิกทั้งหมดจาก Period ก่อนหน้า | 22,905 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| 8 |  | insured_addition | numeric | 8 |  | จำนวนสมาชิกที่เพิ่มขึ้นใน Period นี้ | 0 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| 9 |  | insured_cancellation | numeric | 8 |  | จำนวนสมาชิกที่ลดลงใน Period นี้ | 0 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| 10 |  | insured_total | numeric | 8 |  | จำนวนสมาชิกทั้งหมดใน Period นี้ | 22,905 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| 11 |  | premium_life | numeric | 20,2 |  | เบี้ยชีวิต | 3,321,225.00 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| 12 |  | premium_accident | numeric | 20,2 |  | เบี้ยอุบัติเหตุ | 1,145,250.00 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| 13 |  | premium_med_acc | numeric | 20,2 |  | เบี้ยค่ารักษาพยาบาลอุบัติเหตุ | 0.00 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| 14 |  | premium_tpd | numeric | 20,2 |  | เบี้ย TPD | 0.00 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| 15 |  | premium_e1 | numeric | 20,2 |  | เบี้ยชีวิต (Extra) | 0.00 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| 16 |  | premium_ip | numeric | 20,2 |  | เบี้ย IPD | 0.00 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| 17 |  | premium_op | numeric | 20,2 |  | เบี้ย OPD | 0.00 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| 18 |  | premium_dental | numeric | 20,2 |  | เบี้ย ทันตกรรม | 0.00 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| 19 |  | premium_med_total | numeric | 20,2 |  | เบี้ยค่ารักษาพยาบาลทั้งหมด | 0.00 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| 20 |  | premium_total | numeric | 20,2 |  | เบี้ยทั้งหมด | 4,466,475.00 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual |
| 21 |  | remark | varchar |  |  | หมายเหตุจาก Error File |  | จำนวน Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์ |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1295482980 | Function Support > cancle > (ยกเลิก)tx_rig_unname_est_dt =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_unname_est_dt | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-30 | Description | เก็บข้อมูล detail ของรายการใน IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | unname_est_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | FK | unname_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. |  | จาก (ยกเลิก)tx_rig_unname_hd.unname_hd_id |
| 3 |  | policy_number | varchar | 8 | Y | เลขที่กรมธรรม์ | GH1663 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate |
| 4 |  | effective_date | date |  | Y | วันที่คุ้มครองของกรมธรรม์ |  | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate'01/07/2023' >> '2023-07-01' |
| 5 |  | amount_life | numeric | 8 |  | จำนวนสมาชิกที่มีทุนชีวิต | 22,968 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate |
| 6 |  | amount_accident | numeric | 8 |  | จำนวนสมาชิกที่มีทุนอุบัติเหตุชีวิต | 22,968 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate |
| 7 |  | amount_medaccident | numeric | 8 |  | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ | 0 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate |
| 8 |  | amount_tpd | numeric | 8 |  | จำนวนสมาชิกที่มีทุนทุนทุพพลภาพ | 0 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate |
| 9 |  | life_insure | numeric | 20,2 |  | ทุนชีวิตของสมาชิกทุกคนในกรมธรรม์ | 2,296,800,000 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate |
| 10 |  | accident_insure | numeric | 20,2 |  | ทุนอุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ | 2,296,800,000 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate |
| 11 |  | medaccident_insure | numeric | 20,2 |  | ทุนค่ารักษาพยาบาล อุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ | 0 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate |
| 12 |  | tpd_insure | numeric | 20,2 |  | ทุนทุพพลภาพของสมาชิกทุกคนในกรมธรรม์ | 0 | รับค่าจากไฟล์นำเข้าใน IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate |
| 13 |  | remark | varchar |  |  | หมายเหตุจาก Error File |  | จำนวน Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์ |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1295482956 | Function Support > cancle > (ยกเลิก)tx_rig_unname_hd =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_unname_hd | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-30 | Description | เก็บข้อมูล header ของรายการใน IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | unname_hd_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 |  | process_code | varchar | 20 | Y | Code ของ Process |  |  |
| 3 |  | status | numeric | 2 | Y | สถานะรายการข้อมูล | ยกเลิกข้อมูล | อ้างอิง A08. สถานะรายการข้อมูลในหน้าจอ สำหรับ Maker และ Checker |
| 4 |  | ri_type | varchar | 1 | Y | Estimate/ Actual/ Master | E,A,M | กรณีเป็นข้อมูลจาก IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate บันทึก 'E'กรณีเป็นข้อมูลจาก IRI-GRP-SD03 หน้าจอ นำเข้าข้อมูล Unname Policy Actual บันทึก 'A' |
| 5 |  | period | numeric | 6 |  | เดือนที่ทำรายการ | 202506 | รับค่าจากหน้าจอ |
| 6 |  | quarter | numeric | 6 |  | งวดที่ทำรายการ | 2025Q4 | รับค่าจากหน้าจอ |
| 7 |  | sum_record | numeric | 12 | Y | จำนวนรวมรายการ | 1 | count จำนวนกรมธรรม์จากไฟล์ |
| 8 |  | imp_file_name | varchar | 500 |  | ชื่อไฟล์ที่นำเข้าสำเร็จ | 202506_Unname_Policy_Estimate.xlsx |  |
| 9 |  | imp_file_available | boolean |  | Y | นำเข้าไฟล์สำเร็จหรือไม่ | True | True = นำเข้าสำเร็จFalse = นำเข้าไม่สำเร็จ |
| 10 |  | err_file_name | varchar | 500 |  | ชื่อไฟล์ที่นำเข้าไม่สำเร็จ | 202506_Unname_Policy_Estimate.xlsx |  |
| 11 |  | err_file_available | boolean |  | Y | มี file error หรือไม่ | False | True = มีFalse = ไม่มี |
| 12 |  | no_data_flag | boolean |  | Y | ไม่มีข้อมูลนำเข้าใน period นั้นใช่หรือไม่ | False | True = ใช่ (ไม่มีข้อมูลนำเข้า)False = ไม่ใช่ |
| 13 |  | unuse_flag | boolean |  | Y | Flag สำหรับระบุว่ายังใช้งานหรือไม่ | True | True : ไม่ใช้งานแล้วFalse : ยังใช้งาน |
| 14 |  | remark | varchar | 500 |  | หมายเหตุ | จำนวน Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์ |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1300987994 | Function Support > cancle > 2. การคัดเลือกกรมธรรม์ (ACT) =====
DAI_Grp_Daiichi_Coins
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ข้ามไปดำเนินการข้อ 6. การคำนวณ RI Claim (ACT)
- ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ข้ามไปดำเนินการข้อ 6. การคำนวณ RI Claim (ACT)
GIB_Grp_Direct_EB
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
2. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYPeriod YYYY01 = 01/01/YYYY - 31/01/YYYYPeriod YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYYPeriod YYYY03 = 01/03/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYPeriod YYYY04 = 01/04/YYYY - 30/04/YYYYPeriod YYYY05 = 01/05/YYYY - 31/05/YYYYPeriod YYYY06 = 01/06/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYPeriod YYYY07 = 01/07/YYYY - 31/07/YYYYPeriod YYYY08 = 01/08/YYYY - 31/08/YYYYPeriod YYYY09 = 01/09/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYYPeriod YYYY10 = 01/10/YYYY - 31/10/YYYYPeriod YYYY11 = 01/11/YYYY - 30/11/YYYYPeriod YYYY12 = 01/12/YYYY - 31/12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYYPeriod YYYY01 = 01/01/YYYY - 31/01/YYYYPeriod YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYYPeriod YYYY03 = 01/03/YYYY - 31/03/YYYY
- Period YYYY01 = 01/01/YYYY - 31/01/YYYY
- Period YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYY
- Period YYYY03 = 01/03/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYYPeriod YYYY04 = 01/04/YYYY - 30/04/YYYYPeriod YYYY05 = 01/05/YYYY - 31/05/YYYYPeriod YYYY06 = 01/06/YYYY - 30/06/YYYY
- Period YYYY04 = 01/04/YYYY - 30/04/YYYY
- Period YYYY05 = 01/05/YYYY - 31/05/YYYY
- Period YYYY06 = 01/06/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYYPeriod YYYY07 = 01/07/YYYY - 31/07/YYYYPeriod YYYY08 = 01/08/YYYY - 31/08/YYYYPeriod YYYY09 = 01/09/YYYY - 30/09/YYYY
- Period YYYY07 = 01/07/YYYY - 31/07/YYYY
- Period YYYY08 = 01/08/YYYY - 31/08/YYYY
- Period YYYY09 = 01/09/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYYPeriod YYYY10 = 01/10/YYYY - 31/10/YYYYPeriod YYYY11 = 01/11/YYYY - 30/11/YYYYPeriod YYYY12 = 01/12/YYYY - 31/12/YYYY
- Period YYYY10 = 01/10/YYYY - 31/10/YYYY
- Period YYYY11 = 01/11/YYYY - 30/11/YYYY
- Period YYYY12 = 01/12/YYYY - 31/12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ Batch ACT-007 ข้อมูล (R61) Premium and movement (Actual) โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน tx_stg_act_prem_movement.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์นั้นสำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี tx_stg_act_prem_movement.effective_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลโดยให้กำหนด {PERIOD_MONTH} จาก ปีและเดือนของ tx_stg_act_prem_movement.period_date รูปแบบ YYYYMMกรณีเลือกไปเจอกรมธรรม์ที่มี เดือนและปี tx_stg_act_prem_movement.end_date ตรงกับ {PERIOD_DATE_TO} ให้ดึงรายการกรมธรรม์เดียวกัน ที่มี tx_stg_act_prem_movement.policy_year เดียวกันของรายการนั้นมาทั้งหมดดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{COV_FROM}effective_date{COV_TO}end_date{MEM_PREVIOUS}no_mem_previous{MEM_ADD}no_mem_addition{MEM_CANCEL}no_mem_cancellation{MEM_TOT}no_mem_total{PREM_LIFE}premium_life{PREM_ACC}premium_accident{PREM_E1}premium_e1{PREM_LIFE_E1}premium_life + premium_e1{PERIOD_DATE_FROM}period_date{PERIOD_DATE_TO}บวกเพิ่มจาก period_date ไปอีก 1 เดือนตามตัวอย่างในตาราง{PERIOD_DATE_FROM}{PERIOD_DATE_TO}31/10/256629/11/256630/11/256630/12/256631/12/256630/01/256731/01/256728/02/256729/02/256730/03/256731/03/256730/04/2567{PERIOD_MONTH}ปีและเดือนของ period_date{POLICY_YEAR}policy_year {PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date แปลงค่าเบี้ยให้เป็นรายปี (ต่อรายการ)parameter {Y_PREM_LIFE}{PREM_LIFE} * {PAY_MODE}{Y_PREM_ACC}{PREM_ACC}{Y_PREM_E1}{PREM_E1}{Y_PREM_LIFE_E1}{Y_PREM_LIFE} + {Y_PREM_E1}tx_stg_act_all_policy (ต่อรายการ)parametertx_stg_act_all_policy {POLICY_NO}policy_no {POLICY_NO_FULL}reinsur_no{COM_DATE}1) ใช้วันที่และเดือนจาก Commencement Date จาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{GIB_RI_STATUS}ถ้า {POLICY_STATUS} = I หรือ B ให้ตรวจสอบ {POLICY_YEAR_RI}ถ้า {POLICY_STATUS} = 1 เก็บ New Businessถ้า {POLICY_STATUS} > 1 เก็บ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_datetx_stg_act_inforce_policy (ต่อรายการ)parametertx_stg_act_inforce_policy{POLICY_NO}policy_no{COMM_DATE}commencement_date{COV_FROM}effective_date{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death{INS_LIFE}sum_insured_life{INS_ACC_DEATH}sum_insured_accident_deathtx_stg_act_prem_layer (ต่อรายการ)parametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1life_prem_rate{L2_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2life_prem_rate{L3_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1accident_prem_rate{L2_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2accident_prem_rate{L3_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3accident_prem_rate{L1_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_prem{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_extra_prem{L1_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_prem{L1_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_extra_premtx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{Y_SUM_ACC_PREM_OVER}ผลรวม {Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {POLICY_YEAR}
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน tx_stg_act_prem_movement.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์นั้นสำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์นั้นสำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี tx_stg_act_prem_movement.effective_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลโดยให้กำหนด {PERIOD_MONTH} จาก ปีและเดือนของ tx_stg_act_prem_movement.period_date รูปแบบ YYYYMM
- โดยให้กำหนด {PERIOD_MONTH} จาก ปีและเดือนของ tx_stg_act_prem_movement.period_date รูปแบบ YYYYMM
- กรณีเลือกไปเจอกรมธรรม์ที่มี เดือนและปี tx_stg_act_prem_movement.end_date ตรงกับ {PERIOD_DATE_TO} ให้ดึงรายการกรมธรรม์เดียวกัน ที่มี tx_stg_act_prem_movement.policy_year เดียวกันของรายการนั้นมาทั้งหมด
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{COV_FROM}effective_date{COV_TO}end_date{MEM_PREVIOUS}no_mem_previous{MEM_ADD}no_mem_addition{MEM_CANCEL}no_mem_cancellation{MEM_TOT}no_mem_total{PREM_LIFE}premium_life{PREM_ACC}premium_accident{PREM_E1}premium_e1{PREM_LIFE_E1}premium_life + premium_e1{PERIOD_DATE_FROM}period_date{PERIOD_DATE_TO}บวกเพิ่มจาก period_date ไปอีก 1 เดือนตามตัวอย่างในตาราง{PERIOD_DATE_FROM}{PERIOD_DATE_TO}31/10/256629/11/256630/11/256630/12/256631/12/256630/01/256731/01/256728/02/256729/02/256730/03/256731/03/256730/04/2567{PERIOD_MONTH}ปีและเดือนของ period_date{POLICY_YEAR}policy_year {PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date แปลงค่าเบี้ยให้เป็นรายปี (ต่อรายการ)parameter {Y_PREM_LIFE}{PREM_LIFE} * {PAY_MODE}{Y_PREM_ACC}{PREM_ACC}{Y_PREM_E1}{PREM_E1}{Y_PREM_LIFE_E1}{Y_PREM_LIFE} + {Y_PREM_E1}tx_stg_act_all_policy (ต่อรายการ)parametertx_stg_act_all_policy {POLICY_NO}policy_no {POLICY_NO_FULL}reinsur_no{COM_DATE}1) ใช้วันที่และเดือนจาก Commencement Date จาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{GIB_RI_STATUS}ถ้า {POLICY_STATUS} = I หรือ B ให้ตรวจสอบ {POLICY_YEAR_RI}ถ้า {POLICY_STATUS} = 1 เก็บ New Businessถ้า {POLICY_STATUS} > 1 เก็บ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_datetx_stg_act_inforce_policy (ต่อรายการ)parametertx_stg_act_inforce_policy{POLICY_NO}policy_no{COMM_DATE}commencement_date{COV_FROM}effective_date{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death{INS_LIFE}sum_insured_life{INS_ACC_DEATH}sum_insured_accident_deathtx_stg_act_prem_layer (ต่อรายการ)parametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1life_prem_rate{L2_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2life_prem_rate{L3_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1accident_prem_rate{L2_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2accident_prem_rate{L3_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3accident_prem_rate{L1_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_prem{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_extra_prem{L1_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_prem{L1_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_extra_premtx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{Y_SUM_ACC_PREM_OVER}ผลรวม {Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {POLICY_YEAR}
- tx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{COV_FROM}effective_date{COV_TO}end_date{MEM_PREVIOUS}no_mem_previous{MEM_ADD}no_mem_addition{MEM_CANCEL}no_mem_cancellation{MEM_TOT}no_mem_total{PREM_LIFE}premium_life{PREM_ACC}premium_accident{PREM_E1}premium_e1{PREM_LIFE_E1}premium_life + premium_e1{PERIOD_DATE_FROM}period_date{PERIOD_DATE_TO}บวกเพิ่มจาก period_date ไปอีก 1 เดือนตามตัวอย่างในตาราง{PERIOD_DATE_FROM}{PERIOD_DATE_TO}31/10/256629/11/256630/11/256630/12/256631/12/256630/01/256731/01/256728/02/256729/02/256730/03/256731/03/256730/04/2567{PERIOD_MONTH}ปีและเดือนของ period_date{POLICY_YEAR}policy_year {PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- แปลงค่าเบี้ยให้เป็นรายปี (ต่อรายการ)parameter {Y_PREM_LIFE}{PREM_LIFE} * {PAY_MODE}{Y_PREM_ACC}{PREM_ACC}{Y_PREM_E1}{PREM_E1}{Y_PREM_LIFE_E1}{Y_PREM_LIFE} + {Y_PREM_E1}
- tx_stg_act_all_policy (ต่อรายการ)parametertx_stg_act_all_policy {POLICY_NO}policy_no {POLICY_NO_FULL}reinsur_no{COM_DATE}1) ใช้วันที่และเดือนจาก Commencement Date จาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{GIB_RI_STATUS}ถ้า {POLICY_STATUS} = I หรือ B ให้ตรวจสอบ {POLICY_YEAR_RI}ถ้า {POLICY_STATUS} = 1 เก็บ New Businessถ้า {POLICY_STATUS} > 1 เก็บ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- tx_stg_act_inforce_policy (ต่อรายการ)parametertx_stg_act_inforce_policy{POLICY_NO}policy_no{COMM_DATE}commencement_date{COV_FROM}effective_date{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death{INS_LIFE}sum_insured_life{INS_ACC_DEATH}sum_insured_accident_death
- tx_stg_act_prem_layer (ต่อรายการ)parametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1life_prem_rate{L2_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2life_prem_rate{L3_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1accident_prem_rate{L2_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2accident_prem_rate{L3_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3accident_prem_rate{L1_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_prem{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_extra_prem{L1_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_prem{L1_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_extra_prem
- tx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{Y_SUM_ACC_PREM_OVER}ผลรวม {Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {POLICY_YEAR}
3. กรมธรรม์ที่ end_date ตรงกับ {PERIOD_DATE_TO}
- กรณีเลือกไปเจอกรมธรรม์ที่มี เดือนและปี tx_stg_act_prem_movement.end_date ตรงกับ {PERIOD_DATE_TO} ให้ดึงรายการกรมธรรม์เดียวกัน ที่มี tx_stg_act_prem_movement.policy_year เดียวกันของรายการนั้นมาทั้งหมดtx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{BF_PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{BF_POLICY_YEAR}policy_year{BF_COV_FROM}effective_date{BF_COV_TO}end_date{BF_SUM_PREM_LIFE}ผลรวมของทั้ง 12 เดือน premium_life{BF_SUM_PREM_ACC}ผลรวมของทั้ง 12 เดือน premium_accident{BF_SUM_PREM_E1}ผลรวมของทั้ง 12 เดือน premium_e1{BF_SUM_PREM_LIFE_E1}premium_life + premium_e1 tx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{BF_POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{BF_Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{BF_Y_SUM_ACC_PREM_OVER}ผลรวม {BF_Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {BF_POLICY_YEAR}
- tx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{BF_PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{BF_POLICY_YEAR}policy_year{BF_COV_FROM}effective_date{BF_COV_TO}end_date{BF_SUM_PREM_LIFE}ผลรวมของทั้ง 12 เดือน premium_life{BF_SUM_PREM_ACC}ผลรวมของทั้ง 12 เดือน premium_accident{BF_SUM_PREM_E1}ผลรวมของทั้ง 12 เดือน premium_e1{BF_SUM_PREM_LIFE_E1}premium_life + premium_e1
- tx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{BF_POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{BF_Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{BF_Y_SUM_ACC_PREM_OVER}ผลรวม {BF_Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {BF_POLICY_YEAR}
THREL_Grp_PA
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "THREL_Grp_PA" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "THREL_Grp_PA" ให้ดำเนินการต่อ
2. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYPeriod YYYY01 = 01/01/YYYY - 31/01/YYYYPeriod YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYYPeriod YYYY03 = 01/03/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYPeriod YYYY04 = 01/04/YYYY - 30/04/YYYYPeriod YYYY05 = 01/05/YYYY - 31/05/YYYYPeriod YYYY06 = 01/06/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYPeriod YYYY07 = 01/07/YYYY - 31/07/YYYYPeriod YYYY08 = 01/08/YYYY - 31/08/YYYYPeriod YYYY09 = 01/09/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYYPeriod YYYY10 = 01/10/YYYY - 31/10/YYYYPeriod YYYY11 = 01/11/YYYY - 30/11/YYYYPeriod YYYY12 = 01/12/YYYY - 31/12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYYPeriod YYYY01 = 01/01/YYYY - 31/01/YYYYPeriod YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYYPeriod YYYY03 = 01/03/YYYY - 31/03/YYYY
- Period YYYY01 = 01/01/YYYY - 31/01/YYYY
- Period YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYY
- Period YYYY03 = 01/03/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYYPeriod YYYY04 = 01/04/YYYY - 30/04/YYYYPeriod YYYY05 = 01/05/YYYY - 31/05/YYYYPeriod YYYY06 = 01/06/YYYY - 30/06/YYYY
- Period YYYY04 = 01/04/YYYY - 30/04/YYYY
- Period YYYY05 = 01/05/YYYY - 31/05/YYYY
- Period YYYY06 = 01/06/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYYPeriod YYYY07 = 01/07/YYYY - 31/07/YYYYPeriod YYYY08 = 01/08/YYYY - 31/08/YYYYPeriod YYYY09 = 01/09/YYYY - 30/09/YYYY
- Period YYYY07 = 01/07/YYYY - 31/07/YYYY
- Period YYYY08 = 01/08/YYYY - 31/08/YYYY
- Period YYYY09 = 01/09/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYYPeriod YYYY10 = 01/10/YYYY - 31/10/YYYYPeriod YYYY11 = 01/11/YYYY - 30/11/YYYYPeriod YYYY12 = 01/12/YYYY - 31/12/YYYY
- Period YYYY10 = 01/10/YYYY - 31/10/YYYY
- Period YYYY11 = 01/11/YYYY - 30/11/YYYY
- Period YYYY12 = 01/12/YYYY - 31/12/YYYY
- นำ {POLICY_ID} ของทุกรายการที่ได้ ไปดึงข้อมูล cf_rig_treaty_policy_hd.policy_no โดยมีเงื่อนไขดังนี้cf_rig_treaty_policy_hd.status = "A"cf_rig_treaty_policy_hd.usage_process_status = "A"cf_rig_treaty_policy_hd.coverage_period_from อยู่ในช่วง Quarter Period ที่ประมวลผลดึงข้อมูลรายละเอียดของกรมธรรม์ดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)parametercf_rig_treaty_policy_hd{POLICY_NO}policy_no{COM_DATE}com_date{COV_FROM}coverage_period_from{COV_TO}coverage_period_to{POLICY_YEAR}policy_year{AGE_LIMIT}age_limit{OCC}occ_class{CER_INCOM}cert_no_incompliant{POLIC_COV}coverage{PER_ADD}percent_add{PER_MUR}murder_assault{PER_SPE_COV}special_coverage{PER_LOS_FING}loss_finger{PER_MOT}prem_motorcycle{PER_WAR}prem_war{PER_STRIKE}prem_strike_riot{PER_SPORT}prem_sports_activities{PER_AIR}prem_aircraft{PER_DIS_MUR}discount_murder_assualt{PER_DIS_VOL}discount_group_vol{PERIOD}เดือนและปีของ coverage_period_from{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from{POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_status{REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_policy_status
- cf_rig_treaty_policy_hd.status = "A"
- cf_rig_treaty_policy_hd.usage_process_status = "A"
- cf_rig_treaty_policy_hd.coverage_period_from อยู่ในช่วง Quarter Period ที่ประมวลผล
- ดึงข้อมูลรายละเอียดของกรมธรรม์ดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)parametercf_rig_treaty_policy_hd{POLICY_NO}policy_no{COM_DATE}com_date{COV_FROM}coverage_period_from{COV_TO}coverage_period_to{POLICY_YEAR}policy_year{AGE_LIMIT}age_limit{OCC}occ_class{CER_INCOM}cert_no_incompliant{POLIC_COV}coverage{PER_ADD}percent_add{PER_MUR}murder_assault{PER_SPE_COV}special_coverage{PER_LOS_FING}loss_finger{PER_MOT}prem_motorcycle{PER_WAR}prem_war{PER_STRIKE}prem_strike_riot{PER_SPORT}prem_sports_activities{PER_AIR}prem_aircraft{PER_DIS_MUR}discount_murder_assualt{PER_DIS_VOL}discount_group_vol{PERIOD}เดือนและปีของ coverage_period_from{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from{POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_status{REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_policy_status
- parametercf_rig_treaty_policy_hd{POLICY_NO}policy_no{COM_DATE}com_date{COV_FROM}coverage_period_from{COV_TO}coverage_period_to{POLICY_YEAR}policy_year{AGE_LIMIT}age_limit{OCC}occ_class{CER_INCOM}cert_no_incompliant{POLIC_COV}coverage{PER_ADD}percent_add{PER_MUR}murder_assault{PER_SPE_COV}special_coverage{PER_LOS_FING}loss_finger{PER_MOT}prem_motorcycle{PER_WAR}prem_war{PER_STRIKE}prem_strike_riot{PER_SPORT}prem_sports_activities{PER_AIR}prem_aircraft{PER_DIS_MUR}discount_murder_assualt{PER_DIS_VOL}discount_group_vol{PERIOD}เดือนและปีของ coverage_period_from{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from{POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_status{REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_policy_status


===== PAGE 1312489735 | Function Support > cancle > 2. การคัดเลือกกรมธรรม์ (ACT) > PS-07-2 DAI_Grp_Daiichi_Coins =====
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ข้ามไปดำเนินการข้อ 6. การคำนวณ RI Claim (ACT)
- ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ข้ามไปดำเนินการข้อ 6. การคำนวณ RI Claim (ACT)


===== PAGE 1294992293 | Function Support > cancle > 2. การคัดเลือกกรมธรรม์ (ACT) > PS-07-2 GIB_Grp_Direct_EB =====
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
2. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYPeriod YYYY01 = 01/01/YYYY - 31/01/YYYYPeriod YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYYPeriod YYYY03 = 01/03/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYPeriod YYYY04 = 01/04/YYYY - 30/04/YYYYPeriod YYYY05 = 01/05/YYYY - 31/05/YYYYPeriod YYYY06 = 01/06/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYPeriod YYYY07 = 01/07/YYYY - 31/07/YYYYPeriod YYYY08 = 01/08/YYYY - 31/08/YYYYPeriod YYYY09 = 01/09/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYYPeriod YYYY10 = 01/10/YYYY - 31/10/YYYYPeriod YYYY11 = 01/11/YYYY - 30/11/YYYYPeriod YYYY12 = 01/12/YYYY - 31/12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYYPeriod YYYY01 = 01/01/YYYY - 31/01/YYYYPeriod YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYYPeriod YYYY03 = 01/03/YYYY - 31/03/YYYY
- Period YYYY01 = 01/01/YYYY - 31/01/YYYY
- Period YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYY
- Period YYYY03 = 01/03/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYYPeriod YYYY04 = 01/04/YYYY - 30/04/YYYYPeriod YYYY05 = 01/05/YYYY - 31/05/YYYYPeriod YYYY06 = 01/06/YYYY - 30/06/YYYY
- Period YYYY04 = 01/04/YYYY - 30/04/YYYY
- Period YYYY05 = 01/05/YYYY - 31/05/YYYY
- Period YYYY06 = 01/06/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYYPeriod YYYY07 = 01/07/YYYY - 31/07/YYYYPeriod YYYY08 = 01/08/YYYY - 31/08/YYYYPeriod YYYY09 = 01/09/YYYY - 30/09/YYYY
- Period YYYY07 = 01/07/YYYY - 31/07/YYYY
- Period YYYY08 = 01/08/YYYY - 31/08/YYYY
- Period YYYY09 = 01/09/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYYPeriod YYYY10 = 01/10/YYYY - 31/10/YYYYPeriod YYYY11 = 01/11/YYYY - 30/11/YYYYPeriod YYYY12 = 01/12/YYYY - 31/12/YYYY
- Period YYYY10 = 01/10/YYYY - 31/10/YYYY
- Period YYYY11 = 01/11/YYYY - 30/11/YYYY
- Period YYYY12 = 01/12/YYYY - 31/12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ Batch ACT-007 ข้อมูล (R61) Premium and movement (Actual) โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน tx_stg_act_prem_movement.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์นั้นสำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี tx_stg_act_prem_movement.effective_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลโดยให้กำหนด {PERIOD_MONTH} จาก ปีและเดือนของ tx_stg_act_prem_movement.period_date รูปแบบ YYYYMMกรณีเลือกไปเจอกรมธรรม์ที่มี เดือนและปี tx_stg_act_prem_movement.end_date ตรงกับ {PERIOD_DATE_TO} ให้ดึงรายการกรมธรรม์เดียวกัน ที่มี tx_stg_act_prem_movement.policy_year เดียวกันของรายการนั้นมาทั้งหมดดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{COV_FROM}effective_date{COV_TO}end_date{MEM_PREVIOUS}no_mem_previous{MEM_ADD}no_mem_addition{MEM_CANCEL}no_mem_cancellation{MEM_TOT}no_mem_total{PREM_LIFE}premium_life{PREM_ACC}premium_accident{PREM_E1}premium_e1{PREM_LIFE_E1}premium_life + premium_e1{PERIOD_DATE_FROM}period_date{PERIOD_DATE_TO}บวกเพิ่มจาก period_date ไปอีก 1 เดือนตามตัวอย่างในตาราง{PERIOD_DATE_FROM}{PERIOD_DATE_TO}31/10/256629/11/256630/11/256630/12/256631/12/256630/01/256731/01/256728/02/256729/02/256730/03/256731/03/256730/04/2567{PERIOD_MONTH}ปีและเดือนของ period_date{POLICY_YEAR}policy_year {PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date แปลงค่าเบี้ยให้เป็นรายปี (ต่อรายการ)parameter {Y_PREM_LIFE}{PREM_LIFE} * {PAY_MODE}{Y_PREM_ACC}{PREM_ACC}{Y_PREM_E1}{PREM_E1}{Y_PREM_LIFE_E1}{Y_PREM_LIFE} + {Y_PREM_E1}tx_stg_act_all_policy (ต่อรายการ)parametertx_stg_act_all_policy {POLICY_NO}policy_no {POLICY_NO_FULL}reinsur_no{COM_DATE}1) ใช้วันที่และเดือนจาก Commencement Date จาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{GIB_RI_STATUS}ถ้า {POLICY_STATUS} = I หรือ B ให้ตรวจสอบ {POLICY_YEAR_RI}ถ้า {POLICY_STATUS} = 1 เก็บ New Businessถ้า {POLICY_STATUS} > 1 เก็บ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_datetx_stg_act_inforce_policy (ต่อรายการ)parametertx_stg_act_inforce_policy{POLICY_NO}policy_no{COMM_DATE}commencement_date{COV_FROM}effective_date{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death{INS_LIFE}sum_insured_life{INS_ACC_DEATH}sum_insured_accident_deathtx_stg_act_prem_layer (ต่อรายการ)parametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1life_prem_rate{L2_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2life_prem_rate{L3_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1accident_prem_rate{L2_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2accident_prem_rate{L3_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3accident_prem_rate{L1_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_prem{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_extra_prem{L1_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_prem{L1_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_extra_premtx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{Y_SUM_ACC_PREM_OVER}ผลรวม {Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {POLICY_YEAR}
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน tx_stg_act_prem_movement.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์นั้นสำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์นั้นสำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี tx_stg_act_prem_movement.effective_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลโดยให้กำหนด {PERIOD_MONTH} จาก ปีและเดือนของ tx_stg_act_prem_movement.period_date รูปแบบ YYYYMM
- โดยให้กำหนด {PERIOD_MONTH} จาก ปีและเดือนของ tx_stg_act_prem_movement.period_date รูปแบบ YYYYMM
- กรณีเลือกไปเจอกรมธรรม์ที่มี เดือนและปี tx_stg_act_prem_movement.end_date ตรงกับ {PERIOD_DATE_TO} ให้ดึงรายการกรมธรรม์เดียวกัน ที่มี tx_stg_act_prem_movement.policy_year เดียวกันของรายการนั้นมาทั้งหมด
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{COV_FROM}effective_date{COV_TO}end_date{MEM_PREVIOUS}no_mem_previous{MEM_ADD}no_mem_addition{MEM_CANCEL}no_mem_cancellation{MEM_TOT}no_mem_total{PREM_LIFE}premium_life{PREM_ACC}premium_accident{PREM_E1}premium_e1{PREM_LIFE_E1}premium_life + premium_e1{PERIOD_DATE_FROM}period_date{PERIOD_DATE_TO}บวกเพิ่มจาก period_date ไปอีก 1 เดือนตามตัวอย่างในตาราง{PERIOD_DATE_FROM}{PERIOD_DATE_TO}31/10/256629/11/256630/11/256630/12/256631/12/256630/01/256731/01/256728/02/256729/02/256730/03/256731/03/256730/04/2567{PERIOD_MONTH}ปีและเดือนของ period_date{POLICY_YEAR}policy_year {PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date แปลงค่าเบี้ยให้เป็นรายปี (ต่อรายการ)parameter {Y_PREM_LIFE}{PREM_LIFE} * {PAY_MODE}{Y_PREM_ACC}{PREM_ACC}{Y_PREM_E1}{PREM_E1}{Y_PREM_LIFE_E1}{Y_PREM_LIFE} + {Y_PREM_E1}tx_stg_act_all_policy (ต่อรายการ)parametertx_stg_act_all_policy {POLICY_NO}policy_no {POLICY_NO_FULL}reinsur_no{COM_DATE}1) ใช้วันที่และเดือนจาก Commencement Date จาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{GIB_RI_STATUS}ถ้า {POLICY_STATUS} = I หรือ B ให้ตรวจสอบ {POLICY_YEAR_RI}ถ้า {POLICY_STATUS} = 1 เก็บ New Businessถ้า {POLICY_STATUS} > 1 เก็บ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_datetx_stg_act_inforce_policy (ต่อรายการ)parametertx_stg_act_inforce_policy{POLICY_NO}policy_no{COMM_DATE}commencement_date{COV_FROM}effective_date{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death{INS_LIFE}sum_insured_life{INS_ACC_DEATH}sum_insured_accident_deathtx_stg_act_prem_layer (ต่อรายการ)parametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1life_prem_rate{L2_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2life_prem_rate{L3_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1accident_prem_rate{L2_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2accident_prem_rate{L3_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3accident_prem_rate{L1_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_prem{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_extra_prem{L1_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_prem{L1_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_extra_premtx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{Y_SUM_ACC_PREM_OVER}ผลรวม {Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {POLICY_YEAR}
- tx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{COV_FROM}effective_date{COV_TO}end_date{MEM_PREVIOUS}no_mem_previous{MEM_ADD}no_mem_addition{MEM_CANCEL}no_mem_cancellation{MEM_TOT}no_mem_total{PREM_LIFE}premium_life{PREM_ACC}premium_accident{PREM_E1}premium_e1{PREM_LIFE_E1}premium_life + premium_e1{PERIOD_DATE_FROM}period_date{PERIOD_DATE_TO}บวกเพิ่มจาก period_date ไปอีก 1 เดือนตามตัวอย่างในตาราง{PERIOD_DATE_FROM}{PERIOD_DATE_TO}31/10/256629/11/256630/11/256630/12/256631/12/256630/01/256731/01/256728/02/256729/02/256730/03/256731/03/256730/04/2567{PERIOD_MONTH}ปีและเดือนของ period_date{POLICY_YEAR}policy_year {PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- แปลงค่าเบี้ยให้เป็นรายปี (ต่อรายการ)parameter {Y_PREM_LIFE}{PREM_LIFE} * {PAY_MODE}{Y_PREM_ACC}{PREM_ACC}{Y_PREM_E1}{PREM_E1}{Y_PREM_LIFE_E1}{Y_PREM_LIFE} + {Y_PREM_E1}
- tx_stg_act_all_policy (ต่อรายการ)parametertx_stg_act_all_policy {POLICY_NO}policy_no {POLICY_NO_FULL}reinsur_no{COM_DATE}1) ใช้วันที่และเดือนจาก Commencement Date จาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{GIB_RI_STATUS}ถ้า {POLICY_STATUS} = I หรือ B ให้ตรวจสอบ {POLICY_YEAR_RI}ถ้า {POLICY_STATUS} = 1 เก็บ New Businessถ้า {POLICY_STATUS} > 1 เก็บ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- tx_stg_act_inforce_policy (ต่อรายการ)parametertx_stg_act_inforce_policy{POLICY_NO}policy_no{COMM_DATE}commencement_date{COV_FROM}effective_date{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death{INS_LIFE}sum_insured_life{INS_ACC_DEATH}sum_insured_accident_death
- tx_stg_act_prem_layer (ต่อรายการ)parametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1life_prem_rate{L2_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2life_prem_rate{L3_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1accident_prem_rate{L2_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2accident_prem_rate{L3_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3accident_prem_rate{L1_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_prem{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_extra_prem{L1_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_prem{L1_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_extra_prem
- tx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{Y_SUM_ACC_PREM_OVER}ผลรวม {Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {POLICY_YEAR}
3. กรมธรรม์ที่ end_date ตรงกับ {PERIOD_DATE_TO}
- กรณีเลือกไปเจอกรมธรรม์ที่มี เดือนและปี tx_stg_act_prem_movement.end_date ตรงกับ {PERIOD_DATE_TO} ให้ดึงรายการกรมธรรม์เดียวกัน ที่มี tx_stg_act_prem_movement.policy_year เดียวกันของรายการนั้นมาทั้งหมดtx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{BF_PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{BF_POLICY_YEAR}policy_year{BF_COV_FROM}effective_date{BF_COV_TO}end_date{BF_SUM_PREM_LIFE}ผลรวมของทั้ง 12 เดือน premium_life{BF_SUM_PREM_ACC}ผลรวมของทั้ง 12 เดือน premium_accident{BF_SUM_PREM_E1}ผลรวมของทั้ง 12 เดือน premium_e1{BF_SUM_PREM_LIFE_E1}premium_life + premium_e1 tx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{BF_POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{BF_Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{BF_Y_SUM_ACC_PREM_OVER}ผลรวม {BF_Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {BF_POLICY_YEAR}
- tx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{BF_PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{BF_POLICY_YEAR}policy_year{BF_COV_FROM}effective_date{BF_COV_TO}end_date{BF_SUM_PREM_LIFE}ผลรวมของทั้ง 12 เดือน premium_life{BF_SUM_PREM_ACC}ผลรวมของทั้ง 12 เดือน premium_accident{BF_SUM_PREM_E1}ผลรวมของทั้ง 12 เดือน premium_e1{BF_SUM_PREM_LIFE_E1}premium_life + premium_e1
- tx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{BF_POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{BF_Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{BF_Y_SUM_ACC_PREM_OVER}ผลรวม {BF_Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {BF_POLICY_YEAR}


===== PAGE 1299251456 | Function Support > cancle > 2. การคัดเลือกกรมธรรม์ (ACT) > PS-07-2 THREL_Grp_PA =====
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "THREL_Grp_PA" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "THREL_Grp_PA" ให้ดำเนินการต่อ
2. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYPeriod YYYY01 = 01/01/YYYY - 31/01/YYYYPeriod YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYYPeriod YYYY03 = 01/03/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYPeriod YYYY04 = 01/04/YYYY - 30/04/YYYYPeriod YYYY05 = 01/05/YYYY - 31/05/YYYYPeriod YYYY06 = 01/06/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYPeriod YYYY07 = 01/07/YYYY - 31/07/YYYYPeriod YYYY08 = 01/08/YYYY - 31/08/YYYYPeriod YYYY09 = 01/09/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYYPeriod YYYY10 = 01/10/YYYY - 31/10/YYYYPeriod YYYY11 = 01/11/YYYY - 30/11/YYYYPeriod YYYY12 = 01/12/YYYY - 31/12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYYPeriod YYYY01 = 01/01/YYYY - 31/01/YYYYPeriod YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYYPeriod YYYY03 = 01/03/YYYY - 31/03/YYYY
- Period YYYY01 = 01/01/YYYY - 31/01/YYYY
- Period YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYY
- Period YYYY03 = 01/03/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYYPeriod YYYY04 = 01/04/YYYY - 30/04/YYYYPeriod YYYY05 = 01/05/YYYY - 31/05/YYYYPeriod YYYY06 = 01/06/YYYY - 30/06/YYYY
- Period YYYY04 = 01/04/YYYY - 30/04/YYYY
- Period YYYY05 = 01/05/YYYY - 31/05/YYYY
- Period YYYY06 = 01/06/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYYPeriod YYYY07 = 01/07/YYYY - 31/07/YYYYPeriod YYYY08 = 01/08/YYYY - 31/08/YYYYPeriod YYYY09 = 01/09/YYYY - 30/09/YYYY
- Period YYYY07 = 01/07/YYYY - 31/07/YYYY
- Period YYYY08 = 01/08/YYYY - 31/08/YYYY
- Period YYYY09 = 01/09/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYYPeriod YYYY10 = 01/10/YYYY - 31/10/YYYYPeriod YYYY11 = 01/11/YYYY - 30/11/YYYYPeriod YYYY12 = 01/12/YYYY - 31/12/YYYY
- Period YYYY10 = 01/10/YYYY - 31/10/YYYY
- Period YYYY11 = 01/11/YYYY - 30/11/YYYY
- Period YYYY12 = 01/12/YYYY - 31/12/YYYY
- นำ {POLICY_ID} ของทุกรายการที่ได้ ไปดึงข้อมูล cf_rig_treaty_policy_hd.policy_no โดยมีเงื่อนไขดังนี้cf_rig_treaty_policy_hd.status = "A"cf_rig_treaty_policy_hd.usage_process_status = "A"cf_rig_treaty_policy_hd.coverage_period_from อยู่ในช่วง Quarter Period ที่ประมวลผลดึงข้อมูลรายละเอียดของกรมธรรม์ดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)parametercf_rig_treaty_policy_hd{POLICY_NO}policy_no{COM_DATE}com_date{COV_FROM}coverage_period_from{COV_TO}coverage_period_to{POLICY_YEAR}policy_year{AGE_LIMIT}age_limit{OCC}occ_class{CER_INCOM}cert_no_incompliant{POLIC_COV}coverage{PER_ADD}percent_add{PER_MUR}murder_assault{PER_SPE_COV}special_coverage{PER_LOS_FING}loss_finger{PER_MOT}prem_motorcycle{PER_WAR}prem_war{PER_STRIKE}prem_strike_riot{PER_SPORT}prem_sports_activities{PER_AIR}prem_aircraft{PER_DIS_MUR}discount_murder_assualt{PER_DIS_VOL}discount_group_vol{PERIOD}เดือนและปีของ coverage_period_from{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from{POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_status{REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_policy_status
- cf_rig_treaty_policy_hd.status = "A"
- cf_rig_treaty_policy_hd.usage_process_status = "A"
- cf_rig_treaty_policy_hd.coverage_period_from อยู่ในช่วง Quarter Period ที่ประมวลผล
- ดึงข้อมูลรายละเอียดของกรมธรรม์ดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)parametercf_rig_treaty_policy_hd{POLICY_NO}policy_no{COM_DATE}com_date{COV_FROM}coverage_period_from{COV_TO}coverage_period_to{POLICY_YEAR}policy_year{AGE_LIMIT}age_limit{OCC}occ_class{CER_INCOM}cert_no_incompliant{POLIC_COV}coverage{PER_ADD}percent_add{PER_MUR}murder_assault{PER_SPE_COV}special_coverage{PER_LOS_FING}loss_finger{PER_MOT}prem_motorcycle{PER_WAR}prem_war{PER_STRIKE}prem_strike_riot{PER_SPORT}prem_sports_activities{PER_AIR}prem_aircraft{PER_DIS_MUR}discount_murder_assualt{PER_DIS_VOL}discount_group_vol{PERIOD}เดือนและปีของ coverage_period_from{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from{POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_status{REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_policy_status
- parametercf_rig_treaty_policy_hd{POLICY_NO}policy_no{COM_DATE}com_date{COV_FROM}coverage_period_from{COV_TO}coverage_period_to{POLICY_YEAR}policy_year{AGE_LIMIT}age_limit{OCC}occ_class{CER_INCOM}cert_no_incompliant{POLIC_COV}coverage{PER_ADD}percent_add{PER_MUR}murder_assault{PER_SPE_COV}special_coverage{PER_LOS_FING}loss_finger{PER_MOT}prem_motorcycle{PER_WAR}prem_war{PER_STRIKE}prem_strike_riot{PER_SPORT}prem_sports_activities{PER_AIR}prem_aircraft{PER_DIS_MUR}discount_murder_assualt{PER_DIS_VOL}discount_group_vol{PERIOD}เดือนและปีของ coverage_period_from{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from{POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_status{REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_policy_status


===== PAGE 1295483263 | Function Support > cancle > 3. การคำนวณ RI Premium (ACT) =====
DAI_Grp_Daiichi_Coins
GIB_Grp_Direct_EB
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
2. เตรียมข้อมูล Layer
เตรียมข้อมูล Layer ดังนี้
โดยตรวจสอบตาม {COV_FROM} ของกรมธรรม์ที่กำลังคำนวณอยู่ ตรวจสอบกับวันที่ Effective Date From – Effective Date To ของรายการที่เป็น A ใน {CONDITION_ID}
| Parameter | เงื่อนไขการค้นหา | ค่าที่เก็บลง Parameter |
| {L1_MIN} | ถ้า cf_rig_treaty_cond_dt.layer = L1 | cf_rig_treaty_cond_dt.minimum |
| {L1_MAX} | ถ้า cf_rig_treaty_cond_dt.layer = L1 | cf_rig_treaty_cond_dt.maximum |
| {L1_PER} | ถ้า cf_rig_treaty_cond_dt.layer = L1 | cf_rig_treaty_cond_dt.percent_re |
| {L2_MIN} | ถ้า cf_rig_treaty_cond_dt.layer = L2 | cf_rig_treaty_cond_dt.minimum |
| {L2_MAX} | ถ้า cf_rig_treaty_cond_dt.layer = L2 | cf_rig_treaty_cond_dt.maximum |
| {L2_PER} | ถ้า cf_rig_treaty_cond_dt.layer = L2 | cf_rig_treaty_cond_dt.percent_re |
| {L3_MIN} | ถ้า cf_rig_treaty_cond_dt.layer = L3 | cf_rig_treaty_cond_dt.minimum |
| {L3_MAX} | ถ้า cf_rig_treaty_cond_dt.layer = L3 | cf_rig_treaty_cond_dt.maximum |
| {L3_PER} | ถ้า cf_rig_treaty_cond_dt.layer = L3 | cf_rig_treaty_cond_dt.percent_re |
| {L1_L2_MID} |  | {L2_MAX} - {L1_MAX} |
3. คำนวณแยก Layer
| ความคุ้มครอง | Parameter | คำนวณ |
| LIFE | {L2_SA_LIFE} | ใช้ {L2_LIFE_INS} − ({L1_MAX} × {L2_MEM_LIFE}) + ({L1_L2_MID} × {L3_MEM_LIFE}) |
| {L3_SA_LIFE} | ใช้ {L3_LIFE_INS} − ({L2_MAX} × {L3_MEM_LIFE}) |
| {L1_SA_LIFE} | ใช้ {SUM_LIFE_INS} − {L2_SA_LIFE} − {L3_SA_LIFE} |
| {TOT_SA_LIFE} | {L1_SA_LIFE} + {L2_SA_LIFE} + {L3_SA_LIFE} |
| {L1_SR_LIFE} | {L1_SA_LIFE} * {L1_PER} / 100 |
| {L2_SR_LIFE} | {L2_SA_LIFE} * {L2_PER} / 100 |
| {L3_SR_LIFE} | {L3_SA_LIFE} * {L3_PER} / 100 |
| {TOT_SR_LIFE} | {L1_SR_LIFE} + {L2_SR_LIFE} + {L3_SR_LIFE} |
| ACC | {L2_SA_ACC} | ใช้ {L2_ACC_INS} − ({L1_MAX} × {L2_MEM_ACC}) + ({L1_L2_MID} × {L3_MEM_ACC}) |
| {L3_SA_ACC} | ใช้ {L3_ACC_INS} − ({L2_MAX} × {L3_MEM_ACC}) |
| {L1_SA_ACC} | ใช้ {SUM_ACC_INS} − {L2_SA_ACC} − {L3_SA_ACC} |
| {TOT_SA_ACC} | {L1_SA_ACC} + {L2_SA_ACC} + {L3_SA_ACC} |
| {L1_SR_ACC} | {L1_SA_ACC} * {L1_PER} / 100 |
| {L2_SR_ACC} | {L2_SA_ACC} * {L2_PER} / 100 |
| {L3_SR_ACC} | {L3_SA_ACC} * {L3_PER} / 100 |
| {TOT_SR_ACC} | {L1_SR_ACC} + {L2_SR_ACC} + {L3_SR_ACC} |
4. คำนวณ Premium
- เลือกเฉพาะรายการที่ ปีและเดือนของ {COV_FROM} เท่ากับ {PERIOD_MONTH}
- หาเบี้ยตั้งต้นของ Accident นำค่า {Y_PREM_ACC} - {Y_SUM_ACC_PREM_OVER} (ของ {POLICY_YEAR} เดียวกับรายการที่กำลังประมวลผล)เก็บค่าใน {Y_SUM_PREM_ACC} ความคุ้มครองParameterคำนวณLIFE{L2_PREM_LIFE}({L2_LIFE_PREM_RATE} * {PAY_MODE}) * {L2_SA_LIFE} / 1,000{L3_PREM_LIFE}({L3_LIFE_PREM_RATE} * {PAY_MODE}) * {L3_SA_LIFE} / 1,000{L1_PREM_LIFE}{Y_PREM_LIFE_E1} - {L2_NB_PREM_LIFE} - {L3_NB_PREM_LIFE}{TOT_PREM_LIFE}{L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{L1_RI_PREM_LIFE}{L1_PREM_LIFE} * {L1_PER} / 100{L2_RI_PREM_LIFE}{L2_PREM_LIFE} * {L2_PER} / 100{L3_RI_PREM_LIFE}{L3_PREM_LIFE} * {L3_PER} / 100{TOT_RI_PREM_LIFE}{L1_RI_PREM_LIFE} + {L2_RI_PREM_LIFE} + {L3_RI_PREM_LIFE}ACC{L2_PREM_ACC}({L2_ACC_PREM_RATE} * {PAY_MODE}) * {L2_SA_ACC} / 1,000{L3_PREM_ACC}({L3_ACC_PREM_RATE} * {PAY_MODE}) * {L3_SA_ACC} / 1,000{L1_PREM_ACC}{Y_SUM_PREM_ACC} - {L2_NB_PREM_ACC} - {L3_NB_PREM_ACC}{TOT_PREM_ACC}{L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC}{L1_RI_PREM_ACC}{L1_PREM_ACC} * {L1_PER} / 100{L2_RI_PREM_ACC}{L2_PREM_ACC} * {L2_PER} / 100{L3_RI_PREM_ACC}{L3_PREM_ACC} * {L3_PER} / 100{TOT_RI_PREM_ACC}{L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}
- นำค่า {Y_PREM_ACC} - {Y_SUM_ACC_PREM_OVER} (ของ {POLICY_YEAR} เดียวกับรายการที่กำลังประมวลผล)
- เก็บค่าใน {Y_SUM_PREM_ACC}
5. คำนวณ Movement (Revivals / Refund)
1. คำนวณ Movement ระหว่างปีกรมธรรม์
- ตรวจสอบ {PAY_MODE} ของกรมธรรม์นั้นถ้าเท่ากับ 1ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}{Y_PREM_LIFE_E1} ≥ 0{REVIVAL_PREM_ACC}{PREM_ACC} ≥ 0{REFUND_PREM_LIFE}{Y_PREM_LIFE_E1} < 0{REFUND_PREM_ACC}{PREM_ACC} < 0รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0 ถ้าไม่เท่ากับ 1ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}0{REVIVAL_PREM_ACC}0{REFUND_PREM_LIFE}0{REFUND_PREM_ACC}0รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- ถ้าเท่ากับ 1ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}{Y_PREM_LIFE_E1} ≥ 0{REVIVAL_PREM_ACC}{PREM_ACC} ≥ 0{REFUND_PREM_LIFE}{Y_PREM_LIFE_E1} < 0{REFUND_PREM_ACC}{PREM_ACC} < 0รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}{Y_PREM_LIFE_E1} ≥ 0{REVIVAL_PREM_ACC}{PREM_ACC} ≥ 0{REFUND_PREM_LIFE}{Y_PREM_LIFE_E1} < 0{REFUND_PREM_ACC}{PREM_ACC} < 0
- รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน
- {SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- ถ้าไม่เท่ากับ 1ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}0{REVIVAL_PREM_ACC}0{REFUND_PREM_LIFE}0{REFUND_PREM_ACC}0รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}0{REVIVAL_PREM_ACC}0{REFUND_PREM_LIFE}0{REFUND_PREM_ACC}0
- รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน
- {SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- รวมทุกรายการที่แยกตาม Period ภายในปีกรมเดียวกัน เข้าด้วยกัน Parameter คำนวณ{SUM_REVIVAL_PREM_LIFE}SUM({REVIVAL_PREM_LIFE}){SUM_REVIVAL_PREM_ACC}SUM({REVIVAL_PREM_ACC}){SUM_REFUND_PREM_LIFE}SUM({REFUND_PREM_LIFE}){SUM_REFUND_PREM_ACC}SUM({REFUND_PREM_ACC})
- คำนวณส่วน Reinsurance Parameter คำนวณ{RI_SUM_REVIVAL_PREM_LIFE}{SUM_REVIVAL_PREM_LIFE} * {L1_PER} / 100{RI_SUM_REVIVAL_PREM_ACC}{SUM_REVIVAL_PREM_ACC} * {L1_PER} / 100{RI_SUM_REFUND_PREM_LIFE}{SUM_REFUND_PREM_LIFE} * {L1_PER} / 100{RI_SUM_REFUND_PREM_ACC}{SUM_REFUND_PREM_ACC} * {L1_PER} / 100
6. คำนวณเบี้ยทั้งหมด
- คำนวณ Premium ทั้งหมดของแต่ละกรมธรรม์Parameterคำนวณ{L1_TL_PREM_LIFE}{L1_PREM_LIFE} + {SUM_REVIVAL_PREM_LIFE} - {SUM_REFUND_PREM_LIFE}{L2_TL_PREM_LIFE}{L2_PREM_LIFE}{L3_TL_PREM_LIFE}{L3_PREM_LIFE}{L1_TL_PREM_ACC}{L1_PREM_ACC} + {SUM_REVIVAL_PREM_ACC} - {SUM_REFUND_PREM_ACC}{L2_TL_PREM_ACC}{L2_PREM_ACC}{L3_TL_PREM_ACC}{L3_PREM_ACC}
- คำนวณ RI Premium ทั้งหมดของแต่ละกรมธรรม์Parameterคำนวณ{RI_L1_TL_PREM_LIFE}{L1_TL_PREM_LIFE} * {L1_PER} / 100{RI_L2_TL_PREM_LIFE}{L2_TL_PREM_LIFE} * {L2_PER} / 100{RI_L3_TL_PREM_LIFE}{L3_TL_PREM_LIFE} * {L3_PER} / 100{TOT_RI_TL_PREM_LIFE}{RI_L1_TL_PREM_LIFE} + {RI_L2_TL_PREM_LIFE} + {RI_L3_TL_PREM_LIFE}{RI_L1_TL_PREM_ACC}{L1_TL_PREM_ACC} * {L1_PER} / 100{RI_L2_TL_PREM_ACC}{L2_TL_PREM_ACC} * {L2_PER} / 100{RI_L3_TL_PREM_ACC}{L3_TL_PREM_ACC} * {L3_PER} / 100{TOT_RI_TL_PREM_ACC}{RI_L1_TL_PREM_ACC} + {RI_L2_TL_PREM_ACC} + {RI_L3_TL_PREM_ACC}
7. คำนวณส่วน Reinsurance และเตรียมข้อมูลออก Report
| Parameter | คำนวณ |
| {PREM_RATE_LIFE_REPORT} | ({L1_LIFE_PREM} * {PAY_MODE}) + ({L2_LIFE_PREM} * {PAY_MODE}) + ({L3_LIFE_PREM} * {PAY_MODE}) |
| {PREM_RATE_ACC_REPORT} | ({L1_ACC_PREM} * {PAY_MODE}) + ({L2_ACC_PREM} * {PAY_MODE}) + ({L3_ACC_PREM} * {PAY_MODE}) |
THREL_Grp_PA
1. ตรวจสอบรายการสมาชิก
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยนำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า Minimum Sum Assuredcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- นำ {POLICY_NO} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ มาตรวจสอบรายชื่อสมาชิกในกรมธรรม์ที่ tx_stg_act_inforce_member โดยtx_stg_act_inforce_member.policy_no เท่ากับ {POLICY_NO}และ tx_stg_act_inforce_member.sum_insured_accident มากกว่าเท่ากับ {MIN_SUM_ASU}และ tx_stg_act_inforce_member.age น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_act_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_act_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_act_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
- tx_stg_act_inforce_member.policy_no เท่ากับ {POLICY_NO}
- และ tx_stg_act_inforce_member.sum_insured_accident มากกว่าเท่ากับ {MIN_SUM_ASU}
- และ tx_stg_act_inforce_member.age น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_act_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_act_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_act_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
- กรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_act_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_act_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_act_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
- ถ้ามีเลข tx_stg_act_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อ
- ถ้ามีเลข tx_stg_act_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
2. คำนวณ SA
- นำ tx_stg_act_inforce_member.sum_insured_accident ของแต่ละรายสมาชิก มาคำนวณหาค่า SA ของแต่ละสมาชิกดังนี้parameterคำนวณ{SA_ACC}tx_stg_act_inforce_member.sum_insured_accident{SA_MUR}{SA_ACC} * ({PER_MUR} / 100){SA_LOADING}{SA_ACC} * ({PER_SPE_COV} / 100)
- parameterคำนวณ{SA_ACC}tx_stg_act_inforce_member.sum_insured_accident{SA_MUR}{SA_ACC} * ({PER_MUR} / 100){SA_LOADING}{SA_ACC} * ({PER_SPE_COV} / 100)
3. คำนวณ SR
- เตรียมข้อมูลคำนวณ SR ตาม Config Treaty หัวข้อ RI Conditionparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- นำ tx_stg_act_inforce_member.sum_insured_accident ของแต่ละรายสมาชิก มาตรวจสอบ Layer ดังนี้กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L1_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L1_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L1กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L2_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L2_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L2กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L3_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L3_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L3
- กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L1_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L1_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L1
- กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L2_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L2_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L2
- กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L3_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L3_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L3
- คำนวณ SR Accident จัดเก็บในกรณีที่สมาชิกรายนั้นอยู่ L1 ให้กำหนดค่า {L1_SR_ACC} = 0กรณีที่สมาชิกรายนั้นอยู่ L2 ให้คำนวณดังนี้{L2_SR_ACC} = ({L2_PER} / 100) * ({SA_ACC} - {L1_INSU_MAX})กรณีที่สมาชิกรายนั้นอยู่ L3 ให้คำนวณดังนี้{L3_SR_ACC} = ({L3_PER} / 100) * ({SA_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- กรณีที่สมาชิกรายนั้นอยู่ L1 ให้กำหนดค่า {L1_SR_ACC} = 0
- กรณีที่สมาชิกรายนั้นอยู่ L2 ให้คำนวณดังนี้{L2_SR_ACC} = ({L2_PER} / 100) * ({SA_ACC} - {L1_INSU_MAX})
- {L2_SR_ACC} = ({L2_PER} / 100) * ({SA_ACC} - {L1_INSU_MAX})
- กรณีที่สมาชิกรายนั้นอยู่ L3 ให้คำนวณดังนี้{L3_SR_ACC} = ({L3_PER} / 100) * ({SA_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- {L3_SR_ACC} = ({L3_PER} / 100) * ({SA_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- คำนวณ SR Murder & Assault จัดเก็บใน{L1_SR_MUR} = {L1_SR_ACC} * {PER_MUR} / 100{L2_SR_MUR} = {L2_SR_ACC} * {PER_MUR} / 100{L3_SR_MUR} = {L3_SR_ACC} * {PER_MUR} / 100
- {L1_SR_MUR} = {L1_SR_ACC} * {PER_MUR} / 100
- {L2_SR_MUR} = {L2_SR_ACC} * {PER_MUR} / 100
- {L3_SR_MUR} = {L3_SR_ACC} * {PER_MUR} / 100
- คำนวณ SR Loadings จัดเก็บใน{L1_SR_LOAD} = {L1_SR_ACC} * {PER_SPE_COV} / 100{L2_SR_LOAD} = {L2_SR_ACC} * {PER_SPE_COV} / 100{L3_SR_LOAD} = {L3_SR_ACC} * {PER_SPE_COV} / 100
- {L1_SR_LOAD} = {L1_SR_ACC} * {PER_SPE_COV} / 100
- {L2_SR_LOAD} = {L2_SR_ACC} * {PER_SPE_COV} / 100
- {L3_SR_LOAD} = {L3_SR_ACC} * {PER_SPE_COV} / 100
4. คำนวณ RI Premium
- เตรียมข้อมูลคำนวณ RI Premium ตาม Config Treaty ที่หัวข้อ ตั้งค่า RI Premium Rate
- {POLIC_COV} ที่ได้มาจาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล
- ค้นหา Rate ของสมาชิกแต่ละคนที่ cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 2tx_stg_est_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age {OCC} = cf_rig_treaty_prem_rate_dt.occ_classเก็บค่าลงใน {RI_PREM_RATE}
- cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 2tx_stg_est_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age {OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- ถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 2
- tx_stg_est_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age
- {OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- เก็บค่าลงใน {RI_PREM_RATE}
- คำนวณ RI Premium Accident{L1_RI_PREM_ACC} = Round({L1_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 ){L2_RI_PREM_ACC} = Round({L2_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 ){L3_RI_PREM_ACC} = Round({L3_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L1_RI_PREM_ACC} = Round({L1_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L2_RI_PREM_ACC} = Round({L2_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L3_RI_PREM_ACC} = Round({L3_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- ค้นหา ผลรวมเปอร์เซ็นต์ Loading ของความคุ้มครองทั้งหมด{PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}เก็บค่าลงใน {ALL_PER_LOAD}
- {PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}
- เก็บค่าลงใน {ALL_PER_LOAD}
- คำนวณ RI Premium Loadings{L1_RI_PREM_LOAD} = Round( (({L1_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 ){L2_RI_PREM_LOAD} = Round( (({L2_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 ){L3_RI_PREM_LOAD} = Round( (({L3_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- {L1_RI_PREM_LOAD} = Round( (({L1_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- {L2_RI_PREM_LOAD} = Round( (({L2_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- {L3_RI_PREM_LOAD} = Round( (({L3_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- คำนวณ RI Premium Discount MA{L1_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L1_RI_PREM_ACC}) / 100 , 2){L2_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L2_RI_PREM_ACC}) / 100 , 2){L3_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L3_RI_PREM_ACC}) / 100 , 2)
- {L1_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L1_RI_PREM_ACC}) / 100 , 2)
- {L2_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L2_RI_PREM_ACC}) / 100 , 2)
- {L3_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L3_RI_PREM_ACC}) / 100 , 2)
- คำนวณ RI Premium Discount Group Volumn{L1_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L1_RI_PREM_ACC} + {L1_RI_PREM_LOAD}) , 2){L2_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L2_RI_PREM_ACC} + {L2_RI_PREM_LOAD}) , 2){L3_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L3_RI_PREM_ACC} + {L3_RI_PREM_LOAD}) , 2)
- {L1_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L1_RI_PREM_ACC} + {L1_RI_PREM_LOAD}) , 2)
- {L2_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L2_RI_PREM_ACC} + {L2_RI_PREM_LOAD}) , 2)
- {L3_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L3_RI_PREM_ACC} + {L3_RI_PREM_LOAD}) , 2)
- คำนวณ RI Premium Discount{L1_SUM_DISC} = Round({L1_RI_PREM_DISC_MA} + {L1_RI_PREM_DISC_GV} , 2){L2_SUM_DISC} = Round({L2_RI_PREM_DISC_MA} + {L2_RI_PREM_DISC_GV} , 2){L3_SUM_DISC} = Round({L3_RI_PREM_DISC_MA} + {L3_RI_PREM_DISC_GV} , 2)
- {L1_SUM_DISC} = Round({L1_RI_PREM_DISC_MA} + {L1_RI_PREM_DISC_GV} , 2)
- {L2_SUM_DISC} = Round({L2_RI_PREM_DISC_MA} + {L2_RI_PREM_DISC_GV} , 2)
- {L3_SUM_DISC} = Round({L3_RI_PREM_DISC_MA} + {L3_RI_PREM_DISC_GV} , 2)
- คำนวณ RI Premium Total{RI_PREM_ACC} = {L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}{RI_PREM_LOAD} = {L1_RI_PREM_LOAD} + {L2_RI_PREM_LOAD} + {L3_RI_PREM_LOAD}{SUM_DISC} = {L1_SUM_DISC} + {L2_SUM_DISC} + {L3_SUM_DISC}{RI_PREM_TOT} = Round({RI_PREM_ACC} + {RI_PREM_LOAD} - {SUM_DISC} , 2)
- {RI_PREM_ACC} = {L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}
- {RI_PREM_LOAD} = {L1_RI_PREM_LOAD} + {L2_RI_PREM_LOAD} + {L3_RI_PREM_LOAD}
- {SUM_DISC} = {L1_SUM_DISC} + {L2_SUM_DISC} + {L3_SUM_DISC}
- {RI_PREM_TOT} = Round({RI_PREM_ACC} + {RI_PREM_LOAD} - {SUM_DISC} , 2)


===== PAGE 1289389362 | Function Support > cancle > 3. การคำนวณ RI Premium (ACT) > PS-07-3 DAI_Grp_Daiichi_Coins =====
(empty page)


===== PAGE 1291714681 | Function Support > cancle > 3. การคำนวณ RI Premium (ACT) > PS-07-3 GIB_Grp_Direct_EB =====
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
2. เตรียมข้อมูล Layer
เตรียมข้อมูล Layer ดังนี้
โดยตรวจสอบตาม {COV_FROM} ของกรมธรรม์ที่กำลังคำนวณอยู่ ตรวจสอบกับวันที่ Effective Date From – Effective Date To ของรายการที่เป็น A ใน {CONDITION_ID}
| Parameter | เงื่อนไขการค้นหา | ค่าที่เก็บลง Parameter |
| {L1_MIN} | ถ้า cf_rig_treaty_cond_dt.layer = L1 | cf_rig_treaty_cond_dt.minimum |
| {L1_MAX} | ถ้า cf_rig_treaty_cond_dt.layer = L1 | cf_rig_treaty_cond_dt.maximum |
| {L1_PER} | ถ้า cf_rig_treaty_cond_dt.layer = L1 | cf_rig_treaty_cond_dt.percent_re |
| {L2_MIN} | ถ้า cf_rig_treaty_cond_dt.layer = L2 | cf_rig_treaty_cond_dt.minimum |
| {L2_MAX} | ถ้า cf_rig_treaty_cond_dt.layer = L2 | cf_rig_treaty_cond_dt.maximum |
| {L2_PER} | ถ้า cf_rig_treaty_cond_dt.layer = L2 | cf_rig_treaty_cond_dt.percent_re |
| {L3_MIN} | ถ้า cf_rig_treaty_cond_dt.layer = L3 | cf_rig_treaty_cond_dt.minimum |
| {L3_MAX} | ถ้า cf_rig_treaty_cond_dt.layer = L3 | cf_rig_treaty_cond_dt.maximum |
| {L3_PER} | ถ้า cf_rig_treaty_cond_dt.layer = L3 | cf_rig_treaty_cond_dt.percent_re |
| {L1_L2_MID} |  | {L2_MAX} - {L1_MAX} |
3. คำนวณแยก Layer
| ความคุ้มครอง | Parameter | คำนวณ |
| LIFE | {L2_SA_LIFE} | ใช้ {L2_LIFE_INS} − ({L1_MAX} × {L2_MEM_LIFE}) + ({L1_L2_MID} × {L3_MEM_LIFE}) |
| {L3_SA_LIFE} | ใช้ {L3_LIFE_INS} − ({L2_MAX} × {L3_MEM_LIFE}) |
| {L1_SA_LIFE} | ใช้ {SUM_LIFE_INS} − {L2_SA_LIFE} − {L3_SA_LIFE} |
| {TOT_SA_LIFE} | {L1_SA_LIFE} + {L2_SA_LIFE} + {L3_SA_LIFE} |
| {L1_SR_LIFE} | {L1_SA_LIFE} * {L1_PER} / 100 |
| {L2_SR_LIFE} | {L2_SA_LIFE} * {L2_PER} / 100 |
| {L3_SR_LIFE} | {L3_SA_LIFE} * {L3_PER} / 100 |
| {TOT_SR_LIFE} | {L1_SR_LIFE} + {L2_SR_LIFE} + {L3_SR_LIFE} |
| ACC | {L2_SA_ACC} | ใช้ {L2_ACC_INS} − ({L1_MAX} × {L2_MEM_ACC}) + ({L1_L2_MID} × {L3_MEM_ACC}) |
| {L3_SA_ACC} | ใช้ {L3_ACC_INS} − ({L2_MAX} × {L3_MEM_ACC}) |
| {L1_SA_ACC} | ใช้ {SUM_ACC_INS} − {L2_SA_ACC} − {L3_SA_ACC} |
| {TOT_SA_ACC} | {L1_SA_ACC} + {L2_SA_ACC} + {L3_SA_ACC} |
| {L1_SR_ACC} | {L1_SA_ACC} * {L1_PER} / 100 |
| {L2_SR_ACC} | {L2_SA_ACC} * {L2_PER} / 100 |
| {L3_SR_ACC} | {L3_SA_ACC} * {L3_PER} / 100 |
| {TOT_SR_ACC} | {L1_SR_ACC} + {L2_SR_ACC} + {L3_SR_ACC} |
4. คำนวณ Premium
- เลือกเฉพาะรายการที่ ปีและเดือนของ {COV_FROM} เท่ากับ {PERIOD_MONTH}
- หาเบี้ยตั้งต้นของ Accident นำค่า {Y_PREM_ACC} - {Y_SUM_ACC_PREM_OVER} (ของ {POLICY_YEAR} เดียวกับรายการที่กำลังประมวลผล)เก็บค่าใน {Y_SUM_PREM_ACC} ความคุ้มครองParameterคำนวณLIFE{L2_PREM_LIFE}({L2_LIFE_PREM_RATE} * {PAY_MODE}) * {L2_SA_LIFE} / 1,000{L3_PREM_LIFE}({L3_LIFE_PREM_RATE} * {PAY_MODE}) * {L3_SA_LIFE} / 1,000{L1_PREM_LIFE}{Y_PREM_LIFE_E1} - {L2_NB_PREM_LIFE} - {L3_NB_PREM_LIFE}{TOT_PREM_LIFE}{L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{L1_RI_PREM_LIFE}{L1_PREM_LIFE} * {L1_PER} / 100{L2_RI_PREM_LIFE}{L2_PREM_LIFE} * {L2_PER} / 100{L3_RI_PREM_LIFE}{L3_PREM_LIFE} * {L3_PER} / 100{TOT_RI_PREM_LIFE}{L1_RI_PREM_LIFE} + {L2_RI_PREM_LIFE} + {L3_RI_PREM_LIFE}ACC{L2_PREM_ACC}({L2_ACC_PREM_RATE} * {PAY_MODE}) * {L2_SA_ACC} / 1,000{L3_PREM_ACC}({L3_ACC_PREM_RATE} * {PAY_MODE}) * {L3_SA_ACC} / 1,000{L1_PREM_ACC}{Y_SUM_PREM_ACC} - {L2_NB_PREM_ACC} - {L3_NB_PREM_ACC}{TOT_PREM_ACC}{L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC}{L1_RI_PREM_ACC}{L1_PREM_ACC} * {L1_PER} / 100{L2_RI_PREM_ACC}{L2_PREM_ACC} * {L2_PER} / 100{L3_RI_PREM_ACC}{L3_PREM_ACC} * {L3_PER} / 100{TOT_RI_PREM_ACC}{L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}
- นำค่า {Y_PREM_ACC} - {Y_SUM_ACC_PREM_OVER} (ของ {POLICY_YEAR} เดียวกับรายการที่กำลังประมวลผล)
- เก็บค่าใน {Y_SUM_PREM_ACC}
5. คำนวณ Movement (Revivals / Refund)
1. คำนวณ Movement ระหว่างปีกรมธรรม์
- ตรวจสอบ {PAY_MODE} ของกรมธรรม์นั้นถ้าเท่ากับ 1ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}{Y_PREM_LIFE_E1} ≥ 0{REVIVAL_PREM_ACC}{PREM_ACC} ≥ 0{REFUND_PREM_LIFE}{Y_PREM_LIFE_E1} < 0{REFUND_PREM_ACC}{PREM_ACC} < 0รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0 ถ้าไม่เท่ากับ 1ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}0{REVIVAL_PREM_ACC}0{REFUND_PREM_LIFE}0{REFUND_PREM_ACC}0รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- ถ้าเท่ากับ 1ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}{Y_PREM_LIFE_E1} ≥ 0{REVIVAL_PREM_ACC}{PREM_ACC} ≥ 0{REFUND_PREM_LIFE}{Y_PREM_LIFE_E1} < 0{REFUND_PREM_ACC}{PREM_ACC} < 0รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}{Y_PREM_LIFE_E1} ≥ 0{REVIVAL_PREM_ACC}{PREM_ACC} ≥ 0{REFUND_PREM_LIFE}{Y_PREM_LIFE_E1} < 0{REFUND_PREM_ACC}{PREM_ACC} < 0
- รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน
- {SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- ถ้าไม่เท่ากับ 1ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}0{REVIVAL_PREM_ACC}0{REFUND_PREM_LIFE}0{REFUND_PREM_ACC}0รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}0{REVIVAL_PREM_ACC}0{REFUND_PREM_LIFE}0{REFUND_PREM_ACC}0
- รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน
- {SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- รวมทุกรายการที่แยกตาม Period ภายในปีกรมเดียวกัน เข้าด้วยกัน Parameter คำนวณ{SUM_REVIVAL_PREM_LIFE}SUM({REVIVAL_PREM_LIFE}){SUM_REVIVAL_PREM_ACC}SUM({REVIVAL_PREM_ACC}){SUM_REFUND_PREM_LIFE}SUM({REFUND_PREM_LIFE}){SUM_REFUND_PREM_ACC}SUM({REFUND_PREM_ACC})
- คำนวณส่วน Reinsurance Parameter คำนวณ{RI_SUM_REVIVAL_PREM_LIFE}{SUM_REVIVAL_PREM_LIFE} * {L1_PER} / 100{RI_SUM_REVIVAL_PREM_ACC}{SUM_REVIVAL_PREM_ACC} * {L1_PER} / 100{RI_SUM_REFUND_PREM_LIFE}{SUM_REFUND_PREM_LIFE} * {L1_PER} / 100{RI_SUM_REFUND_PREM_ACC}{SUM_REFUND_PREM_ACC} * {L1_PER} / 100
6. คำนวณเบี้ยทั้งหมด
- คำนวณ Premium ทั้งหมดของแต่ละกรมธรรม์Parameterคำนวณ{L1_TL_PREM_LIFE}{L1_PREM_LIFE} + {SUM_REVIVAL_PREM_LIFE} - {SUM_REFUND_PREM_LIFE}{L2_TL_PREM_LIFE}{L2_PREM_LIFE}{L3_TL_PREM_LIFE}{L3_PREM_LIFE}{L1_TL_PREM_ACC}{L1_PREM_ACC} + {SUM_REVIVAL_PREM_ACC} - {SUM_REFUND_PREM_ACC}{L2_TL_PREM_ACC}{L2_PREM_ACC}{L3_TL_PREM_ACC}{L3_PREM_ACC}
- คำนวณ RI Premium ทั้งหมดของแต่ละกรมธรรม์Parameterคำนวณ{RI_L1_TL_PREM_LIFE}{L1_TL_PREM_LIFE} * {L1_PER} / 100{RI_L2_TL_PREM_LIFE}{L2_TL_PREM_LIFE} * {L2_PER} / 100{RI_L3_TL_PREM_LIFE}{L3_TL_PREM_LIFE} * {L3_PER} / 100{TOT_RI_TL_PREM_LIFE}{RI_L1_TL_PREM_LIFE} + {RI_L2_TL_PREM_LIFE} + {RI_L3_TL_PREM_LIFE}{RI_L1_TL_PREM_ACC}{L1_TL_PREM_ACC} * {L1_PER} / 100{RI_L2_TL_PREM_ACC}{L2_TL_PREM_ACC} * {L2_PER} / 100{RI_L3_TL_PREM_ACC}{L3_TL_PREM_ACC} * {L3_PER} / 100{TOT_RI_TL_PREM_ACC}{RI_L1_TL_PREM_ACC} + {RI_L2_TL_PREM_ACC} + {RI_L3_TL_PREM_ACC}
7. คำนวณส่วน Reinsurance และเตรียมข้อมูลออก Report
| Parameter | คำนวณ |
| {PREM_RATE_LIFE_REPORT} | ({L1_LIFE_PREM} * {PAY_MODE}) + ({L2_LIFE_PREM} * {PAY_MODE}) + ({L3_LIFE_PREM} * {PAY_MODE}) |
| {PREM_RATE_ACC_REPORT} | ({L1_ACC_PREM} * {PAY_MODE}) + ({L2_ACC_PREM} * {PAY_MODE}) + ({L3_ACC_PREM} * {PAY_MODE}) |


===== PAGE 1291715853 | Function Support > cancle > 3. การคำนวณ RI Premium (ACT) > PS-07-3 THREL_Grp_PA =====
1. ตรวจสอบรายการสมาชิก
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยนำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า Minimum Sum Assuredcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- นำ {POLICY_NO} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ มาตรวจสอบรายชื่อสมาชิกในกรมธรรม์ที่ tx_stg_act_inforce_member โดยtx_stg_act_inforce_member.policy_no เท่ากับ {POLICY_NO}และ tx_stg_act_inforce_member.sum_insured_accident มากกว่าเท่ากับ {MIN_SUM_ASU}และ tx_stg_act_inforce_member.age น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_act_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_act_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_act_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
- tx_stg_act_inforce_member.policy_no เท่ากับ {POLICY_NO}
- และ tx_stg_act_inforce_member.sum_insured_accident มากกว่าเท่ากับ {MIN_SUM_ASU}
- และ tx_stg_act_inforce_member.age น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_act_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_act_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_act_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
- กรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_act_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_act_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_act_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
- ถ้ามีเลข tx_stg_act_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อ
- ถ้ามีเลข tx_stg_act_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
2. คำนวณ SA
- นำ tx_stg_act_inforce_member.sum_insured_accident ของแต่ละรายสมาชิก มาคำนวณหาค่า SA ของแต่ละสมาชิกดังนี้parameterคำนวณ{SA_ACC}tx_stg_act_inforce_member.sum_insured_accident{SA_MUR}{SA_ACC} * ({PER_MUR} / 100){SA_LOADING}{SA_ACC} * ({PER_SPE_COV} / 100)
- parameterคำนวณ{SA_ACC}tx_stg_act_inforce_member.sum_insured_accident{SA_MUR}{SA_ACC} * ({PER_MUR} / 100){SA_LOADING}{SA_ACC} * ({PER_SPE_COV} / 100)
3. คำนวณ SR
- เตรียมข้อมูลคำนวณ SR ตาม Config Treaty หัวข้อ RI Conditionparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- นำ tx_stg_act_inforce_member.sum_insured_accident ของแต่ละรายสมาชิก มาตรวจสอบ Layer ดังนี้กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L1_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L1_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L1กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L2_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L2_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L2กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L3_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L3_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L3
- กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L1_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L1_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L1
- กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L2_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L2_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L2
- กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L3_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L3_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L3
- คำนวณ SR Accident จัดเก็บในกรณีที่สมาชิกรายนั้นอยู่ L1 ให้กำหนดค่า {L1_SR_ACC} = 0กรณีที่สมาชิกรายนั้นอยู่ L2 ให้คำนวณดังนี้{L2_SR_ACC} = ({L2_PER} / 100) * ({SA_ACC} - {L1_INSU_MAX})กรณีที่สมาชิกรายนั้นอยู่ L3 ให้คำนวณดังนี้{L3_SR_ACC} = ({L3_PER} / 100) * ({SA_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- กรณีที่สมาชิกรายนั้นอยู่ L1 ให้กำหนดค่า {L1_SR_ACC} = 0
- กรณีที่สมาชิกรายนั้นอยู่ L2 ให้คำนวณดังนี้{L2_SR_ACC} = ({L2_PER} / 100) * ({SA_ACC} - {L1_INSU_MAX})
- {L2_SR_ACC} = ({L2_PER} / 100) * ({SA_ACC} - {L1_INSU_MAX})
- กรณีที่สมาชิกรายนั้นอยู่ L3 ให้คำนวณดังนี้{L3_SR_ACC} = ({L3_PER} / 100) * ({SA_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- {L3_SR_ACC} = ({L3_PER} / 100) * ({SA_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- คำนวณ SR Murder & Assault จัดเก็บใน{L1_SR_MUR} = {L1_SR_ACC} * {PER_MUR} / 100{L2_SR_MUR} = {L2_SR_ACC} * {PER_MUR} / 100{L3_SR_MUR} = {L3_SR_ACC} * {PER_MUR} / 100
- {L1_SR_MUR} = {L1_SR_ACC} * {PER_MUR} / 100
- {L2_SR_MUR} = {L2_SR_ACC} * {PER_MUR} / 100
- {L3_SR_MUR} = {L3_SR_ACC} * {PER_MUR} / 100
- คำนวณ SR Loadings จัดเก็บใน{L1_SR_LOAD} = {L1_SR_ACC} * {PER_SPE_COV} / 100{L2_SR_LOAD} = {L2_SR_ACC} * {PER_SPE_COV} / 100{L3_SR_LOAD} = {L3_SR_ACC} * {PER_SPE_COV} / 100
- {L1_SR_LOAD} = {L1_SR_ACC} * {PER_SPE_COV} / 100
- {L2_SR_LOAD} = {L2_SR_ACC} * {PER_SPE_COV} / 100
- {L3_SR_LOAD} = {L3_SR_ACC} * {PER_SPE_COV} / 100
4. คำนวณ RI Premium
- เตรียมข้อมูลคำนวณ RI Premium ตาม Config Treaty ที่หัวข้อ ตั้งค่า RI Premium Rate
- {POLIC_COV} ที่ได้มาจาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล
- ค้นหา Rate ของสมาชิกแต่ละคนที่ cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 2tx_stg_est_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age {OCC} = cf_rig_treaty_prem_rate_dt.occ_classเก็บค่าลงใน {RI_PREM_RATE}
- cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 2tx_stg_est_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age {OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- ถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 2
- tx_stg_est_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age
- {OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- เก็บค่าลงใน {RI_PREM_RATE}
- คำนวณ RI Premium Accident{L1_RI_PREM_ACC} = Round({L1_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 ){L2_RI_PREM_ACC} = Round({L2_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 ){L3_RI_PREM_ACC} = Round({L3_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L1_RI_PREM_ACC} = Round({L1_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L2_RI_PREM_ACC} = Round({L2_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L3_RI_PREM_ACC} = Round({L3_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- ค้นหา ผลรวมเปอร์เซ็นต์ Loading ของความคุ้มครองทั้งหมด{PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}เก็บค่าลงใน {ALL_PER_LOAD}
- {PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}
- เก็บค่าลงใน {ALL_PER_LOAD}
- คำนวณ RI Premium Loadings{L1_RI_PREM_LOAD} = Round( (({L1_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 ){L2_RI_PREM_LOAD} = Round( (({L2_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 ){L3_RI_PREM_LOAD} = Round( (({L3_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- {L1_RI_PREM_LOAD} = Round( (({L1_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- {L2_RI_PREM_LOAD} = Round( (({L2_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- {L3_RI_PREM_LOAD} = Round( (({L3_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- คำนวณ RI Premium Discount MA{L1_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L1_RI_PREM_ACC}) / 100 , 2){L2_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L2_RI_PREM_ACC}) / 100 , 2){L3_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L3_RI_PREM_ACC}) / 100 , 2)
- {L1_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L1_RI_PREM_ACC}) / 100 , 2)
- {L2_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L2_RI_PREM_ACC}) / 100 , 2)
- {L3_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L3_RI_PREM_ACC}) / 100 , 2)
- คำนวณ RI Premium Discount Group Volumn{L1_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L1_RI_PREM_ACC} + {L1_RI_PREM_LOAD}) , 2){L2_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L2_RI_PREM_ACC} + {L2_RI_PREM_LOAD}) , 2){L3_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L3_RI_PREM_ACC} + {L3_RI_PREM_LOAD}) , 2)
- {L1_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L1_RI_PREM_ACC} + {L1_RI_PREM_LOAD}) , 2)
- {L2_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L2_RI_PREM_ACC} + {L2_RI_PREM_LOAD}) , 2)
- {L3_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L3_RI_PREM_ACC} + {L3_RI_PREM_LOAD}) , 2)
- คำนวณ RI Premium Discount{L1_SUM_DISC} = Round({L1_RI_PREM_DISC_MA} + {L1_RI_PREM_DISC_GV} , 2){L2_SUM_DISC} = Round({L2_RI_PREM_DISC_MA} + {L2_RI_PREM_DISC_GV} , 2){L3_SUM_DISC} = Round({L3_RI_PREM_DISC_MA} + {L3_RI_PREM_DISC_GV} , 2)
- {L1_SUM_DISC} = Round({L1_RI_PREM_DISC_MA} + {L1_RI_PREM_DISC_GV} , 2)
- {L2_SUM_DISC} = Round({L2_RI_PREM_DISC_MA} + {L2_RI_PREM_DISC_GV} , 2)
- {L3_SUM_DISC} = Round({L3_RI_PREM_DISC_MA} + {L3_RI_PREM_DISC_GV} , 2)
- คำนวณ RI Premium Total{RI_PREM_ACC} = {L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}{RI_PREM_LOAD} = {L1_RI_PREM_LOAD} + {L2_RI_PREM_LOAD} + {L3_RI_PREM_LOAD}{SUM_DISC} = {L1_SUM_DISC} + {L2_SUM_DISC} + {L3_SUM_DISC}{RI_PREM_TOT} = Round({RI_PREM_ACC} + {RI_PREM_LOAD} - {SUM_DISC} , 2)
- {RI_PREM_ACC} = {L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}
- {RI_PREM_LOAD} = {L1_RI_PREM_LOAD} + {L2_RI_PREM_LOAD} + {L3_RI_PREM_LOAD}
- {SUM_DISC} = {L1_SUM_DISC} + {L2_SUM_DISC} + {L3_SUM_DISC}
- {RI_PREM_TOT} = Round({RI_PREM_ACC} + {RI_PREM_LOAD} - {SUM_DISC} , 2)


===== PAGE 1295712634 | Function Support > cancle > 4. การคำนวณ RI Commission (ACT) =====
DAI_Grp_Daiichi_Coins
GIB_Grp_Direct_EB
1. คำนวณ RI Commission
- ตรวจสอบค่า RI Commission Rate โดยนำ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล ตรวจสอบใน cf_rig_treaty_cond_hdcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- คำนวณ RI CommissionParameterคำนวณ{RI_COMM_L1_LIFE}{RI_L1_TL_PREM_LIFE} * {RI_COM_RATE}{RI_COMM_L2_LIFE}{RI_L2_TL_PREM_LIFE} * {RI_COM_RATE}{RI_COMM_L3_LIFE}{RI_L3_TL_PREM_LIFE} * {RI_COM_RATE}{TOT_RI_COMM_LIFE}{RI_COMM_L1_TL_PREM_LIFE} + {RI_COMM_L2_TL_PREM_LIFE} + {RI_COMM_L3_TL_PREM_LIFE}{RI_COMM_L1_ACC}{RI_L1_TL_PREM_ACC} * {RI_COM_RATE}{RI_COMM_L2_ACC}{RI_L2_TL_PREM_ACC} * {RI_COM_RATE}{RI_COMM_L3_ACC}{RI_L3_TL_PREM_ACC} * {RI_COM_RATE}{TOT_RI_COMM_ACC}{RI_COMM_L1_TL_PREM_ACC} + {RI_COMM_L2_TL_PREM_ACC} + {RI_COMM_L3_TL_PREM_ACC}
THREL_Grp_PA
1. คำนวณ RI Commission
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยนำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า RI Commission Rateเก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- คำนวณRound( ({RI_COM_RATE} / 100 ) × {RI_PREM_TOT} , 2 )เก็บค่าลงใน {RI_COM_ACC}
- Round( ({RI_COM_RATE} / 100 ) × {RI_PREM_TOT} , 2 )
- เก็บค่าลงใน {RI_COM_ACC}


===== PAGE 1292239322 | Function Support > cancle > 4. การคำนวณ RI Commission (ACT) > PS-07-4 DAI_Grp_Daiichi_Coins =====
(empty page)


===== PAGE 1292239165 | Function Support > cancle > 4. การคำนวณ RI Commission (ACT) > PS-07-4 GIB_Grp_Direct_EB =====
1. คำนวณ RI Commission
- ตรวจสอบค่า RI Commission Rate โดยนำ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล ตรวจสอบใน cf_rig_treaty_cond_hdcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- คำนวณ RI CommissionParameterคำนวณ{RI_COMM_L1_LIFE}{RI_L1_TL_PREM_LIFE} * {RI_COM_RATE}{RI_COMM_L2_LIFE}{RI_L2_TL_PREM_LIFE} * {RI_COM_RATE}{RI_COMM_L3_LIFE}{RI_L3_TL_PREM_LIFE} * {RI_COM_RATE}{TOT_RI_COMM_LIFE}{RI_COMM_L1_TL_PREM_LIFE} + {RI_COMM_L2_TL_PREM_LIFE} + {RI_COMM_L3_TL_PREM_LIFE}{RI_COMM_L1_ACC}{RI_L1_TL_PREM_ACC} * {RI_COM_RATE}{RI_COMM_L2_ACC}{RI_L2_TL_PREM_ACC} * {RI_COM_RATE}{RI_COMM_L3_ACC}{RI_L3_TL_PREM_ACC} * {RI_COM_RATE}{TOT_RI_COMM_ACC}{RI_COMM_L1_TL_PREM_ACC} + {RI_COMM_L2_TL_PREM_ACC} + {RI_COMM_L3_TL_PREM_ACC}


===== PAGE 1292239134 | Function Support > cancle > 4. การคำนวณ RI Commission (ACT) > PS-07-4 THREL_Grp_PA =====
1. คำนวณ RI Commission
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยนำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า RI Commission Rateเก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- คำนวณRound( ({RI_COM_RATE} / 100 ) × {RI_PREM_TOT} , 2 )เก็บค่าลงใน {RI_COM_ACC}
- Round( ({RI_COM_RATE} / 100 ) × {RI_PREM_TOT} , 2 )
- เก็บค่าลงใน {RI_COM_ACC}


===== PAGE 1315766276 | Function Support > cancle > 5. การคำนวณ Alteration (ACT) =====
THREL_Grp_PA
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
2. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_act_alteration โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_alteration.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี วันที่ดังนี้อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_alteration.document_date tx_stg_act_alteration.alteration_dateการดำเนินการอยู่ใน Quarter ประมวลผลและอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่ก่อน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ก่อน Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นเกิน 1 ปีจาก Quarter ที่ประมวลผลและก่อน/อยู่ใน/หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_alteration parametertx_stg_act_alteration {POLICY_NO}policy_no {RE_CODE_FULL}reinsure_no {DOC_DATE}document_dateวันที่ทำรายการ{AL_MOVE}alteration_movementประเภทสลักหลัง{AL_STATUS}alteration_statusสถานะสลักหลัง{AL_DATE}alteration_dateวันที่มีผลบังคับของสลักหลัง{MEM_EFF_DATE}member_effective_dateวันเริ่มคุ้มครองของสมาชิก{CERT_NO}cert_no {SEX}sex {AGE}age {INS_ACC_DEATH}sum_insured_accident {INS_ACC_DEATH_BEF}sum_insured_accident_before {INS_ACC_DEATH_AFT}sum_insured_accident_after tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_FROM}promise_date{COV_TO}end_dateดึงข้อมูลกรมธรรม์ที่ cf_rig_treaty_policy_hd โดยcf_rig_treaty_policy_hd.policy_no = {POLICY_NO}{AL_DATE} อยู่ในช่วง cf_rig_treaty_policy_hd.coverage_period_from และ cf_rig_treaty_policy_hd.coverage_period_to ของกรมธรรม์นั้นparametercf_rig_treaty_policy_hd{POLICY_NO}policy_no{COM_DATE}com_date{COV_FROM}coverage_period_from{COV_TO}coverage_period_to{NUM_DAY_YEAR}{COV_TO} - {COV_FROM}{POLICY_YEAR}policy_year{AGE_LIMIT}age_limit{OCC}occ_class{CER_INCOM}cert_no_incompliant{POLIC_COV}coverage{PER_ADD}percent_add{PER_MUR}murder_assault{PER_SPE_COV}special_coverage{PER_LOS_FING}loss_finger{PER_MOT}prem_motorcycle{PER_WAR}prem_war{PER_STRIKE}prem_strike_riot{PER_SPORT}prem_sports_activities{PER_AIR}prem_aircraft{PER_DIS_MUR}discount_murder_assualt{PER_DIS_VOL}discount_group_vol{PERIOD}เดือนและปีของ coverage_period_from{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from{POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_status{REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_policy_status
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_alteration.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_alteration.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี วันที่ดังนี้อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_alteration.document_date tx_stg_act_alteration.alteration_dateการดำเนินการอยู่ใน Quarter ประมวลผลและอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่ก่อน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ก่อน Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นเกิน 1 ปีจาก Quarter ที่ประมวลผลและก่อน/อยู่ใน/หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้น
- tx_stg_act_alteration.document_date tx_stg_act_alteration.alteration_dateการดำเนินการอยู่ใน Quarter ประมวลผลและอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่ก่อน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ก่อน Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นเกิน 1 ปีจาก Quarter ที่ประมวลผลและก่อน/อยู่ใน/หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้น
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_alteration parametertx_stg_act_alteration {POLICY_NO}policy_no {RE_CODE_FULL}reinsure_no {DOC_DATE}document_dateวันที่ทำรายการ{AL_MOVE}alteration_movementประเภทสลักหลัง{AL_STATUS}alteration_statusสถานะสลักหลัง{AL_DATE}alteration_dateวันที่มีผลบังคับของสลักหลัง{MEM_EFF_DATE}member_effective_dateวันเริ่มคุ้มครองของสมาชิก{CERT_NO}cert_no {SEX}sex {AGE}age {INS_ACC_DEATH}sum_insured_accident {INS_ACC_DEATH_BEF}sum_insured_accident_before {INS_ACC_DEATH_AFT}sum_insured_accident_after tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_FROM}promise_date{COV_TO}end_dateดึงข้อมูลกรมธรรม์ที่ cf_rig_treaty_policy_hd โดยcf_rig_treaty_policy_hd.policy_no = {POLICY_NO}{AL_DATE} อยู่ในช่วง cf_rig_treaty_policy_hd.coverage_period_from และ cf_rig_treaty_policy_hd.coverage_period_to ของกรมธรรม์นั้นparametercf_rig_treaty_policy_hd{POLICY_NO}policy_no{COM_DATE}com_date{COV_FROM}coverage_period_from{COV_TO}coverage_period_to{NUM_DAY_YEAR}{COV_TO} - {COV_FROM}{POLICY_YEAR}policy_year{AGE_LIMIT}age_limit{OCC}occ_class{CER_INCOM}cert_no_incompliant{POLIC_COV}coverage{PER_ADD}percent_add{PER_MUR}murder_assault{PER_SPE_COV}special_coverage{PER_LOS_FING}loss_finger{PER_MOT}prem_motorcycle{PER_WAR}prem_war{PER_STRIKE}prem_strike_riot{PER_SPORT}prem_sports_activities{PER_AIR}prem_aircraft{PER_DIS_MUR}discount_murder_assualt{PER_DIS_VOL}discount_group_vol{PERIOD}เดือนและปีของ coverage_period_from{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from{POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_status{REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_policy_status
- tx_stg_act_alteration parametertx_stg_act_alteration {POLICY_NO}policy_no {RE_CODE_FULL}reinsure_no {DOC_DATE}document_dateวันที่ทำรายการ{AL_MOVE}alteration_movementประเภทสลักหลัง{AL_STATUS}alteration_statusสถานะสลักหลัง{AL_DATE}alteration_dateวันที่มีผลบังคับของสลักหลัง{MEM_EFF_DATE}member_effective_dateวันเริ่มคุ้มครองของสมาชิก{CERT_NO}cert_no {SEX}sex {AGE}age {INS_ACC_DEATH}sum_insured_accident {INS_ACC_DEATH_BEF}sum_insured_accident_before {INS_ACC_DEATH_AFT}sum_insured_accident_after
- tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_FROM}promise_date{COV_TO}end_date
- ดึงข้อมูลกรมธรรม์ที่ cf_rig_treaty_policy_hd โดยcf_rig_treaty_policy_hd.policy_no = {POLICY_NO}{AL_DATE} อยู่ในช่วง cf_rig_treaty_policy_hd.coverage_period_from และ cf_rig_treaty_policy_hd.coverage_period_to ของกรมธรรม์นั้นparametercf_rig_treaty_policy_hd{POLICY_NO}policy_no{COM_DATE}com_date{COV_FROM}coverage_period_from{COV_TO}coverage_period_to{NUM_DAY_YEAR}{COV_TO} - {COV_FROM}{POLICY_YEAR}policy_year{AGE_LIMIT}age_limit{OCC}occ_class{CER_INCOM}cert_no_incompliant{POLIC_COV}coverage{PER_ADD}percent_add{PER_MUR}murder_assault{PER_SPE_COV}special_coverage{PER_LOS_FING}loss_finger{PER_MOT}prem_motorcycle{PER_WAR}prem_war{PER_STRIKE}prem_strike_riot{PER_SPORT}prem_sports_activities{PER_AIR}prem_aircraft{PER_DIS_MUR}discount_murder_assualt{PER_DIS_VOL}discount_group_vol{PERIOD}เดือนและปีของ coverage_period_from{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from{POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_status{REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_policy_status
- cf_rig_treaty_policy_hd.policy_no = {POLICY_NO}
- {AL_DATE} อยู่ในช่วง cf_rig_treaty_policy_hd.coverage_period_from และ cf_rig_treaty_policy_hd.coverage_period_to ของกรมธรรม์นั้นparametercf_rig_treaty_policy_hd{POLICY_NO}policy_no{COM_DATE}com_date{COV_FROM}coverage_period_from{COV_TO}coverage_period_to{NUM_DAY_YEAR}{COV_TO} - {COV_FROM}{POLICY_YEAR}policy_year{AGE_LIMIT}age_limit{OCC}occ_class{CER_INCOM}cert_no_incompliant{POLIC_COV}coverage{PER_ADD}percent_add{PER_MUR}murder_assault{PER_SPE_COV}special_coverage{PER_LOS_FING}loss_finger{PER_MOT}prem_motorcycle{PER_WAR}prem_war{PER_STRIKE}prem_strike_riot{PER_SPORT}prem_sports_activities{PER_AIR}prem_aircraft{PER_DIS_MUR}discount_murder_assualt{PER_DIS_VOL}discount_group_vol{PERIOD}เดือนและปีของ coverage_period_from{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from{POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_status{REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_policy_status
- แบ่งชุดประเภทข้อมูลดังนี้Alteration Type New Member / Addition{NM}{AL_MOVE} = ACancellation / Termination{CL}{AL_MOVE} = CIncreased Sum Assured{IC}{AL_MOVE} = NDecreased Sum Assured{DC}{AL_MOVE} = E
- Alteration Type New Member / Addition{NM}{AL_MOVE} = ACancellation / Termination{CL}{AL_MOVE} = CIncreased Sum Assured{IC}{AL_MOVE} = NDecreased Sum Assured{DC}{AL_MOVE} = E
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดย
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า Minimum Sum Assuredcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- นำ {POLICY_NO} ที่ได้จาก tx_stg_act_alteration{INS_ACC_DEATH} มากกว่าเท่ากับ {MIN_SUM_ASU}และ {AGE} น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
- {INS_ACC_DEATH} มากกว่าเท่ากับ {MIN_SUM_ASU}
- และ {AGE} น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
- กรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
- ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อ
- ถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
- เตรียมข้อมูล Layer ดังนี้ โดยตรวจสอบตาม {COV_FROM} ของกรมธรรม์ที่กำลังคำนวณอยู่ ตรวจสอบกับวันที่ Effective Date From – Effective Date To ของรายการที่เป็น A ใน {CONDITION_ID}Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum / 1000{L1_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.maximum / 1000{L1_PER}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.percent_re{L2_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum / 1000{L2_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.maximum / 1000{L2_PER}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.percent_re{L3_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum / 1000{L3_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.maximum / 1000{L3_PER}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_MAX} - {L1_MAX} / 1000
- เตรียมข้อมูลคำนวณ RI Premium ตาม Config Treaty ที่หัวข้อ ตั้งค่า RI Premium Rate
- {POLIC_COV} ของกรมธรรม์
- ค้นหา Rate ของสมาชิกแต่ละคนที่cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 2{AGE} มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age{OCC} = cf_rig_treaty_prem_rate_dt.occ_classเก็บค่าลงใน {RI_PREM_RATE}ค้นหา ผลรวมเปอร์เซ็นต์ Loading ของความคุ้มครองทั้งหมดRound({PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}), 2 )เก็บค่าลงใน {ALL_PER_LOAD}
- cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 2{AGE} มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age{OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- ถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 2
- {AGE} มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age
- {OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- เก็บค่าลงใน {RI_PREM_RATE}
- ค้นหา ผลรวมเปอร์เซ็นต์ Loading ของความคุ้มครองทั้งหมดRound({PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}), 2 )เก็บค่าลงใน {ALL_PER_LOAD}
- Round({PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}), 2 )
- เก็บค่าลงใน {ALL_PER_LOAD}
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยนำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_toตรวจสอบค่า RI Commission Rateเก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า RI Commission Rateเก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
3. Alteration - New Member และ Termination
- สำหรับชุดข้อมูล {NM} และ {CL} คำนวณ SUM INSURED และ SUM REINSUREDParameter คำนวณ{NUM_DAY_COV}{COV_TO} - {AL_DATE}{SUM_INS_ACC_DEATH}{INS_ACC_DEATH} / 1000{SUM_INS_MUR}{SUM_INS_ACC_DEATH} * ({PER_MUR} / 100){SUM_INS_LOAD}{SUM_INS_ACC_DEATH} * ({PER_SPE_COV} / 100)Parameterคำนวณค่าที่เก็บ{SUM_RE_INS_ACC_DEATH}ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L1_MIN} และ น้อยกว่าหรือเท่ากับ {L1_MAX} 0ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L2_MIN} และ น้อยกว่าหรือเท่ากับ {L2_MAX}({SUM_INS_ACC_DEATH} - {L1_MAX}) * ({L2_PER} / 100)ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L3_MIN} และ น้อยกว่าหรือเท่ากับ {L3_MAX}({L2_MAX} - {L1_MAX}) * ({L2_PER} / 100) + ({SUM_INS_ACC_DEATH} - {L2_MAX}) * ({L3_PER} / 100){SUM_RE_INS_MUR} {SUM_RE_INS_ACC_DEATH} * ({PER_MUR} / 100){SUM_RE_INS_LOAD} {SUM_RE_INS_ACC_DEATH} * ({PER_SPE_COV} / 100)คำนวณ REINSURANCE PREMIUMParameterคำนวณ{RE_PREM_ACC}Round({SUM_RE_INS_ACC_DEATH} * {RI_PREM_RATE} * {NUM_DAY_COV} / {NUM_DAY_YEAR}), 2 ){RE_PREM_LOAD}Round({SUM_RE_INS_LOAD} * {RI_PREM_RATE} * {ALL_PER_LOAD} * {NUM_DAY_COV} / {NUM_DAY_YEAR}), 2 ){RE_PREM_DIS_MA}({PER_DIS_MUR} / 100) * {RE_PREM_ACC}{RE_PREM_DIS_GV}({PER_DIS_VOL} / 100) * ((1 - {PER_DIS_MUR}) * {RE_PREM_ACC}) + {RE_PREM_LOAD}{SUM_DISC}Round({RE_PREM_DIS_MA} + {RE_PREM_DIS_GV}), 2 ){RE_COM}Round(({RE_PREM_ACC} + {RE_PREM_LOAD}) - ({SUM_DISC} * {RI_COM_RATE})), 2 )
- คำนวณ SUM INSURED และ SUM REINSUREDParameter คำนวณ{NUM_DAY_COV}{COV_TO} - {AL_DATE}{SUM_INS_ACC_DEATH}{INS_ACC_DEATH} / 1000{SUM_INS_MUR}{SUM_INS_ACC_DEATH} * ({PER_MUR} / 100){SUM_INS_LOAD}{SUM_INS_ACC_DEATH} * ({PER_SPE_COV} / 100)Parameterคำนวณค่าที่เก็บ{SUM_RE_INS_ACC_DEATH}ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L1_MIN} และ น้อยกว่าหรือเท่ากับ {L1_MAX} 0ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L2_MIN} และ น้อยกว่าหรือเท่ากับ {L2_MAX}({SUM_INS_ACC_DEATH} - {L1_MAX}) * ({L2_PER} / 100)ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L3_MIN} และ น้อยกว่าหรือเท่ากับ {L3_MAX}({L2_MAX} - {L1_MAX}) * ({L2_PER} / 100) + ({SUM_INS_ACC_DEATH} - {L2_MAX}) * ({L3_PER} / 100){SUM_RE_INS_MUR} {SUM_RE_INS_ACC_DEATH} * ({PER_MUR} / 100){SUM_RE_INS_LOAD} {SUM_RE_INS_ACC_DEATH} * ({PER_SPE_COV} / 100)
- คำนวณ REINSURANCE PREMIUMParameterคำนวณ{RE_PREM_ACC}Round({SUM_RE_INS_ACC_DEATH} * {RI_PREM_RATE} * {NUM_DAY_COV} / {NUM_DAY_YEAR}), 2 ){RE_PREM_LOAD}Round({SUM_RE_INS_LOAD} * {RI_PREM_RATE} * {ALL_PER_LOAD} * {NUM_DAY_COV} / {NUM_DAY_YEAR}), 2 ){RE_PREM_DIS_MA}({PER_DIS_MUR} / 100) * {RE_PREM_ACC}{RE_PREM_DIS_GV}({PER_DIS_VOL} / 100) * ((1 - {PER_DIS_MUR}) * {RE_PREM_ACC}) + {RE_PREM_LOAD}{SUM_DISC}Round({RE_PREM_DIS_MA} + {RE_PREM_DIS_GV}), 2 ){RE_COM}Round(({RE_PREM_ACC} + {RE_PREM_LOAD}) - ({SUM_DISC} * {RI_COM_RATE})), 2 )
3. Alteration - Increased SA และ Decreased SA
- สำหรับชุดข้อมูล {IC} และ {DC} Parameter คำนวณ{NUM_DAY_COV}{COV_TO} - {AL_DATE}
- คำนวณ SA / SR / RI Prem.(Before Change) ACCIDENT Parameter คำนวณ {SA_ACC_BEF}{INS_ACC_DEATH_BEF} / 1000 {SR_ACC_BEF}ถ้า {SA_ACC_BEF} มากกว่าหรือเท่ากับ {L1_MIN} และ น้อยกว่าหรือเท่ากับ {L1_MAX}0ถ้า {SA_ACC_BEF} มากกว่าหรือเท่ากับ {L2_MIN} และ น้อยกว่าหรือเท่ากับ {L2_MAX}({SA_ACC_BEF} - {L1_MAX}) * ({L2_PER} / 100)ถ้า {SA_ACC_BEF} มากกว่าหรือเท่ากับ {L3_MIN} และ น้อยกว่าหรือเท่ากับ {L3_MAX}({L2_MAX} - {L1_MAX}) * ({L2_PER} / 100) + ({SA_ACC_BEF} - {L2_MAX}) * ({L3_PER} / 100){RE_PREM_ACC_BEF}Round({SR_ACC_BEF} * {RI_PREM_RATE} * {NUM_DAY_COV} / {NUM_DAY_YEAR}), 2 ) {SA_MUR_BEF}{SA_ACC_BEF} * ({PER_MUR} / 100) {SR_MUR_BEF}{SR_ACC_BEF} * ({PER_MUR} / 100) {RE_PREM_MUR_BEF}0 {SA_LOAD_BEF}{SA_ACC_BEF} * ({PER_SPE_COV} / 100) {SR_LOAD_BEF}{SR_ACC_BEF} * ({PER_SPE_COV} / 100) {RE_PREM_LOAD_BEF}Round({SR_LOAD_BEF} * {RI_PREM_RATE} * {NUM_DAY_COV} / {NUM_DAY_YEAR}), 2 ) {SA_DIS_BEF}0 {SR_DIS_BEF}0 {RE_PREM_DIS_MA_BEF}({PER_DIS_MUR} / 100) * {RE_PREM_ACC_BEF} {RE_PREM_DIS_GV_BEF}({PER_DIS_VOL} / 100) * ((1 - {PER_DIS_MUR}) * {RE_PREM_ACC_BEF}) + {RE_PREM_LOAD_BEF} {SUM_DISC_BEF}{RE_PREM_DIS_MA_BEF} + {RE_PREM_DIS_GV_BEF}
- คำนวณ SA / SR / RI Prem.(After Change) ACCIDENTParameterคำนวณ {SA_ACC_AFT}{INS_ACC_DEATH_AFT} / 1000 {SR_ACC_AFT}ถ้า {SA_ACC_AFT} มากกว่าหรือเท่ากับ {L1_MIN} และ น้อยกว่าหรือเท่ากับ {L1_MAX}0ถ้า {SA_ACC_AFT} มากกว่าหรือเท่ากับ {L2_MIN} และ น้อยกว่าหรือเท่ากับ {L2_MAX}({SA_ACC_AFT} - {L1_MAX}) * ({L2_PER} / 100)ถ้า {SA_ACC_AFT} มากกว่าหรือเท่ากับ {L3_MIN} และ น้อยกว่าหรือเท่ากับ {L3_MAX}({L2_MAX} - {L1_MAX}) * ({L2_PER} / 100) + ({SA_ACC_AFT} - {L2_MAX}) * ({L3_PER} / 100){RE_PREM_ACC_AFT} Round({SR_ACC_AFT} * {RI_PREM_RATE} * {NUM_DAY_COV} / {NUM_DAY_YEAR}), 2 ) {SA_MUR_AFT}{SA_ACC_AFT} * ({PER_MUR} / 100) {SR_MUR_AFT}{SR_ACC_AFT} * ({PER_MUR} / 100) {RE_PREM_MUR_AFT}0 {SA_LOAD_AFT}{SA_ACC_AFT} * ({PER_SPE_COV} / 100) {SR_LOAD_AFT}{SR_ACC_AFT} * ({PER_SPE_COV} / 100) {RE_PREM_LOAD_AFT}Round({SR_LOAD_AFT} * {RI_PREM_RATE} * {NUM_DAY_COV} / {NUM_DAY_YEAR}), 2 ) {SA_DIS_AFT}0 {SR_DIS_AFT}0 {RE_PREM_DIS_MA_AFT}({PER_DIS_MUR} / 100) * {RE_PREM_ACC_AFT} {RE_PREM_DIS_GV_AFT}({PER_DIS_VOL} / 100) * ((1 - {PER_DIS_MUR}) * {RE_PREM_ACC_AFT}) + {RE_PREM_LOAD_AFT} {SUM_DISC_AFT}{RE_PREM_DIS_MA_AFT} + {RE_PREM_DIS_GV_AFT}
- คำนวณ SA / SR / RI Prem.(Increased) ACCIDENT Parameterคำนวณ {SA_INC_ACC}{SA_ACC_AFT} - {SA_ACC_BEF}{SR_INC_ACC}{SR_ACC_AFT} - {SR_ACC_BEF}{RE_PREM_INC_ACC }{RE_PREM_ACC_AFT} - {RE_PREM_ACC_BEF}
- คำนวณ SA / SR / RI Prem.(Increased) MURDER Parameterคำนวณ {SA_INC_MUR}{SA_MUR_AFT} - {SA_MUR_BEF}{SR_INC_MUR}{SR_MUR_AFT} - {SR_MUR_BEF}{RE_PREM_INC_MUR }0
- คำนวณ SA / SR / RI Prem.(Increased) LOADINGS Parameterคำนวณ {SA_INC_LOAD}{SA_LOAD_AFT} - {SA_LOAD_BEF}{SR_INC_LOAD}{SR_LOAD_AFT} - {SR_LOAD_BEF}{RE_PREM_INC_LOAD }{RE_PREM_LOAD_AFT} - {RE_PREM_LOAD_BEF}
- คำนวณ SA / SR / RI Prem.(Increased) DISCOUNT Parameterคำนวณ {SA_INC_DIS}0{SR_INC_DIS}0{RE_PREM_INC_DIS }{SUM_DISC_AFT} - {SUM_DISC_BEF}
- คำนวณ SA / SR / RI Prem.(Decreased) ACCIDENT Parameterคำนวณ {SA_DEC_ACC}{SA_ACC_BEF} - {SA_ACC_AFT}{SR_DEC_ACC}{SR_ACC_BEF} - {SR_ACC_AFT}{RE_PREM_DEC_ACC}{RE_PREM_ACC_BEF} - {RE_PREM_ACC_AFT}
- คำนวณ SA / SR / RI Prem.(Decreased) MURDER Parameterคำนวณ {SA_DEC_MUR}{SA_MUR_BEF} - {SA_MUR_AFT}{SR_DEC_MUR}{SR_MUR_BEF} - {SR_MUR_AFT}{RE_PREM_DEC_MUR}0
- คำนวณ SA / SR / RI Prem.(Decreased) LOADINGS Parameterคำนวณ {SA_DEC_LOAD}{SA_LOAD_BEF} - {SA_LOAD_AFT}{SR_DEC_LOAD}{SR_LOAD_BEF} - {SR_LOAD_AFT}{RE_PREM_DEC_LOAD}{RE_PREM_LOAD_BEF} - {RE_PREM_LOAD_AFT}
- คำนวณ SA / SR / RI Prem.(Decreased) DISCOUNT Parameterคำนวณ {SA_DEC_DIS}0{SR_DEC_DIS}0{RE_PREM_DEC_DIS}{SUM_DISC_BEF} - {SUM_DISC_AFT}
- คำนวณ Commission - Increased Parameterคำนวณ {RE_COM_INC}Round(({RE_PREM_INC_ACC } + {RE_PREM_INC_LOAD } - {RE_PREM_INC_DIS }) * {RI_COM_RATE}), 2 )
- คำนวณ Commission - Decreased Parameterคำนวณ {RE_COM_DEC}Round(({RE_PREM_DEC_ACC } + {RE_PREM_DEC_LOAD} - {RE_PREM_DEC_DIS}) * {RI_COM_RATE}), 2 )


===== PAGE 1291420025 | Function Support > cancle > 6. การคำนวณ RI Claim (ACT) =====
DAI_Grp_Daiichi_Coins
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ดำเนินการต่อ
2. คัดเลือกกรมธรรม์
1. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_est_death_claim, tx_stg_est_death_claim, tx_stg_est_health_claim โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_est_health_claim.approved_dateดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death" {PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_health_claimparameterเงื่อนไขtx_stg_act_health_claim{POLICY_NO} policy_no{RE_CODE_FULL} reinsure_no{COV_FROM} effective_date{POLICY_YEAR} policy_year{CERT_NO} certific_cust_no{ATT_AGE} attn_age{SEX} sex{ACC_DATE} accident_date{APR_DATE} approve_date{CLAIM_TYPE} claim_type{CLAIM_IPD}ถ้า {CLAIM_TYPE} เท่ากับ IPDclaim_amount{CLAIM_OPD}ถ้า {CLAIM_TYPE} เท่ากับ OPDclaim_amount{CLAIM_DENTAL}ถ้า {CLAIM_TYPE} เท่ากับ Dentalclaim_amount{CLAIM_MED_ACC}ถ้า {CLAIM_TYPE} เท่ากับ MedAccidentclaim_amount{PAY_DATE} pay_date{CLAIM_CAUSE} claim_cause{INFROM_NO} notify_no{CLASS_NO} class_noนำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_est_health_claim.approved_date
- tx_stg_est_death_claim.approve_date
- tx_stg_est_tpd_claim.approved_date
- tx_stg_est_health_claim.approved_date
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death" {PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_health_claimparameterเงื่อนไขtx_stg_act_health_claim{POLICY_NO} policy_no{RE_CODE_FULL} reinsure_no{COV_FROM} effective_date{POLICY_YEAR} policy_year{CERT_NO} certific_cust_no{ATT_AGE} attn_age{SEX} sex{ACC_DATE} accident_date{APR_DATE} approve_date{CLAIM_TYPE} claim_type{CLAIM_IPD}ถ้า {CLAIM_TYPE} เท่ากับ IPDclaim_amount{CLAIM_OPD}ถ้า {CLAIM_TYPE} เท่ากับ OPDclaim_amount{CLAIM_DENTAL}ถ้า {CLAIM_TYPE} เท่ากับ Dentalclaim_amount{CLAIM_MED_ACC}ถ้า {CLAIM_TYPE} เท่ากับ MedAccidentclaim_amount{PAY_DATE} pay_date{CLAIM_CAUSE} claim_cause{INFROM_NO} notify_no{CLASS_NO} class_no
- tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death" {PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_act_health_claimparameterเงื่อนไขtx_stg_act_health_claim{POLICY_NO} policy_no{RE_CODE_FULL} reinsure_no{COV_FROM} effective_date{POLICY_YEAR} policy_year{CERT_NO} certific_cust_no{ATT_AGE} attn_age{SEX} sex{ACC_DATE} accident_date{APR_DATE} approve_date{CLAIM_TYPE} claim_type{CLAIM_IPD}ถ้า {CLAIM_TYPE} เท่ากับ IPDclaim_amount{CLAIM_OPD}ถ้า {CLAIM_TYPE} เท่ากับ OPDclaim_amount{CLAIM_DENTAL}ถ้า {CLAIM_TYPE} เท่ากับ Dentalclaim_amount{CLAIM_MED_ACC}ถ้า {CLAIM_TYPE} เท่ากับ MedAccidentclaim_amount{PAY_DATE} pay_date{CLAIM_CAUSE} claim_cause{INFROM_NO} notify_no{CLASS_NO} class_no
- นำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- ตรวจสอบ {RI_POL_STATUS} ที่ได้ ต้องไม่เท่ากับ Cancelกรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อกรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
- กรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อ
- กรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
2. ตรวจสอบค่า Percentage Reinsurance
- ตรวจสอบ Percentage Reinsurance ของแต่ละรายการเคลม (ตามระดับ Layer ของ Sum Assured ของสมาชิก)Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"นำ {COV_FROM} ของแต่ละกรมธรรม์ มาตรวจสอบว่าตรงกับรายการ {CONDITION_ID} ใด ด้วยการนำ {COV_FROM} เทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to{COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆFix ค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมทุกรายการparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re
- Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"
- นำ {COV_FROM} ของแต่ละกรมธรรม์ มาตรวจสอบว่าตรงกับรายการ {CONDITION_ID} ใด ด้วยการนำ {COV_FROM} เทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to{COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆ
- {COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆ
- Fix ค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมทุกรายการparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re
3. คำนวณ RI Claim แยกตามความคุ้มครอง
- ถ้าข้อมูลมาจาก tx_stg_est_death_claim{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ LifeRound({L1_PER} / 100) * {CLAIM_LIFE}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_LIFE}เท่ากับ Accident DeathRound({L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_ACC_DEATH}
- {CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ LifeRound({L1_PER} / 100) * {CLAIM_LIFE}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_LIFE}เท่ากับ Accident DeathRound({L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_ACC_DEATH}
- ถ้าข้อมูลมาจาก tx_stg_est_tpd_claim{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ TPDRound({L1_PER} / 100) * {CLAIM_TPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_TPD}เท่ากับ DismembermentRound({L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DISMEM}
- {CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ TPDRound({L1_PER} / 100) * {CLAIM_TPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_TPD}เท่ากับ DismembermentRound({L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DISMEM}
- ถ้าข้อมูลมาจาก tx_stg_est_tpd_claim{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ IPDRound({L1_PER} / 100) * {CLAIM_IPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_IPD}เท่ากับ OPDRound({L1_PER} / 100) * {CLAIM_OPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_OPD}เท่ากับ DentalRound({L1_PER} / 100) * {CLAIM_DENTAL}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DENTAL}เท่ากับ MedAccidentRound({L1_PER} / 100) * {CLAIM_MED_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_MED_ACC}
- {CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ IPDRound({L1_PER} / 100) * {CLAIM_IPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_IPD}เท่ากับ OPDRound({L1_PER} / 100) * {CLAIM_OPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_OPD}เท่ากับ DentalRound({L1_PER} / 100) * {CLAIM_DENTAL}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DENTAL}เท่ากับ MedAccidentRound({L1_PER} / 100) * {CLAIM_MED_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_MED_ACC}
GIB_Grp_Direct_EB
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
2. คัดเลือกกรมธรรม์
1. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_est_death_claim, tx_stg_est_death_claim, tx_stg_est_health_claim โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_est_health_claim.approved_datetx_stg_act_investigation_expense.reinsured_noดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Accident Death และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Dismemberment และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_statusนำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_est_health_claim.approved_datetx_stg_act_investigation_expense.reinsured_no
- tx_stg_est_death_claim.approve_date
- tx_stg_est_tpd_claim.approved_date
- tx_stg_est_health_claim.approved_date
- tx_stg_act_investigation_expense.reinsured_no
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Accident Death และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Dismemberment และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_status
- tx_stg_est_death_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Accident Death และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_est_tpd_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Dismemberment และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_status
- นำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- ตรวจสอบ {RI_POL_STATUS} ที่ได้ ต้องไม่เท่ากับ Cancelกรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อกรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
- กรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อ
- กรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
2. ตรวจสอบค่า Percentage Reinsurance
- ตรวจสอบ Percentage Reinsurance ของแต่ละรายการเคลม (ตามระดับ Layer ของ Sum Assured ของสมาชิก)Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"นำ {COV_FROM} ของแต่ละกรมธรรม์ มาตรวจสอบว่าตรงกับรายการ {CONDITION_ID} ใด ด้วยการนำ {COV_FROM} เทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to{COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆจากนั้นนำทุนของรายการเคลม ไปตรวจสอบว่าต้องใช้ข้อมูลใน Layer ใดถ้าข้อมูลมาจาก tx_stg_est_death_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ Life{LIFE_INS}เท่ากับ Accident Death{ACC_INS}ถ้าข้อมูลมาจาก tx_stg_est_tpd_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ TPD{TPD_INS}เท่ากับ Dismemberment{DISMEM_INS}ถ้าข้อมูลมาจาก tx_stg_act_investigation_expenseให้ดูว่าตรงกับรายการเคลมใน Table ไหน จากนั้นใช้ค่าทุนเดียวกันกับ Table Calimนำค่าทุนที่ได้ ไปตรวจสอบ Layer โดยการเปรียบเทียบกับ {XX_XXXX_MIN} และ {XX_XXXX_MAX}ถ้าตรงกับช่วงของ L1 ให้เก็บค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นถ้าตรงกับช่วงของ L2 ให้เก็บค่า {L2_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นถ้าตรงกับช่วงของ L3 ให้เก็บค่า {L3_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"
- นำ {COV_FROM} ของแต่ละกรมธรรม์ มาตรวจสอบว่าตรงกับรายการ {CONDITION_ID} ใด ด้วยการนำ {COV_FROM} เทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to{COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆ
- {COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆ
- จากนั้นนำทุนของรายการเคลม ไปตรวจสอบว่าต้องใช้ข้อมูลใน Layer ใดถ้าข้อมูลมาจาก tx_stg_est_death_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ Life{LIFE_INS}เท่ากับ Accident Death{ACC_INS}ถ้าข้อมูลมาจาก tx_stg_est_tpd_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ TPD{TPD_INS}เท่ากับ Dismemberment{DISMEM_INS}ถ้าข้อมูลมาจาก tx_stg_act_investigation_expenseให้ดูว่าตรงกับรายการเคลมใน Table ไหน จากนั้นใช้ค่าทุนเดียวกันกับ Table Calim
- ถ้าข้อมูลมาจาก tx_stg_est_death_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ Life{LIFE_INS}เท่ากับ Accident Death{ACC_INS}
- ถ้าข้อมูลมาจาก tx_stg_est_tpd_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ TPD{TPD_INS}เท่ากับ Dismemberment{DISMEM_INS}
- ถ้าข้อมูลมาจาก tx_stg_act_investigation_expenseให้ดูว่าตรงกับรายการเคลมใน Table ไหน จากนั้นใช้ค่าทุนเดียวกันกับ Table Calim
- ให้ดูว่าตรงกับรายการเคลมใน Table ไหน จากนั้นใช้ค่าทุนเดียวกันกับ Table Calim
- นำค่าทุนที่ได้ ไปตรวจสอบ Layer โดยการเปรียบเทียบกับ {XX_XXXX_MIN} และ {XX_XXXX_MAX}ถ้าตรงกับช่วงของ L1 ให้เก็บค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นถ้าตรงกับช่วงของ L2 ให้เก็บค่า {L2_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นถ้าตรงกับช่วงของ L3 ให้เก็บค่า {L3_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- ถ้าตรงกับช่วงของ L1 ให้เก็บค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้น
- ถ้าตรงกับช่วงของ L2 ให้เก็บค่า {L2_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้น
- ถ้าตรงกับช่วงของ L3 ให้เก็บค่า {L3_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้น
3. คำนวณ RI Claim แยกตามความคุ้มครอง
- ถ้าข้อมูลมาจาก tx_stg_est_death_claimแทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุน{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ LifeRound({LX_PER} / 100) * {CLAIM_LIFE}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_LIFE}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_LIFE}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_LIFE}เท่ากับ Accident DeathRound({LX_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_ACC_DEATH}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_ACC_DEATH}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_ACC_DEATH}
- แทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุน{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ LifeRound({LX_PER} / 100) * {CLAIM_LIFE}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_LIFE}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_LIFE}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_LIFE}เท่ากับ Accident DeathRound({LX_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_ACC_DEATH}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_ACC_DEATH}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_ACC_DEATH}
- ถ้าข้อมูลมาจาก tx_stg_est_tpd_claimแทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุน{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ DismembermentRound({LX_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DISMEM}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_DISMEM}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_DISMEM}
- แทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุน{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ DismembermentRound({LX_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DISMEM}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_DISMEM}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_DISMEM}
- ถ้าข้อมูลมาจาก tx_stg_act_investigation_expenseแทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุนคำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBRound({LX_PER} / 100) * {EXPEN_AMOUNT}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_INVEST}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_INVEST}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_INVEST}
- แทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุนคำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBRound({LX_PER} / 100) * {EXPEN_AMOUNT}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_INVEST}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_INVEST}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_INVEST}
4. คำนวณยอดผลรวมในระดับ Policy
| Parameter | คำนวณ |
| {RI_CLAIM_LIFE} | {L1_RI_CLAIM_LIFE} + {L2_RI_CLAIM_LIFE} + {L3_RI_CLAIM_LIFE} |
| {RI_CLAIM_ACC_DEATH} | {L1_RI_CLAIM_ACC_DEATH} + {L2_RI_CLAIM_ACC_DEATH} + {L3_RI_CLAIM_ACC_DEATH} |
| {RI_CLAIM_DISMEM} | {L1_RI_CLAIM_DISMEM} + {L2_RI_CLAIM_DISMEM} + {L3_RI_CLAIM_DISMEM} |
| {RI_CLAIM_INVEST} | {L1_RI_CLAIM_INVEST} + {L2_RI_CLAIM_INVEST} + {L3_RI_CLAIM_INVEST} |
THREL_Grp_PA
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "THREL_Grp_PA" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "THREL_Grp_PA" ให้ดำเนินการต่อ
2. คัดเลือกกรมธรรม์
1. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_est_death_claim, tx_stg_est_death_claim โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_act_investigation_expense.reinsured_noดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}เลือกเฉพาะรายการที่ {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_statusนำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_act_investigation_expense.reinsured_no
- tx_stg_est_death_claim.approve_date
- tx_stg_est_tpd_claim.approved_date
- tx_stg_act_investigation_expense.reinsured_no
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}เลือกเฉพาะรายการที่ {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_status
- tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}เลือกเฉพาะรายการที่ {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_status
- นำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- ตรวจสอบ {RI_POL_STATUS} ที่ได้ ต้องไม่เท่ากับ Cancelกรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อกรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
- กรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อ
- กรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดย
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า Minimum Sum Assuredcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- นำ {POLICY_NO} ที่ได้จากรายการเคลมทึนของรายการเคลมต้อง มากกว่าเท่ากับ {MIN_SUM_ASU} โดยถ้า {CLAIM_TYPE} = Accident Death ให้ใช้ค่า {ACC_INS}ถ้า {CLAIM_TYPE} = TPD ให้ใช้ค่า {TPD_INS}ถ้า {CLAIM_TYPE} = Dismenberment ให้ใช้ค่า {DISMEM_INS}และ {AGE} น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ
- ทึนของรายการเคลมต้อง มากกว่าเท่ากับ {MIN_SUM_ASU} โดยถ้า {CLAIM_TYPE} = Accident Death ให้ใช้ค่า {ACC_INS}ถ้า {CLAIM_TYPE} = TPD ให้ใช้ค่า {TPD_INS}ถ้า {CLAIM_TYPE} = Dismenberment ให้ใช้ค่า {DISMEM_INS}
- ถ้า {CLAIM_TYPE} = Accident Death ให้ใช้ค่า {ACC_INS}
- ถ้า {CLAIM_TYPE} = TPD ให้ใช้ค่า {TPD_INS}
- ถ้า {CLAIM_TYPE} = Dismenberment ให้ใช้ค่า {DISMEM_INS}
- และ {AGE} น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ
- กรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ
- ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อ
- ถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ
- ดึงข้อมูลจาก cf_rig_treaty_cond_dt ที่ {CONDITION_ID} ตามที่ได้มา parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_INSU_MAX} - {L1_INSU_MAX}ตรวจสอบ {CLAIM_ACC} เพื่อแบ่ง Layer (Accident Death)parameterเงื่อนไขการแบ่งคำนวณ{SR_ACC_DEATH}ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0 ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}{CLAIM_ACC} - {L1_INSU_MAX} * ({L2_PER} / 100)ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_ACC} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]ตรวจสอบ {CLAIM_ACC} เพื่อแบ่ง Layer (Dismemberment)parameterเงื่อนไขการแบ่งคำนวณ{SR_DISMEM}ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX} 0ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX} {CLAIM_ACC} - {L1_L2_MID} * ({L2_PER} / 100)ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_ACC} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]ตรวจสอบ {CLAIM_TPD} เพื่อแบ่ง Layer (TPD)parameterเงื่อนไขการแบ่งคำนวณ{SR_TPD}ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}{CLAIM_TPD} - {L1_L2_MID} * ({L2_PER} / 100)ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_TPD} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]
- ตรวจสอบ {CLAIM_ACC} เพื่อแบ่ง Layer (Accident Death)parameterเงื่อนไขการแบ่งคำนวณ{SR_ACC_DEATH}ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0 ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}{CLAIM_ACC} - {L1_INSU_MAX} * ({L2_PER} / 100)ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_ACC} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]
- ตรวจสอบ {CLAIM_ACC} เพื่อแบ่ง Layer (Dismemberment)parameterเงื่อนไขการแบ่งคำนวณ{SR_DISMEM}ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX} 0ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX} {CLAIM_ACC} - {L1_L2_MID} * ({L2_PER} / 100)ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_ACC} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]
- ตรวจสอบ {CLAIM_TPD} เพื่อแบ่ง Layer (TPD)parameterเงื่อนไขการแบ่งคำนวณ{SR_TPD}ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}{CLAIM_TPD} - {L1_L2_MID} * ({L2_PER} / 100)ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_TPD} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]
2. คำนวณ RI Claim
- คำนวณ Reinsurer's Share Claimparameterคำนวณ{RE_CLAIM_ACC_DEATH}{SR_ACC_DEATH} * ({CLAIM_ACC} / {ACC_INS}){RE_CLAIM_DISMEM}{SR_DISMEM} * ({CLAIM_ACC} / {DISMEM_INS}){RE_CLAIM_TPD}{SR_TPD} * ({CLAIM_ACC} / {TPD_INS})
- คำนวณ Reinsurer's Share Investigation Expenseparameterคำนวณ{RE_INV_ACC_DEATH}{SR_ACC_DEATH} * ({EXPEN_AMOUNT} / {ACC_INS}){RE_INV_DISMEM}{SR_DISMEM} * ({EXPEN_AMOUNT} / {DISMEM_INS}){RE_INV_TPD}{SR_TPD} * ({EXPEN_AMOUNT} / {TPD_INS})


===== PAGE 1308721159 | Function Support > cancle > 6. การคำนวณ RI Claim (ACT) > PS-07-5 DAI_Grp_Daiichi_Coins =====
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ดำเนินการต่อ
2. คัดเลือกกรมธรรม์
1. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_est_death_claim, tx_stg_est_death_claim, tx_stg_est_health_claim โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_est_health_claim.approved_dateดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death" {PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_health_claimparameterเงื่อนไขtx_stg_act_health_claim{POLICY_NO} policy_no{RE_CODE_FULL} reinsure_no{COV_FROM} effective_date{POLICY_YEAR} policy_year{CERT_NO} certific_cust_no{ATT_AGE} attn_age{SEX} sex{ACC_DATE} accident_date{APR_DATE} approve_date{CLAIM_TYPE} claim_type{CLAIM_IPD}ถ้า {CLAIM_TYPE} เท่ากับ IPDclaim_amount{CLAIM_OPD}ถ้า {CLAIM_TYPE} เท่ากับ OPDclaim_amount{CLAIM_DENTAL}ถ้า {CLAIM_TYPE} เท่ากับ Dentalclaim_amount{CLAIM_MED_ACC}ถ้า {CLAIM_TYPE} เท่ากับ MedAccidentclaim_amount{PAY_DATE} pay_date{CLAIM_CAUSE} claim_cause{INFROM_NO} notify_no{CLASS_NO} class_noนำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_est_health_claim.approved_date
- tx_stg_est_death_claim.approve_date
- tx_stg_est_tpd_claim.approved_date
- tx_stg_est_health_claim.approved_date
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death" {PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_health_claimparameterเงื่อนไขtx_stg_act_health_claim{POLICY_NO} policy_no{RE_CODE_FULL} reinsure_no{COV_FROM} effective_date{POLICY_YEAR} policy_year{CERT_NO} certific_cust_no{ATT_AGE} attn_age{SEX} sex{ACC_DATE} accident_date{APR_DATE} approve_date{CLAIM_TYPE} claim_type{CLAIM_IPD}ถ้า {CLAIM_TYPE} เท่ากับ IPDclaim_amount{CLAIM_OPD}ถ้า {CLAIM_TYPE} เท่ากับ OPDclaim_amount{CLAIM_DENTAL}ถ้า {CLAIM_TYPE} เท่ากับ Dentalclaim_amount{CLAIM_MED_ACC}ถ้า {CLAIM_TYPE} เท่ากับ MedAccidentclaim_amount{PAY_DATE} pay_date{CLAIM_CAUSE} claim_cause{INFROM_NO} notify_no{CLASS_NO} class_no
- tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death" {PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_act_health_claimparameterเงื่อนไขtx_stg_act_health_claim{POLICY_NO} policy_no{RE_CODE_FULL} reinsure_no{COV_FROM} effective_date{POLICY_YEAR} policy_year{CERT_NO} certific_cust_no{ATT_AGE} attn_age{SEX} sex{ACC_DATE} accident_date{APR_DATE} approve_date{CLAIM_TYPE} claim_type{CLAIM_IPD}ถ้า {CLAIM_TYPE} เท่ากับ IPDclaim_amount{CLAIM_OPD}ถ้า {CLAIM_TYPE} เท่ากับ OPDclaim_amount{CLAIM_DENTAL}ถ้า {CLAIM_TYPE} เท่ากับ Dentalclaim_amount{CLAIM_MED_ACC}ถ้า {CLAIM_TYPE} เท่ากับ MedAccidentclaim_amount{PAY_DATE} pay_date{CLAIM_CAUSE} claim_cause{INFROM_NO} notify_no{CLASS_NO} class_no
- นำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- ตรวจสอบ {RI_POL_STATUS} ที่ได้ ต้องไม่เท่ากับ Cancelกรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อกรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
- กรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อ
- กรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
2. ตรวจสอบค่า Percentage Reinsurance
- ตรวจสอบ Percentage Reinsurance ของแต่ละรายการเคลม (ตามระดับ Layer ของ Sum Assured ของสมาชิก)Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"นำ {COV_FROM} ของแต่ละกรมธรรม์ มาตรวจสอบว่าตรงกับรายการ {CONDITION_ID} ใด ด้วยการนำ {COV_FROM} เทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to{COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆFix ค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมทุกรายการparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re
- Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"
- นำ {COV_FROM} ของแต่ละกรมธรรม์ มาตรวจสอบว่าตรงกับรายการ {CONDITION_ID} ใด ด้วยการนำ {COV_FROM} เทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to{COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆ
- {COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆ
- Fix ค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมทุกรายการparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re
3. คำนวณ RI Claim แยกตามความคุ้มครอง
- ถ้าข้อมูลมาจาก tx_stg_est_death_claim{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ LifeRound({L1_PER} / 100) * {CLAIM_LIFE}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_LIFE}เท่ากับ Accident DeathRound({L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_ACC_DEATH}
- {CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ LifeRound({L1_PER} / 100) * {CLAIM_LIFE}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_LIFE}เท่ากับ Accident DeathRound({L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_ACC_DEATH}
- ถ้าข้อมูลมาจาก tx_stg_est_tpd_claim{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ TPDRound({L1_PER} / 100) * {CLAIM_TPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_TPD}เท่ากับ DismembermentRound({L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DISMEM}
- {CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ TPDRound({L1_PER} / 100) * {CLAIM_TPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_TPD}เท่ากับ DismembermentRound({L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DISMEM}
- ถ้าข้อมูลมาจาก tx_stg_est_tpd_claim{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ IPDRound({L1_PER} / 100) * {CLAIM_IPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_IPD}เท่ากับ OPDRound({L1_PER} / 100) * {CLAIM_OPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_OPD}เท่ากับ DentalRound({L1_PER} / 100) * {CLAIM_DENTAL}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DENTAL}เท่ากับ MedAccidentRound({L1_PER} / 100) * {CLAIM_MED_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_MED_ACC}
- {CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ IPDRound({L1_PER} / 100) * {CLAIM_IPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_IPD}เท่ากับ OPDRound({L1_PER} / 100) * {CLAIM_OPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_OPD}เท่ากับ DentalRound({L1_PER} / 100) * {CLAIM_DENTAL}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DENTAL}เท่ากับ MedAccidentRound({L1_PER} / 100) * {CLAIM_MED_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_MED_ACC}


===== PAGE 1291716239 | Function Support > cancle > 6. การคำนวณ RI Claim (ACT) > PS-07-5 GIB_Grp_Direct_EB =====
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
2. คัดเลือกกรมธรรม์
1. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_est_death_claim, tx_stg_est_death_claim, tx_stg_est_health_claim โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_est_health_claim.approved_datetx_stg_act_investigation_expense.reinsured_noดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Accident Death และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Dismemberment และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_statusนำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_est_health_claim.approved_datetx_stg_act_investigation_expense.reinsured_no
- tx_stg_est_death_claim.approve_date
- tx_stg_est_tpd_claim.approved_date
- tx_stg_est_health_claim.approved_date
- tx_stg_act_investigation_expense.reinsured_no
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Accident Death และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Dismemberment และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_status
- tx_stg_est_death_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Accident Death และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_est_tpd_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Dismemberment และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_status
- นำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- ตรวจสอบ {RI_POL_STATUS} ที่ได้ ต้องไม่เท่ากับ Cancelกรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อกรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
- กรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อ
- กรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
2. ตรวจสอบค่า Percentage Reinsurance
- ตรวจสอบ Percentage Reinsurance ของแต่ละรายการเคลม (ตามระดับ Layer ของ Sum Assured ของสมาชิก)Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"นำ {COV_FROM} ของแต่ละกรมธรรม์ มาตรวจสอบว่าตรงกับรายการ {CONDITION_ID} ใด ด้วยการนำ {COV_FROM} เทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to{COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆจากนั้นนำทุนของรายการเคลม ไปตรวจสอบว่าต้องใช้ข้อมูลใน Layer ใดถ้าข้อมูลมาจาก tx_stg_est_death_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ Life{LIFE_INS}เท่ากับ Accident Death{ACC_INS}ถ้าข้อมูลมาจาก tx_stg_est_tpd_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ TPD{TPD_INS}เท่ากับ Dismemberment{DISMEM_INS}ถ้าข้อมูลมาจาก tx_stg_act_investigation_expenseให้ดูว่าตรงกับรายการเคลมใน Table ไหน จากนั้นใช้ค่าทุนเดียวกันกับ Table Calimนำค่าทุนที่ได้ ไปตรวจสอบ Layer โดยการเปรียบเทียบกับ {XX_XXXX_MIN} และ {XX_XXXX_MAX}ถ้าตรงกับช่วงของ L1 ให้เก็บค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นถ้าตรงกับช่วงของ L2 ให้เก็บค่า {L2_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นถ้าตรงกับช่วงของ L3 ให้เก็บค่า {L3_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"
- นำ {COV_FROM} ของแต่ละกรมธรรม์ มาตรวจสอบว่าตรงกับรายการ {CONDITION_ID} ใด ด้วยการนำ {COV_FROM} เทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to{COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆ
- {COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆ
- จากนั้นนำทุนของรายการเคลม ไปตรวจสอบว่าต้องใช้ข้อมูลใน Layer ใดถ้าข้อมูลมาจาก tx_stg_est_death_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ Life{LIFE_INS}เท่ากับ Accident Death{ACC_INS}ถ้าข้อมูลมาจาก tx_stg_est_tpd_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ TPD{TPD_INS}เท่ากับ Dismemberment{DISMEM_INS}ถ้าข้อมูลมาจาก tx_stg_act_investigation_expenseให้ดูว่าตรงกับรายการเคลมใน Table ไหน จากนั้นใช้ค่าทุนเดียวกันกับ Table Calim
- ถ้าข้อมูลมาจาก tx_stg_est_death_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ Life{LIFE_INS}เท่ากับ Accident Death{ACC_INS}
- ถ้าข้อมูลมาจาก tx_stg_est_tpd_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ TPD{TPD_INS}เท่ากับ Dismemberment{DISMEM_INS}
- ถ้าข้อมูลมาจาก tx_stg_act_investigation_expenseให้ดูว่าตรงกับรายการเคลมใน Table ไหน จากนั้นใช้ค่าทุนเดียวกันกับ Table Calim
- ให้ดูว่าตรงกับรายการเคลมใน Table ไหน จากนั้นใช้ค่าทุนเดียวกันกับ Table Calim
- นำค่าทุนที่ได้ ไปตรวจสอบ Layer โดยการเปรียบเทียบกับ {XX_XXXX_MIN} และ {XX_XXXX_MAX}ถ้าตรงกับช่วงของ L1 ให้เก็บค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นถ้าตรงกับช่วงของ L2 ให้เก็บค่า {L2_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นถ้าตรงกับช่วงของ L3 ให้เก็บค่า {L3_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- ถ้าตรงกับช่วงของ L1 ให้เก็บค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้น
- ถ้าตรงกับช่วงของ L2 ให้เก็บค่า {L2_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้น
- ถ้าตรงกับช่วงของ L3 ให้เก็บค่า {L3_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้น
3. คำนวณ RI Claim แยกตามความคุ้มครอง
- ถ้าข้อมูลมาจาก tx_stg_est_death_claimแทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุน{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ LifeRound({LX_PER} / 100) * {CLAIM_LIFE}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_LIFE}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_LIFE}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_LIFE}เท่ากับ Accident DeathRound({LX_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_ACC_DEATH}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_ACC_DEATH}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_ACC_DEATH}
- แทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุน{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ LifeRound({LX_PER} / 100) * {CLAIM_LIFE}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_LIFE}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_LIFE}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_LIFE}เท่ากับ Accident DeathRound({LX_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_ACC_DEATH}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_ACC_DEATH}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_ACC_DEATH}
- ถ้าข้อมูลมาจาก tx_stg_est_tpd_claimแทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุน{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ DismembermentRound({LX_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DISMEM}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_DISMEM}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_DISMEM}
- แทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุน{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ DismembermentRound({LX_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DISMEM}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_DISMEM}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_DISMEM}
- ถ้าข้อมูลมาจาก tx_stg_act_investigation_expenseแทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุนคำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBRound({LX_PER} / 100) * {EXPEN_AMOUNT}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_INVEST}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_INVEST}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_INVEST}
- แทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุนคำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBRound({LX_PER} / 100) * {EXPEN_AMOUNT}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_INVEST}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_INVEST}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_INVEST}
4. คำนวณยอดผลรวมในระดับ Policy
| Parameter | คำนวณ |
| {RI_CLAIM_LIFE} | {L1_RI_CLAIM_LIFE} + {L2_RI_CLAIM_LIFE} + {L3_RI_CLAIM_LIFE} |
| {RI_CLAIM_ACC_DEATH} | {L1_RI_CLAIM_ACC_DEATH} + {L2_RI_CLAIM_ACC_DEATH} + {L3_RI_CLAIM_ACC_DEATH} |
| {RI_CLAIM_DISMEM} | {L1_RI_CLAIM_DISMEM} + {L2_RI_CLAIM_DISMEM} + {L3_RI_CLAIM_DISMEM} |
| {RI_CLAIM_INVEST} | {L1_RI_CLAIM_INVEST} + {L2_RI_CLAIM_INVEST} + {L3_RI_CLAIM_INVEST} |


===== PAGE 1291716229 | Function Support > cancle > 6. การคำนวณ RI Claim (ACT) > PS-07-5 THREL_Grp_PA =====
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "THREL_Grp_PA" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "THREL_Grp_PA" ให้ดำเนินการต่อ
2. คัดเลือกกรมธรรม์
1. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_est_death_claim, tx_stg_est_death_claim โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_act_investigation_expense.reinsured_noดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}เลือกเฉพาะรายการที่ {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_statusนำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_act_investigation_expense.reinsured_no
- tx_stg_est_death_claim.approve_date
- tx_stg_est_tpd_claim.approved_date
- tx_stg_act_investigation_expense.reinsured_no
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}เลือกเฉพาะรายการที่ {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_status
- tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}เลือกเฉพาะรายการที่ {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_status
- นำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- ตรวจสอบ {RI_POL_STATUS} ที่ได้ ต้องไม่เท่ากับ Cancelกรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อกรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
- กรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อ
- กรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดย
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า Minimum Sum Assuredcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- นำ {POLICY_NO} ที่ได้จากรายการเคลมทึนของรายการเคลมต้อง มากกว่าเท่ากับ {MIN_SUM_ASU} โดยถ้า {CLAIM_TYPE} = Accident Death ให้ใช้ค่า {ACC_INS}ถ้า {CLAIM_TYPE} = TPD ให้ใช้ค่า {TPD_INS}ถ้า {CLAIM_TYPE} = Dismenberment ให้ใช้ค่า {DISMEM_INS}และ {AGE} น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ
- ทึนของรายการเคลมต้อง มากกว่าเท่ากับ {MIN_SUM_ASU} โดยถ้า {CLAIM_TYPE} = Accident Death ให้ใช้ค่า {ACC_INS}ถ้า {CLAIM_TYPE} = TPD ให้ใช้ค่า {TPD_INS}ถ้า {CLAIM_TYPE} = Dismenberment ให้ใช้ค่า {DISMEM_INS}
- ถ้า {CLAIM_TYPE} = Accident Death ให้ใช้ค่า {ACC_INS}
- ถ้า {CLAIM_TYPE} = TPD ให้ใช้ค่า {TPD_INS}
- ถ้า {CLAIM_TYPE} = Dismenberment ให้ใช้ค่า {DISMEM_INS}
- และ {AGE} น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ
- กรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ
- ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อ
- ถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ
- ดึงข้อมูลจาก cf_rig_treaty_cond_dt ที่ {CONDITION_ID} ตามที่ได้มา parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_INSU_MAX} - {L1_INSU_MAX}ตรวจสอบ {CLAIM_ACC} เพื่อแบ่ง Layer (Accident Death)parameterเงื่อนไขการแบ่งคำนวณ{SR_ACC_DEATH}ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0 ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}{CLAIM_ACC} - {L1_INSU_MAX} * ({L2_PER} / 100)ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_ACC} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]ตรวจสอบ {CLAIM_ACC} เพื่อแบ่ง Layer (Dismemberment)parameterเงื่อนไขการแบ่งคำนวณ{SR_DISMEM}ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX} 0ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX} {CLAIM_ACC} - {L1_L2_MID} * ({L2_PER} / 100)ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_ACC} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]ตรวจสอบ {CLAIM_TPD} เพื่อแบ่ง Layer (TPD)parameterเงื่อนไขการแบ่งคำนวณ{SR_TPD}ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}{CLAIM_TPD} - {L1_L2_MID} * ({L2_PER} / 100)ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_TPD} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]
- ตรวจสอบ {CLAIM_ACC} เพื่อแบ่ง Layer (Accident Death)parameterเงื่อนไขการแบ่งคำนวณ{SR_ACC_DEATH}ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0 ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}{CLAIM_ACC} - {L1_INSU_MAX} * ({L2_PER} / 100)ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_ACC} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]
- ตรวจสอบ {CLAIM_ACC} เพื่อแบ่ง Layer (Dismemberment)parameterเงื่อนไขการแบ่งคำนวณ{SR_DISMEM}ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX} 0ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX} {CLAIM_ACC} - {L1_L2_MID} * ({L2_PER} / 100)ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_ACC} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]
- ตรวจสอบ {CLAIM_TPD} เพื่อแบ่ง Layer (TPD)parameterเงื่อนไขการแบ่งคำนวณ{SR_TPD}ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}{CLAIM_TPD} - {L1_L2_MID} * ({L2_PER} / 100)ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_TPD} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]
2. คำนวณ RI Claim
- คำนวณ Reinsurer's Share Claimparameterคำนวณ{RE_CLAIM_ACC_DEATH}{SR_ACC_DEATH} * ({CLAIM_ACC} / {ACC_INS}){RE_CLAIM_DISMEM}{SR_DISMEM} * ({CLAIM_ACC} / {DISMEM_INS}){RE_CLAIM_TPD}{SR_TPD} * ({CLAIM_ACC} / {TPD_INS})
- คำนวณ Reinsurer's Share Investigation Expenseparameterคำนวณ{RE_INV_ACC_DEATH}{SR_ACC_DEATH} * ({EXPEN_AMOUNT} / {ACC_INS}){RE_INV_DISMEM}{SR_DISMEM} * ({EXPEN_AMOUNT} / {DISMEM_INS}){RE_INV_TPD}{SR_TPD} * ({EXPEN_AMOUNT} / {TPD_INS})


===== PAGE 1315766398 | Function Support > cancle > 7. การคำนวณ Experience Refund (ACT) =====
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
1. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_act_exp_refund โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_exp_refund.reinsur_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี effective_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_exp_refund.effective_dateดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_exp_refundparametertx_stg_act_exp_refund{POLICY_NO}policy_no{COV_FROM}effective_date{COV_TO}end_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsur_no{PAID_STATUS}paid_status{PER_EXP_REFUND}percent_exp_refund{PER_EXPENSE}percent_expense{PREMIUM_LIFE}premium_life{PREMIUM_ACC}premium_accident{PREMIUM_TPD}premium_tpd{TOT_PREMIUM}total_premium{COV_TYPE}ถ้า {PREMIUM_LIFE} > 0 เก็บค่า Life ถ้า {PREMIUM_ACC} > 0 เก็บค่า Accident {CLAIM}claim{EX_REFUND_PREVY}exp_refund_previous_year{EX_REFUND}exp_refund{PERIOD_BEGIN_DATE}period_begin_date{PERIOD_END_DATE}period_end_datetx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_deathtx_stg_est_all_policy (ต่อรายการ)parametertx_stg_est_all_policy{POLICY_NO}policy_no{POLICY_NO_FULL}reinsur_no{COM_DATE}1) ใช้วันที่และเดือนจาก Commencement Date จาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_exp_refund.reinsur_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_exp_refund.reinsur_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี effective_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_exp_refund.effective_date
- tx_stg_act_exp_refund.effective_date
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_exp_refundparametertx_stg_act_exp_refund{POLICY_NO}policy_no{COV_FROM}effective_date{COV_TO}end_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsur_no{PAID_STATUS}paid_status{PER_EXP_REFUND}percent_exp_refund{PER_EXPENSE}percent_expense{PREMIUM_LIFE}premium_life{PREMIUM_ACC}premium_accident{PREMIUM_TPD}premium_tpd{TOT_PREMIUM}total_premium{COV_TYPE}ถ้า {PREMIUM_LIFE} > 0 เก็บค่า Life ถ้า {PREMIUM_ACC} > 0 เก็บค่า Accident {CLAIM}claim{EX_REFUND_PREVY}exp_refund_previous_year{EX_REFUND}exp_refund{PERIOD_BEGIN_DATE}period_begin_date{PERIOD_END_DATE}period_end_datetx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_deathtx_stg_est_all_policy (ต่อรายการ)parametertx_stg_est_all_policy{POLICY_NO}policy_no{POLICY_NO_FULL}reinsur_no{COM_DATE}1) ใช้วันที่และเดือนจาก Commencement Date จาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- tx_stg_act_exp_refundparametertx_stg_act_exp_refund{POLICY_NO}policy_no{COV_FROM}effective_date{COV_TO}end_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsur_no{PAID_STATUS}paid_status{PER_EXP_REFUND}percent_exp_refund{PER_EXPENSE}percent_expense{PREMIUM_LIFE}premium_life{PREMIUM_ACC}premium_accident{PREMIUM_TPD}premium_tpd{TOT_PREMIUM}total_premium{COV_TYPE}ถ้า {PREMIUM_LIFE} > 0 เก็บค่า Life ถ้า {PREMIUM_ACC} > 0 เก็บค่า Accident {CLAIM}claim{EX_REFUND_PREVY}exp_refund_previous_year{EX_REFUND}exp_refund{PERIOD_BEGIN_DATE}period_begin_date{PERIOD_END_DATE}period_end_date
- tx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death
- tx_stg_est_all_policy (ต่อรายการ)parametertx_stg_est_all_policy{POLICY_NO}policy_no{POLICY_NO_FULL}reinsur_no{COM_DATE}1) ใช้วันที่และเดือนจาก Commencement Date จาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- ตรวจสอบ {RI_POL_STATUS} ที่ได้ ต้องไม่เท่ากับ Lapseกรณีไม่เท่ากับ Lapse จะนำไปประมวลผลต่อกรณีเท่ากับ Lapse จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
- กรณีไม่เท่ากับ Lapse จะนำไปประมวลผลต่อ
- กรณีเท่ากับ Lapse จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
3. ดึงข้อมูลกรมธรรม์ในรอบที่มีการคำนวณ Experience Refund
| parameter |  |
| {POLICY_NO} |  |
| {COV_FROM} | promise_date |
| {COV_TO} | end_date |
| {NET_RE_PREM_LIFE} | {TOT_RI_TL_PREM_LIFE}ดึงค่าจากส่วน reinsurance ค่า TL Premium: Life เลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ที่สิ้นสุดความคุ้มครอง |
| {NET_RE_PREM_ACC} | {TOT_RI_TL_PREM_ACC}ดึงค่าจากส่วน reinsurance ค่า TL Premium: AD&Dเลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ที่สิ้นสุดความคุ้มครอง |
| {RE_COMM_LIFE} | {TOT_RI_COMM_LIFE}ดึงค่าจากส่วน reinsurance ค่า RI Commission: Lifeเลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ที่สิ้นสุดความคุ้มครอง |
| {RE_COMM_ACC} | {TOT_RI_COMM_ACC}ดึงค่าจากส่วน reinsurance ค่า RI Commission: AD&Dเลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ที่สิ้นสุดความคุ้มครอง |
4. คำนวณ Experience Refund
| parameter |  |
| {OER_PAID_LIFE} | {PREMIUM_LIFE} * (1 - ({PER_EXPENSE} / 100) * ({PER_EXP_REFUND} / 100) |
| {OER_PAID_ACC} | {PREMIUM_ACC} * (1 - ({PER_EXPENSE} / 100) * ({PER_EXP_REFUND} / 100) |
| {NET_PREM_COM_LIFE} | {NET_RE_PREM_LIFE} - {RE_COMM_LIFE} |
| {NET_PREM_COM_ACC} | {NET_RE_PREM_ACC} - {RE_COMM_ACC} |
| {RE_EXP_REFUND_LIFE} | ถ้า {OER_PAID_LIFE} ≤ {NET_PREM_COM_LIFE} ให้ใช้ค่า {OER_PAID_LIFE}นอกเหนือจากนั้นให้{NET_PREM_COM_LIFE} / {PREMIUM_LIFE} * {OER_PAID_LIFE} |
| {RE_EXP_REFUND_ACC} | ถ้า {OER_PAID_ACC} ≤ {NET_PREM_COM_ACC} ให้ใช้ค่า {OER_PAID_ACC}นอกเหนือจากนั้นให้{NET_PREM_COM_ACC} / {PREMIUM_ACC} * {OER_PAID_ACC} |


===== PAGE 1295712965 | Function Support > cancle > Batch EST-007 ข้อมูล Unname Policy (Estimate) =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) |  |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) |  |
| 3 | เวลาประมวลผล(Time) |  |
| 4 | ข้อมูลตั้งต้น(Input) |  |
| 5 | ข้อมูลที่ได้จากระบบ(Output) |  |
| 6 | อธิบายรายละเอียด(Description) | ระบบดึงข้อมูลจาก Process ข้อมูล Unname Policy (Estimate)ระบบบันทึกข้อมูลที่ตาราง tx_stg_est_all_policy |


===== PAGE 1312489818 | Function Support > cancle > Batch EST-007 ข้อมูล Unname Policy (Estimate) > Process ข้อมูล Unname Policy (Estimate) =====
(empty page)


===== PAGE 1291715067 | Function Support > cancle > IRI-GRP-099  Claim Dis/TPD (Estimate) =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | นำเข้าธุรกรรม Aproved claim Dismemberment/TPD (Estimate) |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล(Time) | ทุกวันสิ้นเดือน เริ่มเวลา tbc.00 น. โดยตรวจสอบ queue ตาม tbc |
| 4 | ข้อมูลตั้งต้น(Input) | period = รอบเดือนของการดึงข้อมูลtreaty_code = รหัสสัญญา click for lookup... <![CDATA[select description from cf_lookup_catalog where parent_id = 1000100]]> |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | WS_RIG_004 Claim Dis/TPD |
| 6 | อธิบายรายละเอียด(Description) | ดึงข้อมูลจาก WS_RIG_004 Claim Dis/TPD ตามรอบประมวลผลบันทึกข้อมูลลงที่ตาราง Header tx_rig_process_hd ดังนี้ Click here to expand... Field NameValuerig_process_hd_idauto generateprocess_codeRIG_AUTO_04statusSuccess, Errorperiodณ วันที่ batch runri_typeEsum_recordcountcreated_dateTimestampcreated_bySYSTEMupdated_dateTimestampupdated_bySYSTEM บันทึกข้อมูลลงที่ตาราง Detail tx_rig_claim_tpd_dt ดังนี้ Click here to expand... Service Parameter Landing Table No.NameTypeTableFieldCondition1periodvarchartx_rig_claim_tpd_dtperiod 2policy_novarchartx_rig_claim_tpd_dtpolicy_no 3claim_novarchartx_rig_claim_tpd_dtclaim_no 4reinsur_novarchartx_rig_claim_tpd_dtreinsur_no 5certnovarchartx_rig_claim_tpd_dtcertno 6claim_typevarchartx_rig_claim_tpd_dtclaim_type 7effective_datedatetimetx_rig_claim_tpd_dteffective_date 8policy_yearinttx_rig_claim_tpd_dtpolicy_year 9ageinttx_rig_claim_tpd_dtage 10gendervarchartx_rig_claim_tpd_dtgender 11accident_datedatetimetx_rig_claim_tpd_dtaccident_date 12approve_datedatetimetx_rig_claim_tpd_dtapprove_date 13sum_insured_lifeinttx_rig_claim_tpd_dtsum_insured_life 14sum_insured_accinttx_rig_claim_tpd_dtsum_insured_acc 15sum_insured_medinttx_rig_claim_tpd_dtsum_insured_med 16sum_insured_tpdinttx_rig_claim_tpd_dtsum_insured_tpd 17claim_lifeinttx_rig_claim_tpd_dtclaim_life 18claim_accinttx_rig_claim_tpd_dtclaim_acc 19claim_tpdinttx_rig_claim_tpd_dtclaim_tpd 20total_claiminttx_rig_claim_tpd_dttotal_claim 21payment_datedatetimetx_rig_claim_tpd_dtpayment_date 22claim_causevarchartx_rig_claim_tpd_dtclaim_cause 23ri_investigation_expenseinttx_rig_claim_tpd_dtri_investigation_expense |
| 7 | กรณีพบปัญหาการทำงานของ Batch Process | ส่ง e-mail แจ้ง IT Supportemail_code = 'RI_Group_Landing'process_code = 'RIG_AUTO_04' |


===== PAGE 1291715127 | Function Support > cancle > IRI-GRP-099  Claim Dis/TPD (Estimate) > cc1 =====
|  | Service Parameter |  | Landing Table |  |  |
| No. | Name | Type | Table | Field | Condition |
| 1 | period | varchar | tx_rig_claim_tpd_dt | period |  |
| 2 | policy_no | varchar | tx_rig_claim_tpd_dt | policy_no |  |
| 3 | claim_no | varchar | tx_rig_claim_tpd_dt | claim_no |  |
| 4 | reinsur_no | varchar | tx_rig_claim_tpd_dt | reinsur_no |  |
| 5 | certno | varchar | tx_rig_claim_tpd_dt | certno |  |
| 6 | claim_type | varchar | tx_rig_claim_tpd_dt | claim_type |  |
| 7 | effective_date | datetime | tx_rig_claim_tpd_dt | effective_date |  |
| 8 | policy_year | int | tx_rig_claim_tpd_dt | policy_year |  |
| 9 | age | int | tx_rig_claim_tpd_dt | age |  |
| 10 | gender | varchar | tx_rig_claim_tpd_dt | gender |  |
| 11 | accident_date | datetime | tx_rig_claim_tpd_dt | accident_date |  |
| 12 | approve_date | datetime | tx_rig_claim_tpd_dt | approve_date |  |
| 13 | sum_insured_life | int | tx_rig_claim_tpd_dt | sum_insured_life |  |
| 14 | sum_insured_acc | int | tx_rig_claim_tpd_dt | sum_insured_acc |  |
| 15 | sum_insured_med | int | tx_rig_claim_tpd_dt | sum_insured_med |  |
| 16 | sum_insured_tpd | int | tx_rig_claim_tpd_dt | sum_insured_tpd |  |
| 17 | claim_life | int | tx_rig_claim_tpd_dt | claim_life |  |
| 18 | claim_acc | int | tx_rig_claim_tpd_dt | claim_acc |  |
| 19 | claim_tpd | int | tx_rig_claim_tpd_dt | claim_tpd |  |
| 20 | total_claim | int | tx_rig_claim_tpd_dt | total_claim |  |
| 21 | payment_date | datetime | tx_rig_claim_tpd_dt | payment_date |  |
| 22 | claim_cause | varchar | tx_rig_claim_tpd_dt | claim_cause |  |
| 23 | ri_investigation_expense | int | tx_rig_claim_tpd_dt | ri_investigation_expense |  |


===== PAGE 1291716245 | Function Support > cancle > IRI-GRP-099  Claim Health (Actual) =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | นำเข้าธุรกรรม Aproved claim Health (Actual) |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล(Time) | ทุกวันสิ้นเดือน เริ่มเวลา tbc.00 น. โดยตรวจสอบ queue ตาม tbc |
| 4 | ข้อมูลตั้งต้น(Input) | period = รอบเดือนของการดึงข้อมูลtreaty_code = รหัสสัญญา click for lookup... <![CDATA[select description from cf_lookup_catalog where parent_id = 1000100]]> |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | WS_RIG_005 Claim Health |
| 6 | อธิบายรายละเอียด(Description) | ดึงข้อมูลจาก WS_RIG_005 Claim Health ตามรอบประมวลผลบันทึกข้อมูลลงที่ตาราง Header tx_rig_process_hd ดังนี้ Click here to expand... Field NameValuerig_process_hd_idauto generateprocess_codeRIG_AUTO_08statusSuccess, Errorperiodณ วันที่ batch runri_typeAsum_recordcountcreated_dateTimestampcreated_bySYSTEMupdated_dateTimestampupdated_bySYSTEM บันทึกข้อมูลลงที่ตาราง Detail tx_rig_claim_health_dt ดังนี้ Click here to expand... Service Parameter Landing Table No.NameTypeTableFieldCondition1periodvarchartx_rig_claim_health_dtperiod 2policy_novarchartx_rig_claim_health_dtpolicy_no 3claim_novarchartx_rig_claim_health_dtclaim_no 4reinsur_novarchartx_rig_claim_health_dtreinsur_no 5certnovarchartx_rig_claim_health_dtcertno 6claim_typevarchartx_rig_claim_health_dtclaim_type 7effective_datedatetimetx_rig_claim_health_dteffective_date 8policy_yearinttx_rig_claim_health_dtpolicy_year 9ageinttx_rig_claim_health_dtage 10gendervarchartx_rig_claim_health_dtgender 11accident_datedatetimetx_rig_claim_health_dtaccident_date 12approve_datedatetimetx_rig_claim_health_dtapprove_date 13sum_insured_lifeinttx_rig_claim_health_dtsum_insured_life 14sum_insured_accinttx_rig_claim_health_dtinsured_acc 15sum_insured_medinttx_rig_claim_health_dtinsured_med 16sum_insured_tpdinttx_rig_claim_health_dtinsured_tpd 17claim_lifeinttx_rig_claim_health_dtclaim_life 18claim_accinttx_rig_claim_health_dtclaim_acc 19claim_tpdinttx_rig_claim_health_dtclaim_tpd 20total_claiminttx_rig_claim_health_dttotal_claim 21payment_datedatetimetx_rig_claim_health_dtpayment_date 22claim_causevarchartx_rig_claim_health_dtclaim_cause 23ri_investigation_expenseinttx_rig_claim_health_dtri_investigation_expense |
| 7 | กรณีพบปัญหาการทำงานของ Batch Process | ส่ง e-mail แจ้ง IT Supportemail_code = 'RI_Group_Landing'process_code = 'RIG_AUTO_08' |


===== PAGE 1291715081 | Function Support > cancle > IRI-GRP-099  Claim Health (Estimate) =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | นำเข้าธุรกรรม Aproved claim Health (Estimate) |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล(Time) | ทุกวันสิ้นเดือน เริ่มเวลา tbc.00 น. โดยตรวจสอบ queue ตาม tbc |
| 4 | ข้อมูลตั้งต้น(Input) | period = รอบเดือนของการดึงข้อมูลtreaty_code = รหัสสัญญา click for lookup... <![CDATA[select description from cf_lookup_catalog where parent_id = 1000100]]> |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | WS_RIG_005 Claim Health |
| 6 | อธิบายรายละเอียด(Description) | ดึงข้อมูลจาก WS_RIG_005 Claim Health ตามรอบประมวลผลบันทึกข้อมูลลงที่ตาราง Header tx_rig_process_hd ดังนี้ Click here to expand... Field NameValuerig_process_hd_idauto generateprocess_codeRIG_AUTO_05statusSuccess, Errorperiodณ วันที่ batch runri_typeEsum_recordcountcreated_dateTimestampcreated_bySYSTEMupdated_dateTimestampupdated_bySYSTEM บันทึกข้อมูลลงที่ตาราง Detail tx_rig_claim_health_dt ดังนี้ Click here to expand... Service Parameter Landing Table No.NameTypeTableFieldCondition1periodvarchartx_rig_claim_health_dtperiod 2policy_novarchartx_rig_claim_health_dtpolicy_no 3claim_novarchartx_rig_claim_health_dtclaim_no 4reinsur_novarchartx_rig_claim_health_dtreinsur_no 5certnovarchartx_rig_claim_health_dtcertno 6claim_typevarchartx_rig_claim_health_dtclaim_type 7effective_datedatetimetx_rig_claim_health_dteffective_date 8policy_yearinttx_rig_claim_health_dtpolicy_year 9ageinttx_rig_claim_health_dtage 10gendervarchartx_rig_claim_health_dtgender 11accident_datedatetimetx_rig_claim_health_dtaccident_date 12approve_datedatetimetx_rig_claim_health_dtapprove_date 13sum_insured_lifeinttx_rig_claim_health_dtsum_insured_life 14sum_insured_accinttx_rig_claim_health_dtinsured_acc 15sum_insured_medinttx_rig_claim_health_dtinsured_med 16sum_insured_tpdinttx_rig_claim_health_dtinsured_tpd 17claim_lifeinttx_rig_claim_health_dtclaim_life 18claim_accinttx_rig_claim_health_dtclaim_acc 19claim_tpdinttx_rig_claim_health_dtclaim_tpd 20total_claiminttx_rig_claim_health_dttotal_claim 21payment_datedatetimetx_rig_claim_health_dtpayment_date 22claim_causevarchartx_rig_claim_health_dtclaim_cause 23ri_investigation_expenseinttx_rig_claim_health_dtri_investigation_expense |
| 7 | กรณีพบปัญหาการทำงานของ Batch Process | ส่ง e-mail แจ้ง IT Supportemail_code = 'RI_Group_Landing'process_code = 'RIG_AUTO_05' |


===== PAGE 1291715136 | Function Support > cancle > IRI-GRP-099  Claim Health (Estimate) > [ยกเลิก] IRI-GRP-005.1 Mapping Table Detail =====
|  | Service Parameter |  | Landing Table |  |  |
| No. | Name | Type | Table | Field | Condition |
| 1 | period | varchar | tx_rig_claim_health_dt | period |  |
| 2 | policy_no | varchar | tx_rig_claim_health_dt | policy_no |  |
| 3 | claim_no | varchar | tx_rig_claim_health_dt | claim_no |  |
| 4 | reinsur_no | varchar | tx_rig_claim_health_dt | reinsur_no |  |
| 5 | certno | varchar | tx_rig_claim_health_dt | certno |  |
| 6 | claim_type | varchar | tx_rig_claim_health_dt | claim_type |  |
| 7 | effective_date | datetime | tx_rig_claim_health_dt | effective_date |  |
| 8 | policy_year | int | tx_rig_claim_health_dt | policy_year |  |
| 9 | age | int | tx_rig_claim_health_dt | age |  |
| 10 | gender | varchar | tx_rig_claim_health_dt | gender |  |
| 11 | accident_date | datetime | tx_rig_claim_health_dt | accident_date |  |
| 12 | approve_date | datetime | tx_rig_claim_health_dt | approve_date |  |
| 13 | sum_insured_life | int | tx_rig_claim_health_dt | sum_insured_life |  |
| 14 | sum_insured_acc | int | tx_rig_claim_health_dt | insured_acc |  |
| 15 | sum_insured_med | int | tx_rig_claim_health_dt | insured_med |  |
| 16 | sum_insured_tpd | int | tx_rig_claim_health_dt | insured_tpd |  |
| 17 | claim_life | int | tx_rig_claim_health_dt | claim_life |  |
| 18 | claim_acc | int | tx_rig_claim_health_dt | claim_acc |  |
| 19 | claim_tpd | int | tx_rig_claim_health_dt | claim_tpd |  |
| 20 | total_claim | int | tx_rig_claim_health_dt | total_claim |  |
| 21 | payment_date | datetime | tx_rig_claim_health_dt | payment_date |  |
| 22 | claim_cause | varchar | tx_rig_claim_health_dt | claim_cause |  |
| 23 | ri_investigation_expense | int | tx_rig_claim_health_dt | ri_investigation_expense |  |


===== PAGE 1299251786 | Function Support > cancle > Process Actual =====
1. ตรวจสอบ Treaty ใน Table Config
- ตรวจสอบข้อมูลใน cf_rig_treaty โดยมีเงื่อนไขดังนี้cf_rig_treaty.approve = TRUEcf_rig_treaty.status = APeriod ที่ประมวลผล อยู่ในช่วงระหว่าง cf_rig_treaty_general.start_date กับ cf_rig_treaty_general.expire_dateเก็บค่า cf_rig_treaty.cf_rig_treaty_id ใน {TREATY_ID}
- cf_rig_treaty.approve = TRUE
- cf_rig_treaty.status = A
- Period ที่ประมวลผล อยู่ในช่วงระหว่าง cf_rig_treaty_general.start_date กับ cf_rig_treaty_general.expire_date
- เก็บค่า cf_rig_treaty.cf_rig_treaty_id ใน {TREATY_ID}
- สร้างรายการที่ tx_rig_act_hd ดังนี้tx_rig_act_hd Fieldข้อมูลเงื่อนไขตัวอย่างrig_act_hd_id running no.1period รอบ Period ที่ประมวลผล202410data_quarter ปีของ Period ที่ประมวลผล ต่อด้วย QX โดยแปลง X จากการตรวจสอบเดือนการประมวลผล แบ่งออกเป็น 4 เลขดังนี้กรณีเดือนของ Period ที่ประมวลผล (เลขสองหลักท้ายของ period)= 01 หรือ 02 หรือ 03 แปลง X เป็น 1 จะได้ค่า Q1= 04 หรือ 05 หรือ 06 แปลง X เป็น 2 จะได้ค่า Q2= 07 หรือ 08 หรือ 09 แปลง X เป็น 3 จะได้ค่า Q3= 10 หรือ 11 หรือ 12 แปลง X เป็น 4 จะได้ค่า Q42024Q4losing_period รอบ Period ที่ประมวลผล202410cf_reinsurer_idcf_rig_treaty.cf_reinsurer_idของ Treaty ที่กำลังประมวลผล cf_treaty_idcf_rig_treaty.cf_rig_treaty_idของ Treaty ที่กำลังประมวลผล treaty_codecf_rig_treaty.treaty_codeจากขั้นตอน 1. ตรวจสอบ Treaty ที่ต้องประมวลผล status เมื่อสร้างรายการครั้งแรกให้บันทึก "PROCESSING"กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "ERROR"กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "SUCCESS" edw_status NULL edw_status_desc NULL ri_std_hd_id NULL ri_std_hd_id_oic NULL ri_premium เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก ri_commission เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก claim_recovery เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก due_to เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก remark กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก Log Error ที่ระบบแจ้ง usage_status เมื่อสร้างรายการครั้งแรกให้บันทึก A created_date now() created_by เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM updated_date NULL updated_by NULL
ค้นหา Treaty ทั้งหมดที่ถูก Config ไว้ แต่เลือกเฉพาะกรมธรรม์ที่เคยอนุมัติ Approve แล้วอย่างน้อยหนึ่งครั้ง และยังมีสถานะใช้งาน และยังมีวันที่เปิดใช้งานอยู่ในปัจจุบัน จากนั้นเก็บ ID ของ Treaty นั้นไว้เพื่อไปค้นหารายการรายละเอียด Config ของกรมธรรม์ต่อ
2. เตรียมข้อมูลประมวลผล
- นำรายการ Treaty ที่ผ่านเงื่อนไขข้อ 1 มาเตรียมข้อมูลสำหรับประมวลผลดังนี้Parameterเงื่อนไข ค่าที่เก็บลง Parameter{TREATY_CODE}ตาม {TREATY_ID} จากข้อ 1 cf_rig_treaty.treaty_code{RE_CODE}ตรวจสอบที่ cf_lookup_catalog ที่ cf_lookup_catalog.parent_id = 1000100นำ cf_rig_treaty.treaty_code เทียบกับ cf_lookup_catalog.description เก็บค่า cf_lookup_catalog.lookup_key ที่ได้{GENERAL_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_id ที่มี cf_rig_treaty_dt.status = Aเก็บค่า cf_rig_treaty_dt.status_general ที่ได้{CONDITION_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_idที่มี cf_rig_treaty_dt.status = Aเก็บค่า cf_rig_treaty_dt.status_condition ที่ได้{POLICY_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_idที่มี cf_rig_treaty_dt.status = Aเก็บค่า cf_rig_treaty_dt.status_policy ที่ได้{RIPREM_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_idที่มี cf_rig_treaty_dt.status = Aเก็บค่า cf_rig_treaty_dt.status_ri_premium ที่ได้
- ตรวจสอบ ID ของแต่ละรายการที่ถูก Approve ล่าสุด ของแต่ละหัวข้อParameterเงื่อนไขค่าที่เก็บลง Parameter{GENERAL_ID}ถ้า {GENERAL_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_general.cf_rig_treaty_id ที่รายการ cf_rig_treaty_general.status = "A"เก็บค่า cf_rig_treaty_general.cf_rig_treaty_general_id ที่ได้{CONDITION_ID}ถ้า {CONDITION_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_id ที่รายการ cf_rig_treaty_cond_hd.status = "A"และ Period ที่ประมวลผลอยู่ในช่วงของ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_toเก็บค่า cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id ที่ได้{POLICY_ID}ถ้า {POLICY_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_policy_hd.cf_rig_treaty_id ที่รายการ cf_rig_treaty_policy_hd.status = "A"เก็บค่า cf_rig_treaty_policy_hd.cf_rig_treaty_policy_hd_id ที่ได้{RIPREM_ID}ถ้า {RIPREM_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_prem_rate_hd.cf_rig_treaty_id ที่รายการ cf_rig_treaty_prem_rate_hd.status = "A"และ Period ที่ประมวลผลอยู่ในช่วงของ cf_rig_treaty_prem_rate_hd.effective_date_from กับ cf_rig_treaty_prem_rate_hd.effective_date_toเก็บค่า cf_rig_treaty_prem_rate_hd.cf_rig_treaty_prem_rate_hd_id ที่ได้
ค้นหา Reinsurer No ของ Treaty นั้นเพื่อนำไปค้นหากรมธรรม์ที่อยู่ภายใต้ Treaty นี้ทั้งหมด รวมถึงสถานะการใช้งาน Config ต่าง ๆ สำหรับเอาไว้เช็กต่อในการประมวลผล ถ้ามีการ Config ส่วนใดเป็น FALSE แต่มีการคำนวณที่ต้องเลือกใช้ ก็จะสามารถข้ามกระบวนการนั้นไปได้เลย
เก็บ ID ของรายการที่มีสถานะเป็น A เท่านั้น เนื่องจากภายใต้ Table Config จะมีรายการที่ถูก Config ไว้ทั้งหมด 3 แบบด้วยกัน คือ
- A: Active สถานะนี้เกิดจากการอนุมัติใช้งาน Treaty แล้วอย่างน้อย 1 ครั้ง และจะใช้ข้อมูลที่มีสถานะ A นี้สำหรับการประมวลผลทุกครั้ง
- I: Inactive สถานะนี้เกิดจากหลังการอนุมัติหรือมีการแก้ไขข้อมูลแล้วอนุมัติจนทำให้มีรายการสถานะ A ขึ้นมาใหม่แล้ว รายการสถานะ A เดิมจะต้องเปลี่ยนเป็น I เพื่อให้ระบบอ่านได้ถูกว่าต้องใช้ข้อมูลรายการไหนสำหรับการประมวลผล แต่ยังสามารถตรวจสอบประวัติรายการ A เดิมจาก I ได้
- D: สถานะนี้เกิดในครั้งแรกที่สร้างข้อมูล และเกิดขึ้นหลังจากการอนุมัติและกำลังอยู่ระหว่างการแก้ไขข้อมูลใหม่ เพราะระบบจะสร้างรายการขึ้นมาใหม่เสมอ เพื่อให้สถานะ A เดิมยังอยู่และนำไปประมวลผลได้ และ D จะใช้แก้ไขไปจนกว่าจะมีการอนุมัติ เมื่ออนุมัติรายการ D จะกลายเป็นรายการ A ใหม่ และรายการ A เก่า จะมีสถานะเป็น I ตามลำดับ
DAI_Grp_Daiichi_Coins
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ข้ามไปดำเนินการข้อ 6. การคำนวณ RI Claim (ACT)
- ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ข้ามไปดำเนินการข้อ 6. การคำนวณ RI Claim (ACT)
GIB_Grp_Direct_EB
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
2. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYPeriod YYYY01 = 01/01/YYYY - 31/01/YYYYPeriod YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYYPeriod YYYY03 = 01/03/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYPeriod YYYY04 = 01/04/YYYY - 30/04/YYYYPeriod YYYY05 = 01/05/YYYY - 31/05/YYYYPeriod YYYY06 = 01/06/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYPeriod YYYY07 = 01/07/YYYY - 31/07/YYYYPeriod YYYY08 = 01/08/YYYY - 31/08/YYYYPeriod YYYY09 = 01/09/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYYPeriod YYYY10 = 01/10/YYYY - 31/10/YYYYPeriod YYYY11 = 01/11/YYYY - 30/11/YYYYPeriod YYYY12 = 01/12/YYYY - 31/12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYYPeriod YYYY01 = 01/01/YYYY - 31/01/YYYYPeriod YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYYPeriod YYYY03 = 01/03/YYYY - 31/03/YYYY
- Period YYYY01 = 01/01/YYYY - 31/01/YYYY
- Period YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYY
- Period YYYY03 = 01/03/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYYPeriod YYYY04 = 01/04/YYYY - 30/04/YYYYPeriod YYYY05 = 01/05/YYYY - 31/05/YYYYPeriod YYYY06 = 01/06/YYYY - 30/06/YYYY
- Period YYYY04 = 01/04/YYYY - 30/04/YYYY
- Period YYYY05 = 01/05/YYYY - 31/05/YYYY
- Period YYYY06 = 01/06/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYYPeriod YYYY07 = 01/07/YYYY - 31/07/YYYYPeriod YYYY08 = 01/08/YYYY - 31/08/YYYYPeriod YYYY09 = 01/09/YYYY - 30/09/YYYY
- Period YYYY07 = 01/07/YYYY - 31/07/YYYY
- Period YYYY08 = 01/08/YYYY - 31/08/YYYY
- Period YYYY09 = 01/09/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYYPeriod YYYY10 = 01/10/YYYY - 31/10/YYYYPeriod YYYY11 = 01/11/YYYY - 30/11/YYYYPeriod YYYY12 = 01/12/YYYY - 31/12/YYYY
- Period YYYY10 = 01/10/YYYY - 31/10/YYYY
- Period YYYY11 = 01/11/YYYY - 30/11/YYYY
- Period YYYY12 = 01/12/YYYY - 31/12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ Batch ACT-007 ข้อมูล (R61) Premium and movement (Actual) โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน tx_stg_act_prem_movement.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์นั้นสำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี tx_stg_act_prem_movement.effective_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลโดยให้กำหนด {PERIOD_MONTH} จาก ปีและเดือนของ tx_stg_act_prem_movement.period_date รูปแบบ YYYYMMกรณีเลือกไปเจอกรมธรรม์ที่มี เดือนและปี tx_stg_act_prem_movement.end_date ตรงกับ {PERIOD_DATE_TO} ให้ดึงรายการกรมธรรม์เดียวกัน ที่มี tx_stg_act_prem_movement.policy_year เดียวกันของรายการนั้นมาทั้งหมดดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{COV_FROM}effective_date{COV_TO}end_date{MEM_PREVIOUS}no_mem_previous{MEM_ADD}no_mem_addition{MEM_CANCEL}no_mem_cancellation{MEM_TOT}no_mem_total{PREM_LIFE}premium_life{PREM_ACC}premium_accident{PREM_E1}premium_e1{PREM_LIFE_E1}premium_life + premium_e1{PERIOD_DATE_FROM}period_date{PERIOD_DATE_TO}บวกเพิ่มจาก period_date ไปอีก 1 เดือนตามตัวอย่างในตาราง{PERIOD_DATE_FROM}{PERIOD_DATE_TO}31/10/256629/11/256630/11/256630/12/256631/12/256630/01/256731/01/256728/02/256729/02/256730/03/256731/03/256730/04/2567{PERIOD_MONTH}ปีและเดือนของ period_date{POLICY_YEAR}policy_year {PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date แปลงค่าเบี้ยให้เป็นรายปี (ต่อรายการ)parameter {Y_PREM_LIFE}{PREM_LIFE} * {PAY_MODE}{Y_PREM_ACC}{PREM_ACC}{Y_PREM_E1}{PREM_E1}{Y_PREM_LIFE_E1}{Y_PREM_LIFE} + {Y_PREM_E1}tx_stg_act_all_policy (ต่อรายการ)parametertx_stg_act_all_policy {POLICY_NO}policy_no {POLICY_NO_FULL}reinsur_no{COM_DATE}1) ใช้วันที่และเดือนจาก Commencement Date จาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{GIB_RI_STATUS}ถ้า {POLICY_STATUS} = I หรือ B ให้ตรวจสอบ {POLICY_YEAR_RI}ถ้า {POLICY_STATUS} = 1 เก็บ New Businessถ้า {POLICY_STATUS} > 1 เก็บ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_datetx_stg_act_inforce_policy (ต่อรายการ)parametertx_stg_act_inforce_policy{POLICY_NO}policy_no{COMM_DATE}commencement_date{COV_FROM}effective_date{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death{INS_LIFE}sum_insured_life{INS_ACC_DEATH}sum_insured_accident_deathtx_stg_act_prem_layer (ต่อรายการ)parametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1life_prem_rate{L2_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2life_prem_rate{L3_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1accident_prem_rate{L2_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2accident_prem_rate{L3_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3accident_prem_rate{L1_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_prem{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_extra_prem{L1_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_prem{L1_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_extra_premtx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{Y_SUM_ACC_PREM_OVER}ผลรวม {Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {POLICY_YEAR}
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน tx_stg_act_prem_movement.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์นั้นสำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์นั้นสำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี tx_stg_act_prem_movement.effective_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลโดยให้กำหนด {PERIOD_MONTH} จาก ปีและเดือนของ tx_stg_act_prem_movement.period_date รูปแบบ YYYYMM
- โดยให้กำหนด {PERIOD_MONTH} จาก ปีและเดือนของ tx_stg_act_prem_movement.period_date รูปแบบ YYYYMM
- กรณีเลือกไปเจอกรมธรรม์ที่มี เดือนและปี tx_stg_act_prem_movement.end_date ตรงกับ {PERIOD_DATE_TO} ให้ดึงรายการกรมธรรม์เดียวกัน ที่มี tx_stg_act_prem_movement.policy_year เดียวกันของรายการนั้นมาทั้งหมด
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{COV_FROM}effective_date{COV_TO}end_date{MEM_PREVIOUS}no_mem_previous{MEM_ADD}no_mem_addition{MEM_CANCEL}no_mem_cancellation{MEM_TOT}no_mem_total{PREM_LIFE}premium_life{PREM_ACC}premium_accident{PREM_E1}premium_e1{PREM_LIFE_E1}premium_life + premium_e1{PERIOD_DATE_FROM}period_date{PERIOD_DATE_TO}บวกเพิ่มจาก period_date ไปอีก 1 เดือนตามตัวอย่างในตาราง{PERIOD_DATE_FROM}{PERIOD_DATE_TO}31/10/256629/11/256630/11/256630/12/256631/12/256630/01/256731/01/256728/02/256729/02/256730/03/256731/03/256730/04/2567{PERIOD_MONTH}ปีและเดือนของ period_date{POLICY_YEAR}policy_year {PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date แปลงค่าเบี้ยให้เป็นรายปี (ต่อรายการ)parameter {Y_PREM_LIFE}{PREM_LIFE} * {PAY_MODE}{Y_PREM_ACC}{PREM_ACC}{Y_PREM_E1}{PREM_E1}{Y_PREM_LIFE_E1}{Y_PREM_LIFE} + {Y_PREM_E1}tx_stg_act_all_policy (ต่อรายการ)parametertx_stg_act_all_policy {POLICY_NO}policy_no {POLICY_NO_FULL}reinsur_no{COM_DATE}1) ใช้วันที่และเดือนจาก Commencement Date จาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{GIB_RI_STATUS}ถ้า {POLICY_STATUS} = I หรือ B ให้ตรวจสอบ {POLICY_YEAR_RI}ถ้า {POLICY_STATUS} = 1 เก็บ New Businessถ้า {POLICY_STATUS} > 1 เก็บ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_datetx_stg_act_inforce_policy (ต่อรายการ)parametertx_stg_act_inforce_policy{POLICY_NO}policy_no{COMM_DATE}commencement_date{COV_FROM}effective_date{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death{INS_LIFE}sum_insured_life{INS_ACC_DEATH}sum_insured_accident_deathtx_stg_act_prem_layer (ต่อรายการ)parametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1life_prem_rate{L2_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2life_prem_rate{L3_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1accident_prem_rate{L2_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2accident_prem_rate{L3_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3accident_prem_rate{L1_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_prem{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_extra_prem{L1_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_prem{L1_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_extra_premtx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{Y_SUM_ACC_PREM_OVER}ผลรวม {Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {POLICY_YEAR}
- tx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{COV_FROM}effective_date{COV_TO}end_date{MEM_PREVIOUS}no_mem_previous{MEM_ADD}no_mem_addition{MEM_CANCEL}no_mem_cancellation{MEM_TOT}no_mem_total{PREM_LIFE}premium_life{PREM_ACC}premium_accident{PREM_E1}premium_e1{PREM_LIFE_E1}premium_life + premium_e1{PERIOD_DATE_FROM}period_date{PERIOD_DATE_TO}บวกเพิ่มจาก period_date ไปอีก 1 เดือนตามตัวอย่างในตาราง{PERIOD_DATE_FROM}{PERIOD_DATE_TO}31/10/256629/11/256630/11/256630/12/256631/12/256630/01/256731/01/256728/02/256729/02/256730/03/256731/03/256730/04/2567{PERIOD_MONTH}ปีและเดือนของ period_date{POLICY_YEAR}policy_year {PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- แปลงค่าเบี้ยให้เป็นรายปี (ต่อรายการ)parameter {Y_PREM_LIFE}{PREM_LIFE} * {PAY_MODE}{Y_PREM_ACC}{PREM_ACC}{Y_PREM_E1}{PREM_E1}{Y_PREM_LIFE_E1}{Y_PREM_LIFE} + {Y_PREM_E1}
- tx_stg_act_all_policy (ต่อรายการ)parametertx_stg_act_all_policy {POLICY_NO}policy_no {POLICY_NO_FULL}reinsur_no{COM_DATE}1) ใช้วันที่และเดือนจาก Commencement Date จาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{GIB_RI_STATUS}ถ้า {POLICY_STATUS} = I หรือ B ให้ตรวจสอบ {POLICY_YEAR_RI}ถ้า {POLICY_STATUS} = 1 เก็บ New Businessถ้า {POLICY_STATUS} > 1 เก็บ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- tx_stg_act_inforce_policy (ต่อรายการ)parametertx_stg_act_inforce_policy{POLICY_NO}policy_no{COMM_DATE}commencement_date{COV_FROM}effective_date{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death{INS_LIFE}sum_insured_life{INS_ACC_DEATH}sum_insured_accident_death
- tx_stg_act_prem_layer (ต่อรายการ)parametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_est_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_est_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1life_prem_rate{L2_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2life_prem_rate{L3_LIFE_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L1accident_prem_rate{L2_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L2accident_prem_rate{L3_ACC_PREM_RATE}ถ้า tx_stg_est_prem_layer.level = L3accident_prem_rate{L1_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_prem{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_est_prem_layer.level = L3life_extra_prem{L1_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_prem{L1_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_est_prem_layer.level = L3accident_extra_prem
- tx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{Y_SUM_ACC_PREM_OVER}ผลรวม {Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {POLICY_YEAR}
3. กรมธรรม์ที่ end_date ตรงกับ {PERIOD_DATE_TO}
- กรณีเลือกไปเจอกรมธรรม์ที่มี เดือนและปี tx_stg_act_prem_movement.end_date ตรงกับ {PERIOD_DATE_TO} ให้ดึงรายการกรมธรรม์เดียวกัน ที่มี tx_stg_act_prem_movement.policy_year เดียวกันของรายการนั้นมาทั้งหมดtx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{BF_PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{BF_POLICY_YEAR}policy_year{BF_COV_FROM}effective_date{BF_COV_TO}end_date{BF_SUM_PREM_LIFE}ผลรวมของทั้ง 12 เดือน premium_life{BF_SUM_PREM_ACC}ผลรวมของทั้ง 12 เดือน premium_accident{BF_SUM_PREM_E1}ผลรวมของทั้ง 12 เดือน premium_e1{BF_SUM_PREM_LIFE_E1}premium_life + premium_e1 tx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{BF_POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{BF_Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{BF_Y_SUM_ACC_PREM_OVER}ผลรวม {BF_Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {BF_POLICY_YEAR}
- tx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{BF_PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{BF_POLICY_YEAR}policy_year{BF_COV_FROM}effective_date{BF_COV_TO}end_date{BF_SUM_PREM_LIFE}ผลรวมของทั้ง 12 เดือน premium_life{BF_SUM_PREM_ACC}ผลรวมของทั้ง 12 เดือน premium_accident{BF_SUM_PREM_E1}ผลรวมของทั้ง 12 เดือน premium_e1{BF_SUM_PREM_LIFE_E1}premium_life + premium_e1
- tx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{BF_POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{BF_Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{BF_Y_SUM_ACC_PREM_OVER}ผลรวม {BF_Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {BF_POLICY_YEAR}
THREL_Grp_PA
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "THREL_Grp_PA" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "THREL_Grp_PA" ให้ดำเนินการต่อ
2. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYPeriod YYYY01 = 01/01/YYYY - 31/01/YYYYPeriod YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYYPeriod YYYY03 = 01/03/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYPeriod YYYY04 = 01/04/YYYY - 30/04/YYYYPeriod YYYY05 = 01/05/YYYY - 31/05/YYYYPeriod YYYY06 = 01/06/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYPeriod YYYY07 = 01/07/YYYY - 31/07/YYYYPeriod YYYY08 = 01/08/YYYY - 31/08/YYYYPeriod YYYY09 = 01/09/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYYPeriod YYYY10 = 01/10/YYYY - 31/10/YYYYPeriod YYYY11 = 01/11/YYYY - 30/11/YYYYPeriod YYYY12 = 01/12/YYYY - 31/12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYYPeriod YYYY01 = 01/01/YYYY - 31/01/YYYYPeriod YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYYPeriod YYYY03 = 01/03/YYYY - 31/03/YYYY
- Period YYYY01 = 01/01/YYYY - 31/01/YYYY
- Period YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYY
- Period YYYY03 = 01/03/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYYPeriod YYYY04 = 01/04/YYYY - 30/04/YYYYPeriod YYYY05 = 01/05/YYYY - 31/05/YYYYPeriod YYYY06 = 01/06/YYYY - 30/06/YYYY
- Period YYYY04 = 01/04/YYYY - 30/04/YYYY
- Period YYYY05 = 01/05/YYYY - 31/05/YYYY
- Period YYYY06 = 01/06/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYYPeriod YYYY07 = 01/07/YYYY - 31/07/YYYYPeriod YYYY08 = 01/08/YYYY - 31/08/YYYYPeriod YYYY09 = 01/09/YYYY - 30/09/YYYY
- Period YYYY07 = 01/07/YYYY - 31/07/YYYY
- Period YYYY08 = 01/08/YYYY - 31/08/YYYY
- Period YYYY09 = 01/09/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYYPeriod YYYY10 = 01/10/YYYY - 31/10/YYYYPeriod YYYY11 = 01/11/YYYY - 30/11/YYYYPeriod YYYY12 = 01/12/YYYY - 31/12/YYYY
- Period YYYY10 = 01/10/YYYY - 31/10/YYYY
- Period YYYY11 = 01/11/YYYY - 30/11/YYYY
- Period YYYY12 = 01/12/YYYY - 31/12/YYYY
- นำ {POLICY_ID} ของทุกรายการที่ได้ ไปดึงข้อมูล cf_rig_treaty_policy_hd.policy_no โดยมีเงื่อนไขดังนี้cf_rig_treaty_policy_hd.status = "A"cf_rig_treaty_policy_hd.usage_process_status = "A"cf_rig_treaty_policy_hd.coverage_period_from อยู่ในช่วง Quarter Period ที่ประมวลผลดึงข้อมูลรายละเอียดของกรมธรรม์ดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)parametercf_rig_treaty_policy_hd{POLICY_NO}policy_no{COM_DATE}com_date{COV_FROM}coverage_period_from{COV_TO}coverage_period_to{POLICY_YEAR}policy_year{AGE_LIMIT}age_limit{OCC}occ_class{CER_INCOM}cert_no_incompliant{POLIC_COV}coverage{PER_ADD}percent_add{PER_MUR}murder_assault{PER_SPE_COV}special_coverage{PER_LOS_FING}loss_finger{PER_MOT}prem_motorcycle{PER_WAR}prem_war{PER_STRIKE}prem_strike_riot{PER_SPORT}prem_sports_activities{PER_AIR}prem_aircraft{PER_DIS_MUR}discount_murder_assualt{PER_DIS_VOL}discount_group_vol{PERIOD}เดือนและปีของ coverage_period_from{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from{POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_status{REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_policy_status
- cf_rig_treaty_policy_hd.status = "A"
- cf_rig_treaty_policy_hd.usage_process_status = "A"
- cf_rig_treaty_policy_hd.coverage_period_from อยู่ในช่วง Quarter Period ที่ประมวลผล
- ดึงข้อมูลรายละเอียดของกรมธรรม์ดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)parametercf_rig_treaty_policy_hd{POLICY_NO}policy_no{COM_DATE}com_date{COV_FROM}coverage_period_from{COV_TO}coverage_period_to{POLICY_YEAR}policy_year{AGE_LIMIT}age_limit{OCC}occ_class{CER_INCOM}cert_no_incompliant{POLIC_COV}coverage{PER_ADD}percent_add{PER_MUR}murder_assault{PER_SPE_COV}special_coverage{PER_LOS_FING}loss_finger{PER_MOT}prem_motorcycle{PER_WAR}prem_war{PER_STRIKE}prem_strike_riot{PER_SPORT}prem_sports_activities{PER_AIR}prem_aircraft{PER_DIS_MUR}discount_murder_assualt{PER_DIS_VOL}discount_group_vol{PERIOD}เดือนและปีของ coverage_period_from{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from{POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_status{REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_policy_status
- parametercf_rig_treaty_policy_hd{POLICY_NO}policy_no{COM_DATE}com_date{COV_FROM}coverage_period_from{COV_TO}coverage_period_to{POLICY_YEAR}policy_year{AGE_LIMIT}age_limit{OCC}occ_class{CER_INCOM}cert_no_incompliant{POLIC_COV}coverage{PER_ADD}percent_add{PER_MUR}murder_assault{PER_SPE_COV}special_coverage{PER_LOS_FING}loss_finger{PER_MOT}prem_motorcycle{PER_WAR}prem_war{PER_STRIKE}prem_strike_riot{PER_SPORT}prem_sports_activities{PER_AIR}prem_aircraft{PER_DIS_MUR}discount_murder_assualt{PER_DIS_VOL}discount_group_vol{PERIOD}เดือนและปีของ coverage_period_from{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from{POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_status{REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_policy_status
DAI_Grp_Daiichi_Coins
GIB_Grp_Direct_EB
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
2. เตรียมข้อมูล Layer
เตรียมข้อมูล Layer ดังนี้
โดยตรวจสอบตาม {COV_FROM} ของกรมธรรม์ที่กำลังคำนวณอยู่ ตรวจสอบกับวันที่ Effective Date From – Effective Date To ของรายการที่เป็น A ใน {CONDITION_ID}
| Parameter | เงื่อนไขการค้นหา | ค่าที่เก็บลง Parameter |
| {L1_MIN} | ถ้า cf_rig_treaty_cond_dt.layer = L1 | cf_rig_treaty_cond_dt.minimum |
| {L1_MAX} | ถ้า cf_rig_treaty_cond_dt.layer = L1 | cf_rig_treaty_cond_dt.maximum |
| {L1_PER} | ถ้า cf_rig_treaty_cond_dt.layer = L1 | cf_rig_treaty_cond_dt.percent_re |
| {L2_MIN} | ถ้า cf_rig_treaty_cond_dt.layer = L2 | cf_rig_treaty_cond_dt.minimum |
| {L2_MAX} | ถ้า cf_rig_treaty_cond_dt.layer = L2 | cf_rig_treaty_cond_dt.maximum |
| {L2_PER} | ถ้า cf_rig_treaty_cond_dt.layer = L2 | cf_rig_treaty_cond_dt.percent_re |
| {L3_MIN} | ถ้า cf_rig_treaty_cond_dt.layer = L3 | cf_rig_treaty_cond_dt.minimum |
| {L3_MAX} | ถ้า cf_rig_treaty_cond_dt.layer = L3 | cf_rig_treaty_cond_dt.maximum |
| {L3_PER} | ถ้า cf_rig_treaty_cond_dt.layer = L3 | cf_rig_treaty_cond_dt.percent_re |
| {L1_L2_MID} |  | {L2_MAX} - {L1_MAX} |
3. คำนวณแยก Layer
| ความคุ้มครอง | Parameter | คำนวณ |
| LIFE | {L2_SA_LIFE} | ใช้ {L2_LIFE_INS} − ({L1_MAX} × {L2_MEM_LIFE}) + ({L1_L2_MID} × {L3_MEM_LIFE}) |
| {L3_SA_LIFE} | ใช้ {L3_LIFE_INS} − ({L2_MAX} × {L3_MEM_LIFE}) |
| {L1_SA_LIFE} | ใช้ {SUM_LIFE_INS} − {L2_SA_LIFE} − {L3_SA_LIFE} |
| {TOT_SA_LIFE} | {L1_SA_LIFE} + {L2_SA_LIFE} + {L3_SA_LIFE} |
| {L1_SR_LIFE} | {L1_SA_LIFE} * {L1_PER} / 100 |
| {L2_SR_LIFE} | {L2_SA_LIFE} * {L2_PER} / 100 |
| {L3_SR_LIFE} | {L3_SA_LIFE} * {L3_PER} / 100 |
| {TOT_SR_LIFE} | {L1_SR_LIFE} + {L2_SR_LIFE} + {L3_SR_LIFE} |
| ACC | {L2_SA_ACC} | ใช้ {L2_ACC_INS} − ({L1_MAX} × {L2_MEM_ACC}) + ({L1_L2_MID} × {L3_MEM_ACC}) |
| {L3_SA_ACC} | ใช้ {L3_ACC_INS} − ({L2_MAX} × {L3_MEM_ACC}) |
| {L1_SA_ACC} | ใช้ {SUM_ACC_INS} − {L2_SA_ACC} − {L3_SA_ACC} |
| {TOT_SA_ACC} | {L1_SA_ACC} + {L2_SA_ACC} + {L3_SA_ACC} |
| {L1_SR_ACC} | {L1_SA_ACC} * {L1_PER} / 100 |
| {L2_SR_ACC} | {L2_SA_ACC} * {L2_PER} / 100 |
| {L3_SR_ACC} | {L3_SA_ACC} * {L3_PER} / 100 |
| {TOT_SR_ACC} | {L1_SR_ACC} + {L2_SR_ACC} + {L3_SR_ACC} |
4. คำนวณ Premium
- เลือกเฉพาะรายการที่ ปีและเดือนของ {COV_FROM} เท่ากับ {PERIOD_MONTH}
- หาเบี้ยตั้งต้นของ Accident นำค่า {Y_PREM_ACC} - {Y_SUM_ACC_PREM_OVER} (ของ {POLICY_YEAR} เดียวกับรายการที่กำลังประมวลผล)เก็บค่าใน {Y_SUM_PREM_ACC} ความคุ้มครองParameterคำนวณLIFE{L2_PREM_LIFE}({L2_LIFE_PREM_RATE} * {PAY_MODE}) * {L2_SA_LIFE} / 1,000{L3_PREM_LIFE}({L3_LIFE_PREM_RATE} * {PAY_MODE}) * {L3_SA_LIFE} / 1,000{L1_PREM_LIFE}{Y_PREM_LIFE_E1} - {L2_NB_PREM_LIFE} - {L3_NB_PREM_LIFE}{TOT_PREM_LIFE}{L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{L1_RI_PREM_LIFE}{L1_PREM_LIFE} * {L1_PER} / 100{L2_RI_PREM_LIFE}{L2_PREM_LIFE} * {L2_PER} / 100{L3_RI_PREM_LIFE}{L3_PREM_LIFE} * {L3_PER} / 100{TOT_RI_PREM_LIFE}{L1_RI_PREM_LIFE} + {L2_RI_PREM_LIFE} + {L3_RI_PREM_LIFE}ACC{L2_PREM_ACC}({L2_ACC_PREM_RATE} * {PAY_MODE}) * {L2_SA_ACC} / 1,000{L3_PREM_ACC}({L3_ACC_PREM_RATE} * {PAY_MODE}) * {L3_SA_ACC} / 1,000{L1_PREM_ACC}{Y_SUM_PREM_ACC} - {L2_NB_PREM_ACC} - {L3_NB_PREM_ACC}{TOT_PREM_ACC}{L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC}{L1_RI_PREM_ACC}{L1_PREM_ACC} * {L1_PER} / 100{L2_RI_PREM_ACC}{L2_PREM_ACC} * {L2_PER} / 100{L3_RI_PREM_ACC}{L3_PREM_ACC} * {L3_PER} / 100{TOT_RI_PREM_ACC}{L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}
- นำค่า {Y_PREM_ACC} - {Y_SUM_ACC_PREM_OVER} (ของ {POLICY_YEAR} เดียวกับรายการที่กำลังประมวลผล)
- เก็บค่าใน {Y_SUM_PREM_ACC}
5. คำนวณ Movement (Revivals / Refund)
1. คำนวณ Movement ระหว่างปีกรมธรรม์
- ตรวจสอบ {PAY_MODE} ของกรมธรรม์นั้นถ้าเท่ากับ 1ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}{Y_PREM_LIFE_E1} ≥ 0{REVIVAL_PREM_ACC}{PREM_ACC} ≥ 0{REFUND_PREM_LIFE}{Y_PREM_LIFE_E1} < 0{REFUND_PREM_ACC}{PREM_ACC} < 0รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0 ถ้าไม่เท่ากับ 1ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}0{REVIVAL_PREM_ACC}0{REFUND_PREM_LIFE}0{REFUND_PREM_ACC}0รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- ถ้าเท่ากับ 1ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}{Y_PREM_LIFE_E1} ≥ 0{REVIVAL_PREM_ACC}{PREM_ACC} ≥ 0{REFUND_PREM_LIFE}{Y_PREM_LIFE_E1} < 0{REFUND_PREM_ACC}{PREM_ACC} < 0รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}{Y_PREM_LIFE_E1} ≥ 0{REVIVAL_PREM_ACC}{PREM_ACC} ≥ 0{REFUND_PREM_LIFE}{Y_PREM_LIFE_E1} < 0{REFUND_PREM_ACC}{PREM_ACC} < 0
- รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน
- {SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- ถ้าไม่เท่ากับ 1ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}0{REVIVAL_PREM_ACC}0{REFUND_PREM_LIFE}0{REFUND_PREM_ACC}0รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- ถ้ารายการนั้น ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (แยกตาม Period)Parameterคำนวณ{REVIVAL_PREM_LIFE}0{REVIVAL_PREM_ACC}0{REFUND_PREM_LIFE}0{REFUND_PREM_ACC}0
- รายการที่ ปีและเดือนของ {COV_TO} เท่ากับ {PERIOD_DATE_TO} {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน{SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- {SUM_PREM_LIFE_YBEFORE} = ผลรวมของ {BF_SUM_PREM_LIFE_E1} ของทั้งปี ของกรมธรรม์เดียวกัน
- {SUM_PREM_ACC_YBEFORE} = ผลรวมของ {BF_SUM_PREM_ACC} ของทั้งปี ของกรมธรรม์เดียวกัน - {BF_Y_SUM_ACC_PREM_OVER} Parameterคำนวณ{REVIVAL_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} ≥ 0{REVIVAL_PREM_ACC}{SUM_PREM_ACC_YBEFORE} ≥ 0{REFUND_PREM_LIFE}{SUM_PREM_LIFE_YBEFORE} < 0{REFUND_PREM_ACC}{SUM_PREM_ACC_YBEFORE} < 0
- รวมทุกรายการที่แยกตาม Period ภายในปีกรมเดียวกัน เข้าด้วยกัน Parameter คำนวณ{SUM_REVIVAL_PREM_LIFE}SUM({REVIVAL_PREM_LIFE}){SUM_REVIVAL_PREM_ACC}SUM({REVIVAL_PREM_ACC}){SUM_REFUND_PREM_LIFE}SUM({REFUND_PREM_LIFE}){SUM_REFUND_PREM_ACC}SUM({REFUND_PREM_ACC})
- คำนวณส่วน Reinsurance Parameter คำนวณ{RI_SUM_REVIVAL_PREM_LIFE}{SUM_REVIVAL_PREM_LIFE} * {L1_PER} / 100{RI_SUM_REVIVAL_PREM_ACC}{SUM_REVIVAL_PREM_ACC} * {L1_PER} / 100{RI_SUM_REFUND_PREM_LIFE}{SUM_REFUND_PREM_LIFE} * {L1_PER} / 100{RI_SUM_REFUND_PREM_ACC}{SUM_REFUND_PREM_ACC} * {L1_PER} / 100
6. คำนวณเบี้ยทั้งหมด
- คำนวณ Premium ทั้งหมดของแต่ละกรมธรรม์Parameterคำนวณ{L1_TL_PREM_LIFE}{L1_PREM_LIFE} + {SUM_REVIVAL_PREM_LIFE} - {SUM_REFUND_PREM_LIFE}{L2_TL_PREM_LIFE}{L2_PREM_LIFE}{L3_TL_PREM_LIFE}{L3_PREM_LIFE}{L1_TL_PREM_ACC}{L1_PREM_ACC} + {SUM_REVIVAL_PREM_ACC} - {SUM_REFUND_PREM_ACC}{L2_TL_PREM_ACC}{L2_PREM_ACC}{L3_TL_PREM_ACC}{L3_PREM_ACC}
- คำนวณ RI Premium ทั้งหมดของแต่ละกรมธรรม์Parameterคำนวณ{RI_L1_TL_PREM_LIFE}{L1_TL_PREM_LIFE} * {L1_PER} / 100{RI_L2_TL_PREM_LIFE}{L2_TL_PREM_LIFE} * {L2_PER} / 100{RI_L3_TL_PREM_LIFE}{L3_TL_PREM_LIFE} * {L3_PER} / 100{TOT_RI_TL_PREM_LIFE}{RI_L1_TL_PREM_LIFE} + {RI_L2_TL_PREM_LIFE} + {RI_L3_TL_PREM_LIFE}{RI_L1_TL_PREM_ACC}{L1_TL_PREM_ACC} * {L1_PER} / 100{RI_L2_TL_PREM_ACC}{L2_TL_PREM_ACC} * {L2_PER} / 100{RI_L3_TL_PREM_ACC}{L3_TL_PREM_ACC} * {L3_PER} / 100{TOT_RI_TL_PREM_ACC}{RI_L1_TL_PREM_ACC} + {RI_L2_TL_PREM_ACC} + {RI_L3_TL_PREM_ACC}
7. คำนวณส่วน Reinsurance และเตรียมข้อมูลออก Report
| Parameter | คำนวณ |
| {PREM_RATE_LIFE_REPORT} | ({L1_LIFE_PREM} * {PAY_MODE}) + ({L2_LIFE_PREM} * {PAY_MODE}) + ({L3_LIFE_PREM} * {PAY_MODE}) |
| {PREM_RATE_ACC_REPORT} | ({L1_ACC_PREM} * {PAY_MODE}) + ({L2_ACC_PREM} * {PAY_MODE}) + ({L3_ACC_PREM} * {PAY_MODE}) |
THREL_Grp_PA
1. ตรวจสอบรายการสมาชิก
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยนำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า Minimum Sum Assuredcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- นำ {POLICY_NO} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ มาตรวจสอบรายชื่อสมาชิกในกรมธรรม์ที่ tx_stg_act_inforce_member โดยtx_stg_act_inforce_member.policy_no เท่ากับ {POLICY_NO}และ tx_stg_act_inforce_member.sum_insured_accident มากกว่าเท่ากับ {MIN_SUM_ASU}และ tx_stg_act_inforce_member.age น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_act_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_act_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_act_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
- tx_stg_act_inforce_member.policy_no เท่ากับ {POLICY_NO}
- และ tx_stg_act_inforce_member.sum_insured_accident มากกว่าเท่ากับ {MIN_SUM_ASU}
- และ tx_stg_act_inforce_member.age น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_act_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_act_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_act_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
- กรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_act_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_act_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_act_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
- ถ้ามีเลข tx_stg_act_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อ
- ถ้ามีเลข tx_stg_act_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
2. คำนวณ SA
- นำ tx_stg_act_inforce_member.sum_insured_accident ของแต่ละรายสมาชิก มาคำนวณหาค่า SA ของแต่ละสมาชิกดังนี้parameterคำนวณ{SA_ACC}tx_stg_act_inforce_member.sum_insured_accident{SA_MUR}{SA_ACC} * ({PER_MUR} / 100){SA_LOADING}{SA_ACC} * ({PER_SPE_COV} / 100)
- parameterคำนวณ{SA_ACC}tx_stg_act_inforce_member.sum_insured_accident{SA_MUR}{SA_ACC} * ({PER_MUR} / 100){SA_LOADING}{SA_ACC} * ({PER_SPE_COV} / 100)
3. คำนวณ SR
- เตรียมข้อมูลคำนวณ SR ตาม Config Treaty หัวข้อ RI Conditionparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- นำ tx_stg_act_inforce_member.sum_insured_accident ของแต่ละรายสมาชิก มาตรวจสอบ Layer ดังนี้กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L1_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L1_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L1กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L2_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L2_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L2กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L3_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L3_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L3
- กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L1_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L1_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L1
- กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L2_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L2_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L2
- กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L3_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L3_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L3
- คำนวณ SR Accident จัดเก็บในกรณีที่สมาชิกรายนั้นอยู่ L1 ให้กำหนดค่า {L1_SR_ACC} = 0กรณีที่สมาชิกรายนั้นอยู่ L2 ให้คำนวณดังนี้{L2_SR_ACC} = ({L2_PER} / 100) * ({SA_ACC} - {L1_INSU_MAX})กรณีที่สมาชิกรายนั้นอยู่ L3 ให้คำนวณดังนี้{L3_SR_ACC} = ({L3_PER} / 100) * ({SA_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- กรณีที่สมาชิกรายนั้นอยู่ L1 ให้กำหนดค่า {L1_SR_ACC} = 0
- กรณีที่สมาชิกรายนั้นอยู่ L2 ให้คำนวณดังนี้{L2_SR_ACC} = ({L2_PER} / 100) * ({SA_ACC} - {L1_INSU_MAX})
- {L2_SR_ACC} = ({L2_PER} / 100) * ({SA_ACC} - {L1_INSU_MAX})
- กรณีที่สมาชิกรายนั้นอยู่ L3 ให้คำนวณดังนี้{L3_SR_ACC} = ({L3_PER} / 100) * ({SA_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- {L3_SR_ACC} = ({L3_PER} / 100) * ({SA_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- คำนวณ SR Murder & Assault จัดเก็บใน{L1_SR_MUR} = {L1_SR_ACC} * {PER_MUR} / 100{L2_SR_MUR} = {L2_SR_ACC} * {PER_MUR} / 100{L3_SR_MUR} = {L3_SR_ACC} * {PER_MUR} / 100
- {L1_SR_MUR} = {L1_SR_ACC} * {PER_MUR} / 100
- {L2_SR_MUR} = {L2_SR_ACC} * {PER_MUR} / 100
- {L3_SR_MUR} = {L3_SR_ACC} * {PER_MUR} / 100
- คำนวณ SR Loadings จัดเก็บใน{L1_SR_LOAD} = {L1_SR_ACC} * {PER_SPE_COV} / 100{L2_SR_LOAD} = {L2_SR_ACC} * {PER_SPE_COV} / 100{L3_SR_LOAD} = {L3_SR_ACC} * {PER_SPE_COV} / 100
- {L1_SR_LOAD} = {L1_SR_ACC} * {PER_SPE_COV} / 100
- {L2_SR_LOAD} = {L2_SR_ACC} * {PER_SPE_COV} / 100
- {L3_SR_LOAD} = {L3_SR_ACC} * {PER_SPE_COV} / 100
4. คำนวณ RI Premium
- เตรียมข้อมูลคำนวณ RI Premium ตาม Config Treaty ที่หัวข้อ ตั้งค่า RI Premium Rate
- {POLIC_COV} ที่ได้มาจาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล
- ค้นหา Rate ของสมาชิกแต่ละคนที่ cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 2tx_stg_est_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age {OCC} = cf_rig_treaty_prem_rate_dt.occ_classเก็บค่าลงใน {RI_PREM_RATE}
- cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 2tx_stg_est_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age {OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- ถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 2
- tx_stg_est_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age
- {OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- เก็บค่าลงใน {RI_PREM_RATE}
- คำนวณ RI Premium Accident{L1_RI_PREM_ACC} = Round({L1_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 ){L2_RI_PREM_ACC} = Round({L2_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 ){L3_RI_PREM_ACC} = Round({L3_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L1_RI_PREM_ACC} = Round({L1_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L2_RI_PREM_ACC} = Round({L2_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L3_RI_PREM_ACC} = Round({L3_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- ค้นหา ผลรวมเปอร์เซ็นต์ Loading ของความคุ้มครองทั้งหมด{PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}เก็บค่าลงใน {ALL_PER_LOAD}
- {PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}
- เก็บค่าลงใน {ALL_PER_LOAD}
- คำนวณ RI Premium Loadings{L1_RI_PREM_LOAD} = Round( (({L1_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 ){L2_RI_PREM_LOAD} = Round( (({L2_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 ){L3_RI_PREM_LOAD} = Round( (({L3_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- {L1_RI_PREM_LOAD} = Round( (({L1_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- {L2_RI_PREM_LOAD} = Round( (({L2_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- {L3_RI_PREM_LOAD} = Round( (({L3_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- คำนวณ RI Premium Discount MA{L1_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L1_RI_PREM_ACC}) / 100 , 2){L2_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L2_RI_PREM_ACC}) / 100 , 2){L3_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L3_RI_PREM_ACC}) / 100 , 2)
- {L1_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L1_RI_PREM_ACC}) / 100 , 2)
- {L2_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L2_RI_PREM_ACC}) / 100 , 2)
- {L3_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L3_RI_PREM_ACC}) / 100 , 2)
- คำนวณ RI Premium Discount Group Volumn{L1_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L1_RI_PREM_ACC} + {L1_RI_PREM_LOAD}) , 2){L2_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L2_RI_PREM_ACC} + {L2_RI_PREM_LOAD}) , 2){L3_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L3_RI_PREM_ACC} + {L3_RI_PREM_LOAD}) , 2)
- {L1_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L1_RI_PREM_ACC} + {L1_RI_PREM_LOAD}) , 2)
- {L2_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L2_RI_PREM_ACC} + {L2_RI_PREM_LOAD}) , 2)
- {L3_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (((1 − ({PER_DIS_MUR} / 100)) × ({L3_RI_PREM_ACC} + {L3_RI_PREM_LOAD}) , 2)
- คำนวณ RI Premium Discount{L1_SUM_DISC} = Round({L1_RI_PREM_DISC_MA} + {L1_RI_PREM_DISC_GV} , 2){L2_SUM_DISC} = Round({L2_RI_PREM_DISC_MA} + {L2_RI_PREM_DISC_GV} , 2){L3_SUM_DISC} = Round({L3_RI_PREM_DISC_MA} + {L3_RI_PREM_DISC_GV} , 2)
- {L1_SUM_DISC} = Round({L1_RI_PREM_DISC_MA} + {L1_RI_PREM_DISC_GV} , 2)
- {L2_SUM_DISC} = Round({L2_RI_PREM_DISC_MA} + {L2_RI_PREM_DISC_GV} , 2)
- {L3_SUM_DISC} = Round({L3_RI_PREM_DISC_MA} + {L3_RI_PREM_DISC_GV} , 2)
- คำนวณ RI Premium Total{RI_PREM_ACC} = {L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}{RI_PREM_LOAD} = {L1_RI_PREM_LOAD} + {L2_RI_PREM_LOAD} + {L3_RI_PREM_LOAD}{SUM_DISC} = {L1_SUM_DISC} + {L2_SUM_DISC} + {L3_SUM_DISC}{RI_PREM_TOT} = Round({RI_PREM_ACC} + {RI_PREM_LOAD} - {SUM_DISC} , 2)
- {RI_PREM_ACC} = {L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}
- {RI_PREM_LOAD} = {L1_RI_PREM_LOAD} + {L2_RI_PREM_LOAD} + {L3_RI_PREM_LOAD}
- {SUM_DISC} = {L1_SUM_DISC} + {L2_SUM_DISC} + {L3_SUM_DISC}
- {RI_PREM_TOT} = Round({RI_PREM_ACC} + {RI_PREM_LOAD} - {SUM_DISC} , 2)
DAI_Grp_Daiichi_Coins
GIB_Grp_Direct_EB
1. คำนวณ RI Commission
- ตรวจสอบค่า RI Commission Rate โดยนำ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล ตรวจสอบใน cf_rig_treaty_cond_hdcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- คำนวณ RI CommissionParameterคำนวณ{RI_COMM_L1_LIFE}{RI_L1_TL_PREM_LIFE} * {RI_COM_RATE}{RI_COMM_L2_LIFE}{RI_L2_TL_PREM_LIFE} * {RI_COM_RATE}{RI_COMM_L3_LIFE}{RI_L3_TL_PREM_LIFE} * {RI_COM_RATE}{TOT_RI_COMM_LIFE}{RI_COMM_L1_TL_PREM_LIFE} + {RI_COMM_L2_TL_PREM_LIFE} + {RI_COMM_L3_TL_PREM_LIFE}{RI_COMM_L1_ACC}{RI_L1_TL_PREM_ACC} * {RI_COM_RATE}{RI_COMM_L2_ACC}{RI_L2_TL_PREM_ACC} * {RI_COM_RATE}{RI_COMM_L3_ACC}{RI_L3_TL_PREM_ACC} * {RI_COM_RATE}{TOT_RI_COMM_ACC}{RI_COMM_L1_TL_PREM_ACC} + {RI_COMM_L2_TL_PREM_ACC} + {RI_COMM_L3_TL_PREM_ACC}
THREL_Grp_PA
1. คำนวณ RI Commission
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยนำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า RI Commission Rateเก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- คำนวณRound( ({RI_COM_RATE} / 100 ) × {RI_PREM_TOT} , 2 )เก็บค่าลงใน {RI_COM_ACC}
- Round( ({RI_COM_RATE} / 100 ) × {RI_PREM_TOT} , 2 )
- เก็บค่าลงใน {RI_COM_ACC}
THREL_Grp_PA
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
2. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_act_alteration โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_alteration.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี วันที่ดังนี้อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_alteration.document_date tx_stg_act_alteration.alteration_dateการดำเนินการอยู่ใน Quarter ประมวลผลและอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่ก่อน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ก่อน Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นเกิน 1 ปีจาก Quarter ที่ประมวลผลและก่อน/อยู่ใน/หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_alteration parametertx_stg_act_alteration {POLICY_NO}policy_no {RE_CODE_FULL}reinsure_no {DOC_DATE}document_dateวันที่ทำรายการ{AL_MOVE}alteration_movementประเภทสลักหลัง{AL_STATUS}alteration_statusสถานะสลักหลัง{AL_DATE}alteration_dateวันที่มีผลบังคับของสลักหลัง{MEM_EFF_DATE}member_effective_dateวันเริ่มคุ้มครองของสมาชิก{CERT_NO}cert_no {SEX}sex {AGE}age {INS_ACC_DEATH}sum_insured_accident {INS_ACC_DEATH_BEF}sum_insured_accident_before {INS_ACC_DEATH_AFT}sum_insured_accident_after tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_FROM}promise_date{COV_TO}end_dateดึงข้อมูลกรมธรรม์ที่ cf_rig_treaty_policy_hd โดยcf_rig_treaty_policy_hd.policy_no = {POLICY_NO}{AL_DATE} อยู่ในช่วง cf_rig_treaty_policy_hd.coverage_period_from และ cf_rig_treaty_policy_hd.coverage_period_to ของกรมธรรม์นั้นparametercf_rig_treaty_policy_hd{POLICY_NO}policy_no{COM_DATE}com_date{COV_FROM}coverage_period_from{COV_TO}coverage_period_to{NUM_DAY_YEAR}{COV_TO} - {COV_FROM}{POLICY_YEAR}policy_year{AGE_LIMIT}age_limit{OCC}occ_class{CER_INCOM}cert_no_incompliant{POLIC_COV}coverage{PER_ADD}percent_add{PER_MUR}murder_assault{PER_SPE_COV}special_coverage{PER_LOS_FING}loss_finger{PER_MOT}prem_motorcycle{PER_WAR}prem_war{PER_STRIKE}prem_strike_riot{PER_SPORT}prem_sports_activities{PER_AIR}prem_aircraft{PER_DIS_MUR}discount_murder_assualt{PER_DIS_VOL}discount_group_vol{PERIOD}เดือนและปีของ coverage_period_from{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from{POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_status{REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_policy_status
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_alteration.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_alteration.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี วันที่ดังนี้อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_alteration.document_date tx_stg_act_alteration.alteration_dateการดำเนินการอยู่ใน Quarter ประมวลผลและอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่ก่อน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ก่อน Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นเกิน 1 ปีจาก Quarter ที่ประมวลผลและก่อน/อยู่ใน/หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้น
- tx_stg_act_alteration.document_date tx_stg_act_alteration.alteration_dateการดำเนินการอยู่ใน Quarter ประมวลผลและอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่ก่อน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ก่อน Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นเกิน 1 ปีจาก Quarter ที่ประมวลผลและก่อน/อยู่ใน/หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้น
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_alteration parametertx_stg_act_alteration {POLICY_NO}policy_no {RE_CODE_FULL}reinsure_no {DOC_DATE}document_dateวันที่ทำรายการ{AL_MOVE}alteration_movementประเภทสลักหลัง{AL_STATUS}alteration_statusสถานะสลักหลัง{AL_DATE}alteration_dateวันที่มีผลบังคับของสลักหลัง{MEM_EFF_DATE}member_effective_dateวันเริ่มคุ้มครองของสมาชิก{CERT_NO}cert_no {SEX}sex {AGE}age {INS_ACC_DEATH}sum_insured_accident {INS_ACC_DEATH_BEF}sum_insured_accident_before {INS_ACC_DEATH_AFT}sum_insured_accident_after tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_FROM}promise_date{COV_TO}end_dateดึงข้อมูลกรมธรรม์ที่ cf_rig_treaty_policy_hd โดยcf_rig_treaty_policy_hd.policy_no = {POLICY_NO}{AL_DATE} อยู่ในช่วง cf_rig_treaty_policy_hd.coverage_period_from และ cf_rig_treaty_policy_hd.coverage_period_to ของกรมธรรม์นั้นparametercf_rig_treaty_policy_hd{POLICY_NO}policy_no{COM_DATE}com_date{COV_FROM}coverage_period_from{COV_TO}coverage_period_to{NUM_DAY_YEAR}{COV_TO} - {COV_FROM}{POLICY_YEAR}policy_year{AGE_LIMIT}age_limit{OCC}occ_class{CER_INCOM}cert_no_incompliant{POLIC_COV}coverage{PER_ADD}percent_add{PER_MUR}murder_assault{PER_SPE_COV}special_coverage{PER_LOS_FING}loss_finger{PER_MOT}prem_motorcycle{PER_WAR}prem_war{PER_STRIKE}prem_strike_riot{PER_SPORT}prem_sports_activities{PER_AIR}prem_aircraft{PER_DIS_MUR}discount_murder_assualt{PER_DIS_VOL}discount_group_vol{PERIOD}เดือนและปีของ coverage_period_from{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from{POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_status{REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_policy_status
- tx_stg_act_alteration parametertx_stg_act_alteration {POLICY_NO}policy_no {RE_CODE_FULL}reinsure_no {DOC_DATE}document_dateวันที่ทำรายการ{AL_MOVE}alteration_movementประเภทสลักหลัง{AL_STATUS}alteration_statusสถานะสลักหลัง{AL_DATE}alteration_dateวันที่มีผลบังคับของสลักหลัง{MEM_EFF_DATE}member_effective_dateวันเริ่มคุ้มครองของสมาชิก{CERT_NO}cert_no {SEX}sex {AGE}age {INS_ACC_DEATH}sum_insured_accident {INS_ACC_DEATH_BEF}sum_insured_accident_before {INS_ACC_DEATH_AFT}sum_insured_accident_after
- tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_FROM}promise_date{COV_TO}end_date
- ดึงข้อมูลกรมธรรม์ที่ cf_rig_treaty_policy_hd โดยcf_rig_treaty_policy_hd.policy_no = {POLICY_NO}{AL_DATE} อยู่ในช่วง cf_rig_treaty_policy_hd.coverage_period_from และ cf_rig_treaty_policy_hd.coverage_period_to ของกรมธรรม์นั้นparametercf_rig_treaty_policy_hd{POLICY_NO}policy_no{COM_DATE}com_date{COV_FROM}coverage_period_from{COV_TO}coverage_period_to{NUM_DAY_YEAR}{COV_TO} - {COV_FROM}{POLICY_YEAR}policy_year{AGE_LIMIT}age_limit{OCC}occ_class{CER_INCOM}cert_no_incompliant{POLIC_COV}coverage{PER_ADD}percent_add{PER_MUR}murder_assault{PER_SPE_COV}special_coverage{PER_LOS_FING}loss_finger{PER_MOT}prem_motorcycle{PER_WAR}prem_war{PER_STRIKE}prem_strike_riot{PER_SPORT}prem_sports_activities{PER_AIR}prem_aircraft{PER_DIS_MUR}discount_murder_assualt{PER_DIS_VOL}discount_group_vol{PERIOD}เดือนและปีของ coverage_period_from{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from{POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_status{REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_policy_status
- cf_rig_treaty_policy_hd.policy_no = {POLICY_NO}
- {AL_DATE} อยู่ในช่วง cf_rig_treaty_policy_hd.coverage_period_from และ cf_rig_treaty_policy_hd.coverage_period_to ของกรมธรรม์นั้นparametercf_rig_treaty_policy_hd{POLICY_NO}policy_no{COM_DATE}com_date{COV_FROM}coverage_period_from{COV_TO}coverage_period_to{NUM_DAY_YEAR}{COV_TO} - {COV_FROM}{POLICY_YEAR}policy_year{AGE_LIMIT}age_limit{OCC}occ_class{CER_INCOM}cert_no_incompliant{POLIC_COV}coverage{PER_ADD}percent_add{PER_MUR}murder_assault{PER_SPE_COV}special_coverage{PER_LOS_FING}loss_finger{PER_MOT}prem_motorcycle{PER_WAR}prem_war{PER_STRIKE}prem_strike_riot{PER_SPORT}prem_sports_activities{PER_AIR}prem_aircraft{PER_DIS_MUR}discount_murder_assualt{PER_DIS_VOL}discount_group_vol{PERIOD}เดือนและปีของ coverage_period_from{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from{POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_status{REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_policy_status
- แบ่งชุดประเภทข้อมูลดังนี้Alteration Type New Member / Addition{NM}{AL_MOVE} = ACancellation / Termination{CL}{AL_MOVE} = CIncreased Sum Assured{IC}{AL_MOVE} = NDecreased Sum Assured{DC}{AL_MOVE} = E
- Alteration Type New Member / Addition{NM}{AL_MOVE} = ACancellation / Termination{CL}{AL_MOVE} = CIncreased Sum Assured{IC}{AL_MOVE} = NDecreased Sum Assured{DC}{AL_MOVE} = E
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดย
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า Minimum Sum Assuredcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- นำ {POLICY_NO} ที่ได้จาก tx_stg_act_alteration{INS_ACC_DEATH} มากกว่าเท่ากับ {MIN_SUM_ASU}และ {AGE} น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
- {INS_ACC_DEATH} มากกว่าเท่ากับ {MIN_SUM_ASU}
- และ {AGE} น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
- กรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
- ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อ
- ถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual #006
- เตรียมข้อมูล Layer ดังนี้ โดยตรวจสอบตาม {COV_FROM} ของกรมธรรม์ที่กำลังคำนวณอยู่ ตรวจสอบกับวันที่ Effective Date From – Effective Date To ของรายการที่เป็น A ใน {CONDITION_ID}Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum / 1000{L1_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.maximum / 1000{L1_PER}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.percent_re{L2_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum / 1000{L2_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.maximum / 1000{L2_PER}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.percent_re{L3_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum / 1000{L3_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.maximum / 1000{L3_PER}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_MAX} - {L1_MAX} / 1000
- เตรียมข้อมูลคำนวณ RI Premium ตาม Config Treaty ที่หัวข้อ ตั้งค่า RI Premium Rate
- {POLIC_COV} ของกรมธรรม์
- ค้นหา Rate ของสมาชิกแต่ละคนที่cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 2{AGE} มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age{OCC} = cf_rig_treaty_prem_rate_dt.occ_classเก็บค่าลงใน {RI_PREM_RATE}ค้นหา ผลรวมเปอร์เซ็นต์ Loading ของความคุ้มครองทั้งหมดRound({PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}), 2 )เก็บค่าลงใน {ALL_PER_LOAD}
- cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 2{AGE} มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age{OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- ถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = 2
- {AGE} มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age
- {OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- เก็บค่าลงใน {RI_PREM_RATE}
- ค้นหา ผลรวมเปอร์เซ็นต์ Loading ของความคุ้มครองทั้งหมดRound({PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}), 2 )เก็บค่าลงใน {ALL_PER_LOAD}
- Round({PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}), 2 )
- เก็บค่าลงใน {ALL_PER_LOAD}
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยนำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_toตรวจสอบค่า RI Commission Rateเก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า RI Commission Rateเก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
3. Alteration - New Member และ Termination
- สำหรับชุดข้อมูล {NM} และ {CL} คำนวณ SUM INSURED และ SUM REINSUREDParameter คำนวณ{NUM_DAY_COV}{COV_TO} - {AL_DATE}{SUM_INS_ACC_DEATH}{INS_ACC_DEATH} / 1000{SUM_INS_MUR}{SUM_INS_ACC_DEATH} * ({PER_MUR} / 100){SUM_INS_LOAD}{SUM_INS_ACC_DEATH} * ({PER_SPE_COV} / 100)Parameterคำนวณค่าที่เก็บ{SUM_RE_INS_ACC_DEATH}ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L1_MIN} และ น้อยกว่าหรือเท่ากับ {L1_MAX} 0ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L2_MIN} และ น้อยกว่าหรือเท่ากับ {L2_MAX}({SUM_INS_ACC_DEATH} - {L1_MAX}) * ({L2_PER} / 100)ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L3_MIN} และ น้อยกว่าหรือเท่ากับ {L3_MAX}({L2_MAX} - {L1_MAX}) * ({L2_PER} / 100) + ({SUM_INS_ACC_DEATH} - {L2_MAX}) * ({L3_PER} / 100){SUM_RE_INS_MUR} {SUM_RE_INS_ACC_DEATH} * ({PER_MUR} / 100){SUM_RE_INS_LOAD} {SUM_RE_INS_ACC_DEATH} * ({PER_SPE_COV} / 100)คำนวณ REINSURANCE PREMIUMParameterคำนวณ{RE_PREM_ACC}Round({SUM_RE_INS_ACC_DEATH} * {RI_PREM_RATE} * {NUM_DAY_COV} / {NUM_DAY_YEAR}), 2 ){RE_PREM_LOAD}Round({SUM_RE_INS_LOAD} * {RI_PREM_RATE} * {ALL_PER_LOAD} * {NUM_DAY_COV} / {NUM_DAY_YEAR}), 2 ){RE_PREM_DIS_MA}({PER_DIS_MUR} / 100) * {RE_PREM_ACC}{RE_PREM_DIS_GV}({PER_DIS_VOL} / 100) * ((1 - {PER_DIS_MUR}) * {RE_PREM_ACC}) + {RE_PREM_LOAD}{SUM_DISC}Round({RE_PREM_DIS_MA} + {RE_PREM_DIS_GV}), 2 ){RE_COM}Round(({RE_PREM_ACC} + {RE_PREM_LOAD}) - ({SUM_DISC} * {RI_COM_RATE})), 2 )
- คำนวณ SUM INSURED และ SUM REINSUREDParameter คำนวณ{NUM_DAY_COV}{COV_TO} - {AL_DATE}{SUM_INS_ACC_DEATH}{INS_ACC_DEATH} / 1000{SUM_INS_MUR}{SUM_INS_ACC_DEATH} * ({PER_MUR} / 100){SUM_INS_LOAD}{SUM_INS_ACC_DEATH} * ({PER_SPE_COV} / 100)Parameterคำนวณค่าที่เก็บ{SUM_RE_INS_ACC_DEATH}ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L1_MIN} และ น้อยกว่าหรือเท่ากับ {L1_MAX} 0ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L2_MIN} และ น้อยกว่าหรือเท่ากับ {L2_MAX}({SUM_INS_ACC_DEATH} - {L1_MAX}) * ({L2_PER} / 100)ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L3_MIN} และ น้อยกว่าหรือเท่ากับ {L3_MAX}({L2_MAX} - {L1_MAX}) * ({L2_PER} / 100) + ({SUM_INS_ACC_DEATH} - {L2_MAX}) * ({L3_PER} / 100){SUM_RE_INS_MUR} {SUM_RE_INS_ACC_DEATH} * ({PER_MUR} / 100){SUM_RE_INS_LOAD} {SUM_RE_INS_ACC_DEATH} * ({PER_SPE_COV} / 100)
- คำนวณ REINSURANCE PREMIUMParameterคำนวณ{RE_PREM_ACC}Round({SUM_RE_INS_ACC_DEATH} * {RI_PREM_RATE} * {NUM_DAY_COV} / {NUM_DAY_YEAR}), 2 ){RE_PREM_LOAD}Round({SUM_RE_INS_LOAD} * {RI_PREM_RATE} * {ALL_PER_LOAD} * {NUM_DAY_COV} / {NUM_DAY_YEAR}), 2 ){RE_PREM_DIS_MA}({PER_DIS_MUR} / 100) * {RE_PREM_ACC}{RE_PREM_DIS_GV}({PER_DIS_VOL} / 100) * ((1 - {PER_DIS_MUR}) * {RE_PREM_ACC}) + {RE_PREM_LOAD}{SUM_DISC}Round({RE_PREM_DIS_MA} + {RE_PREM_DIS_GV}), 2 ){RE_COM}Round(({RE_PREM_ACC} + {RE_PREM_LOAD}) - ({SUM_DISC} * {RI_COM_RATE})), 2 )
3. Alteration - Increased SA และ Decreased SA
- สำหรับชุดข้อมูล {IC} และ {DC} Parameter คำนวณ{NUM_DAY_COV}{COV_TO} - {AL_DATE}
- คำนวณ SA / SR / RI Prem.(Before Change) ACCIDENT Parameter คำนวณ {SA_ACC_BEF}{INS_ACC_DEATH_BEF} / 1000 {SR_ACC_BEF}ถ้า {SA_ACC_BEF} มากกว่าหรือเท่ากับ {L1_MIN} และ น้อยกว่าหรือเท่ากับ {L1_MAX}0ถ้า {SA_ACC_BEF} มากกว่าหรือเท่ากับ {L2_MIN} และ น้อยกว่าหรือเท่ากับ {L2_MAX}({SA_ACC_BEF} - {L1_MAX}) * ({L2_PER} / 100)ถ้า {SA_ACC_BEF} มากกว่าหรือเท่ากับ {L3_MIN} และ น้อยกว่าหรือเท่ากับ {L3_MAX}({L2_MAX} - {L1_MAX}) * ({L2_PER} / 100) + ({SA_ACC_BEF} - {L2_MAX}) * ({L3_PER} / 100){RE_PREM_ACC_BEF}Round({SR_ACC_BEF} * {RI_PREM_RATE} * {NUM_DAY_COV} / {NUM_DAY_YEAR}), 2 ) {SA_MUR_BEF}{SA_ACC_BEF} * ({PER_MUR} / 100) {SR_MUR_BEF}{SR_ACC_BEF} * ({PER_MUR} / 100) {RE_PREM_MUR_BEF}0 {SA_LOAD_BEF}{SA_ACC_BEF} * ({PER_SPE_COV} / 100) {SR_LOAD_BEF}{SR_ACC_BEF} * ({PER_SPE_COV} / 100) {RE_PREM_LOAD_BEF}Round({SR_LOAD_BEF} * {RI_PREM_RATE} * {NUM_DAY_COV} / {NUM_DAY_YEAR}), 2 ) {SA_DIS_BEF}0 {SR_DIS_BEF}0 {RE_PREM_DIS_MA_BEF}({PER_DIS_MUR} / 100) * {RE_PREM_ACC_BEF} {RE_PREM_DIS_GV_BEF}({PER_DIS_VOL} / 100) * ((1 - {PER_DIS_MUR}) * {RE_PREM_ACC_BEF}) + {RE_PREM_LOAD_BEF} {SUM_DISC_BEF}{RE_PREM_DIS_MA_BEF} + {RE_PREM_DIS_GV_BEF}
- คำนวณ SA / SR / RI Prem.(After Change) ACCIDENTParameterคำนวณ {SA_ACC_AFT}{INS_ACC_DEATH_AFT} / 1000 {SR_ACC_AFT}ถ้า {SA_ACC_AFT} มากกว่าหรือเท่ากับ {L1_MIN} และ น้อยกว่าหรือเท่ากับ {L1_MAX}0ถ้า {SA_ACC_AFT} มากกว่าหรือเท่ากับ {L2_MIN} และ น้อยกว่าหรือเท่ากับ {L2_MAX}({SA_ACC_AFT} - {L1_MAX}) * ({L2_PER} / 100)ถ้า {SA_ACC_AFT} มากกว่าหรือเท่ากับ {L3_MIN} และ น้อยกว่าหรือเท่ากับ {L3_MAX}({L2_MAX} - {L1_MAX}) * ({L2_PER} / 100) + ({SA_ACC_AFT} - {L2_MAX}) * ({L3_PER} / 100){RE_PREM_ACC_AFT} Round({SR_ACC_AFT} * {RI_PREM_RATE} * {NUM_DAY_COV} / {NUM_DAY_YEAR}), 2 ) {SA_MUR_AFT}{SA_ACC_AFT} * ({PER_MUR} / 100) {SR_MUR_AFT}{SR_ACC_AFT} * ({PER_MUR} / 100) {RE_PREM_MUR_AFT}0 {SA_LOAD_AFT}{SA_ACC_AFT} * ({PER_SPE_COV} / 100) {SR_LOAD_AFT}{SR_ACC_AFT} * ({PER_SPE_COV} / 100) {RE_PREM_LOAD_AFT}Round({SR_LOAD_AFT} * {RI_PREM_RATE} * {NUM_DAY_COV} / {NUM_DAY_YEAR}), 2 ) {SA_DIS_AFT}0 {SR_DIS_AFT}0 {RE_PREM_DIS_MA_AFT}({PER_DIS_MUR} / 100) * {RE_PREM_ACC_AFT} {RE_PREM_DIS_GV_AFT}({PER_DIS_VOL} / 100) * ((1 - {PER_DIS_MUR}) * {RE_PREM_ACC_AFT}) + {RE_PREM_LOAD_AFT} {SUM_DISC_AFT}{RE_PREM_DIS_MA_AFT} + {RE_PREM_DIS_GV_AFT}
- คำนวณ SA / SR / RI Prem.(Increased) ACCIDENT Parameterคำนวณ {SA_INC_ACC}{SA_ACC_AFT} - {SA_ACC_BEF}{SR_INC_ACC}{SR_ACC_AFT} - {SR_ACC_BEF}{RE_PREM_INC_ACC }{RE_PREM_ACC_AFT} - {RE_PREM_ACC_BEF}
- คำนวณ SA / SR / RI Prem.(Increased) MURDER Parameterคำนวณ {SA_INC_MUR}{SA_MUR_AFT} - {SA_MUR_BEF}{SR_INC_MUR}{SR_MUR_AFT} - {SR_MUR_BEF}{RE_PREM_INC_MUR }0
- คำนวณ SA / SR / RI Prem.(Increased) LOADINGS Parameterคำนวณ {SA_INC_LOAD}{SA_LOAD_AFT} - {SA_LOAD_BEF}{SR_INC_LOAD}{SR_LOAD_AFT} - {SR_LOAD_BEF}{RE_PREM_INC_LOAD }{RE_PREM_LOAD_AFT} - {RE_PREM_LOAD_BEF}
- คำนวณ SA / SR / RI Prem.(Increased) DISCOUNT Parameterคำนวณ {SA_INC_DIS}0{SR_INC_DIS}0{RE_PREM_INC_DIS }{SUM_DISC_AFT} - {SUM_DISC_BEF}
- คำนวณ SA / SR / RI Prem.(Decreased) ACCIDENT Parameterคำนวณ {SA_DEC_ACC}{SA_ACC_BEF} - {SA_ACC_AFT}{SR_DEC_ACC}{SR_ACC_BEF} - {SR_ACC_AFT}{RE_PREM_DEC_ACC}{RE_PREM_ACC_BEF} - {RE_PREM_ACC_AFT}
- คำนวณ SA / SR / RI Prem.(Decreased) MURDER Parameterคำนวณ {SA_DEC_MUR}{SA_MUR_BEF} - {SA_MUR_AFT}{SR_DEC_MUR}{SR_MUR_BEF} - {SR_MUR_AFT}{RE_PREM_DEC_MUR}0
- คำนวณ SA / SR / RI Prem.(Decreased) LOADINGS Parameterคำนวณ {SA_DEC_LOAD}{SA_LOAD_BEF} - {SA_LOAD_AFT}{SR_DEC_LOAD}{SR_LOAD_BEF} - {SR_LOAD_AFT}{RE_PREM_DEC_LOAD}{RE_PREM_LOAD_BEF} - {RE_PREM_LOAD_AFT}
- คำนวณ SA / SR / RI Prem.(Decreased) DISCOUNT Parameterคำนวณ {SA_DEC_DIS}0{SR_DEC_DIS}0{RE_PREM_DEC_DIS}{SUM_DISC_BEF} - {SUM_DISC_AFT}
- คำนวณ Commission - Increased Parameterคำนวณ {RE_COM_INC}Round(({RE_PREM_INC_ACC } + {RE_PREM_INC_LOAD } - {RE_PREM_INC_DIS }) * {RI_COM_RATE}), 2 )
- คำนวณ Commission - Decreased Parameterคำนวณ {RE_COM_DEC}Round(({RE_PREM_DEC_ACC } + {RE_PREM_DEC_LOAD} - {RE_PREM_DEC_DIS}) * {RI_COM_RATE}), 2 )
DAI_Grp_Daiichi_Coins
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ดำเนินการต่อ
2. คัดเลือกกรมธรรม์
1. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_est_death_claim, tx_stg_est_death_claim, tx_stg_est_health_claim โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_est_health_claim.approved_dateดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death" {PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_health_claimparameterเงื่อนไขtx_stg_act_health_claim{POLICY_NO} policy_no{RE_CODE_FULL} reinsure_no{COV_FROM} effective_date{POLICY_YEAR} policy_year{CERT_NO} certific_cust_no{ATT_AGE} attn_age{SEX} sex{ACC_DATE} accident_date{APR_DATE} approve_date{CLAIM_TYPE} claim_type{CLAIM_IPD}ถ้า {CLAIM_TYPE} เท่ากับ IPDclaim_amount{CLAIM_OPD}ถ้า {CLAIM_TYPE} เท่ากับ OPDclaim_amount{CLAIM_DENTAL}ถ้า {CLAIM_TYPE} เท่ากับ Dentalclaim_amount{CLAIM_MED_ACC}ถ้า {CLAIM_TYPE} เท่ากับ MedAccidentclaim_amount{PAY_DATE} pay_date{CLAIM_CAUSE} claim_cause{INFROM_NO} notify_no{CLASS_NO} class_noนำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_est_health_claim.approved_date
- tx_stg_est_death_claim.approve_date
- tx_stg_est_tpd_claim.approved_date
- tx_stg_est_health_claim.approved_date
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death" {PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_health_claimparameterเงื่อนไขtx_stg_act_health_claim{POLICY_NO} policy_no{RE_CODE_FULL} reinsure_no{COV_FROM} effective_date{POLICY_YEAR} policy_year{CERT_NO} certific_cust_no{ATT_AGE} attn_age{SEX} sex{ACC_DATE} accident_date{APR_DATE} approve_date{CLAIM_TYPE} claim_type{CLAIM_IPD}ถ้า {CLAIM_TYPE} เท่ากับ IPDclaim_amount{CLAIM_OPD}ถ้า {CLAIM_TYPE} เท่ากับ OPDclaim_amount{CLAIM_DENTAL}ถ้า {CLAIM_TYPE} เท่ากับ Dentalclaim_amount{CLAIM_MED_ACC}ถ้า {CLAIM_TYPE} เท่ากับ MedAccidentclaim_amount{PAY_DATE} pay_date{CLAIM_CAUSE} claim_cause{INFROM_NO} notify_no{CLASS_NO} class_no
- tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death" {PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_act_health_claimparameterเงื่อนไขtx_stg_act_health_claim{POLICY_NO} policy_no{RE_CODE_FULL} reinsure_no{COV_FROM} effective_date{POLICY_YEAR} policy_year{CERT_NO} certific_cust_no{ATT_AGE} attn_age{SEX} sex{ACC_DATE} accident_date{APR_DATE} approve_date{CLAIM_TYPE} claim_type{CLAIM_IPD}ถ้า {CLAIM_TYPE} เท่ากับ IPDclaim_amount{CLAIM_OPD}ถ้า {CLAIM_TYPE} เท่ากับ OPDclaim_amount{CLAIM_DENTAL}ถ้า {CLAIM_TYPE} เท่ากับ Dentalclaim_amount{CLAIM_MED_ACC}ถ้า {CLAIM_TYPE} เท่ากับ MedAccidentclaim_amount{PAY_DATE} pay_date{CLAIM_CAUSE} claim_cause{INFROM_NO} notify_no{CLASS_NO} class_no
- นำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- ตรวจสอบ {RI_POL_STATUS} ที่ได้ ต้องไม่เท่ากับ Cancelกรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อกรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
- กรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อ
- กรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
2. ตรวจสอบค่า Percentage Reinsurance
- ตรวจสอบ Percentage Reinsurance ของแต่ละรายการเคลม (ตามระดับ Layer ของ Sum Assured ของสมาชิก)Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"นำ {COV_FROM} ของแต่ละกรมธรรม์ มาตรวจสอบว่าตรงกับรายการ {CONDITION_ID} ใด ด้วยการนำ {COV_FROM} เทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to{COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆFix ค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมทุกรายการparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re
- Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"
- นำ {COV_FROM} ของแต่ละกรมธรรม์ มาตรวจสอบว่าตรงกับรายการ {CONDITION_ID} ใด ด้วยการนำ {COV_FROM} เทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to{COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆ
- {COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆ
- Fix ค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมทุกรายการparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re
3. คำนวณ RI Claim แยกตามความคุ้มครอง
- ถ้าข้อมูลมาจาก tx_stg_est_death_claim{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ LifeRound({L1_PER} / 100) * {CLAIM_LIFE}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_LIFE}เท่ากับ Accident DeathRound({L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_ACC_DEATH}
- {CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ LifeRound({L1_PER} / 100) * {CLAIM_LIFE}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_LIFE}เท่ากับ Accident DeathRound({L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_ACC_DEATH}
- ถ้าข้อมูลมาจาก tx_stg_est_tpd_claim{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ TPDRound({L1_PER} / 100) * {CLAIM_TPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_TPD}เท่ากับ DismembermentRound({L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DISMEM}
- {CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ TPDRound({L1_PER} / 100) * {CLAIM_TPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_TPD}เท่ากับ DismembermentRound({L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DISMEM}
- ถ้าข้อมูลมาจาก tx_stg_est_tpd_claim{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ IPDRound({L1_PER} / 100) * {CLAIM_IPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_IPD}เท่ากับ OPDRound({L1_PER} / 100) * {CLAIM_OPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_OPD}เท่ากับ DentalRound({L1_PER} / 100) * {CLAIM_DENTAL}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DENTAL}เท่ากับ MedAccidentRound({L1_PER} / 100) * {CLAIM_MED_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_MED_ACC}
- {CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ IPDRound({L1_PER} / 100) * {CLAIM_IPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_IPD}เท่ากับ OPDRound({L1_PER} / 100) * {CLAIM_OPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_OPD}เท่ากับ DentalRound({L1_PER} / 100) * {CLAIM_DENTAL}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DENTAL}เท่ากับ MedAccidentRound({L1_PER} / 100) * {CLAIM_MED_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_MED_ACC}
GIB_Grp_Direct_EB
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
2. คัดเลือกกรมธรรม์
1. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_est_death_claim, tx_stg_est_death_claim, tx_stg_est_health_claim โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_est_health_claim.approved_datetx_stg_act_investigation_expense.reinsured_noดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Accident Death และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Dismemberment และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_statusนำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_est_health_claim.approved_datetx_stg_act_investigation_expense.reinsured_no
- tx_stg_est_death_claim.approve_date
- tx_stg_est_tpd_claim.approved_date
- tx_stg_est_health_claim.approved_date
- tx_stg_act_investigation_expense.reinsured_no
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Accident Death และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Dismemberment และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_status
- tx_stg_est_death_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Accident Death และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_est_tpd_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Dismemberment และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมาparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_status
- นำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- ตรวจสอบ {RI_POL_STATUS} ที่ได้ ต้องไม่เท่ากับ Cancelกรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อกรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
- กรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อ
- กรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
2. ตรวจสอบค่า Percentage Reinsurance
- ตรวจสอบ Percentage Reinsurance ของแต่ละรายการเคลม (ตามระดับ Layer ของ Sum Assured ของสมาชิก)Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"นำ {COV_FROM} ของแต่ละกรมธรรม์ มาตรวจสอบว่าตรงกับรายการ {CONDITION_ID} ใด ด้วยการนำ {COV_FROM} เทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to{COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆจากนั้นนำทุนของรายการเคลม ไปตรวจสอบว่าต้องใช้ข้อมูลใน Layer ใดถ้าข้อมูลมาจาก tx_stg_est_death_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ Life{LIFE_INS}เท่ากับ Accident Death{ACC_INS}ถ้าข้อมูลมาจาก tx_stg_est_tpd_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ TPD{TPD_INS}เท่ากับ Dismemberment{DISMEM_INS}ถ้าข้อมูลมาจาก tx_stg_act_investigation_expenseให้ดูว่าตรงกับรายการเคลมใน Table ไหน จากนั้นใช้ค่าทุนเดียวกันกับ Table Calimนำค่าทุนที่ได้ ไปตรวจสอบ Layer โดยการเปรียบเทียบกับ {XX_XXXX_MIN} และ {XX_XXXX_MAX}ถ้าตรงกับช่วงของ L1 ให้เก็บค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นถ้าตรงกับช่วงของ L2 ให้เก็บค่า {L2_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นถ้าตรงกับช่วงของ L3 ให้เก็บค่า {L3_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"
- นำ {COV_FROM} ของแต่ละกรมธรรม์ มาตรวจสอบว่าตรงกับรายการ {CONDITION_ID} ใด ด้วยการนำ {COV_FROM} เทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to{COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆ
- {COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆ
- จากนั้นนำทุนของรายการเคลม ไปตรวจสอบว่าต้องใช้ข้อมูลใน Layer ใดถ้าข้อมูลมาจาก tx_stg_est_death_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ Life{LIFE_INS}เท่ากับ Accident Death{ACC_INS}ถ้าข้อมูลมาจาก tx_stg_est_tpd_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ TPD{TPD_INS}เท่ากับ Dismemberment{DISMEM_INS}ถ้าข้อมูลมาจาก tx_stg_act_investigation_expenseให้ดูว่าตรงกับรายการเคลมใน Table ไหน จากนั้นใช้ค่าทุนเดียวกันกับ Table Calim
- ถ้าข้อมูลมาจาก tx_stg_est_death_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ Life{LIFE_INS}เท่ากับ Accident Death{ACC_INS}
- ถ้าข้อมูลมาจาก tx_stg_est_tpd_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ TPD{TPD_INS}เท่ากับ Dismemberment{DISMEM_INS}
- ถ้าข้อมูลมาจาก tx_stg_act_investigation_expenseให้ดูว่าตรงกับรายการเคลมใน Table ไหน จากนั้นใช้ค่าทุนเดียวกันกับ Table Calim
- ให้ดูว่าตรงกับรายการเคลมใน Table ไหน จากนั้นใช้ค่าทุนเดียวกันกับ Table Calim
- นำค่าทุนที่ได้ ไปตรวจสอบ Layer โดยการเปรียบเทียบกับ {XX_XXXX_MIN} และ {XX_XXXX_MAX}ถ้าตรงกับช่วงของ L1 ให้เก็บค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นถ้าตรงกับช่วงของ L2 ให้เก็บค่า {L2_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นถ้าตรงกับช่วงของ L3 ให้เก็บค่า {L3_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- ถ้าตรงกับช่วงของ L1 ให้เก็บค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้น
- ถ้าตรงกับช่วงของ L2 ให้เก็บค่า {L2_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้น
- ถ้าตรงกับช่วงของ L3 ให้เก็บค่า {L3_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้น
3. คำนวณ RI Claim แยกตามความคุ้มครอง
- ถ้าข้อมูลมาจาก tx_stg_est_death_claimแทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุน{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ LifeRound({LX_PER} / 100) * {CLAIM_LIFE}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_LIFE}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_LIFE}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_LIFE}เท่ากับ Accident DeathRound({LX_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_ACC_DEATH}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_ACC_DEATH}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_ACC_DEATH}
- แทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุน{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ LifeRound({LX_PER} / 100) * {CLAIM_LIFE}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_LIFE}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_LIFE}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_LIFE}เท่ากับ Accident DeathRound({LX_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_ACC_DEATH}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_ACC_DEATH}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_ACC_DEATH}
- ถ้าข้อมูลมาจาก tx_stg_est_tpd_claimแทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุน{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ DismembermentRound({LX_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DISMEM}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_DISMEM}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_DISMEM}
- แทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุน{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ DismembermentRound({LX_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DISMEM}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_DISMEM}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_DISMEM}
- ถ้าข้อมูลมาจาก tx_stg_act_investigation_expenseแทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุนคำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBRound({LX_PER} / 100) * {EXPEN_AMOUNT}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_INVEST}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_INVEST}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_INVEST}
- แทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุนคำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBRound({LX_PER} / 100) * {EXPEN_AMOUNT}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_INVEST}ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_INVEST}ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_INVEST}
4. คำนวณยอดผลรวมในระดับ Policy
| Parameter | คำนวณ |
| {RI_CLAIM_LIFE} | {L1_RI_CLAIM_LIFE} + {L2_RI_CLAIM_LIFE} + {L3_RI_CLAIM_LIFE} |
| {RI_CLAIM_ACC_DEATH} | {L1_RI_CLAIM_ACC_DEATH} + {L2_RI_CLAIM_ACC_DEATH} + {L3_RI_CLAIM_ACC_DEATH} |
| {RI_CLAIM_DISMEM} | {L1_RI_CLAIM_DISMEM} + {L2_RI_CLAIM_DISMEM} + {L3_RI_CLAIM_DISMEM} |
| {RI_CLAIM_INVEST} | {L1_RI_CLAIM_INVEST} + {L2_RI_CLAIM_INVEST} + {L3_RI_CLAIM_INVEST} |
THREL_Grp_PA
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "THREL_Grp_PA" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "THREL_Grp_PA" ให้ดำเนินการต่อ
2. คัดเลือกกรมธรรม์
1. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_est_death_claim, tx_stg_est_death_claim โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_act_investigation_expense.reinsured_noดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}เลือกเฉพาะรายการที่ {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_statusนำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_est_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_est_death_claim.approve_datetx_stg_est_tpd_claim.approved_datetx_stg_act_investigation_expense.reinsured_no
- tx_stg_est_death_claim.approve_date
- tx_stg_est_tpd_claim.approved_date
- tx_stg_act_investigation_expense.reinsured_no
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}เลือกเฉพาะรายการที่ {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_notx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_status
- tx_stg_est_death_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}เลือกเฉพาะรายการที่ {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_est_tpd_claimparametertx_stg_est_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no
- tx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลมตรงกับ tx_stg_est_death_claim กับ tx_stg_est_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense{DOC_NO}doc_no{POLICY_CODE}policy_code{POLICY_NO}policy_no{POLICY_YEAR}policy_year{COV_FROM}effective_date{CERT_NO}cert_no{CLAIM_NO}claim_no{APR_DATE}approve_date{EVENT_DATE}event_date{EXPEN_AMOUNT}expense_amount{DOC_DATE}doc_date{CLAIM_TYPE}claim_type{INFROM_DATE}inform_date{RE_CODE_FULL}reinsure_no{DOC_STATUS}doc_status
- นำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_est_all_policyparametertx_stg_est_all_policy{POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- ตรวจสอบ {RI_POL_STATUS} ที่ได้ ต้องไม่เท่ากับ Cancelกรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อกรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
- กรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อ
- กรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดย
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า Minimum Sum Assuredcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- นำ {POLICY_NO} ที่ได้จากรายการเคลมทึนของรายการเคลมต้อง มากกว่าเท่ากับ {MIN_SUM_ASU} โดยถ้า {CLAIM_TYPE} = Accident Death ให้ใช้ค่า {ACC_INS}ถ้า {CLAIM_TYPE} = TPD ให้ใช้ค่า {TPD_INS}ถ้า {CLAIM_TYPE} = Dismenberment ให้ใช้ค่า {DISMEM_INS}และ {AGE} น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ
- ทึนของรายการเคลมต้อง มากกว่าเท่ากับ {MIN_SUM_ASU} โดยถ้า {CLAIM_TYPE} = Accident Death ให้ใช้ค่า {ACC_INS}ถ้า {CLAIM_TYPE} = TPD ให้ใช้ค่า {TPD_INS}ถ้า {CLAIM_TYPE} = Dismenberment ให้ใช้ค่า {DISMEM_INS}
- ถ้า {CLAIM_TYPE} = Accident Death ให้ใช้ค่า {ACC_INS}
- ถ้า {CLAIM_TYPE} = TPD ให้ใช้ค่า {TPD_INS}
- ถ้า {CLAIM_TYPE} = Dismenberment ให้ใช้ค่า {DISMEM_INS}
- และ {AGE} น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ
- กรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ
- ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อ
- ถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ
- ดึงข้อมูลจาก cf_rig_treaty_cond_dt ที่ {CONDITION_ID} ตามที่ได้มา parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_INSU_MAX} - {L1_INSU_MAX}ตรวจสอบ {CLAIM_ACC} เพื่อแบ่ง Layer (Accident Death)parameterเงื่อนไขการแบ่งคำนวณ{SR_ACC_DEATH}ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0 ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}{CLAIM_ACC} - {L1_INSU_MAX} * ({L2_PER} / 100)ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_ACC} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]ตรวจสอบ {CLAIM_ACC} เพื่อแบ่ง Layer (Dismemberment)parameterเงื่อนไขการแบ่งคำนวณ{SR_DISMEM}ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX} 0ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX} {CLAIM_ACC} - {L1_L2_MID} * ({L2_PER} / 100)ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_ACC} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]ตรวจสอบ {CLAIM_TPD} เพื่อแบ่ง Layer (TPD)parameterเงื่อนไขการแบ่งคำนวณ{SR_TPD}ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}{CLAIM_TPD} - {L1_L2_MID} * ({L2_PER} / 100)ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_TPD} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]
- ตรวจสอบ {CLAIM_ACC} เพื่อแบ่ง Layer (Accident Death)parameterเงื่อนไขการแบ่งคำนวณ{SR_ACC_DEATH}ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0 ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}{CLAIM_ACC} - {L1_INSU_MAX} * ({L2_PER} / 100)ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_ACC} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]
- ตรวจสอบ {CLAIM_ACC} เพื่อแบ่ง Layer (Dismemberment)parameterเงื่อนไขการแบ่งคำนวณ{SR_DISMEM}ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX} 0ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX} {CLAIM_ACC} - {L1_L2_MID} * ({L2_PER} / 100)ถ้า {CLAIM_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_ACC} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]
- ตรวจสอบ {CLAIM_TPD} เพื่อแบ่ง Layer (TPD)parameterเงื่อนไขการแบ่งคำนวณ{SR_TPD}ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}{CLAIM_TPD} - {L1_L2_MID} * ({L2_PER} / 100)ถ้า {CLAIM_TPD} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}[{CLAIM_TPD} - {L2_INSU_MAX} * ({L3_PER} / 100)] + [({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)]
2. คำนวณ RI Claim
- คำนวณ Reinsurer's Share Claimparameterคำนวณ{RE_CLAIM_ACC_DEATH}{SR_ACC_DEATH} * ({CLAIM_ACC} / {ACC_INS}){RE_CLAIM_DISMEM}{SR_DISMEM} * ({CLAIM_ACC} / {DISMEM_INS}){RE_CLAIM_TPD}{SR_TPD} * ({CLAIM_ACC} / {TPD_INS})
- คำนวณ Reinsurer's Share Investigation Expenseparameterคำนวณ{RE_INV_ACC_DEATH}{SR_ACC_DEATH} * ({EXPEN_AMOUNT} / {ACC_INS}){RE_INV_DISMEM}{SR_DISMEM} * ({EXPEN_AMOUNT} / {DISMEM_INS}){RE_INV_TPD}{SR_TPD} * ({EXPEN_AMOUNT} / {TPD_INS})
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
1. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_act_exp_refund โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_exp_refund.reinsur_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี effective_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_exp_refund.effective_dateดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_exp_refundparametertx_stg_act_exp_refund{POLICY_NO}policy_no{COV_FROM}effective_date{COV_TO}end_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsur_no{PAID_STATUS}paid_status{PER_EXP_REFUND}percent_exp_refund{PER_EXPENSE}percent_expense{PREMIUM_LIFE}premium_life{PREMIUM_ACC}premium_accident{PREMIUM_TPD}premium_tpd{TOT_PREMIUM}total_premium{COV_TYPE}ถ้า {PREMIUM_LIFE} > 0 เก็บค่า Life ถ้า {PREMIUM_ACC} > 0 เก็บค่า Accident {CLAIM}claim{EX_REFUND_PREVY}exp_refund_previous_year{EX_REFUND}exp_refund{PERIOD_BEGIN_DATE}period_begin_date{PERIOD_END_DATE}period_end_datetx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_deathtx_stg_est_all_policy (ต่อรายการ)parametertx_stg_est_all_policy{POLICY_NO}policy_no{POLICY_NO_FULL}reinsur_no{COM_DATE}1) ใช้วันที่และเดือนจาก Commencement Date จาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_exp_refund.reinsur_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_exp_refund.reinsur_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี effective_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_exp_refund.effective_date
- tx_stg_act_exp_refund.effective_date
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_exp_refundparametertx_stg_act_exp_refund{POLICY_NO}policy_no{COV_FROM}effective_date{COV_TO}end_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsur_no{PAID_STATUS}paid_status{PER_EXP_REFUND}percent_exp_refund{PER_EXPENSE}percent_expense{PREMIUM_LIFE}premium_life{PREMIUM_ACC}premium_accident{PREMIUM_TPD}premium_tpd{TOT_PREMIUM}total_premium{COV_TYPE}ถ้า {PREMIUM_LIFE} > 0 เก็บค่า Life ถ้า {PREMIUM_ACC} > 0 เก็บค่า Accident {CLAIM}claim{EX_REFUND_PREVY}exp_refund_previous_year{EX_REFUND}exp_refund{PERIOD_BEGIN_DATE}period_begin_date{PERIOD_END_DATE}period_end_datetx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_deathtx_stg_est_all_policy (ต่อรายการ)parametertx_stg_est_all_policy{POLICY_NO}policy_no{POLICY_NO_FULL}reinsur_no{COM_DATE}1) ใช้วันที่และเดือนจาก Commencement Date จาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- tx_stg_act_exp_refundparametertx_stg_act_exp_refund{POLICY_NO}policy_no{COV_FROM}effective_date{COV_TO}end_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsur_no{PAID_STATUS}paid_status{PER_EXP_REFUND}percent_exp_refund{PER_EXPENSE}percent_expense{PREMIUM_LIFE}premium_life{PREMIUM_ACC}premium_accident{PREMIUM_TPD}premium_tpd{TOT_PREMIUM}total_premium{COV_TYPE}ถ้า {PREMIUM_LIFE} > 0 เก็บค่า Life ถ้า {PREMIUM_ACC} > 0 เก็บค่า Accident {CLAIM}claim{EX_REFUND_PREVY}exp_refund_previous_year{EX_REFUND}exp_refund{PERIOD_BEGIN_DATE}period_begin_date{PERIOD_END_DATE}period_end_date
- tx_stg_act_inforce_policyparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death
- tx_stg_est_all_policy (ต่อรายการ)parametertx_stg_est_all_policy{POLICY_NO}policy_no{POLICY_NO_FULL}reinsur_no{COM_DATE}1) ใช้วันที่และเดือนจาก Commencement Date จาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- ตรวจสอบ {RI_POL_STATUS} ที่ได้ ต้องไม่เท่ากับ Lapseกรณีไม่เท่ากับ Lapse จะนำไปประมวลผลต่อกรณีเท่ากับ Lapse จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
- กรณีไม่เท่ากับ Lapse จะนำไปประมวลผลต่อ
- กรณีเท่ากับ Lapse จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate #007
3. ดึงข้อมูลกรมธรรม์ในรอบที่มีการคำนวณ Experience Refund
| parameter |  |
| {POLICY_NO} |  |
| {COV_FROM} | promise_date |
| {COV_TO} | end_date |
| {NET_RE_PREM_LIFE} | {TOT_RI_TL_PREM_LIFE}ดึงค่าจากส่วน reinsurance ค่า TL Premium: Life เลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ที่สิ้นสุดความคุ้มครอง |
| {NET_RE_PREM_ACC} | {TOT_RI_TL_PREM_ACC}ดึงค่าจากส่วน reinsurance ค่า TL Premium: AD&Dเลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ที่สิ้นสุดความคุ้มครอง |
| {RE_COMM_LIFE} | {TOT_RI_COMM_LIFE}ดึงค่าจากส่วน reinsurance ค่า RI Commission: Lifeเลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ที่สิ้นสุดความคุ้มครอง |
| {RE_COMM_ACC} | {TOT_RI_COMM_ACC}ดึงค่าจากส่วน reinsurance ค่า RI Commission: AD&Dเลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ที่สิ้นสุดความคุ้มครอง |
4. คำนวณ Experience Refund
| parameter |  |
| {OER_PAID_LIFE} | {PREMIUM_LIFE} * (1 - ({PER_EXPENSE} / 100) * ({PER_EXP_REFUND} / 100) |
| {OER_PAID_ACC} | {PREMIUM_ACC} * (1 - ({PER_EXPENSE} / 100) * ({PER_EXP_REFUND} / 100) |
| {NET_PREM_COM_LIFE} | {NET_RE_PREM_LIFE} - {RE_COMM_LIFE} |
| {NET_PREM_COM_ACC} | {NET_RE_PREM_ACC} - {RE_COMM_ACC} |
| {RE_EXP_REFUND_LIFE} | ถ้า {OER_PAID_LIFE} ≤ {NET_PREM_COM_LIFE} ให้ใช้ค่า {OER_PAID_LIFE}นอกเหนือจากนั้นให้{NET_PREM_COM_LIFE} / {PREMIUM_LIFE} * {OER_PAID_LIFE} |
| {RE_EXP_REFUND_ACC} | ถ้า {OER_PAID_ACC} ≤ {NET_PREM_COM_ACC} ให้ใช้ค่า {OER_PAID_ACC}นอกเหนือจากนั้นให้{NET_PREM_COM_ACC} / {PREMIUM_ACC} * {OER_PAID_ACC} |

##### /*<![CDATA[*/
div.rbtoc1782955815982 {padding: 0px;}
div.rbtoc1782955815982 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955815982 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/

tx_rig_act_hd
tx_rig_act_policy_hd
tx_rig_act_policy_layer
tx_rig_act_pol_mem
tx_rig_act_claim_mem
tx_rig_act_alter_mem
tx_rig_act_bdr_new_renew
tx_rig_act_bdr_pol_mem
tx_rig_act_bdr_claim
tx_rig_act_bdr_claim_mem
tx_rig_act_bdr_alter
tx_rig_act_bdr_alter_mem
tx_rig_policy_base

##### tx_rig_act_hd
tx_rig_act_hd
| No. | Attribute Name |  |
| 1 | rig_act_hd_id | running no. |
| 2 | cf_reinsurer_id | cf_reinsurer.cf_reinsurer_id ของ Treaty ที่กำลังประมวลผล |
| 3 | cf_treaty_id | cf_rig_treaty.cf_reinsurer_id ของ Treaty ที่กำลังประมวลผล |
| 4 | treaty_code | {TREATY_CODE} |
| 5 | closing_quarter | Quarter ที่ประมวลผล ex. 2026Q1 |
| 6 | quarter_year | ปีประมวลผล ex. 2026 |
| 7 | quarter | quarter ประมวลผล ex. 1 |
| 8 | status | A |
| 9 | edw_status | NULL |
| 10 | edw_status_desc | NULL |
| 11 | ri_std_hd_id | NULL |
| 12 | mps_status | NULL |
| 13 | mps_status_desc | NULL |
| 14 | ri_std_hd_id_oic | NULL |
| 15 | ri_premium | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 16 | ri_commission | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 17 | claim_recovery | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 18 | sum_pc_current_treaty | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 19 | due_to | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 20 | remark | กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก Log Error ที่ระบบแจ้ง |
| 21 | usage_status | เมื่อสร้างรายการครั้งแรกให้บันทึก A |
| 22 | ri_method | {TREATY_CODE} ค้นหาข้อมูลใน cf_rig_treatyนำ cf_rig_treaty.cf_rig_treaty_id ค้นหา cf_rig_treaty_cond_hd.ri_method ที่cf_rig_treaty_cond_hd.cf_rig_treaty_id = cf_rig_treaty.cf_rig_treaty_idแปลงค่า cf_rig_treaty_cond_hd.ri_method ที่ได้ โดยดูจาก Lookup ที่ cf_lookup_catalog.parent_id = 1000600 |
| 23 | sum_records | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 24 | period | ปีและเดือนของงวดทำรายการ ณ วันที่ run actua |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_act_policy_hd
tx_rig_act_policy_hd
Group ข้อมูลตาม policy_no , effective_date , data_quarter
| No. | Attribute Name |  |  |
| 1 | rig_act_policy_hd_id | running no. |  |
| 2 | rig_act_hd_id | tx_rig_act_hd.rig_act_hd_id |  |
| 3 | policy_no | {POLICY_NO} |  |
| 4 | reinsurer_no | {RE_CODE_FULL} |  |
| 5 | ri_com_date | {COM_DATE} |  |
| 6 | first_date | treaty_code = "GIB_Grp_Direct_EB"{FIRST_DATE}treaty_code <> "GIB_Grp_Direct_EB"{COM_DATE} |  |
| 7 | effective_date | {COV_FROM} หรือ {EFF_DATE}ในกรณีที่เป็น {POLICY_NO} เดียวกัน และมีค่า {COV_FROM} หรือ {EFF_DATE} เท่ากัน ไม่ต้องสร้างรายการเพิ่ม |  |
| 8 | mode_pay | ถ้า treaty_code = "GIB_Grp_Direct_EB"{PAY_MODE_GIB}treaty_code <> "GIB_Grp_Direct_EB"{PAY_MODE} |  |
| 9 | policy_year | treaty_code = "GIB_Grp_Direct_EB"{POLICY_YEAR_RI} treaty_code <> "GIB_Grp_Direct_EB"{POLICY_YEAR} |  |
| 10 | data_quarter | {DATA_QUT} |  |
| 11 | period | {PERIOD} |  |
| 12 | policy_status | treaty_code = "GIB_Grp_Direct_EB"นำค่า {GIB_RI_STATUS} ที่ได้ แปลงค่าใน cf_lookup_catalogที่ cf_lookup_catalog.parent_id = 1003300ถ้า {GIB_RI_STATUS} = cf_lookup_catalog.lookup_key ใดให้นำ cf_lookup_catalog.description มาเก็บข้อมูลtreaty_code <> "GIB_Grp_Direct_EB"{POLICY_STATUS} |  |
| 13 | report_policy_status | {REPORT_POL_STATUS} |  |
| 14 | ri_policy_status | {RI_POL_STATUS} |  |
| 15 | pol_name | {POL_NAME} |  |
| 16 | nob | {NOB} |  |
| 17 | renew_lapse_date | treaty_code = "GIB_Grp_Direct_EB"ถ้า {GIB_RI_STATUS} = New Business หรือ Inforceให้บันทึก {COV_FROM}ถ้า {GIB_RI_STATUS} = Lapsedให้บันทึก {LAPSE_DATE} treaty_code <> "GIB_Grp_Direct_EB"NULL |  |
| 18 | policy_period | {PERIOD} |  |
| 19 | sale_option | {SALE_OPTION} |  |
| 20 | sale_channel_code | {SALE_CHANEL} |  |
| 21 | code_name_pol | {CODE_NAME_POL} |  |
| 22 | policy_ri_period | treaty_code = "GIB_Grp_Direct_EB"ถ้า {GIB_RI_STATUS} = New Business หรือ Inforceบันทึก "{COV_FROM}" + " - " + {COV_TO} ตัวอย่าง 01/01/2025 - 31/12/2025ถ้า {GIB_RI_STATUS} = Lapsedบันทึก "{COV_FROM}" + " - " + ({LAPSE_DATE} - 1 วัน) ตัวอย่าง 01/02/2025 - 31/12/2025treaty_code <> "GIB_Grp_Direct_EB"บันทึก "{COV_FROM}" + " - " + {COV_TO} ตัวอย่าง 01/01/2025 - 31/12/2025(suthanee.sa 10/04/2026) |  |
| 23 | expire_date | {EXPIRE_DATE} (suthanee.sa 24/03/2026) |  |
| 24 | f_receipt_date | {F_RECIEPT} (suthanee.sa 24/03/2026) |  |
| 25 | full_year | {FULL_YEAR} (suthanee.sa 21/04/2026) |  |
|  |  |  |  |
| 1 | number_of_mem_life | {MEM_LIFE} | จากกระบวน การคำนวณ Experience Refund (ACT) เฉพาะ treaty_code = "GIB_Grp_Direct_EB" โดยในกรมธรรม์เดียวกัน สามารถคำนวณได้ทั้ง Life และ Accident ถ้ามีค่าในความคุ้มครองใด ให้ลงได้ใน record เดียวกัน |
| 2 | number_of_mem_acc | {MEM_ACC_DEATH} |
| 3 | ex_refund_rate_life | ถ้า {COV_TYPE} = Life{PER_EXP_REFUND} |
| 4 | ex_refund_rate_acc | ถ้า {COV_TYPE} = Accident{PER_EXP_REFUND} |
| 5 | ex_pol_year_life | ถ้า {COV_TYPE} = Life{PER_EXPENSE} |
| 6 | ex_pol_year_acc | ถ้า {COV_TYPE} = Accident{PER_EXPENSE} |
| 7 | gross_prem_life | {PREMIUM_LIFE} |
| 8 | gross_prem_acc | {PREMIUM_ACC} |
| 9 | claim_paid_year_life | ถ้า {COV_TYPE} = Lifeให้บันทึก {CLAIM_PAID_POL} |
| 10 | claim_paid_year_acc | ถ้า {COV_TYPE} = Accidentให้บันทึก {CLAIM_PAID_POL} |
| 11 | ori_ex_refund_life | {OER_PAID_LIFE} |
| 12 | ori_ex_refund_acc | {OER_PAID_ACC} |
| 13 | net_re_prem_life | {NET_RE_PREM_LIFE} |
| 14 | net_re_prem_acc | {NET_RE_PREM_ACC} |
| 15 | re_com_life | {RE_COMM_LIFE} |
| 16 | re_com_acc | {RE_COMM_ACC} |
| 17 | re_ex_refund_life | {RE_EXP_REFUND_LIFE} |
| 18 | re_ex_refund_acc | {RE_EXP_REFUND_ACC} |
|  |  |  |  |
| 1 | created_date | now() |  |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |  |
| 3 | updated_date | NULL |  |
| 4 | updated_by | NULL |  |

##### tx_rig_act_policy_layer
tx_rig_act_policy_layer
| No. | Attribute Name |  |  |
| 1 | rig_act_policy_layer_id | running no. |  |
| 2 | rig_act_policy_hd_id | tx_rig_act_policy_hd.rig_act_policy_hd_id |  |
| 3 | policy_no | {POLICY_NO} |  |
| 4 | level | สร้างรายการ 3 รายการ เสมอL1L2L3 |  |
| ถ้าดึงข้อมูลจาก Tabletx_rig_act_pol_memtx_rig_act_claim_memtx_rig_act_alter_memให้รวมข้อมูลตาม levelถ้าเป็น parameter ให้เลือกลงข้อมูลตาม Layer (LX) |
| 1 | premium_rate_life | treaty_code = "GIB_Grp_Direct_EB"บันทึกเฉพาะ Level 1{PREM_RATE_LIFE_REPORT} treaty_code = "THREL_Grp_PA"0 |  |
| 2 | premium_rate_add | treaty_code = "GIB_Grp_Direct_EB"บันทึกเฉพาะ Level 1{PREM_RATE_ACC_REPORT} treaty_code = "THREL_Grp_PA"tx_rig_act_pol_mem.ri_rate (ตาม Layer ของทุนของสมาชิกคนนั้น) |  |
| 3 | member_life | treaty_code = "GIB_Grp_Direct_EB"กรณี Level 1 = {L1_MEM_LIFE}กรณี Level 2 = {L2_MEM_LIFE}กรณี Level 3 = {L3_MEM_LIFE} treaty_code = "THREL_Grp_PA"0 |  |
| 4 | member_add | treaty_code = "GIB_Grp_Direct_EB"กรณี Level 1 = {L1_MEM_ACC}กรณี Level 2 = {L2_MEM_ACC}กรณี Level 3 = {L3_MEM_ACC} treaty_code = "THREL_Grp_PA"นับจำนวนสมาชิกตาม tx_rig_act_pol_mem.cession_no ของแต่ละ Layer |  |
| 5 | ori_sa_life | treaty_code = "GIB_Grp_Direct_EB"กรณี Level 1 = {L1_SA_LIFE}กรณี Level 2 = {L2_SA_LIFE}กรณี Level 3 = {L3_SA_LIFE} treaty_code = "THREL_Grp_PA"ผลรวมของ tx_rig_act_pol_mem.sa_life ของทุกคน |  |
| 6 | ori_sa_add | treaty_code = "GIB_Grp_Direct_EB"กรณี Level 1 = {L1_SA_ACC}กรณี Level 2 = {L2_SA_ACC}กรณี Level 3 = {L3_SA_ACC} treaty_code = "THREL_Grp_PA"ผลรวมของ tx_rig_act_pol_mem.sa_acc ทุกคน |  |
| 7 | ori_sa_tpd | 0 |  |
| 8 | ori_sa_ttd | 0 |  |
| 9 | ori_sa_med | 0 |  |
| 10 | ori_nb_prem_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ policy_year = 1{L1_PREM_LIFE}{L2_PREM_LIFE}{L3_PREM_LIFE} treaty_code = "THREL_Grp_PA"0 |  |
| 11 | ori_nb_prem_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ policy_year = 1{L1_PREM_ACC}{L2_PREM_ACC}{L3_PREM_ACC} treaty_code = "THREL_Grp_PA"0 |  |
| 12 | ori_nb_prem_tpd | 0 |  |
| 13 | ori_nb_prem_ttd | 0 |  |
| 14 | ori_nb_prem_med | 0 |  |
| 15 | ori_ren_prem_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ policy_year > 1{L1_PREM_LIFE}{L2_PREM_LIFE}{L3_PREM_LIFE} treaty_code = "THREL_Grp_PA"0 |  |
| 16 | ori_ren_prem_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ policy_year > 1{L1_PREM_ACC}{L2_PREM_ACC}{L3_PREM_ACC} treaty_code = "THREL_Grp_PA"0 |  |
| 17 | ori_ren_prem_tpd | 0 |  |
| 18 | ori_ren_prem_ttd | 0 |  |
| 19 | ori_ren_prem_med | 0 |  |
| 20 | ori_rev_prem_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1{SUM_REVIVAL_PREM_LIFE} |  |
| 21 | ori_rev_prem_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1{SUM_REVIVAL_PREM_ACC} |  |
| 22 | ori_refund_prem_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1{SUM_REFUND_PREM_LIFE}(ถ้าค่าติดลบต้องเก็บเป็นค่า + เสมอ) |  |
| 23 | ori_refund_prem_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1{SUM_REFUND_PREM_ACC}(ถ้าค่าติดลบต้องเก็บเป็นค่า + เสมอ) |  |
| 24 | ori_refund_prem_tpd | 0 |  |
| 25 | ori_refund_prem_ttd | 0 |  |
| 26 | ori_refund_prem_med | 0 |  |
| 27 | ori_tl_prem_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1ori_nb_prem_life + ori_ren_prem_life + ori_rev_prem_life - ori_refund_prem_life(ถ้าค่าติดลบ เก็บเป็นค่า - ) |  |
| 28 | ori_tl_prem_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1ori_nb_prem_add + ori_ren_prem_add + ori_rev_prem_add - ori_refund_prem_add(ถ้าค่าติดลบ เก็บเป็นค่า - ) |  |
| 29 | ori_tl_prem_tpd | 0 |  |
| 30 | ori_tl_prem_ttd | 0 |  |
| 31 | ori_tl_prem_med | 0 |  |
| 32 | ori_claim_paid_life | tx_rig_act_claim_mem.amo_paid_life ของทุกคน |  |
| 33 | ori_claim_paid_add | tx_rig_act_claim_mem.amo_paid_acc ของทุกคน |  |
| 34 | ori_claim_paid_dismem | tx_rig_act_claim_mem.amo_paid_dismem ของทุกคน |  |
| 35 | ori_claim_paid_tpd | tx_rig_act_claim_mem.amo_paid_tpd ของทุกคน |  |
| 36 | ori_claim_paid_ipd | tx_rig_act_claim_mem.amo_paid_ipd ของทุกคน |  |
| 37 | ori_claim_paid_opd | tx_rig_act_claim_mem.amo_paid_opd ของทุกคน |  |
| 38 | ori_claim_paid_dental | tx_rig_act_claim_mem.amo_paid_dental ของทุกคน |  |
| 39 | ori_claim_paid_med_acc | tx_rig_act_claim_mem.amo_paid_med_acc ของทุกคน |  |
| 40 | ori_claim_paid_di | 0 |  |
| 41 | ori_inv | tx_rig_act_claim_mem.amo_paid_inv ของทุกคน |  |
| 42 | ori_ex_refund_paid_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ level = 1ถ้า {COV_TYPE} = Life{OER_PAID_LIFE} |  |
| 43 | ori_ex_refund_paid_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ level = 1ถ้า {COV_TYPE} = Accident{OER_PAID_ACC} |  |
| 44 | re_sr_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคน{L1_SR_LIFE} {L2_SR_LIFE} {L3_SR_LIFE} treaty_code = "THREL_Grp_PA"ผลรวมของ tx_rig_act_pol_mem.sr_life ของทุกคน |  |
| 45 | re_sr_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคน{L1_SR_ACC} {L2_SR_ACC} {L3_SR_ACC} treaty_code = "THREL_Grp_PA"ผลรวมของ tx_rig_act_pol_mem.sr_acc ของทุกคน |  |
| 46 | re_nb_prem_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ policy_year = 1{L1_RI_PREM_LIFE}{L2_RI_PREM_LIFE}{L3_RI_PREM_LIFE} treaty_code = "THREL_Grp_PA"เฉพาะ policy_year = 10 |  |
| 47 | re_nb_prem_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ policy_year = 1{L1_RI_PREM_ACC}{L2_RI_PREM_ACC}{L3_RI_PREM_ACC} treaty_code = "THREL_Grp_PA"เฉพาะ policy_year = 1ผลรวมของ tx_rig_act_pol_mem.tot_prem ทุกคน |  |
| 48 | re_ren_prem_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ policy_year > 1{L1_RI_PREM_LIFE}{L2_RI_PREM_LIFE}{L3_RI_PREM_LIFE} treaty_code = "THREL_Grp_PA"เฉพาะ policy_year > 10 |  |
| 49 | re_ren_prem_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ policy_year > 1{L1_RI_PREM_ACC}{L2_RI_PREM_ACC}{L3_RI_PREM_ACC} treaty_code = "THREL_Grp_PA"เฉพาะ policy_year > 1ผลรวมของ tx_rig_act_pol_mem.tot_prem ทุกคน |  |
| 50 | re_rev_prem_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ level = 1 {RI_SUM_REVIVAL_PREM_LIFE} |  |
| 51 | re_rev_prem_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ level = 1 {RI_SUM_REVIVAL_PREM_ACC} treaty_code = "THREL_Grp_PA"รวมค่าตาม Field จาก tx_rig_act_alter_mem เฉพาะรายการที่ tx_rig_act_alter_mem.alter_type = Addition และ IncreaseSA กรณี tx_rig_act_alter_mem.alter_type = Addition // Round(tx_rig_act_alter_mem.(re_prem_acc + re_prem_load - re_prem_dis),2)กรณี tx_rig_act_alter_mem.alter_type = IncreaseSA // Round(tx_rig_act_alter_mem.(re_prem_acc_diff + re_prem_load_diff - re_prem_dis_diff),2)รวมสองค่าเข้าด้วยกัน |  |
| 52 | re_rev_prem_tpd | 0 |  |
| 53 | re_rev_prem_ttd | 0 |  |
| 54 | re_rev_prem_med | 0 |  |
| 55 | re_refund_prem_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ level = 1{RI_SUM_REFUND_PREM_LIFE}(ถ้าค่าติดลบต้องเก็บเป็นค่า + เสมอ) |  |
| 56 | re_refund_prem_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคน{RI_SUM_REFUND_PREM_ACC}(ถ้าค่าติดลบต้องเก็บเป็นค่า + เสมอ) treaty_code = "THREL_Grp_PA"รวมค่าตาม Field จาก tx_rig_act_alter_mem เฉพาะรายการที่ tx_rig_act_alter_mem.alter_type = Termination และ DecreaseSAกรณี tx_rig_act_alter_mem.alter_type = Termination // Round(tx_rig_act_alter_mem.(re_prem_acc + re_prem_load - re_prem_dis),2)กรณี tx_rig_act_alter_mem.alter_type = DecreaseSA // Round(tx_rig_act_alter_mem.(re_prem_acc_diff + re_prem_load_diff - re_prem_dis_diff),2)รวมสองค่าเข้าด้วยกัน |  |
| 57 | re_refund_prem_tpd | 0 |  |
| 58 | re_refund_prem_ttd | 0 |  |
| 59 | re_refund_prem_med | 0 |  |
| 60 | re_tl_prem_life | re_nb_prem_life + re_ren_prem_life + re_rev_prem_life - re_refund_prem_life(ถ้าค่าติดลบ เก็บเป็นค่า - ) |  |
| 61 | re_tl_prem_add | re_nb_prem_add + re_ren_prem_add + re_rev_prem_add - re_refund_prem_add(ถ้าค่าติดลบ เก็บเป็นค่า - ) |  |
| 62 | re_claim_paid_life | tx_rig_act_claim_mem.re_claim_life ของทุกคน |  |
| 63 | re_claim_paid_add | tx_rig_act_claim_mem.re_claim_acc ของทุกคน |  |
| 64 | re_claim_paid_dismem | tx_rig_act_claim_mem.re_claim_dismem ของทุกคน |  |
| 65 | re_claim_paid_di | 0 |  |
| 66 | re_claim_paid_tpd | tx_rig_act_claim_mem.re_claim_tpd ของทุกคน |  |
| 67 | re_claim_paid_ttd | 0 |  |
| 68 | re_claim_paid_med | 0 |  |
| 69 | re_claim_paid_med_acc | tx_rig_act_claim_mem.re_claim_med_acc ของทุกคน |  |
| 70 | re_claim_paid_ipd | tx_rig_act_claim_mem.re_claim_ipd ของทุกคน |  |
| 71 | re_claim_paid_opd | tx_rig_act_claim_mem.re_claim_opd ของทุกคน |  |
| 72 | re_claim_paid_dental | tx_rig_act_claim_mem.re_claim_dental ของทุกคน |  |
| 73 | re_inv | tx_rig_act_claim_mem.re_claim_inv ของทุกคน |  |
| 74 | com_life | ถ้า {TREATY_CODE} = GIB_Grp_Direct_EBให้ลงที่ Field นี้ก็ต่อเมื่อ ค่าด้านล่างเป็นค่าบวก (suthanee.sa 07/04/2026){RI_COMM_L1_LIFE}{RI_COMM_L2_LIFE}{RI_COMM_L3_LIFE} ถ้า {TREATY_CODE} <> GIB_Grp_Direct_EB{RI_COMM_L1_LIFE}{RI_COMM_L2_LIFE}{RI_COMM_L3_LIFE} |  |
| 75 | com_add | ถ้า {TREATY_CODE} = GIB_Grp_Direct_EBให้ลงที่ Field นี้ก็ต่อเมื่อ ค่าด้านล่างเป็นค่าบวก (suthanee.sa 07/04/2026){RI_COMM_L1_ACC}{RI_COMM_L2_ACC}{RI_COMM_L3_ACC}ถ้า {TREATY_CODE} <> THREL_Grp_PA และ GIB_Grp_Direct_EB (suthanee.sa 07/04/2026){RI_COMM_L1_ACC}{RI_COMM_L2_ACC}{RI_COMM_L3_ACC} ถ้า {TREATY_CODE} = THREL_Grp_PA{RE_COM_ADD} = รวมค่า {RE_COM} ของสมาชิกทุกคนที่ ถ้า {AL_MOVE} = Additionรวมค่า {RE_COM_INC} ของทุกคนใช้ในสูตร (ให้ดูตาม Level ของค่า {SA_ACC_AFT} suthanee.sa 18/03/2026) รวมค่า tx_rig_act_pol_mem.com_acc ของทุกคนใช้ในสูตรจากนั้นtx_rig_act_pol_mem.com_acc + {RE_COM_ADD} + {RE_COM_INC} |  |
| 76 | com_tpd | 0 |  |
| 77 | com_ttd | 0 |  |
| 78 | com_med | 0 |  |
| 79 | com_refund_life | ถ้า {TREATY_CODE} = GIB_Grp_Direct_EBให้ลงที่ Field นี้ก็ต่อเมื่อ ค่าด้านล่างเป็นค่าลบ (suthanee.sa 07/04/2026){RI_COMM_L1_LIFE}{RI_COMM_L2_LIFE}{RI_COMM_L3_LIFE} |  |
| 80 | com_refund_add | ถ้า {TREATY_CODE} = GIB_Grp_Direct_EBให้ลงที่ Field นี้ก็ต่อเมื่อ ค่าด้านล่างเป็นค่าลบ (suthanee.sa 07/04/2026){RI_COMM_L1_ACC}{RI_COMM_L2_ACC}{RI_COMM_L3_ACC}ถ้า {TREATY_CODE} <> THREL_Grp_PA และ GIB_Grp_Direct_EB (suthanee.sa 07/04/2026)0ถ้า {TREATY_CODE} = THREL_Grp_PA{RE_COM_TER} = รวมค่า {RE_COM} ของสมาชิกทุกคนที่ ถ้า {AL_MOVE} = Termination รวมค่า {RE_COM_DEC} ของทุกคนใช้ในสูตร (ให้ดูตาม Level ของค่า {SA_ACC_AFT} suthanee.sa 18/03/2026)จากนั้น{RE_COM_TER} + {RE_COM_DEC}เก็บตาม Layer ที่คำนวณ |  |
| 81 | com_refund_tpd | 0 |  |
| 82 | com_refund_ttd | 0 |  |
| 83 | com_refund_med | 0 |  |
| 84 | re_ex_refund_paid_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1ถ้า {COV_TYPE} = Life {RE_EXP_REFUND_LIFE} |  |
| 85 | re_ex_refund_paid_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1ถ้า {COV_TYPE} = Accident{RE_EXP_REFUND_ACC} |  |
| 86 | re_claim_inv_ex | tx_rig_act_claim_mem.re_claim_inv_ex ของทุกคน | #M06 suthanee.sa 27/04/2026 |
| 87 | re_claim_leg_ex | tx_rig_act_claim_mem.re_claim_leg_ex ของทุกคน | #M06 suthanee.sa 27/04/2026 |
| 88 | re_claim_med_ex | tx_rig_act_claim_mem.re_claim_med_ex ของทุกคน | #M06 suthanee.sa 27/04/2026 |
|  |  |  |  |
| 1 | created_date | now() |  |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |  |
| 3 | updated_date | NULL |  |
| 4 | updated_by | NULL |  |

##### tx_rig_act_pol_mem
tx_rig_act_pol_mem
| No. | Attribute Name |  |
| 1 | rig_act_bdr_pol_mem_id | running no. |
| 2 | rig_act_policy_layer_id | tx_rig_act_policy_layer.rig_act_policy_layer_id |
| 3 | cession_no | {CERT_NO} |
| 4 | name | NULL |
| 5 | sex | {SEX} |
| 6 | dob | NULL |
| 7 | age | {AGE} |
| 8 | occ_class | {OCC} |
| 9 | add_type | {POLIC_COV} |
|  |  |  |
| 1 | sa_life | {L1_SA_LIFE}{L2_SA_LIFE}{L3_SA_LIFE} |
| 2 | sa_acc | {L1_SA_ACC}{L2_SA_ACC}{L3_SA_ACC} |
| 3 | sa_mur | {L1_SA_MUR}{L2_SA_MUR}{L3_SA_MUR} |
| 4 | sa_mot | 0 |
| 5 | sa_load | {L1_SA_LOADING}{L2_SA_LOADING}{L3_SA_LOADING} |
| 6 | sa_special | 0 |
| 7 | sr_life | {L1_SR_LIFE} {L2_SR_LIFE} {L3_SR_LIFE} |
| 8 | sr_acc | {L1_SR_ACC} {L2_SR_ACC} {L3_SR_ACC} |
| 9 | sr_mur | {L1_SR_MUR}{L2_SR_MUR}{L3_SR_MUR} |
| 10 | sr_mot | 0 |
| 11 | sr_load | {L1_SR_LOAD}{L2_SR_LOAD}{L3_SR_LOAD} |
| 12 | sr_special | 0 |
| 13 | ri_rate | {RI_PREM_RATE} |
| 14 | prem_life | {RI_L1_TL_PREM_LIFE}{RI_L2_TL_PREM_LIFE}{RI_L3_TL_PREM_LIFE} |
| 15 | prem_acc | ถ้า {TREATY_CODE} <> THREL_Grp_PA{RI_L1_TL_PREM_ACC}{RI_L2_TL_PREM_ACC}{RI_L3_TL_PREM_ACC}ถ้า {TREATY_CODE} = THREL_Grp_PA{L1_RI_PREM_ACC}{L2_RI_PREM_ACC}{L3_RI_PREM_ACC} |
| 16 | prem_mur | 0 |
| 17 | prem_mot | 0 |
| 18 | prem_load | {L1_RI_PREM_LOAD}{L2_RI_PREM_LOAD}{L3_RI_PREM_LOAD} |
| 19 | prem_special | 0 |
| 20 | prem_dis | {L1_SUM_DISC}{L2_SUM_DISC} {L3_SUM_DISC} |
| 21 | tot_prem | prem_life + prem_acc + prem_mur + prem_mot + prem_load + prem_special - prem_dis |
| 22 | com_life | {RI_COMM_L1_LIFE}{RI_COMM_L2_LIFE}{RI_COMM_L3_LIFE} |
| 23 | com_acc | ถ้า {TREATY_CODE} <> THREL_Grp_PA{RI_COMM_L1_ACC}{RI_COMM_L2_ACC}{RI_COMM_L3_ACC}ถ้า {TREATY_CODE} = THREL_Grp_PA{RI_COM_ACC} ลงข้อมูลตาม Layer บุคคล |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_act_claim_mem
tx_rig_act_claim_mem
| No. | Attribute Name |  |  |
| 1 | rig_act_claim_mem_id | running no. |  |
| 2 | rig_act_policy_layer_id | tx_rig_act_policy_layer.rig_act_policy_layer_id |  |
| 3 | cession_no | {CERT_NO} |  |
| 4 | name | NULL |  |
| 5 | sex | {SEX} |  |
| 6 | dob | NULL |  |
| 7 | age | {ATT_AGE} |  |
| 8 | event_date | {DEATH_DATE} หรือ {ACC_DATE} |  |
| 9 | cause | {DEATH_CAUSE} หรือ {CLAIM_CAUSE} |  |
| 10 | approve_date | {APR_DATE} |  |
| 11 | pay_date | {PAY_DATE} |  |
| 12 | class_plan | ตรวจสอบถ้า ori_sum_insu_acc = 600Aถ้า ori_sum_insu_acc = 1200Bถ้า ori_sum_insu_acc = 1500Cถ้า ori_sum_insu_acc = 2000Dถ้า ori_sum_insu_acc = 3000Eถ้า ori_sum_insu_acc = 5500F |  |
| 13 | incurre_amo | ถ้า {CLAIM_TYPE} = Life{LIFE_INS}ถ้า {CLAIM_TYPE} = Accident Death{ACC_INS}ถ้า {CLAIM_TYPE} = TPD{TPD_INS}ถ้า {CLAIM_TYPE} = Dismemberment{DISMEM_INS} |  |
| 14 | claim_status | treaty_code = "GIB_Grp_Direct_EB"ถ้า {CLAIM_TYPE} = Life หรือ Dismemberment เก็บค่า Normalถ้า {CLAIM_TYPE} = Accident Deathตรวจสอบค่า {ACC_INS} * 2ถ้า {CLAIM_ACC} มากกว่าเท่ากับเก็บค่า Accidental Deathถ้า {CLAIM_ACC} น้อยกว่าเก็บค่า Normal treaty_code <> "GIB_Grp_Direct_EB"{CLAIM_STATUS} |  |
| 15 | claim_type | {CLAIM_TYPE} |  |
| 16 | claim_no | {INFROM_NO}แม้ว่ารายการนั้นจะมีค่า investigation_expense แต่ก็ต้องมีค่าเคลมมาก่อนเสมอ เพราะฉะนั้นให้ค่า {INFROM_NO} ของรายการเคลม(suthanee.sa 30/03/2026) |  |
|  |  |  |  |
| 1 | ori_sum_insu_life | {LIFE_INS} |  |
| 2 | ori_sum_insu_acc | {ACC_INS} |  |
| 3 | ori_sum_insu_tpd | {TPD_INS} |  |
| 4 | ori_sum_insu_dismem | {DISMEM_INS} |  |
| 5 | ori_sum_insu_ipd | 0 |  |
| 6 | ori_sum_insu_opd | 0 |  |
| 7 | ori_sum_insu_dental | 0 |  |
| 8 | ori_sum_insu_med_acc | 0 |  |
| 9 | amo_paid_life | {CLAIM_LIFE} |  |
| 10 | amo_paid_acc | เฉพาะรายการที่ {CLAIM_TYPE} <> Dismemberment{CLAIM_ACC} |  |
| 11 | amo_paid_tpd | {CLAIM_TPD} |  |
| 12 | amo_paid_dismem | เฉพาะรายการที่ {CLAIM_TYPE} = Dismemberment{CLAIM_ACC} |  |
| 13 | amo_paid_ipd | {CLAIM_IPD} |  |
| 14 | amo_paid_opd | {CLAIM_OPD} |  |
| 15 | amo_paid_dental | {CLAIM_DENTAL} |  |
| 16 | amo_paid_med_acc | {CLAIM_MED_ACC} |  |
| 17 | amo_paid_di | 0 |  |
| 18 | amo_paid_inv | {EXPEN_AMOUNT} |  |
| 19 | re_claim_life | {L1_RI_CLAIM_LIFE}{L2_RI_CLAIM_LIFE}{L3_RI_CLAIM_LIFE} |  |
| 20 | re_claim_acc | treaty_code = "GIB_Grp_Direct_EB"{L1_RI_CLAIM_ACC_DEATH}{L2_RI_CLAIM_ACC_DEATH}{L3_RI_CLAIM_ACC_DEATH}treaty_code <> "GIB_Grp_Direct_EB"{RE_CLAIM_ACC_DEATH} |  |
| 21 | re_claim_tpd | {RE_CLAIM_TPD}{L1_RI_CLAIM_TPD} |  |
| 22 | re_claim_dismem | treaty_code = "GIB_Grp_Direct_EB"{L1_RI_CLAIM_DISMEM}{L2_RI_CLAIM_DISMEM}{L3_RI_CLAIM_DISMEM}treaty_code <> "GIB_Grp_Direct_EB"{RE_CLAIM_DISMEM} |  |
| 23 | re_claim_ipd | {L1_RI_CLAIM_IPD} |  |
| 24 | re_claim_opd | {L1_RI_CLAIM_OPD} |  |
| 25 | re_claim_dental | {L1_RI_CLAIM_DENTAL} |  |
| 26 | re_claim_med_acc | {L1_RI_CLAIM_MED_ACC} |  |
| 27 | re_claim_di | {L1_RI_CLAIM_MED_ACC} |  |
| 28 | re_claim_inv | ถ้า {TREATY_CODE} <> THREL_Grp_PA{L1_RI_CLAIM_INVEST}{L2_RI_CLAIM_INVEST}{L3_RI_CLAIM_INVEST}ถ้า {TREATY_CODE} = THREL_Grp_PA{RE_INV_ACC_DEATH}{RE_INV_DISMEM}{RE_INV_TPD}{SUM_RI_CLAIM_EXPENSE_INV} | #M06 suthanee.sa 21/04/2026 |
| 29 | re_claim_inv_ex | {RI_CLAIM_EXPENSE_INV} | #M06 suthanee.sa 21/04/2026 |
| 30 | re_claim_leg_ex | {RI_CLAIM_EXPENSE_LEG} | #M06 suthanee.sa 21/04/2026 |
| 31 | re_claim_med_ex | {RI_CLAIM_EXPENSE_MED} | #M06 suthanee.sa 21/04/2026 |
|  |  |  |  |
|  | claim_benefits | ถ้า {CLAIM_TYPE} = Life{LIFE_INS}ถ้า {CLAIM_TYPE} = Accident Death{ACC_INS}ถ้า {CLAIM_TYPE} = TPD{TPD_INS}ถ้า {CLAIM_TYPE} = Dismemberment{DISMEM_INS} |  |
| 2 | paid_claim_report | ถ้า {CLAIM_TYPE} = Life{CLAIM_LIFE}ถ้า {CLAIM_TYPE} = Accident Death{CLAIM_ACC}ถ้า {CLAIM_TYPE} = TPD{CLAIM_TPD}ถ้า {CLAIM_TYPE} = Dismemberment{CLAIM_ACC} |  |
| 3 | paid_inv_report | {EXPEN_AMOUNT} |  |
| 4 | re_claim_report | ถ้า {CLAIM_TYPE} = Life{L1_RI_CLAIM_LIFE}{L2_RI_CLAIM_LIFE}{L3_RI_CLAIM_LIFE}ถ้า {CLAIM_TYPE} = Accident Deathtreaty_code <> "GIB_Grp_Direct_EB"{RE_CLAIM_ACC_DEATH}treaty_code = "GIB_Grp_Direct_EB"{L1_RI_CLAIM_ACC_DEATH}{L2_RI_CLAIM_ACC_DEATH}{L3_RI_CLAIM_ACC_DEATH}ถ้า {CLAIM_TYPE} = TPD{L1_RI_CLAIM_IPD}{RE_CLAIM_TPD}ถ้า {CLAIM_TYPE} = Dismembermenttreaty_code <> "GIB_Grp_Direct_EB"{RE_CLAIM_DISMEM}treaty_code = "GIB_Grp_Direct_EB"{L1_RI_CLAIM_DISMEM}{L2_RI_CLAIM_DISMEM}{L3_RI_CLAIM_DISMEM} |  |
| 5 | re_inv_report | ถ้า {TREATY_CODE} <> THREL_Grp_PA{L1_RI_CLAIM_INVEST}{L2_RI_CLAIM_INVEST}{L3_RI_CLAIM_INVEST}ถ้า {TREATY_CODE} = THREL_Grp_PA{RE_INV_ACC_DEATH}{RE_INV_DISMEM}{RE_INV_TPD}{SUM_RI_CLAIM_EXPENSE_INV} | #M06 suthanee.sa 21/04/2026 |
|  |  |  |  |
| 1 | created_date | now() |  |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |  |
| 3 | updated_date | NULL |  |
| 4 | updated_by | NULL |  |

##### tx_rig_act_alter_mem
tx_rig_act_alter_mem (กรณีบันทึกข้อมูลลง tx_rig_act_alter_mem ให้ดูตาม Level ของค่า {SA_ACC_AFT} suthanee.sa 12/03/2026)
| No. | Attribute Name |  |
| 1 | rig_act_alter_mem_id | running no. |
| 2 | rig_act_policy_layer_id | tx_rig_act_policy_layer.rig_act_policy_layer_id |
| 3 | cession_no | {CERT_NO} |
| 4 | name | NULL |
| 5 | sex | {SEX} |
| 6 | dob | NULL |
| 7 | age | {AGE} |
| 8 | cov_period | ถ้า {AL_MOVE} = Addition{AL_DATE} + "-" + {COV_TO}ถ้า {AL_MOVE} = Termination , IncreaseSA , DecreaseSA{MEM_EFF_DATE} + " - " + {COV_TO}รูปแบบ 01.07.24 - 01.08.24DD.MM.YY - DD.MM.YY |
| 9 | alter_type | ถ้า {AL_MOVE} = AdditionNMถ้า {AL_MOVE} = TerminationCLถ้า {AL_MOVE} = IncreaseSA ICถ้า {AL_MOVE} = DecreaseSADC |
| 10 | entrant_date | ถ้า {AL_MOVE} = Addition , IncreaseSA , DecreaseSA {AL_DATE} |
| 11 | withdrawal_date | ถ้า {AL_MOVE} = Termination{AL_DATE} |
| 12 | num_of_date | {NUM_DAY_COV} |
|  |  |  |
| 1 | sum_insu_acc_bf | {SA_ACC_BEF} |
| 2 | sum_insu_mur_bf | {SA_MUR_BEF} |
| 3 | sum_insu_mot_bf | 0 |
| 4 | sum_insu_load_bf | {SA_LOAD_BEF} |
| 5 | sum_re_acc_bf | {SR_ACC_BEF} |
| 6 | sum_re_mur_bf | {SR_MUR_BEF} |
| 7 | sum_re_mot_bf | 0 |
| 8 | sum_re_load_bf | {SR_LOAD_BEF} |
| 9 | re_prem_acc_bf | {RE_PREM_ACC_BEF} |
| 10 | re_prem_load_bf | {RE_PREM_LOAD_BEF} |
| 11 | re_prem_dis_bf | {SUM_DISC_BEF} |
| 12 | sum_insu_acc | {AL_MOVE} = Addition และ Termination{SUM_INS_ACC_DEATH}{AL_MOVE} = IncreaseSA และ DecreaseSA{SA_ACC_AFT} |
| 13 | sum_insu_mur | {AL_MOVE} = Addition และ Termination{SUM_INS_MUR}{AL_MOVE} = IncreaseSA และ DecreaseSA{SA_MUR_AFT} |
| 14 | sum_insu_mot | 0 |
| 15 | sum_insu_load | {AL_MOVE} = Addition และ Termination{SUM_INS_LOAD}{AL_MOVE} = IncreaseSA และ DecreaseSA{SA_LOAD_AFT} |
| 16 | sum_re_acc | {AL_MOVE} = Addition และ Termination{SUM_RE_INS_ACC_DEATH}{AL_MOVE} = IncreaseSA และ DecreaseSA{SR_ACC_AFT} |
| 17 | sum_re_mur | {AL_MOVE} = Addition และ Termination{SUM_RE_INS_MUR}{AL_MOVE} = IncreaseSA และ DecreaseSA{SR_MUR_AFT} |
| 18 | sum_re_mot | 0 |
| 19 | sum_re_load | {AL_MOVE} = Addition และ Termination{SUM_RE_INS_LOAD}{AL_MOVE} = IncreaseSA และ DecreaseSA{SR_LOAD_AFT} |
| 20 | re_prem_acc | {AL_MOVE} = Addition และ Termination{RE_PREM_ACC}{AL_MOVE} = IncreaseSA และ DecreaseSA{RE_PREM_ACC_AFT} |
| 21 | re_prem_load | {AL_MOVE} = Addition และ Termination{RE_PREM_LOAD}{AL_MOVE} = IncreaseSA และ DecreaseSA{RE_PREM_LOAD_AFT} |
| 22 | re_prem_dis | {AL_MOVE} = Addition และ Termination{SUM_DISC}{AL_MOVE} = IncreaseSA และ DecreaseSA{SUM_DISC_AFT} |
| 23 | sum_insu_acc_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_insu_acc_bf - sum_insu_accเก็บลงด้วยค่าบวกเสมอ |
| 24 | sum_insu_mur_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_insu_mur_bf - sum_insu_murเก็บลงด้วยค่าบวกเสมอ |
| 25 | sum_insu_mot_diff | 0 |
| 26 | sum_insu_load_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_insu_load_bf - sum_insu_loadเก็บลงด้วยค่าบวกเสมอ |
| 27 | sum_re_acc_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_re_acc_bf - sum_re_accเก็บลงด้วยค่าบวกเสมอ |
| 28 | sum_re_mur_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_re_mur_bf - sum_re_murเก็บลงด้วยค่าบวกเสมอ |
| 29 | sum_re_mot_diff | 0 |
| 30 | sum_re_load_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_re_load_bf - sum_re_loadเก็บลงด้วยค่าบวกเสมอ |
| 31 | re_prem_acc_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAre_prem_acc_bf - re_prem_accเก็บลงด้วยค่าบวกเสมอ |
| 32 | re_prem_load_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAre_prem_load_bf - re_prem_loadเก็บลงด้วยค่าบวกเสมอ |
| 33 | re_prem_dis_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAre_prem_dis_bf - re_prem_disเก็บลงด้วยค่าบวกเสมอ |
| 34 | sum_insu_x | {AL_MOVE} = IncreaseSA และ DecreaseSAถ้า sum_insu_acc_bf = 600Aถ้า sum_insu_acc_bf = 1200Bถ้า sum_insu_acc_bf = 1500Cถ้า sum_insu_acc_bf = 2000Dถ้า sum_insu_acc_bf = 3000Eถ้า sum_insu_acc_bf = 5500F{AL_MOVE} = Addition และ Terminationถ้า sum_insu_acc = 600Aถ้า sum_insu_acc = 1200Bถ้า sum_insu_acc = 1500Cถ้า sum_insu_acc = 2000Dถ้า sum_insu_acc = 3000Eถ้า sum_insu_acc = 5500F |
| 35 | sum_re_x | sum_insu_x |
| 36 | re_prem_x | sum_insu_x |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_act_bdr_new_renew
tx_rig_act_bdr_new_renew
Group ข้อมูลตาม tx_rig_act_policy_hd.policy_no , effective_date , data_quarter
| No. | Attribute Name |  |
| 1 | rig_act_bdr_new_renew_id | running no. |
| 2 | rig_act_hd_id | tx_rig_act_hd.rig_act_hd_id |
| 3 | closing_quarter | tx_rig_act_hd.closing_quarter |
| 4 | ri_no | tx_rig_act_policy_hd.reinsurer_no |
| 5 | policy_no | tx_rig_act_policy_hd.policy_no |
| 6 | reinsurer_no | tx_rig_act_policy_hd.reinsurer_no |
| 7 | ri_com_date | tx_rig_act_policy_hd.ri_com_date |
| 8 | first_date | tx_rig_act_policy_hd.first_date |
| 9 | effective_date_from | tx_rig_act_policy_hd.effective_date |
| 10 | effective_date_to | {COV_TO} |
| 11 | mode_pay | tx_rig_act_policy_hd.mode_pay |
| 12 | policy_year | tx_rig_act_policy_hd.policy_year |
| 13 | pol_name | tx_rig_act_policy_hd.pol_name |
| 14 | nob | tx_rig_act_policy_hd.nob |
| 15 | policy_status | tx_rig_act_policy_hd.policy_status |
| 16 | renew_lapse_date | tx_rig_act_policy_hd.renew_lapse_date |
| 17 | policy_period | tx_rig_act_policy_hd.policy_period |
| 18 | sale_option | tx_rig_act_policy_hd.sale_option |
| 19 | sale_channel_code | tx_rig_act_policy_hd.sale_channel_code |
| 20 | code_name_pol | tx_rig_act_policy_hd.code_name_pol |
| 21 | policy_ri_period | tx_rig_act_policy_hd.policy_ri_period |
| 22 | full_year | tx_rig_act_policy_hd.full_year |
|  |  |  |
| 1 | premium_rate_life | ผลรวม 3 level ของ tx_rig_act_policy_layer.premium_rate_life |
| 2 | premium_rate_add | ผลรวม 3 level ของ tx_rig_act_policy_layer.premium_rate_add |
| 3 | l1_member_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.member_life |
| 4 | l2_member_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.member_life |
| 5 | l3_member_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.member_life |
| 6 | tot_member_life | l1_member_life + l2_member_life + l3_member_life |
| 7 | l1_member_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.member_add |
| 8 | l2_member_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.member_add |
| 9 | l3_member_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.member_add |
| 10 | tot_member_add | l1_member_add + l2_member_add + l3_member_add |
| 11 | l1_ori_sa_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_life |
| 12 | l2_ori_sa_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_life |
| 13 | l3_ori_sa_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_life |
| 14 | tot_ori_sa_life | l1_ori_sa_life + l2_ori_sa_life + l3_ori_sa_life |
| 15 | l1_ori_sa_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_add |
| 16 | l2_ori_sa_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_add |
| 17 | l3_ori_sa_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_add |
| 18 | tot_ori_sa_add | l1_ori_sa_add + l2_ori_sa_add + l3_ori_sa_add |
| 19 | l1_ori_sa_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_tpd |
| 20 | l2_ori_sa_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_tpd |
| 21 | l3_ori_sa_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_tpd |
| 22 | tot_ori_sa_tpd | l1_ori_sa_tpd + l2_ori_sa_tpd + l3_ori_sa_tpd |
| 23 | l1_ori_sa_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_ttd |
| 24 | l2_ori_sa_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_ttd |
| 25 | l3_ori_sa_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_ttd |
| 26 | tot_ori_sa_ttd | l1_ori_sa_ttd + l2_ori_sa_ttd + l3_ori_sa_ttd |
| 27 | l1_ori_sa_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_med |
| 28 | l2_ori_sa_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_med |
| 29 | l3_ori_sa_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_med |
| 30 | tot_ori_sa_med | l1_ori_sa_med + l2_ori_sa_med + l3_ori_sa_med |
| 31 | l1_ori_nb_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_nb_prem_life |
| 32 | l2_ori_nb_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_nb_prem_life |
| 33 | l3_ori_nb_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_nb_prem_life |
| 34 | tot_ori_nb_prem_life | l1_ori_nb_prem_life + l2_ori_nb_prem_life + l3_ori_nb_prem_life |
| 35 | l1_ori_nb_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_nb_prem_add |
| 36 | l2_ori_nb_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_nb_prem_add |
| 37 | l3_ori_nb_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_nb_prem_add |
| 38 | tot_ori_nb_prem_add | l1_ori_nb_prem_add + l2_ori_nb_prem_add + l3_ori_nb_prem_add |
| 39 | l1_ori_nb_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_nb_prem_tpd |
| 40 | l2_ori_nb_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_nb_prem_tpd |
| 41 | l3_ori_nb_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_nb_prem_tpd |
| 42 | tot_ori_nb_prem_tpd | l1_ori_nb_prem_tpd + l2_ori_nb_prem_tpd + l3_ori_nb_prem_tpd |
| 43 | l1_ori_nb_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_nb_prem_ttd |
| 44 | l2_ori_nb_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_nb_prem_ttd |
| 45 | l3_ori_nb_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_nb_prem_ttd |
| 46 | tot_ori_nb_prem_ttd | l1_ori_nb_prem_ttd + l2_ori_nb_prem_ttd + l3_ori_nb_prem_ttd |
| 47 | l1_ori_nb_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_nb_prem_med |
| 48 | l2_ori_nb_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_nb_prem_med |
| 49 | l3_ori_nb_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_nb_prem_med |
| 50 | tot_ori_nb_prem_med | l1_ori_nb_prem_med + l2_ori_nb_prem_med + l3_ori_nb_prem_med |
| 51 | l1_ori_ren_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ren_prem_life |
| 52 | l2_ori_ren_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ren_prem_life |
| 53 | l3_ori_ren_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ren_prem_life |
| 54 | tot_ori_ren_prem_life | l1_ori_ren_prem_life + l2_ori_ren_prem_life + l3_ori_ren_prem_life |
| 55 | l1_ori_ren_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ren_prem_add |
| 56 | l2_ori_ren_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ren_prem_add |
| 57 | l3_ori_ren_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ren_prem_add |
| 58 | tot_ori_ren_prem_add | l1_ori_ren_prem_add + l2_ori_ren_prem_add + l3_ori_ren_prem_add |
| 59 | l1_ori_ren_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ren_prem_tpd |
| 60 | l2_ori_ren_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ren_prem_tpd |
| 61 | l3_ori_ren_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ren_prem_tpd |
| 62 | tot_ori_ren_prem_tpd | l1_ori_ren_prem_tpd + l2_ori_ren_prem_tpd + l3_ori_ren_prem_tpd |
| 63 | l1_ori_ren_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ren_prem_ttd |
| 64 | l2_ori_ren_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ren_prem_ttd |
| 65 | l3_ori_ren_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ren_prem_ttd |
| 66 | tot_ori_ren_prem_ttd | l1_ori_ren_prem_ttd + l2_ori_ren_prem_ttd + l3_ori_ren_prem_ttd |
| 67 | l1_ori_ren_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ren_prem_med |
| 68 | l2_ori_ren_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ren_prem_med |
| 69 | l3_ori_ren_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ren_prem_med |
| 70 | tot_ori_ren_prem_med | l1_ori_ren_prem_med + l2_ori_ren_prem_med + l3_ori_ren_prem_med |
| 71 | l1_ori_rev_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_rev_prem_life |
| 72 | l2_ori_rev_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_rev_prem_life |
| 73 | l3_ori_rev_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_rev_prem_life |
| 74 | tot_ori_rev_prem_life | l1_ori_rev_prem_life + l2_ori_rev_prem_life + l3_ori_rev_prem_life |
| 75 | l1_ori_rev_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_rev_prem_add |
| 76 | l2_ori_rev_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_rev_prem_add |
| 77 | l3_ori_rev_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_rev_prem_add |
| 78 | tot_ori_rev_prem_add | l1_ori_rev_prem_add + l2_ori_rev_prem_add + l3_ori_rev_prem_add |
| 79 | l1_ori_refund_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_refund_prem_life |
| 80 | l2_ori_refund_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_refund_prem_life |
| 81 | l3_ori_refund_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_refund_prem_life |
| 82 | tot_ori_refund_prem_life | l1_ori_refund_prem_life + l2_ori_refund_prem_life + l3_ori_refund_prem_life |
| 83 | l1_ori_refund_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_refund_prem_add |
| 84 | l2_ori_refund_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_refund_prem_add |
| 85 | l3_ori_refund_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_refund_prem_add |
| 86 | tot_ori_refund_prem_add | l1_ori_refund_prem_add + l2_ori_refund_prem_add + l3_ori_refund_prem_add |
| 87 | l1_ori_refund_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_refund_prem_tpd |
| 88 | l2_ori_refund_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_refund_prem_tpd |
| 89 | l3_ori_refund_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_refund_prem_tpd |
| 90 | tot_ori_refund_prem_tpd | l1_ori_refund_prem_tpd + l2_ori_refund_prem_tpd + l3_ori_refund_prem_tpd |
| 91 | l1_ori_refund_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_refund_prem_ttd |
| 92 | l2_ori_refund_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_refund_prem_ttd |
| 93 | l3_ori_refund_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_refund_prem_ttd |
| 94 | tot_ori_refund_prem_ttd | l1_ori_refund_prem_ttd + l2_ori_refund_prem_ttd + l3_ori_refund_prem_ttd |
| 95 | l1_ori_refund_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_refund_prem_med |
| 96 | l2_ori_refund_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_refund_prem_med |
| 97 | l3_ori_refund_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_refund_prem_med |
| 98 | tot_ori_refund_prem_med | l1_ori_refund_prem_med + l2_ori_refund_prem_med + l3_ori_refund_prem_med |
| 99 | l1_ori_tl_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_tl_prem_life |
| 100 | l2_ori_tl_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_tl_prem_life |
| 101 | l3_ori_tl_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_tl_prem_life |
| 102 | tot_ori_tl_prem_life | l1_ori_tl_prem_life + l2_ori_tl_prem_life + l3_ori_tl_prem_life |
| 103 | l1_ori_tl_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_tl_prem_add |
| 104 | l2_ori_tl_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_tl_prem_add |
| 105 | l3_ori_tl_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_tl_prem_add |
| 106 | tot_ori_tl_prem_add | l1_ori_tl_prem_add + l2_ori_tl_prem_add + l3_ori_tl_prem_add |
| 107 | l1_ori_tl_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_tl_prem_tpd |
| 108 | l2_ori_tl_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_tl_prem_tpd |
| 109 | l3_ori_tl_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_tl_prem_tpd |
| 110 | tot_ori_tl_prem_tpd | l1_ori_tl_prem_tpd + l2_ori_tl_prem_tpd + l3_ori_tl_prem_tpd |
| 111 | l1_ori_tl_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_tl_prem_ttd |
| 112 | l2_ori_tl_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_tl_prem_ttd |
| 113 | l3_ori_tl_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_tl_prem_ttd |
| 114 | tot_ori_tl_prem_ttd | l1_ori_tl_prem_ttd + l2_ori_tl_prem_ttd + l3_ori_tl_prem_ttd |
| 115 | l1_ori_tl_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_tl_prem_med |
| 116 | l2_ori_tl_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_tl_prem_med |
| 117 | l3_ori_tl_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_tl_prem_med |
| 118 | tot_ori_tl_prem_med | l1_ori_tl_prem_med + l2_ori_tl_prem_med + l3_ori_tl_prem_med |
| 119 | l1_ori_claim_paid_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_claim_paid_life |
| 120 | l2_ori_claim_paid_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_claim_paid_life |
| 121 | l3_ori_claim_paid_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_claim_paid_life |
| 122 | tot_ori_claim_paid_life | l1_ori_claim_paid_life + l2_ori_claim_paid_life + l3_ori_claim_paid_life |
| 123 | l1_ori_claim_paid_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_claim_paid_add |
| 124 | l2_ori_claim_paid_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_claim_paid_add |
| 125 | l3_ori_claim_paid_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_claim_paid_add |
| 126 | tot_ori_claim_paid_add | l1_ori_claim_paid_add + l2_ori_claim_paid_add + l3_ori_claim_paid_add |
| 127 | l1_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_claim_paid_dismem |
| 128 | l2_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_claim_paid_dismem |
| 129 | l3_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_claim_paid_dismem |
| 130 | tot_ori_claim_paid_dismem | l1_ori_claim_paid_dismem + l2_ori_claim_paid_dismem + l3_ori_claim_paid_dismem |
| 131 | l1_ori_claim_paid_di | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_claim_paid_di |
| 132 | l2_ori_claim_paid_di | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_claim_paid_di |
| 133 | l3_ori_claim_paid_di | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_claim_paid_di |
| 134 | tot_ori_claim_paid_di | l1_ori_claim_paid_di + l2_ori_claim_paid_di + l3_ori_claim_paid_di |
| 135 | l1_ori_inv | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_inv |
| 136 | l2_ori_inv | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_inv |
| 137 | l3_ori_inv | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_inv |
| 138 | tot_ori_inv | l1_ori_inv + l2_ori_inv + l3_ori_inv |
| 139 | l1_ori_ex_refund_paid_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ex_refund_paid_life |
| 140 | l2_ori_ex_refund_paid_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ex_refund_paid_life |
| 141 | l3_ori_ex_refund_paid_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ex_refund_paid_life |
| 142 | tot_ori_ex_refund_paid_life | l1_ori_ex_refund_paid_life + l2_ori_ex_refund_paid_life + l3_ori_ex_refund_paid_life |
| 143 | l1_ori_ex_refund_paid_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ex_refund_paid_add |
| 144 | l2_ori_ex_refund_paid_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ex_refund_paid_add |
| 145 | l3_ori_ex_refund_paid_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ex_refund_paid_add |
| 146 | tot_ori_ex_refund_paid_add | l1_ori_ex_refund_paid_add + l2_ori_ex_refund_paid_add + l3_ori_ex_refund_paid_add |
| 147 | l1_re_share_per | tx_rig_act_policy_layer.level = 1{L1_PER} |
| 148 | l2_re_share_per | tx_rig_act_policy_layer.level = 2{L2_PER} |
| 149 | l3_re_share_per | tx_rig_act_policy_layer.level = 3{L3_PER} |
| 150 | l1_re_sr_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_sr_life |
| 151 | l2_re_sr_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_sr_life |
| 152 | l3_re_sr_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_sr_life |
| 153 | tot_re_sr_life | l1_re_sr_life + l2_re_sr_life + l3_re_sr_life |
| 154 | l1_re_sr_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_sr_add |
| 155 | l2_re_sr_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_sr_add |
| 156 | l3_re_sr_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_sr_add |
| 157 | tot_re_sr_add | l1_re_sr_add + l2_re_sr_add + l3_re_sr_add |
| 158 | l1_re_nb_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_nb_prem_life |
| 159 | l2_re_nb_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_nb_prem_life |
| 160 | l3_re_nb_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_nb_prem_life |
| 161 | tot_re_nb_prem_life | l1_re_nb_prem_life + l2_re_nb_prem_life + l3_re_nb_prem_life |
| 162 | l1_re_nb_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_nb_prem_add |
| 163 | l2_re_nb_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_nb_prem_add |
| 164 | l3_re_nb_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_nb_prem_add |
| 165 | tot_re_nb_prem_add | l1_re_nb_prem_add + l2_re_nb_prem_add + l3_re_nb_prem_add |
| 166 | l1_re_ren_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_ren_prem_life |
| 167 | l2_re_ren_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_ren_prem_life |
| 168 | l3_re_ren_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_ren_prem_life |
| 169 | tot_re_ren_prem_life | l1_re_ren_prem_life + l2_re_ren_prem_life + l3_re_ren_prem_life |
| 170 | l1_re_ren_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_ren_prem_add |
| 171 | l2_re_ren_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_ren_prem_add |
| 172 | l3_re_ren_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_ren_prem_add |
| 173 | tot_re_ren_prem_add | l1_re_ren_prem_add + l2_re_ren_prem_add + l3_re_ren_prem_add |
| 174 | l1_re_rev_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_rev_prem_life |
| 175 | l2_re_rev_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_rev_prem_life |
| 176 | l3_re_rev_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_rev_prem_life |
| 177 | tot_re_rev_prem_life | l1_re_rev_prem_life + l2_re_rev_prem_life + l3_re_rev_prem_life |
| 178 | l1_re_rev_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_rev_prem_add |
| 179 | l2_re_rev_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_rev_prem_add |
| 180 | l3_re_rev_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_rev_prem_add |
| 181 | tot_re_rev_prem_add | l1_re_rev_prem_add + l2_re_rev_prem_add + l3_re_rev_prem_add |
| 182 | l1_re_rev_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_rev_prem_tpd |
| 183 | l2_re_rev_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_rev_prem_tpd |
| 184 | l3_re_rev_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_rev_prem_tpd |
| 185 | tot_re_rev_prem_tpd | l1_re_rev_prem_tpd + l2_re_rev_prem_tpd + l3_re_rev_prem_tpd |
| 186 | l1_re_rev_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_rev_prem_ttd |
| 187 | l2_re_rev_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_rev_prem_ttd |
| 188 | l3_re_rev_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_rev_prem_ttd |
| 189 | tot_re_rev_prem_ttd | l1_re_rev_prem_ttd + l2_re_rev_prem_ttd + l3_re_rev_prem_ttd |
| 190 | l1_re_rev_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_rev_prem_med |
| 191 | l2_re_rev_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_rev_prem_med |
| 192 | l3_re_rev_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_rev_prem_med |
| 193 | tot_re_rev_prem_med | l1_re_rev_prem_med + l2_re_rev_prem_med + l3_re_rev_prem_med |
| 194 | l1_re_refund_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_refund_prem_life |
| 195 | l2_re_refund_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_refund_prem_life |
| 196 | l3_re_refund_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_refund_prem_life |
| 197 | tot_re_refund_prem_life | l1_re_refund_prem_life + l2_re_refund_prem_life + l3_re_refund_prem_life |
| 198 | l1_re_refund_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_refund_prem_add |
| 199 | l2_re_refund_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_refund_prem_add |
| 200 | l3_re_refund_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_refund_prem_add |
| 201 | tot_re_refund_prem_add | l1_re_refund_prem_add + l2_re_refund_prem_add + l3_re_refund_prem_add |
| 202 | l1_re_refund_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_refund_prem_tpd |
| 203 | l2_re_refund_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_refund_prem_tpd |
| 204 | l3_re_refund_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_refund_prem_tpd |
| 205 | tot_re_refund_prem_tpd | l1_re_refund_prem_tpd + l2_re_refund_prem_tpd + l3_re_refund_prem_tpd |
| 206 | l1_re_refund_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_refund_prem_ttd |
| 207 | l2_re_refund_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_refund_prem_ttd |
| 208 | l3_re_refund_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_refund_prem_ttd |
| 209 | tot_re_refund_prem_ttd | l1_re_refund_prem_ttd + l2_re_refund_prem_ttd + l3_re_refund_prem_ttd |
| 210 | l1_re_refund_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_refund_prem_med |
| 211 | l2_re_refund_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_refund_prem_med |
| 212 | l3_re_refund_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_refund_prem_med |
| 213 | tot_re_refund_prem_med | l1_re_refund_prem_med + l2_re_refund_prem_med + l3_re_refund_prem_med |
| 214 | l1_re_tl_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_tl_prem_life |
| 215 | l2_re_tl_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_tl_prem_life |
| 216 | l3_re_tl_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_tl_prem_life |
| 217 | tot_re_tl_prem_life | l1_re_tl_prem_life + l2_re_tl_prem_life + l3_re_tl_prem_life |
| 218 | l1_re_tl_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_tl_prem_add |
| 219 | l2_re_tl_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_tl_prem_add |
| 220 | l3_re_tl_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_tl_prem_add |
| 221 | tot_re_tl_prem_add | l1_re_tl_prem_add + l2_re_tl_prem_add + l3_re_tl_prem_add |
| 222 | l1_re_claim_paid_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_life |
| 223 | l2_re_claim_paid_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_life |
| 224 | l3_re_claim_paid_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_life |
| 225 | tot_re_claim_paid_life | l1_re_claim_paid_life + l2_re_claim_paid_life + l3_re_claim_paid_life |
| 226 | l1_re_claim_paid_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_add |
| 227 | l2_re_claim_paid_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_add |
| 228 | l3_re_claim_paid_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_add |
| 229 | tot_re_claim_paid_add | l1_re_claim_paid_add + l2_re_claim_paid_add + l3_re_claim_paid_add |
| 230 | l1_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_dismem |
| 231 | l2_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_dismem |
| 232 | l3_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_dismem |
| 233 | tot_re_claim_paid_dismem | l1_re_claim_paid_dismem + l2_re_claim_paid_dismem + l3_re_claim_paid_dismem |
| 234 | l1_re_claim_paid_di | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_di |
| 235 | l2_re_claim_paid_di | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_di |
| 236 | l3_re_claim_paid_di | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_di |
| 237 | tot_re_claim_paid_di | l1_re_claim_paid_di + l2_re_claim_paid_di + l3_re_claim_paid_di |
| 238 | l1_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_tpd |
| 239 | l2_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_tpd |
| 240 | l3_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_tpd |
| 241 | tot_re_claim_paid_tpd | l1_re_claim_paid_tpd + l2_re_claim_paid_tpd + l3_re_claim_paid_tpd |
| 242 | l1_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_ttd |
| 243 | l2_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_ttd |
| 244 | l3_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_ttd |
| 245 | tot_re_claim_paid_ttd | l1_re_claim_paid_ttd + l2_re_claim_paid_ttd + l3_re_claim_paid_ttd |
| 246 | l1_re_claim_paid_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_med |
| 247 | l2_re_claim_paid_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_med |
| 248 | l3_re_claim_paid_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_med |
| 249 | tot_re_claim_paid_med | l1_re_claim_paid_med + l2_re_claim_paid_med + l3_re_claim_paid_med |
| 254 | l1_com_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_life |
| 255 | l2_com_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_life |
| 256 | l3_com_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_life |
| 257 | tot_com_life | l1_com_life + l2_com_life + l3_com_life |
| 258 | l1_com_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_add |
| 259 | l2_com_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_add |
| 260 | l3_com_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_add |
| 261 | tot_com_add | l1_com_add + l2_com_add + l3_com_add |
| 262 | l1_com_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_tpd |
| 263 | l2_com_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_tpd |
| 264 | l3_com_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_tpd |
| 265 | tot_com_tpd | l1_com_tpd + l2_com_tpd + l3_com_tpd |
| 266 | l1_com_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_ttd |
| 267 | l2_com_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_ttd |
| 268 | l3_com_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_ttd |
| 269 | tot_com_ttd | l1_com_ttd + l2_com_ttd + l3_com_ttd |
| 270 | l1_com_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_med |
| 271 | l2_com_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_med |
| 272 | l3_com_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_med |
| 273 | tot_com_med | l1_com_med + l2_com_med + l3_com_med |
| 274 | l1_com_refund_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_refund_life |
| 275 | l2_com_refund_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_refund_life |
| 276 | l3_com_refund_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_refund_life |
| 277 | tot_com_refund_life | l1_com_refund_life + l2_com_refund_life + l3_com_refund_life |
| 278 | l1_com_refund_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_refund_add |
| 279 | l2_com_refund_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_refund_add |
| 280 | l3_com_refund_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_refund_add |
| 281 | tot_com_refund_add | l1_com_refund_add + l2_com_refund_add + l3_com_refund_add |
| 282 | l1_com_refund_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_refund_tpd |
| 283 | l2_com_refund_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_refund_tpd |
| 284 | l3_com_refund_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_refund_tpd |
| 285 | tot_com_refund_tpd | l1_com_refund_tpd + l2_com_refund_tpd + l3_com_refund_tpd |
| 286 | l1_com_refund_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_refund_ttd |
| 287 | l2_com_refund_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_refund_ttd |
| 288 | l3_com_refund_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_refund_ttd |
| 289 | tot_com_refund_ttd | l1_com_refund_ttd + l2_com_refund_ttd + l3_com_refund_ttd |
| 290 | l1_com_refund_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_refund_med |
| 291 | l2_com_refund_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_refund_med |
| 292 | l3_com_refund_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_refund_med |
| 293 | tot_com_refund_med | l1_com_refund_med + l2_com_refund_med + l3_com_refund_med |
| 294 | l1_re_ex_refund_paid_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_ex_refund_paid_life |
| 295 | l2_re_ex_refund_paid_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_ex_refund_paid_life |
| 296 | l3_re_ex_refund_paid_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_ex_refund_paid_life |
| 297 | tot_re_ex_refund_paid_life | l1_re_ex_refund_paid_life + l2_re_ex_refund_paid_life + l3_re_ex_refund_paid_life |
| 298 | l1_re_ex_refund_paid_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_ex_refund_paid_add |
| 299 | l2_re_ex_refund_paid_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_ex_refund_paid_add |
| 300 | l3_re_ex_refund_paid_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_ex_refund_paid_add |
| 301 | tot_re_ex_refund_paid_add | l1_re_ex_refund_paid_add + l2_re_ex_refund_paid_add + l3_re_ex_refund_paid_add |
| 302 | remark |  |
|  |  |  |
| 1 | number_of_mem_life | tx_rig_act_policy_hd.number_of_mem_life |
| 2 | number_of_mem_acc | tx_rig_act_policy_hd.number_of_mem_acc |
| 3 | ex_refund_rate_life | tx_rig_act_policy_hd.ex_refund_rate_life |
| 4 | ex_refund_rate_acc | tx_rig_act_policy_hd.ex_refund_rate_acc |
| 5 | ex_pol_year_life | tx_rig_act_policy_hd.ex_pol_year_life |
| 6 | ex_pol_year_acc | tx_rig_act_policy_hd.ex_pol_year_acc |
| 7 | gross_prem_life | tx_rig_act_policy_hd.gross_prem_life |
| 8 | gross_prem_acc | tx_rig_act_policy_hd.gross_prem_acc |
| 9 | claim_paid_year_life | tx_rig_act_policy_hd.claim_paid_year_life |
| 10 | claim_paid_year_acc | tx_rig_act_policy_hd.claim_paid_year_acc |
| 11 | re_ex_refund | tx_rig_act_policy_hd.re_ex_refund |
| 12 | ori_ex_refund_life | tx_rig_act_policy_hd.ori_ex_refund_life |
| 13 | ori_ex_refund_acc | tx_rig_act_policy_hd.ori_ex_refund_acc |
| 14 | net_re_prem_life | tx_rig_act_policy_hd.net_re_prem_life |
| 15 | net_re_prem_acc | tx_rig_act_policy_hd.net_re_prem_acc |
| 16 | re_com_life | tx_rig_act_policy_hd.re_com_life |
| 17 | re_com_acc | tx_rig_act_policy_hd.re_com_acc |
| 18 | re_ex_refund_life | tx_rig_act_policy_hd.re_ex_refund_life |
| 19 | re_ex_refund_acc | tx_rig_act_policy_hd.re_ex_refund_acc |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_act_bdr_pol_mem
| No. | Attribute Name |  |
| 1 | rig_act_bdr_pol_mem_id | running no. |
| 2 | rig_act_bdr_new_renew_id | tx_rig_act_bdr_new_renew.rig_act_bdr_new_renew_id |
| 3 | cession_no | tx_rig_act_pol_mem.cession_no |
| 4 | name | tx_rig_act_pol_mem .name |
| 5 | sex | tx_rig_act_pol_mem .sex |
| 6 | dob | tx_rig_act_pol_mem .dob |
| 7 | age | tx_rig_act_pol_mem .age |
| 8 | occ_class | tx_rig_act_pol_mem .class |
| 9 | add_type | tx_rig_act_pol_mem .add_typeแปลงนำค่า tx_rig_act_pol_mem .add_type ที่ได้ เทียบกับ cf_lookup_catalog.lookup_keyที่ cf_lookup_catalog.parent_id = 1003200จากนั้นนำค่า cf_lookup_catalog.description มาเก็บไว้(suthanee.sa 06/03/2026) |
|  |  | tx_rig_act_pol_mem |
| 1 | sa_life | sa_acc |
| 2 | sa_mur | sa_mur |
| 3 | sa_mot | sa_mot |
| 4 | sa_load | sa_load |
| 5 | sa_special | sa_special |
| 6 | sr_life | sr_acc |
| 7 | sr_mur | sr_mur |
| 8 | sr_mot | sr_mot |
| 9 | sr_load | sr_load |
| 10 | sr_special | sr_special |
| 11 | ri_rate | ri_rate |
| 12 | prem_life | prem_acc |
| 13 | prem_mur | prem_mur |
| 14 | prem_mot | prem_mot |
| 15 | prem_load | prem_load |
| 16 | prem_special | prem_special |
| 17 | prem_dis | prem_dis |
| 18 | tot_prem | tot_prem |
| 19 | com | com_acc |
| 20 | remark |  |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_act_bdr_claim
tx_rig_act_bdr_claim
Group ข้อมูลตาม tx_rig_act_policy_hd.policy_no , effective_date , data_quarter
| No. | Attribute Name |  |
| 1 | rig_act_bdr_claim_id | running no. |
| 2 | rig_act_hd_id | tx_rig_act_hd.rig_act_hd_id |
| 3 | closing_quarter | tx_rig_act_hd.closing_quarter |
| 4 | data_period | สร้างรายการตาม เดือน period ที่อยู่ภายใต้ Quarter |
| 5 | policy_no | tx_rig_act_policy_hd.policy_no |
| 6 | reinsurer_no | tx_rig_act_policy_hd .reinsurer_no |
| 7 | ri_com_date | tx_rig_act_policy_hd .ri_com_date |
|  | first_date | tx_rig_act_policy_hd.first_date |
| 8 | effective_date_from | tx_rig_act_policy_hd .effective_date |
| 9 | effective_date_to | {COV_TO} |
| 10 | mode_pay | tx_rig_act_policy_hd .mode_pay |
| 11 | policy_year | tx_rig_act_policy_hd .policy_year |
| 12 | policy_period | tx_rig_act_policy_hd .policy_period |
| 13 | pol_name | tx_rig_act_policy_hd .pol_name |
| 14 | nob | tx_rig_act_policy_hd .nob |
| 15 | policy_status | tx_rig_act_policy_hd .report_policy_status |
| 16 | renew_lapse_date | tx_rig_act_policy_hd .renew_lapse_date |
| 17 | policy_period | tx_rig_act_policy_hd .policy_period |
| 18 | sale_option | tx_rig_act_policy_hd .sale_option |
| 19 | sale_channel_code | tx_rig_act_policy_hd .sale_channel_code |
| 20 | code_name_pol | tx_rig_act_policy_hd .code_name_pol |
| 21 | type_coverage_pol | {POLIC_COV}แปลงค่า {POLIC_COV} ที่ได้ เทียบกับ cf_lookup_catalog.lookup_keyที่ cf_lookup_catalog.parent_id = 1003200จากนั้นนำค่า cf_lookup_catalog.description มาเก็บไว้(suthanee.sa 11/03/2026) |
| 22 | occ_class | {OCC} |
| 23 | policy_ri_period | tx_rig_act_policy_hd.policy_ri_period |
|  |  | รวมทุกรายการใน tx_rig_act_bdr_claim_mem แยกตาม เดือน period ที่อยู่ภายใต้ Quarterโดยดูจาก tx_rig_act_claim_mem.approve_date |
| 1 | frequency_acc | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = Accident Death |
| 2 | frequency_tpd | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = TPD และ Dismemberment |
| 3 | frequency_ipd | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = IPD |
| 4 | frequency_opd | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = OPD |
| 5 | frequency_dental | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = DENTAL |
| 6 | frequency_med_acc | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = MedAccident |
| 7 | sum_frequency | frequency_acc + frequency_tpd + frequency_ipd + frequency_opd + frequency_dental + frequency_med_acc |
| 8 | sum_amo_paid_life | tx_rig_act_bdr_claim_mem.amo_paid_life |
| 9 | sum_amo_paid_ipd | tx_rig_act_bdr_claim_mem.amo_paid_ipd |
| 10 | sum_amo_paid_opd | tx_rig_act_bdr_claim_mem.amo_paid_opd |
| 11 | sum_amo_paid_dental | tx_rig_act_bdr_claim_mem.amo_paid_dental |
| 12 | sum_amo_paid_acc | tx_rig_act_bdr_claim_mem.amo_paid_acc |
| 13 | sum_amo_paid_tpd | tx_rig_act_bdr_claim_mem.amo_paid_tpd |
| 14 | sum_amo_paid_dismem | tx_rig_act_bdr_claim_mem.amo_paid_dismem |
| 15 | sum_amo_paid_med_acc | tx_rig_act_bdr_claim_mem.amo_paid_med_acc |
| 16 | sum_amo_paid_tot | sum_amo_paid_life + sum_amo_paid_ipd + sum_amo_paid_opd + sum_amo_paid_dental + sum_amo_paid_acc + sum_amo_paid_tpd sum_amo_paid_dismem + sum_amo_paid_med_acc |
| 17 | sum_amo_paid_grand_tot | 0 |
| 18 | sum_re_claim_life | tx_rig_act_bdr_claim_mem.re_claim_life |
| 19 | sum_re_claim_acc | tx_rig_act_bdr_claim_mem.re_claim_acc |
| 20 | sum_re_claim_ipd | tx_rig_act_bdr_claim_mem.re_claim_ipd |
| 21 | sum_re_claim_opd | tx_rig_act_bdr_claim_mem.re_claim_opd |
| 22 | sum_re_claim_dental | tx_rig_act_bdr_claim_mem.re_claim_dental |
| 23 | sum_re_claim_tpd | tx_rig_act_bdr_claim_mem.re_claim_tpd |
| 24 | sum_re_claim_dismem | tx_rig_act_bdr_claim_mem.re_claim_dismem |
| 25 | sum_re_claim_med_acc | tx_rig_act_bdr_claim_mem.re_claim_med_acc |
| 26 | sum_re_claim_tot | sum_re_claim_life + sum_re_claim_acc + sum_re_claim_ipd + sum_re_claim_opd + sum_re_claim_dental + sum_re_claim_tpd + sum_re_claim_dismem + sum_re_claim_med_acc |
|  |  |  |
| 1 | l1_ori_claim_paid_life | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_life ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_life |
| 2 | l2_ori_claim_paid_life | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_life ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_life |
| 3 | l3_ori_claim_paid_life | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_life ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_life |
| 4 | tot_ori_claim_paid_life | l1_ori_claim_paid_life + l2_ori_claim_paid_life + l3_ori_claim_paid_life |
| 5 | l1_ori_claim_paid_add | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_acc ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_add |
| 6 | l2_ori_claim_paid_add | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_acc ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_add |
| 7 | l3_ori_claim_paid_add | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_acc ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_add |
| 8 | tot_ori_claim_paid_add | l1_ori_claim_paid_add + l2_ori_claim_paid_add + l3_ori_claim_paid_add |
| 9 | l1_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_dismem ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_dismem |
| 10 | l2_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_dismem ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_dismem |
| 11 | l3_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_dismem ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_dismem |
| 12 | tot_ori_claim_paid_dismem | l1_ori_claim_paid_dismem + l2_ori_claim_paid_dismem + l3_ori_claim_paid_dismem |
| 13 | l1_ori_claim_paid_di | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_claim_paid_di |
| 14 | l2_ori_claim_paid_di | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_claim_paid_di |
| 15 | l3_ori_claim_paid_di | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_claim_paid_di |
| 16 | tot_ori_claim_paid_di | l1_ori_claim_paid_di + l2_ori_claim_paid_di + l3_ori_claim_paid_di |
| 17 | l1_re_claim_paid_life | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.re_claim_life ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_life |
| 18 | l2_re_claim_paid_life | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.re_claim_life ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_life |
| 19 | l3_re_claim_paid_life | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.re_claim_life ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_life |
| 20 | tot_re_claim_paid_life | l1_re_claim_paid_life + l2_re_claim_paid_life + l3_re_claim_paid_life |
| 21 | l1_re_claim_paid_add | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.re_claim_acc ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_add |
| 22 | l2_re_claim_paid_add | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.re_claim_acc ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_add |
| 23 | l3_re_claim_paid_add | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.re_claim_acc ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_add |
| 24 | tot_re_claim_paid_add | l1_re_claim_paid_add + l2_re_claim_paid_add + l3_re_claim_paid_add |
| 25 | l1_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.re_claim_dismem ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_dismem |
| 26 | l2_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.re_claim_dismem ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_dismem |
| 27 | l3_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.re_claim_dismem ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_dismem |
| 28 | tot_re_claim_paid_dismem | l1_re_claim_paid_dismem + l2_re_claim_paid_dismem + l3_re_claim_paid_dismem |
| 29 | l1_re_claim_paid_di | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_di |
| 30 | l2_re_claim_paid_di | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_di |
| 31 | l3_re_claim_paid_di | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_di |
| 32 | tot_re_claim_paid_di | l1_re_claim_paid_di + l2_re_claim_paid_di + l3_re_claim_paid_di |
| 33 | l1_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.re_claim_tpd ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_tpd |
| 34 | l2_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.re_claim_tpd ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_tpd |
| 35 | l3_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.re_claim_tpd ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_tpd |
| 36 | tot_re_claim_paid_tpd | l1_re_claim_paid_tpd + l2_re_claim_paid_tpd + l3_re_claim_paid_tpd |
| 37 | l1_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_ttd |
| 38 | l2_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_ttd |
| 39 | l3_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_ttd |
| 40 | tot_re_claim_paid_ttd | l1_re_claim_paid_ttd + l2_re_claim_paid_ttd + l3_re_claim_paid_ttd |
| 41 | l1_re_claim_paid_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_med + tx_rig_act_policy_layer.re_claim_paid_med_acc + tx_rig_act_policy_layer.re_claim_paid_ipd + tx_rig_act_policy_layer.re_claim_paid_opd + tx_rig_act_policy_layer.re_claim_paid_dental |
| 42 | l2_re_claim_paid_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_med + tx_rig_act_policy_layer.re_claim_paid_med_acc + tx_rig_act_policy_layer.re_claim_paid_ipd + tx_rig_act_policy_layer.re_claim_paid_opd + tx_rig_act_policy_layer.re_claim_paid_dental |
| 43 | l3_re_claim_paid_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_med + tx_rig_act_policy_layer.re_claim_paid_med_acc + tx_rig_act_policy_layer.re_claim_paid_ipd + tx_rig_act_policy_layer.re_claim_paid_opd + tx_rig_act_policy_layer.re_claim_paid_dental |
| 44 | tot_re_claim_paid_med | l1_re_claim_paid_med + l2_re_claim_paid_med + l3_re_claim_paid_med |
| 45 | l1_ori_inv | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_inv |
| 46 | l2_ori_inv | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_inv |
| 47 | l3_ori_inv | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_inv |
| 48 | tot_ori_inv | l1_ori_inv + l2_ori_inv + l3_ori_inv |
| 49 | l1_re_inv | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_inv |
| 50 | l2_re_inv | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_inv |
| 51 | l3_re_inv | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_inv |
| 52 | tot_re_inv | l1_re_inv + l2_re_inv + l3_re_inv |
| 53 | tot_re_claim_inv_ex | tx_rig_act_policy_layer.re_claim_inv_ex ทุก layer (#M06 27/04/2026 suthanee.sa) |
| 54 | tot_re_claim_leg_ex | tx_rig_act_policy_layer.re_claim_leg_ex ทุก layer (#M06 27/04/2026 suthanee.sa) |
| 55 | tot_re_claim_med_ex | tx_rig_act_policy_layer.re_claim_med_ex ทุก layer (#M06 27/04/2026 suthanee.sa) |
|  |  |  |
| 1 | premium_rate_life | ผลรวม 3 level ของ tx_rig_act_policy_layer.premium_rate_life |
| 2 | premium_rate_add | ผลรวม 3 level ของ tx_rig_act_policy_layer.premium_rate_add |
| 3 | l1_member_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.member_life |
| 4 | l2_member_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.member_life |
| 5 | l3_member_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.member_life |
| 6 | tot_member_life | l1_member_life + l2_member_life + l3_member_life |
| 7 | l1_member_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.member_add |
| 8 | l2_member_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.member_add |
| 9 | l3_member_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.member_add |
| 10 | tot_member_add | l1_member_add + l2_member_add + l3_member_add |
| 11 | l1_ori_sa_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_life |
| 12 | l2_ori_sa_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_life |
| 13 | l3_ori_sa_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_life |
| 14 | tot_ori_sa_life | l1_ori_sa_life + l2_ori_sa_life + l3_ori_sa_life |
| 15 | l1_ori_sa_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_add |
| 16 | l2_ori_sa_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_add |
| 17 | l3_ori_sa_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_add |
| 18 | tot_ori_sa_add | l1_ori_sa_add + l2_ori_sa_add + l3_ori_sa_add |
| 19 | l1_re_share_per | tx_rig_act_policy_layer.level = 1{L1_PER} |
| 20 | l2_re_share_per | tx_rig_act_policy_layer.level = 2{L2_PER} |
| 21 | l3_re_share_per | tx_rig_act_policy_layer.level = 3{L3_PER} |
| 22 | l1_re_sr_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_sr_life |
| 23 | l2_re_sr_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_sr_life |
| 24 | l3_re_sr_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_sr_life |
| 25 | tot_re_sr_life | l1_re_sr_life + l2_re_sr_life + l3_re_sr_life |
| 26 | l1_re_sr_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_sr_add |
| 27 | l2_re_sr_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_sr_add |
| 28 | l3_re_sr_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_sr_add |
| 29 | tot_re_sr_add | l1_re_sr_add + l2_re_sr_add + l3_re_sr_add |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_act_bdr_claim_mem
| No. | Attribute Name | tx_rig_act_claim_mem |
| 1 | rig_act_bdr_claim_mem_id | running no. |
| 2 | rig_act_bdr_claim_id | tx_rig_act_bdr_claim.rig_act_bdr_claim_id |
| 3 | seq | running seq. |
| 4 | cession_no | cession_no |
| 5 | name | name |
| 6 | sex | sex |
| 7 | dob | dob |
| 8 | age | age |
| 9 | event_date | event_date |
| 10 | cause | cause |
| 11 | approve_date | approve_date |
| 12 | pay_date | pay_date |
| 13 | class_plan | class_plan |
| 14 | incurre_amo | incurre_amo |
| 15 | claim_status | claim_status |
| 16 | claim_type | claim_type |
| 16 | claim_no | claim_no (suthanee.sa 30/03/2026) |
|  |  |  |
| 1 | ori_sum_insu_life | ori_sum_insu_life |
| 2 | ori_sum_insu_acc | ori_sum_insu_acc |
| 3 | ori_sum_insu_tpd | ori_sum_insu_tpd |
| 4 | ori_sum_insu_dismem | ori_sum_insu_dismem |
| 5 | ori_sum_insu_ipd | ori_sum_insu_ipd |
| 6 | ori_sum_insu_opd | ori_sum_insu_opd |
| 7 | ori_sum_insu_dental | ori_sum_insu_dental |
| 8 | ori_sum_insu_med_acc | ori_sum_insu_med_acc |
| 9 | amo_paid_life | amo_paid_life |
| 10 | amo_paid_acc | amo_paid_acc |
| 11 | amo_paid_tpd | amo_paid_tpd |
| 12 | amo_paid_dismem | amo_paid_dismem |
| 13 | amo_paid_ipd | amo_paid_ipd |
| 14 | amo_paid_opd | amo_paid_opd |
| 15 | amo_paid_dental | amo_paid_dental |
| 16 | amo_paid_med_acc | amo_paid_med_acc |
| 17 | amo_paid_di | amo_paid_di |
| 18 | amo_paid_inv | amo_paid_inv |
| 19 | re_claim_life | re_claim_life |
| 20 | re_claim_acc | re_claim_acc |
| 21 | re_claim_tpd | re_claim_tpd |
| 22 | re_claim_dismem | re_claim_dismem |
| 23 | re_claim_ipd | re_claim_ipd |
| 24 | re_claim_opd | re_claim_opd |
| 25 | re_claim_dental | re_claim_dental |
| 26 | re_claim_med_acc | re_claim_med_acc |
| 27 | re_claim_di | re_claim_di |
| 28 | re_claim_inv | re_claim_inv |
| 29 | remark | treaty_code = "GIB_Grp_Direct_EB"ถ้า {CLAIM_STATUS} ไม่เท่ากับ 0บันทึก "Decline Claim" |
| 30 | re_claim_inv_ex | re_claim_inv_ex (#M06 27/04/2026 suthanee.sa) |
| 31 | re_claim_leg_ex | re_claim_leg_ex (#M06 27/04/2026 suthanee.sa) |
| 32 | re_claim_med_ex | re_claim_med_ex (#M06 27/04/2026 suthanee.sa) |
|  |  |  |
| 1 | claim_benefits | claim_benefits |
| 2 | paid_claim_report | paid_claim_report |
| 3 | paid_inv_report | paid_inv_report |
| 4 | re_claim_report | re_claim_report |
| 5 | re_inv_report | re_inv_report |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_act_bdr_alter
tx_rig_act_bdr_alter
Group ข้อมูลตาม tx_rig_act_policy_hd.policy_no , effective_date , data_quarter
| No. | Attribute Name |  |
| 1 | rig_act_bdr_claim_id | running no. |
| 2 | rig_act_hd_id | tx_rig_act_hd.rig_act_hd_id |
| 3 | closing_quarter | tx_rig_act_hd.closing_quarter |
| 4 | policy_no | tx_rig_act_policy_hd.policy_no |
| 5 | reinsurer_no | tx_rig_act_policy_hd .reinsurer_no |
| 6 | ri_com_date | tx_rig_act_policy_hd .ri_com_date |
|  | first_date | tx_rig_act_policy_hd.first_date |
| 7 | effective_date_from | tx_rig_act_policy_hd .effective_date |
| 8 | effective_date_to | {COV_TO} |
| 9 | mode_pay | tx_rig_act_policy_hd .mode_pay |
| 10 | policy_year | tx_rig_act_policy_hd .policy_year |
| 11 | pol_name | tx_rig_act_policy_hd .pol_name |
| 12 | nob | tx_rig_act_policy_hd .nob |
| 13 | policy_status | tx_rig_act_policy_hd .report_policy_status |
| 14 | renew_lapse_date | tx_rig_act_policy_hd .renew_lapse_date |
| 15 | policy_period | tx_rig_act_policy_hd .policy_period |
| 16 | sale_option | tx_rig_act_policy_hd .sale_option |
| 17 | sale_channel_code | tx_rig_act_policy_hd .sale_channel_code |
| 18 | code_name_pol | tx_rig_act_policy_hd .code_name_pol |
| 19 | type_coverage_pol | {POLIC_COV}แปลงค่า {POLIC_COV} ที่ได้ เทียบกับ cf_lookup_catalog.lookup_keyที่ cf_lookup_catalog.parent_id = 1003200จากนั้นนำค่า cf_lookup_catalog.description มาเก็บไว้(suthanee.sa 11/03/2026) |
| 20 | occ_class | {OCC} |
| 21 | policy_ri_period | tx_rig_act_policy_hd.policy_ri_period |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_act_bdr_alter_mem
| No. | Attribute Name | tx_rig_act_alter_mem |
| 1 | rig_act_bdr_claim_mem_id | running no. |
| 2 | rig_act_bdr_claim_id | tx_rig_act_bdr_claim.rig_act_bdr_claim_id |
| 3 | seq | running seq. |
| 4 | cession_no | cession_no |
| 5 | name | name |
| 6 | sex | sex |
| 7 | dob | dob |
| 8 | age | age |
| 9 | cov_period | cov_period |
| 10 | alter_type | alter_type |
| 11 | entrant_date | entrant_date |
| 12 | withdrawal_date | withdrawal_date |
| 13 | num_of_date | num_of_date |
|  |  |  |
| 1 | sum_insu_acc_bf | sum_insu_acc_bf |
| 2 | sum_insu_mur_bf | sum_insu_mur_bf |
| 3 | sum_insu_mot_bf | sum_insu_mot_bf |
| 4 | sum_insu_load_bf | sum_insu_load_bf |
| 5 | sum_re_acc_bf | sum_re_acc_bf |
| 6 | sum_re_mur_bf | sum_re_mur_bf |
| 7 | sum_re_mot_bf | sum_re_mot_bf |
| 8 | sum_re_load_bf | sum_re_load_bf |
| 9 | re_prem_acc_bf | re_prem_acc_bf |
| 10 | re_prem_load_bf | re_prem_load_bf |
| 11 | re_prem_dis_bf | re_prem_dis_bf |
| 12 | sum_insu_acc | sum_insu_acc |
| 13 | sum_insu_mur | sum_insu_mur |
| 14 | sum_insu_mot | sum_insu_mot |
| 15 | sum_insu_load | sum_insu_load |
| 16 | sum_re_acc | sum_re_acc |
| 17 | sum_re_mur | sum_re_mur |
| 18 | sum_re_mot | sum_re_mot |
| 19 | sum_re_load | sum_re_load |
| 20 | re_prem_acc | re_prem_acc |
| 21 | re_prem_load | re_prem_load |
| 22 | re_prem_dis | re_prem_dis |
| 23 | sum_insu_acc_diff | sum_insu_acc_diff |
| 24 | sum_insu_mur_diff | sum_insu_mur_diff |
| 25 | sum_insu_mot_diff | sum_insu_mot_diff |
| 26 | sum_insu_load_diff | sum_insu_load_diff |
| 27 | sum_re_acc_diff | sum_re_acc_diff |
| 28 | sum_re_mur_diff | sum_re_mur_diff |
| 29 | sum_re_mot_diff | sum_re_mot_diff |
| 30 | sum_re_load_diff | sum_re_load_diff |
| 31 | re_prem_acc_diff | re_prem_acc_diff |
| 32 | re_prem_load_diff | re_prem_load_diff |
| 33 | re_prem_dis_diff | re_prem_dis_diff |
| 34 | sum_insu_x | sum_insu_x |
| 35 | sum_re_x | sum_re_x |
| 36 | re_prem_x | re_prem_x |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_policy_base
ถ้า treaty_code = "GIB_Grp_Direct_EB"
(ปีของ tx_rig_act_policy_hd.effective_date_from - ปีของ tx_rig_act_policy_hd.first_date) +1
treaty_code <> "GIB_Grp_Direct_EB"
tx_rig_act_policy_hd.policy_year
บันทึกเฉพาะกรมธรรม์ที่ tx_rig_act_policy_hd.policy_no และ policy_year จากเงื่อนไขมาเทียบ แล้วยังไม่พบใน Table
| No. | Attribute Name |  |
| 1 | rig_policy_base_id | running no. |
| 2 | policy_no | tx_rig_act_policy_hd.policy_no |
| 3 | policy_year | treaty_code = "GIB_Grp_Direct_EB"(ปีของ tx_rig_act_policy_hd.effective_date_from - ปีของ tx_rig_act_policy_hd.first_date) +1treaty_code <> "GIB_Grp_Direct_EB"tx_rig_act_policy_hd.policy_year |
| 4 (suthanee.sa 25/02/2026) | policy_status | tx_rig_act_policy_hd.policy_status |
| 5 | treaty_code | tx_rig_act_hd.treaty_code |
| 6 (suthanee.sa 25/02/2026) | ri_status | tx_rig_act_policy_hd.ri_policy_status |
| 7 | ri_commencement_date | tx_rig_act_policy_hd.effective_date (suthanee.sa 26/02/2026) |
| 8 | period | tx_rig_act_hd.closing_quarter |
| ข้อมูลระบบ |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

### เงื่อนไขในการประมวลผล SOA
ตรวจสอบ Treaty ที่ประมวลผล
- ตรวจสอบ tx_rig_act_hd.treaty_code กับ cf_rig_pc_treaty.treaty_code ถ้า cf_rig_pc_treaty.status = Aประมวลผลปกติถ้า cf_rig_pc_treaty.status = Iข้าม Process การประมวลผล SOA และไม่ต้องสร้าง tx_rig_act_soa_hd.rig_act_soa_hd_id
- ถ้า cf_rig_pc_treaty.status = Aประมวลผลปกติ
- ประมวลผลปกติ
- ถ้า cf_rig_pc_treaty.status = Iข้าม Process การประมวลผล SOA และไม่ต้องสร้าง tx_rig_act_soa_hd.rig_act_soa_hd_id
- ข้าม Process การประมวลผล SOA และไม่ต้องสร้าง tx_rig_act_soa_hd.rig_act_soa_hd_id
คำนวณเพิ่มเติมสำหรับ Treaty GIB_Grp_Direct_EB
ตรวจสอบ tx_rig_act_hd.treaty_code ถ้าเท่ากับ "GIB_Grp_Direct_EB"
ให้ประมวลผลเพิ่มเติมดังนี้ (เนื่องจากการลงข้อมูลใน SOA ต้องลงเหมือนกับของ EDW ซึ่งปีกรมธรรม์ที่ใช้งานต้องใช้วิธีเดียวกันกับที่ลง EDW)
- เตรียมข้อมูลดึงข้อมูล cf_rig_treaty_cond_hd.ri_com_rate = {RI_COM_RATE} ของ Treaty โดยตรวจสอบรายการใน cf_rig_treaty_cond_hd.status ที่เป็น A ซึ่งอาจมีได้มากกว่า 1 รายการ ต้องนำ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to คู่กับ {RI_COM_RATE} มาด้วยเสมอ นำ tx_rig_act_bdr_new_renew.effective_date_from ของกรมธรรม์ เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to ของ {RI_COM_RATE} เพื่อตรวจสอบว่า กรมธรรม์นั้นจะต้องใช้ {RI_COM_RATE} ชุดใด (#AFTER suthanee.sa 06/05/2026)แบ่งข้อมูลของกรมธรรม์ทั้งหมดออกเป็นปีแรกและปีต่อ โดย{POLICY_YEAR_GIB} = ปีของ tx_rig_act_bdr_new_renew.effective_date_from - ปีของ tx_rig_act_bdr_new_renew.first_date + 1{POLICY_YEAR_GIB} = ปีของ tx_rig_act_bdr_claim.effective_date_from - ปีของ tx_rig_act_bdr_claim.first_date + 1
- ดึงข้อมูล cf_rig_treaty_cond_hd.ri_com_rate = {RI_COM_RATE} ของ Treaty โดยตรวจสอบรายการใน cf_rig_treaty_cond_hd.status ที่เป็น A ซึ่งอาจมีได้มากกว่า 1 รายการ ต้องนำ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to คู่กับ {RI_COM_RATE} มาด้วยเสมอ นำ tx_rig_act_bdr_new_renew.effective_date_from ของกรมธรรม์ เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to ของ {RI_COM_RATE} เพื่อตรวจสอบว่า กรมธรรม์นั้นจะต้องใช้ {RI_COM_RATE} ชุดใด (#AFTER suthanee.sa 06/05/2026)
- ตรวจสอบรายการใน cf_rig_treaty_cond_hd.status ที่เป็น A ซึ่งอาจมีได้มากกว่า 1 รายการ ต้องนำ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to คู่กับ {RI_COM_RATE} มาด้วยเสมอ
- นำ tx_rig_act_bdr_new_renew.effective_date_from ของกรมธรรม์ เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to ของ {RI_COM_RATE} เพื่อตรวจสอบว่า กรมธรรม์นั้นจะต้องใช้ {RI_COM_RATE} ชุดใด (#AFTER suthanee.sa 06/05/2026)
- แบ่งข้อมูลของกรมธรรม์ทั้งหมดออกเป็นปีแรกและปีต่อ โดย{POLICY_YEAR_GIB} = ปีของ tx_rig_act_bdr_new_renew.effective_date_from - ปีของ tx_rig_act_bdr_new_renew.first_date + 1{POLICY_YEAR_GIB} = ปีของ tx_rig_act_bdr_claim.effective_date_from - ปีของ tx_rig_act_bdr_claim.first_date + 1
- {POLICY_YEAR_GIB} = ปีของ tx_rig_act_bdr_new_renew.effective_date_from - ปีของ tx_rig_act_bdr_new_renew.first_date + 1
- {POLICY_YEAR_GIB} = ปีของ tx_rig_act_bdr_claim.effective_date_from - ปีของ tx_rig_act_bdr_claim.first_date + 1
- คำนวณข้อมูลแต่ละกรมและผลรวมทุกกรม ฝั่ง DUE TO REINSURER (Cr.) - Commission Refundกรณีที่เป็น {POLICY_YEAR_GIB} = 1{SOA_REF_COM_F_LIFE}คำนวณจาก Round(Premium Refund: 1st yr. Type Life x RI Commission Rate% , 2)Round ( tx_rig_act_bdr_new_renew.tot_re_refund_prem_life * {RI_COM_RATE} , 2 )Sum tot_re_refund_prem_life ของทุกกรมในชุด {RI_COM_RATE} เดียวกันก่อน แล้วจึงนำเข้าสูตร (#AFTER suthanee.sa 06/05/2026){SUM_SOA_REF_COM_F_LIFE}รวม {SOA_REF_COM_F_LIFE} ของทุกกรม เข้าด้วยกันถ้ามี {RI_COM_RATE} มากกว่า 1 เรท เมื่อได้ค่าตามสูตรของแต่ละเรทแล้ว จึงนำค่าทั้งหมดมารวมกัน (#AFTER suthanee.sa 06/05/2026) {SOA_REF_COM_F_ADD}คำนวณจาก Round(Premium Refund: 1st yr. Type AD&D x RI Commission Rate% , 2)Round ( tx_rig_act_bdr_new_renew.tot_re_refund_prem_add * {RI_COM_RATE} , 2 )Sum tot_re_refund_prem_add ของทุกกรมในชุด {RI_COM_RATE} เดียวกันก่อน แล้วจึงนำเข้าสูตร (#AFTER suthanee.sa 06/05/2026){SUM_SOA_REF_COM_F_ADD}รวม {SOA_REF_COM_F_ADD} ของทุกกรม เข้าด้วยกันถ้ามี {RI_COM_RATE} มากกว่า 1 เรท เมื่อได้ค่าตามสูตรของแต่ละเรทแล้ว จึงนำค่าทั้งหมดมารวมกัน (#AFTER suthanee.sa 06/05/2026) กรณีที่เป็น {POLICY_YEAR_GIB} > 1{SOA_REF_COM_R_LIFE}คำนวณจาก Round(Premium Refund: Renewal Type Life x RI Commission Rate% , 2)Round ( tx_rig_act_bdr_new_renew.tot_re_refund_prem_life * {RI_COM_RATE} , 2 )Sum tot_re_refund_prem_life ของทุกกรมในชุด {RI_COM_RATE} เดียวกันก่อน แล้วจึงนำเข้าสูตร (#AFTER suthanee.sa 06/05/2026){SUM_SOA_REF_COM_R_LIFE}รวม {SOA_REF_COM_R_LIFE} ของทุกกรม เข้าด้วยกันถ้ามี {RI_COM_RATE} มากกว่า 1 เรท เมื่อได้ค่าตามสูตรของแต่ละเรทแล้ว จึงนำค่าทั้งหมดมารวมกัน (#AFTER suthanee.sa 06/05/2026) {SOA_REF_COM_R_ADD}คำนวณจาก Round(Premium Refund: Renewal Type AD&D x RI Commission Rate% , 2)Round ( tx_rig_act_bdr_new_renew.tot_re_refund_prem_add * {RI_COM_RATE} , 2 )Sum tot_re_refund_prem_add ของทุกกรมในชุด {RI_COM_RATE} เดียวกันก่อน แล้วจึงนำเข้าสูตร (#AFTER suthanee.sa 06/05/2026){SUM_SOA_REF_COM_R_ADD}รวม {SOA_REF_COM_R_ADD} ของทุกกรม เข้าด้วยกันถ้ามี {RI_COM_RATE} มากกว่า 1 เรท เมื่อได้ค่าตามสูตรของแต่ละเรทแล้ว จึงนำค่าทั้งหมดมารวมกัน (#AFTER suthanee.sa 06/05/2026) ฝั่ง DUE FROM REINSURER (Dr.) - Commission กรณีที่เป็น {POLICY_YEAR_GIB} = 1 {SOA_COM_F_LIFE}คำนวณจาก Round((Reinsurance Premium: New Business Type Life + Revival Premiums: 1st yr. Type Life) x RI Commission Rate% , 2)Round ( (tx_rig_act_bdr_new_renew.tot_re_nb_prem_life + tx_rig_act_bdr_new_renew.tot_re_ren_prem_life + tx_rig_act_bdr_new_renew + tot_re_rev_prem_life) * {RI_COM_RATE} , 2 )Sum tot_re_nb_prem_life, tot_re_ren_prem_life, tot_re_rev_prem_life ของทุกกรมในชุด {RI_COM_RATE} เดียวกันก่อน แล้วจึงนำเข้าสูตร (#AFTER suthanee.sa 06/05/2026){SUM_SOA_COM_F_LIFE}รวม {SOA_COM_F_LIFE} ของทุกกรม เข้าด้วยกันถ้ามี {RI_COM_RATE} มากกว่า 1 เรท เมื่อได้ค่าตามสูตรของแต่ละเรทแล้ว จึงนำค่าทั้งหมดมารวมกัน (#AFTER suthanee.sa 06/05/2026) {SOA_COM_F_ADD}คำนวณจาก Round((Reinsurance Premium: New Business Type AD&D + Revival Premiums: 1st yr. Type AD&D) x RI Commission Rate% , 2)Round ( (tx_rig_act_bdr_new_renew.tot_re_nb_prem_add + tx_rig_act_bdr_new_renew.tot_re_ren_prem_add + tx_rig_act_bdr_new_renew + tot_re_rev_prem_add) * {RI_COM_RATE} , 2 )Sum tot_re_nb_prem_add, tot_re_ren_prem_add, tot_re_rev_prem_add ของทุกกรมในชุด {RI_COM_RATE} เดียวกันก่อน แล้วจึงนำเข้าสูตร (#AFTER suthanee.sa 06/05/2026){SUM_SOA_COM_F_ADD}รวม {SOA_COM_F_ADD} ของทุกกรม เข้าด้วยกันถ้ามี {RI_COM_RATE} มากกว่า 1 เรท เมื่อได้ค่าตามสูตรของแต่ละเรทแล้ว จึงนำค่าทั้งหมดมารวมกัน (#AFTER suthanee.sa 06/05/2026) กรณีที่เป็น {POLICY_YEAR_GIB} > 1{SOA_COM_R_LIFE}คำนวณจาก RI Commission Life + Commission Refund: 1st yr. Type Life + Commission Refund: Renewal Type Life - Commission: 1 st yr. Type Lifetx_rig_act_bdr_new_renew.tot_com_life + tot_com_refund_life + (suthanee.sa 07/04/2026) {SOA_REF_COM_F_LIFE} + {SOA_REF_COM_R_LIFE} - {SOA_COM_F_LIFE} {SUM_SOA_COM_R_LIFE}รวม {SOA_COM_R_LIFE} ของทุกกรม เข้าด้วยกัน {SOA_COM_R_ADD}คำนวณจาก RI Commission AD&D + Commission Refund: 1st yr. Type AD&D + Commission Refund: Renewal Type AD&D - Commission: 1 st yr. Type AD&Dtx_rig_act_bdr_new_renew.tot_com_add + tot_com_refund_add + (suthanee.sa 07/04/2026){SOA_REF_COM_F_ADD} + {SOA_REF_COM_R_ADD} - {SOA_COM_F_ADD} {SUM_SOA_COM_R_ADD}รวม {SOA_COM_R_ADD} ของทุกกรม เข้าด้วยกัน
tx_rig_act_soa_dt
| Field | เงื่อนไข |
| rig_act_soa_dt_id | running no. |
| rig_act_soa_hd_id | id ของ tx_rig_act_soa_hd |
| prem_new_life | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew.tot_re_nb_prem_life + tx_rig_act_bdr_new_renew .tot_re_ren_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_new_add | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_nb_prem_add + tx_rig_act_bdr_new_renew .tot_re_ren_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_new_tpd | 0 |
| prem_new_ttd | 0 |
| prem_new_medical | 0 |
| prem_new_total | ผลรวมของ tx_rig_act_soa_dt.(prem_new_life + prem_new_add + prem_new_tpd + prem_new_ttd + prem_new_medical) |
| prem_renew_1y_life | Fix 0 |
| prem_renew_1y_add | Fix 0 |
| prem_renew_1y_tpd | Fix 0 |
| prem_renew_1y_ttd | Fix 0 |
| prem_renew_1y_medical | Fix 0 |
| prem_renew_1y_total | Fix 0 |
| prem_renew_life | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew.tot_re_nb_prem_life + tx_rig_act_bdr_new_renew .tot_re_ren_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_renew_add | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_ren_prem_add + tx_rig_act_bdr_new_renew .tot_re_ren_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_renew_tpd | 0 |
| prem_renew_ttd | 0 |
| prem_renew_medical | 0 |
| prem_renew_total | ผลรวมของ tx_rig_act_soa_dt.(prem_renew_life + prem_renew_add + prem_renew_tpd + prem_renew_ttd + prem_renew_medical) |
| comm_new_life | บันทึก {SUM_SOA_COM_F_LIFE} |
| comm_new_add | บันทึก {SUM_SOA_COM_F_ADD} |
| comm_new_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_com_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_new_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_com_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_new_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_com_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_new_total | ผลรวมของ tx_rig_act_soa_dt.(comm_new_life + comm_new_add + comm_new_tpd + comm_new_ttd + comm_new_medical) |
| comm_renew_life | บันทึก {SUM_SOA_COM_R_LIFE} |
| comm_renew_add | บันทึก {SUM_SOA_COM_R_ADD} |
| comm_renew_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_com_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_renew_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_com_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_renew_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_com_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_renew_total | ผลรวมของ tx_rig_act_soa_dt.(comm_renew_life + comm_renew_add + comm_renew_tpd + comm_renew_ttd + comm_renew_medical) |
| prem_refund_new_life | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_add | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_ttd ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_total | ผลรวมของ tx_rig_act_soa_dt.(prem_refund_new_life + prem_refund_new_add + prem_refund_new_tpd + prem_refund_new_ttd + prem_refund_new_medical) |
| prem_refund_renew_life | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_add | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_total | ผลรวมของ tx_rig_act_soa_dt.(prem_refund_renew_life + prem_refund_renew_add + prem_refund_renew_tpd + prem_refund_renew_ttd + prem_refund_renew_medical) |
| prem_refund_new_claim_life | Fix 0 |
| prem_refund_new_claim_add | Fix 0 |
| prem_refund_new_claim_tpd | Fix 0 |
| prem_refund_new_claim_ttd | Fix 0 |
| prem_refund_new_claim_medical | Fix 0 |
| prem_refund_new_claim_total | Fix 0 |
| prem_refund_renew_claim_life | Fix 0 |
| prem_refund_renew_claim_add | Fix 0 |
| prem_refund_renew_claim_tpd | Fix 0 |
| prem_refund_renew_claim_ttd | Fix 0 |
| prem_refund_renew_claim_medical | Fix 0 |
| prem_refund_renew_claim_total | Fix 0 |
| comm_refund_new_life | บันทึกค่า {SUM_SOA_REF_COM_F_LIFE} |
| comm_refund_new_add | บันทึกค่า {SUM_SOA_REF_COM_F_ADD} |
| comm_refund_new_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_com_refund_tpd ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_new_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_com_refund_ttd ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_new_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_com_refund_med ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_new_total | ผลรวมของ tx_rig_act_soa_dt.(comm_refund_new_life + comm_refund_new_add + comm_refund_new_tpd + comm_refund_new_ttd + comm_refund_new_medical) |
| comm_refund_renew_life | บันทึกค่า {SUM_SOA_REF_COM_R_LIFE} |
| comm_refund_renew_add | บันทึกค่า {SUM_SOA_REF_COM_R_ADD} |
| comm_refund_renew_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_com_refund_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_renew_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_com_refund_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_renew_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_com_refund_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_renew_total | ผลรวมของ tx_rig_act_soa_dt.(comm_refund_renew_life + comm_refund_renew_add + comm_refund_renew_tpd + comm_refund_renew_ttd + comm_refund_renew_medical) |
| comm_refund_new_claim_life | Fix 0 |
| comm_refund_new_claim_add | Fix 0 |
| comm_refund_new_claim_tpd | Fix 0 |
| comm_refund_new_claim_ttd | Fix 0 |
| comm_refund_new_claim_medical | Fix 0 |
| comm_refund_new_claim_total | Fix 0 |
| comm_refund_renew_claim_life | Fix 0 |
| comm_refund_renew_claim_add | Fix 0 |
| comm_refund_renew_claim_tpd | Fix 0 |
| comm_refund_renew_claim_ttd | Fix 0 |
| comm_refund_renew_claim_medical | Fix 0 |
| comm_refund_renew_claim_total | Fix 0 |
| claim_new_life | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_claim.tot_re_claim_paid_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_add | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_claim.tot_re_claim_paid_add + tx_rig_act_bdr_claim .tot_re_claim_paid_dismem** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_claim.tot_re_claim_paid_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_claim.tot_re_claim_paid_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_claim.tot_re_claim_paid_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_total | ผลรวมของ tx_rig_act_soa_dt.(claim_new_life + claim_new_add + claim_new_tpd + claim_new_ttd + claim_new_medical) |
| claim_renew_life | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_claim.tot_re_claim_paid_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_add | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_claim.tot_re_claim_paid_add + tx_rig_act_bdr_claim.tot_re_claim_paid_dismem** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_claim.tot_re_claim_paid_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_claim.tot_re_claim_paid_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_claim.tot_re_claim_paid_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_total | ผลรวมของ tx_rig_act_soa_dt.(claim_renew_life + claim_renew_add + claim_renew_tpd + claim_renew_ttd + claim_renew_medical) |
| claim_exp_investigation_fee | tx_rig_act_bdr_claim.tot_re_inv** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_exp_legal_fee | Fix 0 |
| claim_exp_med | Fix 0 |
| claim_exp_total | ผลรวมของ tx_rig_act_soa_dt.(claim_exp_investigation_fee + claim_exp_legal_fee + claim_exp_med) |
| revival_prem_new_life | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_add | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_total | ผลรวมของ tx_rig_act_soa_dt.(revival_prem_new_life + revival_prem_new_add + revival_prem_new_tpd + revival_prem_new_ttd + revival_prem_new_medical) |
| revival_prem_renew_life | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_add | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_total | ผลรวมของ tx_rig_act_soa_dt.(revival_prem_renew_life + revival_prem_renew_add + revival_prem_renew_tpd + revival_prem_renew_ttd + revival_prem_renew_medical) |
| admin_comm_remittance | Fix 0 |
| experience_refund_share | tx_rig_act_bdr_new_renew.tot_re_ex_refund_paid_life + tot_re_ex_refund_paid_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| profit_comm | tx_rig_act_hd.sum_pc_current_treaty |
| sub_total_due_to_reinsurer | tx_rig_act_soa_dt.(prem_new_total + prem_renew_1y_total + prem_renew_total + comm_refund_new_total + comm_refund_renew_life + comm_refund_renew_total + comm_refund_new_claim_total + comm_refund_renew_claim_total + revival_prem_new_total + revival_prem_renew_total) |
| due_to_reinsurer | ถ้า sub_total_due_from_reinsurer < sub_total_due_to_reinsurerใหัมีค่าเท่ากับ sub_total_due_to_reinsurer - sub_total_due_from_reinsurerนอกเหนือจากนั้นให้มีค่าเป็น 0 |
| sub_total_due_from_reinsurer | tx_rig_act_soa_dt.(comm_new_total + comm_renew_total + prem_refund_new_total + prem_refund_renew_total + prem_refund_new_claim_total + prem_refund_renew_claim_total + claim_new_total + claim_renew_total + claim_exp_total + experience_refund_share (suthanee.sa 09/04/2026)) |
| due_from_reinsurer | ถ้า sub_total_due_from_reinsurer > sub_total_due_to_reinsurerใหัมีค่าเท่ากับ sub_total_due_from_reinsurer - sub_total_due_to_reinsurerนอกเหนือจากนั้นให้มีค่าเป็น 0 |
Mapping SOA Report
เงื่อนไขในการดึงข้อมูลหลัก
tx_rig_act_soa_hd
| Field | เงื่อนไข |
| rig_act_soa_hd_id | running no. |
| rig_act_hd_id | id ของ tx_rig_act_hd |
| period | แยกตามรายการ tx_rig_act_policy_hd.period ที่เกิดขึ้นภายใต้ tx_rig_act_hd ของ closing_period นั้น |
| total_profit_comm | Fix 0 |
| net_balance_due_to_reinsurer | Fix 0 |
tx_rig_act_soa_dt
| Field | เงื่อนไข |
| rig_act_soa_dt_id | running no. |
| rig_act_soa_hd_id | id ของ tx_rig_act_soa_hd |
| prem_new_life | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew.tot_re_nb_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_new_add | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_nb_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_new_tpd | 0 |
| prem_new_ttd | 0 |
| prem_new_medical | 0 |
| prem_new_total | ผลรวมของ tx_rig_act_soa_dt.(prem_new_life + prem_new_add + prem_new_tpd + prem_new_ttd + prem_new_medical) |
| prem_renew_1y_life | Fix 0 |
| prem_renew_1y_add | Fix 0 |
| prem_renew_1y_tpd | Fix 0 |
| prem_renew_1y_ttd | Fix 0 |
| prem_renew_1y_medical | Fix 0 |
| prem_renew_1y_total | Fix 0 |
| prem_renew_life | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_ren_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_renew_add | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_ren_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_renew_tpd | 0 |
| prem_renew_ttd | 0 |
| prem_renew_medical | 0 |
| prem_renew_total | ผลรวมของ tx_rig_act_soa_dt.(prem_renew_life + prem_renew_add + prem_renew_tpd + prem_renew_ttd + prem_renew_medical) |
| comm_new_life | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_new_add | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_new_tpd | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_new_ttd | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_new_medical | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_new_total | ผลรวมของ tx_rig_act_soa_dt.(comm_new_life + comm_new_add + comm_new_tpd + comm_new_ttd + comm_new_medical) |
| comm_renew_life | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_renew_add | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_renew_tpd | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_renew_ttd | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_renew_medical | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_renew_total | ผลรวมของ tx_rig_act_soa_dt.(comm_renew_life + comm_renew_add + comm_renew_tpd + comm_renew_ttd + comm_renew_medical) |
| prem_refund_new_life | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_add | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_tpd | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_ttd | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_ttd ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_medical | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_total | ผลรวมของ tx_rig_act_soa_dt.(prem_refund_new_life + prem_refund_new_add + prem_refund_new_tpd + prem_refund_new_ttd + prem_refund_new_medical) |
| prem_refund_renew_life | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_add | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_tpd | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_ttd | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_medical | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_total | ผลรวมของ tx_rig_act_soa_dt.(prem_refund_renew_life + prem_refund_renew_add + prem_refund_renew_tpd + prem_refund_renew_ttd + prem_refund_renew_medical) |
| prem_refund_new_claim_life | Fix 0 |
| prem_refund_new_claim_add | Fix 0 |
| prem_refund_new_claim_tpd | Fix 0 |
| prem_refund_new_claim_ttd | Fix 0 |
| prem_refund_new_claim_medical | Fix 0 |
| prem_refund_new_claim_total | Fix 0 |
| prem_refund_renew_claim_life | Fix 0 |
| prem_refund_renew_claim_add | Fix 0 |
| prem_refund_renew_claim_tpd | Fix 0 |
| prem_refund_renew_claim_ttd | Fix 0 |
| prem_refund_renew_claim_medical | Fix 0 |
| prem_refund_renew_claim_total | Fix 0 |
| comm_refund_new_life | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_refund_life ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_new_add | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_refund_add ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_new_tpd | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_refund_tpd ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_new_ttd | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_refund_ttd ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_new_medical | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_refund_med ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_new_total | ผลรวมของ tx_rig_act_soa_dt.(comm_refund_new_life + comm_refund_new_add + comm_refund_new_tpd + comm_refund_new_ttd + comm_refund_new_medical) |
| comm_refund_renew_life | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_refund_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_renew_add | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_refund_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_renew_tpd | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_refund_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_renew_ttd | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_refund_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_renew_medical | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_refund_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_renew_total | ผลรวมของ tx_rig_act_soa_dt.(comm_refund_renew_life + comm_refund_renew_add + comm_refund_renew_tpd + comm_refund_renew_ttd + comm_refund_renew_medical) |
| comm_refund_new_claim_life | Fix 0 |
| comm_refund_new_claim_add | Fix 0 |
| comm_refund_new_claim_tpd | Fix 0 |
| comm_refund_new_claim_ttd | Fix 0 |
| comm_refund_new_claim_medical | Fix 0 |
| comm_refund_new_claim_total | Fix 0 |
| comm_refund_renew_claim_life | Fix 0 |
| comm_refund_renew_claim_add | Fix 0 |
| comm_refund_renew_claim_tpd | Fix 0 |
| comm_refund_renew_claim_ttd | Fix 0 |
| comm_refund_renew_claim_medical | Fix 0 |
| comm_refund_renew_claim_total | Fix 0 |
| claim_new_life | ถ้า tx_rig_act_bdr_claim.policy_year = 1tx_rig_act_bdr_claim.tot_re_claim_paid_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_add | ถ้า tx_rig_act_bdr_claim.policy_year = 1tx_rig_act_bdr_claim.tot_re_claim_paid_add + tx_rig_act_bdr_claim .tot_re_claim_paid_dismem** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_tpd | ถ้า tx_rig_act_bdr_claim.policy_year = 1 tx_rig_act_bdr_claim.tot_re_claim_paid_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_ttd | ถ้า tx_rig_act_bdr_claim.policy_year = 1tx_rig_act_bdr_claim.tot_re_claim_paid_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_medical | ถ้า tx_rig_act_bdr_claim.policy_year = 1tx_rig_act_bdr_claim.tot_re_claim_paid_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_total | ผลรวมของ tx_rig_act_soa_dt.(claim_new_life + claim_new_add + claim_new_tpd + claim_new_ttd + claim_new_medical) |
| claim_renew_life | ถ้า tx_rig_act_bdr_claim.policy_year > 1tx_rig_act_bdr_claim.tot_re_claim_paid_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_add | ถ้า tx_rig_act_bdr_claim.policy_year > 1tx_rig_act_bdr_claim.tot_re_claim_paid_add + tx_rig_act_bdr_claim.tot_re_claim_paid_dismem** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_tpd | ถ้า tx_rig_act_bdr_claim.policy_year > 1tx_rig_act_bdr_claim.tot_re_claim_paid_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_ttd | ถ้า tx_rig_act_bdr_claim.policy_year > 1tx_rig_act_bdr_claim.tot_re_claim_paid_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_medical | ถ้า tx_rig_act_bdr_claim.policy_year > 1tx_rig_act_bdr_claim.tot_re_claim_paid_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_total | ผลรวมของ tx_rig_act_soa_dt.(claim_renew_life + claim_renew_add + claim_renew_tpd + claim_renew_ttd + claim_renew_medical) |
| claim_exp_investigation_fee | tx_rig_act_bdr_claim.tot_re_inv** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_exp_legal_fee | Fix 0 |
| claim_exp_med | Fix 0 |
| claim_exp_total | ผลรวมของ tx_rig_act_soa_dt.(claim_exp_investigation_fee + claim_exp_legal_fee + claim_exp_med) |
| revival_prem_new_life | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_add | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_tpd | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_ttd | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_medical | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_total | ผลรวมของ tx_rig_act_soa_dt.(revival_prem_new_life + revival_prem_new_add + revival_prem_new_tpd + revival_prem_new_ttd + revival_prem_new_medical) |
| revival_prem_renew_life | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_add | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_tpd | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_ttd | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_medical | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_total | ผลรวมของ tx_rig_act_soa_dt.(revival_prem_renew_life + revival_prem_renew_add + revival_prem_renew_tpd + revival_prem_renew_ttd + revival_prem_renew_medical) |
| admin_comm_remittance | Fix 0 |
| experience_refund_share | tx_rig_act_bdr_new_renew.tot_re_ex_refund_paid_life + tot_re_ex_refund_paid_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| profit_comm | tx_rig_act_hd.sum_pc_current_treaty |
| sub_total_due_to_reinsurer | tx_rig_act_soa_dt.(prem_new_total + prem_renew_1y_total + prem_renew_total + comm_refund_new_total + comm_refund_renew_life + comm_refund_renew_total + comm_refund_new_claim_total + comm_refund_renew_claim_total + revival_prem_new_total + revival_prem_renew_total) |
| due_to_reinsurer | ถ้า sub_total_due_from_reinsurer < sub_total_due_to_reinsurerใหัมีค่าเท่ากับ sub_total_due_to_reinsurer - sub_total_due_from_reinsurerนอกเหนือจากนั้นให้มีค่าเป็น 0 |
| sub_total_due_from_reinsurer | tx_rig_act_soa_dt.(comm_new_total + comm_renew_total + prem_refund_new_total + prem_refund_renew_total + prem_refund_new_claim_total + prem_refund_renew_claim_total + claim_new_total + claim_renew_total + claim_exp_total + experience_refund_share (suthanee.sa 09/04/2026)) |
| due_from_reinsurer | ถ้า sub_total_due_from_reinsurer > sub_total_due_to_reinsurerใหัมีค่าเท่ากับ sub_total_due_from_reinsurer - sub_total_due_to_reinsurerนอกเหนือจากนั้นให้มีค่าเป็น 0 |
จากนั้นให้อัปเดทข้อมูลที่ tx_rig_act_soa_hd
| Field | สูตรคำนวณ |
| tx_rig_act_soa_hd.net_balance_due_to_reinsurer | tx_rig_act_soa_dt.sub_total_due_to_reinsurer - tx_rig_act_soa_dt.sub_total_due_from_reinsurer |
| Reconcile |  | Report Type |
| RIG-RP-001 Policy_{FROM}_{TO}_{TREATY} |  | LND_STG |
| RIG-RP-003 Act_PremiumLayer_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-004 Alteration_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-005 Premium_Movement_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-006 MemberOverAge_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-007 InvestigationExpense_{YYYY}{QQ} |  | ACT_STG |
| Actual |  | Report Type | เงื่อนไขการสร้าง File |
| RIG-RP-017 BDR Act - Gibraltar (Reinsurer) |  | ACT_BDR | กรณี treaty_code = GIB_Grp_Direct_EB |
| RIG-RP-018 BDR Act Thaire (Reinsurer) |  | ACT_BDR | กรณี treaty_code = THREL_Grp_PA |
| RIG-RP-019 BDR Act - Daiichi (Reinsurer) |  | ACT_BDR | กรณี treaty_code = DAI_Grp_Daiichi_Coins |
| RIG-RP-013 BDR Act_GIB_{YYYY}{QQ} (EDW) |  | ACT_BDR | กรณี treaty_code = GIB_Grp_Direct_EB |
| RIG-RP-014 BDR Act_Thaire_{YYYY}{QQ} (EDW) |  | ACT_BDR | กรณี treaty_code = THREL_Grp_PA |
| RIG-RP-021 SOA_Act_{TreatyAbbr}_{YYYY}{QQ} |  | ACT_SOA | กรณี treaty_code = THREL_Grp_PAหรือ กรณี treaty_code = GIB_Grp_Direct_EB |
| RIG-RP-015 Profit Commission_EB_{YYYY} |  | ACT_PROFIT | กรณี treaty_code = GIB_Grp_Direct_EB |
| RIG-RP-016 Profit_Commission_Thaire_Group PA_{YYYY} |  | ACT_PROFIT | กรณี treaty_code = THREL_Grp_PA |
| RIG-RP-020 Allocation_Profit Commission_{YYYY} |  | ACT_ALLOC | กรณี treaty_code = GIB_Grp_Direct_EBหรือ กรณี treaty_code = THREL_Grp_PA |
1. Update ผลการประมวลผล
tx_rig_act_hd
หลังการประมวลผลเสร็จสิ้น ให้อัปเดทข้อมูลดังนี้
| Field | เงื่อนไข | ตัวอย่าง |
| status | กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "ERROR"กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "SUCCESS" | SUCCESS |
| ri_premium | กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึกผลรวมของ1. รวม Premium tx_rig_act_bdr_new_renew(tot_re_nb_prem_life + tot_re_nb_prem_add + tot_re_ren_prem_life + tot_re_ren_prem_add + tot_re_rev_prem_life + tot_re_rev_prem_add + tot_re_rev_prem_tpd + tot_re_rev_prem_ttd + tot_re_rev_prem_med ) (suthanee.sa update 09/03/2026) 2. รวม Refund tx_rig_act_bdr_new_renew(tot_ori_refund_prem_life + tot_ori_refund_prem_add +(suthanee.sa 07/04/2026) tot_re_ex_refund_paid_life + tot_re_ex_refund_paid_add + (suthanee.sa 16/04/2026) tot_re_refund_prem_life + tot_re_refund_prem_add + tot_re_refund_prem_tpd + tot_re_refund_prem_ttd + tot_re_refund_prem_med) (suthanee.sa update 09/03/2026) จากนั้นเอาข้อ 2. - ข้อ 1 (มีโอกาสติดลบได้ เป็นปกติ) (suthanee.sa update 09/03/2026)กรณีประมวลผลไม่สำเร็จ ไม่ต้องอัปเดท | 100000 |
| ri_commission | กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึกผลรวมของ1. Commission tx_rig_act_bdr_new_renew (tot_com_life + tot_com_add + tot_com_tpd + tot_com_ttd + tot_com_med + tot_re_ex_refund_paid_life + tot_re_ex_refund_paid_add) (suthanee.sa update 09/03/2026)(suthanee.sa 16/04/2026) 2. Commission Refund abs(tx_rig_act_bdr_new_renew (tot_com_refund_life + tot_com_refund_add + tot_com_refund_tpd + tot_com_refund_ttd + tot_com_refund_med)) (suthanee.sa update 25/03/2026)(suthanee.sa update 09/04/2026) จากนั้นเอาข้อ 1. - ข้อ 2 (มีโอกาสติดลบได้ เป็นปกติ) (suthanee.sa update 25/03/2026)กรณีประมวลผลไม่สำเร็จ ไม่ต้องอัปเดท | 100000 |
| claim_recovery | กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึกผลรวมของ1. รวม Claim tx_rig_act_bdr_claim (tot_re_inv + tot_re_claim_paid_life + tot_re_claim_paid_add + tot_re_claim_paid_dismem + tot_re_claim_paid_di + tot_re_claim_paid_tpd + tot_re_claim_paid_ttd + tot_re_claim_paid_med) + tx_rig_act_bdr_new_renew(tot_re_ex_refund_paid_life + tot_re_ex_refund_paid_add) (suthanee.sa update 09/03/2026) (suthanee.sa 10/04/2026) กรณีประมวลผลไม่สำเร็จ ไม่ต้องอัปเดท | 100000 |
| due_to | กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึกผลรวมของ sum(ri_premium, ri_commission, claim_recovery) กรณีประมวลผลไม่สำเร็จ ไม่ต้องอัปเดท | 100000 |
| remark | กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก Log Error ที่ระบบแจ้ง |  |
| sum_records | นับจำนวนรายการที่เกิดขึ้นใน tx_rig_act_bdr_new_renew | 100 |
| updated_date | now() |  |
| updated_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |  |
2. Template Email
1. เตรียมข้อมูลก่อนส่งอีเมล
| Parameter | Description | Data source | Display | Example |
| $runningNo | ลำดับของรายการ |  | จำนวนรายการ Group ตาม tx_stg_error_data.process_code เฉพาะรายการที่tx_stg_error_data.rig_act_hd_id เท่ากับ tx_rig_act_hd.rig_act_hd_id (suthanee.sa 26/02/2026)และ tx_stg_error_data.treaty_code เท่ากับ tx_rig_act_hd.treaty_code | 1 |
| $closingPeriod | งวดของการประมวลผลข้อมูล | tx_rig_act_hd.closing_quarter | YYYY/QQ | 2022/Q1 |
| $status | ผลการประมวลผล | tx_rig_act_hd.status | ถ้า = SUCCESS ให้แสดง "ประมวลผลสำเร็จ"ถ้า = ERROR ให้แสดง "ประมวลไม่ผลสำเร็จ" | ประมวลผลสำเร็จ |
| $treaty | รหัสสัญญา | tx_rig_act_hd.treaty_code | treaty_code | THREL_Grp_PA |
| $processName | ชื่อของ Process | ms_rig_process.process_name | นำ tx_stg_error_data.process_code ที่ได้ ไปค้นหาใน ms_rig_process.process_code แล้วนำค่า ms_rig_process.process_name มาแสดง | นำเข้าข้อมูลกรมธรรม์ตามรอบเดือน พร้อมรองรับการคัดกรองกรมธรรม์ที่มี RI ตาม Treaty |
| $countErr | จำนวนรายการที่ถูกนำออกจากการประมวลผล |  | นับจำนวนรายการที่เกิดขึ้นโดย Group ตาม tx_stg_error_data.process_code |  |
| $sumCountErr | จำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด |  | รวมจำนวนรายการที่เกิดขึ้นทั้งหมดของ $countErr |  |
| $ProcessText | ข้อความสำหรับกรณีมีรายการถูกนำออก |  | ถ้า $countErr > 0 ให้แสดง "แยกตาม Process ได้ดังนี้"ถ้า $countErr = 0 ไม่ต้องแสดง |  |
| $UpdateDate | วันและเวลาที่ประมวลผลเสร็จ | tx_rig_act_hd.updated_date |  |  |
| $PathKey | ตำแหน่งที่ตั้งไฟล์ | tx_rig_path_key.path_key | ที่ tx_rig_path_key.rig_hd_id = tx_rig_act_hd.rig_act_hd_id |  |
2. ข้อมูลในการส่งอีเมล
นำ email_code = "RIG_Process_Actual" มาค้นหาที่ตาราง cf_email โดยเทียบกับ cf_email.email_code
<![CDATA[SELECT email_subject, email_from, email_to, email_cc
FROM cf_email
WHERE email_code = (:emailCode)
AND status = 'A']]>
นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้
| Actual |
| From | cf_email.email_from |
| To | cf_email.email_from |
| CC | cf_email.email_cc |
| Subject | cf_email.email_subject $closingPeriod Treaty $treaty |
| Detail | เรียน ทีมประกันภัยต่อ ผู้เกี่ยวข้องส่วนประกันภัยต่อ (suthanee.sa 31/03/2026)แจ้งผลการดำเนินการประมวลผล Actual มีรายละเอียดดังนี้ช่วงประมวลผลข้อมูล : $closingPeriodวัน เวลา ที่ประมวลผล : $UpdateDate (ในรูปแบบ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)>)สถานะการประมวลผล : $statusตำแหน่ง File : $PathKey (suthanee.sa 05/03/2026) ตรวจพบจำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด $sumCountErr รายการ $ProcessTextลำดับที่Treaty CodeProcess Nameจำนวนรายการที่ถูกนำออก$runningNo$treaty$processName$countErr |
| FROM | appservice@ocean.co.th |
| TO | ITSupport@ocean.co.th |
| CC |  |
| SUBJECT | [Group RI] ผลการนำเข้าข้อมูลและการประมวลผล Actual ประจำเดือน 202506 Treaty GIB_Grp_Direct_EB |
| DESCRIPTION | เรียน ผู้เกี่ยวข้องส่วนประกันภัยต่อ แจ้งผลการดำเนินการประมวลผล Actual มีรายละเอียดดังนี้ช่วงประมวลผลข้อมูล : 202506วัน เวลา ที่ประมวลผล : 18/02/2026 11:17:17สถานะการประมวลผล : ประมวลผลสำเร็จ ตรวจพบจำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด 14 รายการ แยกตาม Process ได้ดังนี้ลำดับที่Treaty CodeProcess Nameจำนวนรายการที่ถูกนำออก1THREL_Grp_PAนำเข้าข้อมูลกรมธรรม์ตามรอบเดือน พร้อมรองรับการคัดกรองกรมธรรม์ที่มี RI ตาม Treaty12THREL_Grp_PAนำเข้าข้อมูลกรมธรรม์ที่มีวันเริ่มสัญญา (Effective Date) ย้อนหลังไม่เกิน 1 ปี23THREL_Grp_PAนำเข้าข้อมูลสินไหมที่มี วันที่อนุมัติอยู่ภายในรอบประมวลผล14THREL_Grp_PAข้อมูลแยก Layer ของแต่ละกรมธรรม์ภายใต้สัญญา Gibraltar Group EB โดยพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย55THREL_Grp_PAจัดเตรียมข้อมูลรายละเอียดของสมาชิกภายใต้แต่ละกรมธรรม์ (R01) List of inforce by member16THREL_Grp_PAประมวลผลและดึงข้อมูลกรมธรรม์ประกันกลุ่ม (Group Policy) ที่เคยมีประวัติการส่งประกันภัยต่อ (Reinsurance) จากทุกสัญญาที่เกี่ยวข้องย้อนหลัง และนำข้อมูลดังกล่าวมาใช้สำหรับการตั้งฐานข้อมูลเริ่มต้น37THREL_Grp_PAประมวลผล Estimate1 จึงเรียนมาเพื่อทราบGroup RI |


===== PAGE 1317404708 | Function Support > cancle > ซ้ำ (ยกเลิก) =====
(empty page)


===== PAGE 1313439905 | Function Support > cancle > ซ้ำ (ยกเลิก) > (ยกเลิก)RIG-RP-011 SOA_Est_{YYYY}{MM} V2 =====
TOC
/*<![CDATA[*/
div.rbtoc1782955812227 {padding: 0px;}
div.rbtoc1782955812227 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955812227 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report template version
- 2 Report template Description 2.1 การแสดงข้อมูล Output : Report Header 2.2 การแสดงข้อมูล Output : Report Detail 2.3 การแสดงข้อมูล Output : Report Footer
- 2.1 การแสดงข้อมูล Output : Report Header
- 2.2 การแสดงข้อมูล Output : Report Detail
- 2.3 การแสดงข้อมูล Output : Report Footer
- 3 การ Export report
- 4 การแสดง Report file name
- 5 การแสดงชื่อ Report sheet
- 6 การแสดง Report detail
- 7 การแสดง Report footer

## Report template version
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 15/01/2026 | akkarawat.le | SOA_Est_GIB_YYYYMMSOA_Est_Thaire_YYYYMMSOA_Est_Daiichi_YYYYMM | xlsx |  |
| 09/03/2026 | suthanee.sa | SOA_Est_GIB_YYYYMMSOA_Est_Thaire_YYYYMMSOA_Est_Daiichi_YYYYMM | xlsx |  |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล SOA RI Estimate ที่นำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |
| 4 | SRS | A09-2 ตัวอย่าง output file - Daiichi - Estimate SOA FileA09-8 ตัวอย่าง output file - Gibraltar - Estimate SOA FileA09-9 ตัวอย่าง output file - Thaire - Estimate SOA File |

## Report template Description
- การแสดงข้อมูล Output : Report Header
ส่วน Header
| แสดงข้อมูล Report Header | เงื่อนไขการ Mapping ข้อมูล |  |
| Statement of Account | Fix "Statement of Account" |  |
| January, 2022 | tx_rig_est_hd.period [MMMM] แปลงเป็นชื่อเดือนภาษาอังกฤษ + ", " + tx_rig_est_hd.period [YYYY] |  |
| No. 2022.01 | "No. " + tx_rig_est_hd.period [YYYY] + "." + tx_rig_est_hd.period [MM] |  |
| Reinsurer : Thaire Life Assurance Public Co., Ltd. | กรณี {FACULT_FLAG} = 'TRUE' > "Reinsurer : " + cf_reinsurer.reinsurer_name + "(Fac)"กรณี {FACULT_FLAG} = 'FALSE' > "Reinsurer : " + cf_reinsurer.reinsurer_name |  |
| Treaty : CI50 Rider Reinsurance Business | "Treaty : " + cf_rig_treaty.treaty_code |  |
| Treaty Effective Date : June 1, 2019 | "Treaty Effective Date : " + cf_rig_treaty_cond_hd.effective_date_from |  |
| Date : 06.02.2024 | "Date : " + system date |  |
| Currency : THB | Fix "Currency : THB" |  |
| Ceding company : Ocean Life | Fix "Ceding company : Ocean Life" |  |
- การแสดงข้อมูล Output : Report Detail
ส่วน Detail
หมายเหตุ: กรณีข้อมูลเป็น 0 หรือ NULL ให้แสดงเป็น "-"
| Name | Type (Source) | Size | Description | Table | Field | เงื่อนไขการบันทึก | ตัวอย่าง |
| DUE TO REINSURER (Cr.) |
| Reinsurance premium : |
| New Business |
| - LIFE | numeric | 25, 2 | Reinsurance premium New Business LIFE | tx_rig_est_soa | prem_new_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Reinsurance premium New Business AD&D | tx_rig_est_soa | prem_new_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Reinsurance premium New Business TPD | tx_rig_est_soa | prem_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Reinsurance premium New Business TTD | tx_rig_est_soa | prem_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Reinsurance premium New Business MEDICAL | tx_rig_est_soa | prem_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Reinsurance premium New Business | tx_rig_est_soa | prem_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Business (1 st yr.) |
| - LIFE | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) LIFE | tx_rig_est_soa | prem_renew_1y_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_1y_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) AD&D | tx_rig_est_soa | prem_renew_1y_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_1y_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) TPD | tx_rig_est_soa | prem_renew_1y_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_1y_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) TTD | tx_rig_est_soa | prem_renew_1y_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_1y_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) MEDICAL | tx_rig_est_soa | prem_renew_1y_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_1y_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Reinsurance premium Renewal Business (1 st yr.) | tx_rig_est_soa | prem_renew_1y_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_renew_1y_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Business (Renewal) |
| - LIFE | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) LIFE | tx_rig_est_soa | prem_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) AD&D | tx_rig_est_soa | prem_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) TPD | tx_rig_est_soa | prem_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) TTD | tx_rig_est_soa | prem_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) MEDICAL | tx_rig_est_soa | prem_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Reinsurance premium Renewal Business (Renewal) | tx_rig_est_soa | prem_renew_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Commission Refund : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Commission Refund 1 st yr. LIFE | tx_rig_est_soa | comm_refund_new_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund 1 st yr. AD&D | tx_rig_est_soa | comm_refund_new_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund 1 st yr. TPD | tx_rig_est_soa | comm_refund_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund 1 st yr. TTD | tx_rig_est_soa | comm_refund_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund 1 st yr. MEDICAL | tx_rig_est_soa | comm_refund_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund 1 st yr. | tx_rig_est_soa | comm_refund_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_refund_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Commission Refund Renewal LIFE | tx_rig_est_soa | comm_refund_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund Renewal AD&D | tx_rig_est_soa | comm_refund_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund Renewal TPD | tx_rig_est_soa | comm_refund_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund Renewal TTD | tx_rig_est_soa | comm_refund_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund Renewal MEDICAL | tx_rig_est_soa | comm_refund_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_medicalมาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund Renewal | tx_rig_est_soa | comm_refund_renew_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_refund_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| 1 st yr. Claim |
| - LIFE | numeric | 25, 2 | Commission Refund 1 st yr. Claim LIFE | tx_rig_est_soa | comm_refund_new_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_claim_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund 1 st yr. Claim AD&D | tx_rig_est_soa | comm_refund_new_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_claim_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund 1 st yr. Claim TPD | tx_rig_est_soa | comm_refund_new_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_claim_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund 1 st yr. Claim TTD | tx_rig_est_soa | comm_refund_new_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_claim_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund 1 st yr. Claim MEDICAL | tx_rig_est_soa | comm_refund_new_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_claim_medicalมาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund 1 st yr. Claim | tx_rig_est_soa | comm_refund_new_claim_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_refund_new_claim_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Claim |
| - LIFE | numeric | 25, 2 | Commission Refund Renewal Claim LIFE | tx_rig_est_soa | comm_refund_renew_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_claim_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund Renewal Claim AD&D | tx_rig_est_soa | comm_refund_renew_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_claim_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund Renewal Claim TPD | tx_rig_est_soa | comm_refund_renew_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_claim_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund Renewal Claim TTD | tx_rig_est_soa | comm_refund_renew_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_claim_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund Renewal Claim MEDICAL | tx_rig_est_soa | comm_refund_renew_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_claim_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund Renewal Claim | tx_rig_est_soa | comm_refund_renew_claim_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_refund_renew_claim_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Revival Premiums |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Revival Premiums 1 st yr. LIFE | tx_rig_est_soa | revival_prem_new_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Revival Premiums 1 st yr. AD&D | tx_rig_est_soa | revival_prem_new_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Revival Premiums 1 st yr. TPD | tx_rig_est_soa | revival_prem_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Revival Premiums 1 st yr. TTD | tx_rig_est_soa | revival_prem_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Revival Premiums 1 st yr. MEDICAL | tx_rig_est_soa | revival_prem_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Revival Premiums 1 st yr. | tx_rig_est_soa | revival_prem_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.revival_prem_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Revival Premiums Renewal LIFE | tx_rig_est_soa | revival_prem_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Revival Premiums Renewal AD&D | tx_rig_est_soa | revival_prem_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Revival Premiums Renewal TPD | tx_rig_est_soa | revival_prem_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Revival Premiums Renewal TTD | tx_rig_est_soa | revival_prem_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Revival Premiums Renewal MEDICAL | tx_rig_est_soa | revival_prem_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_renew_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Revival Premiums Renewal | tx_rig_est_soa | revival_prem_renew_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.revival_prem_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| SUB TOTAL | numeric | 25, 2 | Sub Total (Due to Reinsurer) | tx_rig_est_soa | sub_total_due_to_reinsurer | tx_rig_est_soa.sub_total_due_to_reinsurerกรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| DUE TO REINSURER | numeric | 25, 2 | Due to Reinsurer | tx_rig_est_soa | due_to_reinsurer | tx_rig_est_soa.due_to_reinsurertx_rig_est_soa.due_to_reinsurer > 0 ให้แสดง tx_rig_est_soa.due_to_reinsurertx_rig_est_soa.due_to_reinsurer <= 0 ให้แสดงค่าว่าง |  |
| DUE FROM REINSURER (Dr.) |
| Commission : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Commission 1 st yr. LIFE | tx_rig_est_soa | comm_new_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission 1 st yr. AD&D | tx_rig_est_soa | comm_new_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission 1 st yr. TPD | tx_rig_est_soa | comm_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission 1 st yr. TTD | tx_rig_est_soa | comm_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission 1 st yr. MEDICAL | tx_rig_est_soa | comm_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission 1 st yr. | tx_rig_est_soa | comm_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Commission Renewal LIFE | tx_rig_est_soa | comm_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Renewal AD&D | tx_rig_est_soa | comm_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Renewal TPD | tx_rig_est_soa | comm_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Renewal TTD | tx_rig_est_soa | comm_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Renewal MEDICAL | tx_rig_est_soa | comm_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_renew_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Renewal | tx_rig_est_soa | comm_renew_total | ค้นหา cf_rig_soa_template.cf_soa_column_id in (51, 52, 53, 54, 55)กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Premium Refund : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Premium Refund 1 st yr. LIFE | tx_rig_est_soa | prem_refund_new_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund 1 st yr. AD&D | tx_rig_est_soa | prem_refund_new_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund 1 st yr. TPD | tx_rig_est_soa | prem_refund_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund 1 st yr. TTD | tx_rig_est_soa | prem_refund_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund 1 st yr. MEDICAL | tx_rig_est_soa | prem_refund_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund 1 st yr. | tx_rig_est_soa | prem_refund_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_refund_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Premium Refund Renewal LIFE | tx_rig_est_soa | prem_refund_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund Renewal AD&D | tx_rig_est_soa | prem_refund_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund Renewal TPD | tx_rig_est_soa | prem_refund_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund Renewal TTD | tx_rig_est_soa | prem_refund_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund Renewal MEDICAL | tx_rig_est_soa | prem_refund_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund Renewal | tx_rig_est_soa | prem_refund_renew_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_refund_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| 1 st yr. Claim |
| - LIFE | numeric | 25, 2 | Premium Refund 1 st yr. Claim LIFE | tx_rig_est_soa | prem_refund_new_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_claim_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund 1 st yr. Claim AD&D | tx_rig_est_soa | prem_refund_new_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_claim_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund 1 st yr. Claim TPD | tx_rig_est_soa | prem_refund_new_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_claim_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund 1 st yr. Claim TTD | tx_rig_est_soa | prem_refund_new_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_claim_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund 1 st yr. Claim MEDICAL | tx_rig_est_soa | prem_refund_new_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_claim_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund 1 st yr. Claim | tx_rig_est_soa | prem_refund_new_claim_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_refund_new_claim_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Claim |
| - LIFE | numeric | 25, 2 | Premium Refund Renewal Claim LIFE | tx_rig_est_soa | prem_refund_renew_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_claim_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund Renewal Claim AD&D | tx_rig_est_soa | prem_refund_renew_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_claim_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund Renewal Claim TPD | tx_rig_est_soa | prem_refund_renew_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_claim_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund Renewal Claim TTD | tx_rig_est_soa | prem_refund_renew_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_claim_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund Renewal Claim MEDICAL | tx_rig_est_soa | prem_refund_renew_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_claim_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund Renewal Claim | tx_rig_est_soa | prem_refund_renew_claim_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_refund_renew_claim_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Claim : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Claim 1 st yr. LIFE | tx_rig_est_soa | claim_new_life | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Claim 1 st yr. AD&D | tx_rig_est_soa | claim_new_add | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Claim 1 st yr. TPD | tx_rig_est_soa | claim_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Claim 1 st yr. TTD | tx_rig_est_soa | claim_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Claim 1 st yr. MEDICAL | tx_rig_est_soa | claim_new_medical | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Claim 1 st yr. | tx_rig_est_soa | claim_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.claim_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Claim Renewal LIFE | tx_rig_est_soa | claim_renew_life | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Claim Renewal AD&D | tx_rig_est_soa | claim_renew_add | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Claim Renewal TPD | tx_rig_est_soa | claim_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Claim Renewal TTD | tx_rig_est_soa | claim_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Claim Renewal MEDICAL | tx_rig_est_soa | claim_renew_medical | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_renew_medical มาแสดง กรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Claim Renewal | tx_rig_est_soa | claim_renew_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.claim_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Claim Expenses |
| - INVESTIGATION FEE | numeric | 25, 2 | Claim Expenses INVESTIGATION FEE | tx_rig_est_soa | claim_exp_investigation_fee | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_exp_investigation_fee มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - LEGAL FEE | numeric | 25, 2 | Claim Expenses LEGAL FEE | tx_rig_est_soa | claim_exp_legal_fee | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_exp_legal_fee มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL EVIDENCE | numeric | 25, 2 | Claim Expenses MEDICAL EVIDENCE | tx_rig_est_soa | claim_exp_med | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_exp_ex_gratia มาแสดงกรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_exp_med มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Claim Expenses | tx_rig_est_soa | claim_exp_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.claim_exp_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Admin. Commission (Remittance) : | numeric | 25, 2 | Admin. Commission (Remittance) | tx_rig_est_soa | admin_comm_remittance | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.admin_comm_remittance มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Experience Refund Share : | numeric | 25, 2 | Experience Refund Share | tx_rig_est_soa | experience_refund_share | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.experience_refund_share มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Profit Commission : | numeric | 25, 2 | Profit Commission | tx_rig_est_soa | profit_comm | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.profit_comm มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| SUB TOTAL | numeric | 25, 2 | Sub Total (Due from Reinsurer) | tx_rig_est_soa | sub_total_due_from_reinsurer | tx_rig_est_soa.sub_total_due_from_reinsurerกรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| DUE FROM REINSURER | numeric | 25, 2 | Due from Reinsurer | tx_rig_est_soa | due_from_reinsurer | tx_rig_est_soa.due_from_reinsurertx_rig_est_soa.due_from_reinsurer < 0 ให้แสดง tx_rig_est_soa.due_from_reinsurer (ให้แสดงค่าเป็น บวกเสมอ)tx_rig_est_soa.due_from_reinsurer >= 0 ให้แสดงค่าว่าง |  |
- การแสดงข้อมูล Output : Report Footer
ส่วน Footer
| Name | Type (Source) | Size | Description | Table | Field | เงื่อนไขการบันทึก | ตัวอย่าง |
| Remark : | varchar | 100 | หมายเหตุ | tx_rig_est_soa | remark | - |  |

## การ Export report
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |

## การแสดง Report file name
| การแสดงชื่อ File |
| จาก Table : cf_rig_template_file.cf_template_file_id = 11ดึงชื่อ File Generate template จาก cf_template_file.template_file_nameSOA_Est_{Reinsurance}_{YYYY}{MM}_export ใช้ข้อมูลจาก tx_rig_process_hd.period มาแสดง ตัวอย่างเช่น: SOA_Est_Daiichi_202501_export ข้อมูลนามสกุลไฟล์ : cf_rig_template_file.file_type |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตาม Report Detail |

## การแสดง Report detail
| Report Detail Section |
| ตาม Report Detail |

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1312719954 | Function Support > cancle > ซ้ำ (ยกเลิก) > (ยกเลิก)RIG-RP-011 SOA_Est_{YYYY}{MM} V2 > RIG-RP-011-01 =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 15/01/2026 | akkarawat.le | SOA_Est_GIB_YYYYMMSOA_Est_Thaire_YYYYMMSOA_Est_Daiichi_YYYYMM | xlsx |  |
| 09/03/2026 | suthanee.sa | SOA_Est_GIB_YYYYMMSOA_Est_Thaire_YYYYMMSOA_Est_Daiichi_YYYYMM | xlsx |  |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล SOA RI Estimate ที่นำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |
| 4 | SRS | A09-2 ตัวอย่าง output file - Daiichi - Estimate SOA FileA09-8 ตัวอย่าง output file - Gibraltar - Estimate SOA FileA09-9 ตัวอย่าง output file - Thaire - Estimate SOA File |


===== PAGE 1313439940 | Function Support > cancle > ซ้ำ (ยกเลิก) > (ยกเลิก)RIG-RP-011 SOA_Est_{YYYY}{MM} V2 > RIG-RP-011-02 Output Header =====
ส่วน Header
| แสดงข้อมูล Report Header | เงื่อนไขการ Mapping ข้อมูล |  |
| Statement of Account | Fix "Statement of Account" |  |
| January, 2022 | tx_rig_est_hd.period [MMMM] แปลงเป็นชื่อเดือนภาษาอังกฤษ + ", " + tx_rig_est_hd.period [YYYY] |  |
| No. 2022.01 | "No. " + tx_rig_est_hd.period [YYYY] + "." + tx_rig_est_hd.period [MM] |  |
| Reinsurer : Thaire Life Assurance Public Co., Ltd. | กรณี {FACULT_FLAG} = 'TRUE' > "Reinsurer : " + cf_reinsurer.reinsurer_name + "(Fac)"กรณี {FACULT_FLAG} = 'FALSE' > "Reinsurer : " + cf_reinsurer.reinsurer_name |  |
| Treaty : CI50 Rider Reinsurance Business | "Treaty : " + cf_rig_treaty.treaty_code |  |
| Treaty Effective Date : June 1, 2019 | "Treaty Effective Date : " + cf_rig_treaty_cond_hd.effective_date_from |  |
| Date : 06.02.2024 | "Date : " + system date |  |
| Currency : THB | Fix "Currency : THB" |  |
| Ceding company : Ocean Life | Fix "Ceding company : Ocean Life" |  |


===== PAGE 1312719962 | Function Support > cancle > ซ้ำ (ยกเลิก) > (ยกเลิก)RIG-RP-011 SOA_Est_{YYYY}{MM} V2 > RIG-RP-011-03 Output Detail =====
ส่วน Detail
หมายเหตุ: กรณีข้อมูลเป็น 0 หรือ NULL ให้แสดงเป็น "-"
| Name | Type (Source) | Size | Description | Table | Field | เงื่อนไขการบันทึก | ตัวอย่าง |
| DUE TO REINSURER (Cr.) |
| Reinsurance premium : |
| New Business |
| - LIFE | numeric | 25, 2 | Reinsurance premium New Business LIFE | tx_rig_est_soa | prem_new_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Reinsurance premium New Business AD&D | tx_rig_est_soa | prem_new_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Reinsurance premium New Business TPD | tx_rig_est_soa | prem_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Reinsurance premium New Business TTD | tx_rig_est_soa | prem_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Reinsurance premium New Business MEDICAL | tx_rig_est_soa | prem_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Reinsurance premium New Business | tx_rig_est_soa | prem_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Business (1 st yr.) |
| - LIFE | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) LIFE | tx_rig_est_soa | prem_renew_1y_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_1y_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) AD&D | tx_rig_est_soa | prem_renew_1y_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_1y_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) TPD | tx_rig_est_soa | prem_renew_1y_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_1y_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) TTD | tx_rig_est_soa | prem_renew_1y_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_1y_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) MEDICAL | tx_rig_est_soa | prem_renew_1y_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_1y_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Reinsurance premium Renewal Business (1 st yr.) | tx_rig_est_soa | prem_renew_1y_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_renew_1y_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Business (Renewal) |
| - LIFE | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) LIFE | tx_rig_est_soa | prem_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) AD&D | tx_rig_est_soa | prem_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) TPD | tx_rig_est_soa | prem_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) TTD | tx_rig_est_soa | prem_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) MEDICAL | tx_rig_est_soa | prem_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Reinsurance premium Renewal Business (Renewal) | tx_rig_est_soa | prem_renew_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Commission Refund : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Commission Refund 1 st yr. LIFE | tx_rig_est_soa | comm_refund_new_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund 1 st yr. AD&D | tx_rig_est_soa | comm_refund_new_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund 1 st yr. TPD | tx_rig_est_soa | comm_refund_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund 1 st yr. TTD | tx_rig_est_soa | comm_refund_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund 1 st yr. MEDICAL | tx_rig_est_soa | comm_refund_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund 1 st yr. | tx_rig_est_soa | comm_refund_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_refund_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Commission Refund Renewal LIFE | tx_rig_est_soa | comm_refund_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund Renewal AD&D | tx_rig_est_soa | comm_refund_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund Renewal TPD | tx_rig_est_soa | comm_refund_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund Renewal TTD | tx_rig_est_soa | comm_refund_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund Renewal MEDICAL | tx_rig_est_soa | comm_refund_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_medicalมาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund Renewal | tx_rig_est_soa | comm_refund_renew_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_refund_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| 1 st yr. Claim |
| - LIFE | numeric | 25, 2 | Commission Refund 1 st yr. Claim LIFE | tx_rig_est_soa | comm_refund_new_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_claim_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund 1 st yr. Claim AD&D | tx_rig_est_soa | comm_refund_new_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_claim_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund 1 st yr. Claim TPD | tx_rig_est_soa | comm_refund_new_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_claim_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund 1 st yr. Claim TTD | tx_rig_est_soa | comm_refund_new_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_claim_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund 1 st yr. Claim MEDICAL | tx_rig_est_soa | comm_refund_new_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_claim_medicalมาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund 1 st yr. Claim | tx_rig_est_soa | comm_refund_new_claim_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_refund_new_claim_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Claim |
| - LIFE | numeric | 25, 2 | Commission Refund Renewal Claim LIFE | tx_rig_est_soa | comm_refund_renew_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_claim_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund Renewal Claim AD&D | tx_rig_est_soa | comm_refund_renew_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_claim_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund Renewal Claim TPD | tx_rig_est_soa | comm_refund_renew_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_claim_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund Renewal Claim TTD | tx_rig_est_soa | comm_refund_renew_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_claim_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund Renewal Claim MEDICAL | tx_rig_est_soa | comm_refund_renew_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_claim_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund Renewal Claim | tx_rig_est_soa | comm_refund_renew_claim_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_refund_renew_claim_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Revival Premiums |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Revival Premiums 1 st yr. LIFE | tx_rig_est_soa | revival_prem_new_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Revival Premiums 1 st yr. AD&D | tx_rig_est_soa | revival_prem_new_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Revival Premiums 1 st yr. TPD | tx_rig_est_soa | revival_prem_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Revival Premiums 1 st yr. TTD | tx_rig_est_soa | revival_prem_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Revival Premiums 1 st yr. MEDICAL | tx_rig_est_soa | revival_prem_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Revival Premiums 1 st yr. | tx_rig_est_soa | revival_prem_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.revival_prem_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Revival Premiums Renewal LIFE | tx_rig_est_soa | revival_prem_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Revival Premiums Renewal AD&D | tx_rig_est_soa | revival_prem_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Revival Premiums Renewal TPD | tx_rig_est_soa | revival_prem_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Revival Premiums Renewal TTD | tx_rig_est_soa | revival_prem_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Revival Premiums Renewal MEDICAL | tx_rig_est_soa | revival_prem_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_renew_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Revival Premiums Renewal | tx_rig_est_soa | revival_prem_renew_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.revival_prem_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| SUB TOTAL | numeric | 25, 2 | Sub Total (Due to Reinsurer) | tx_rig_est_soa | sub_total_due_to_reinsurer | tx_rig_est_soa.sub_total_due_to_reinsurerกรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| DUE TO REINSURER | numeric | 25, 2 | Due to Reinsurer | tx_rig_est_soa | due_to_reinsurer | tx_rig_est_soa.due_to_reinsurertx_rig_est_soa.due_to_reinsurer > 0 ให้แสดง tx_rig_est_soa.due_to_reinsurertx_rig_est_soa.due_to_reinsurer <= 0 ให้แสดงค่าว่าง |  |
| DUE FROM REINSURER (Dr.) |
| Commission : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Commission 1 st yr. LIFE | tx_rig_est_soa | comm_new_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission 1 st yr. AD&D | tx_rig_est_soa | comm_new_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission 1 st yr. TPD | tx_rig_est_soa | comm_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission 1 st yr. TTD | tx_rig_est_soa | comm_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission 1 st yr. MEDICAL | tx_rig_est_soa | comm_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission 1 st yr. | tx_rig_est_soa | comm_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Commission Renewal LIFE | tx_rig_est_soa | comm_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Renewal AD&D | tx_rig_est_soa | comm_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Renewal TPD | tx_rig_est_soa | comm_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Renewal TTD | tx_rig_est_soa | comm_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Renewal MEDICAL | tx_rig_est_soa | comm_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_renew_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Renewal | tx_rig_est_soa | comm_renew_total | ค้นหา cf_rig_soa_template.cf_soa_column_id in (51, 52, 53, 54, 55)กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Premium Refund : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Premium Refund 1 st yr. LIFE | tx_rig_est_soa | prem_refund_new_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund 1 st yr. AD&D | tx_rig_est_soa | prem_refund_new_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund 1 st yr. TPD | tx_rig_est_soa | prem_refund_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund 1 st yr. TTD | tx_rig_est_soa | prem_refund_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund 1 st yr. MEDICAL | tx_rig_est_soa | prem_refund_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund 1 st yr. | tx_rig_est_soa | prem_refund_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_refund_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Premium Refund Renewal LIFE | tx_rig_est_soa | prem_refund_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund Renewal AD&D | tx_rig_est_soa | prem_refund_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund Renewal TPD | tx_rig_est_soa | prem_refund_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund Renewal TTD | tx_rig_est_soa | prem_refund_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund Renewal MEDICAL | tx_rig_est_soa | prem_refund_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund Renewal | tx_rig_est_soa | prem_refund_renew_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_refund_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| 1 st yr. Claim |
| - LIFE | numeric | 25, 2 | Premium Refund 1 st yr. Claim LIFE | tx_rig_est_soa | prem_refund_new_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_claim_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund 1 st yr. Claim AD&D | tx_rig_est_soa | prem_refund_new_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_claim_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund 1 st yr. Claim TPD | tx_rig_est_soa | prem_refund_new_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_claim_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund 1 st yr. Claim TTD | tx_rig_est_soa | prem_refund_new_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_claim_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund 1 st yr. Claim MEDICAL | tx_rig_est_soa | prem_refund_new_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_claim_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund 1 st yr. Claim | tx_rig_est_soa | prem_refund_new_claim_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_refund_new_claim_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Claim |
| - LIFE | numeric | 25, 2 | Premium Refund Renewal Claim LIFE | tx_rig_est_soa | prem_refund_renew_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_claim_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund Renewal Claim AD&D | tx_rig_est_soa | prem_refund_renew_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_claim_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund Renewal Claim TPD | tx_rig_est_soa | prem_refund_renew_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_claim_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund Renewal Claim TTD | tx_rig_est_soa | prem_refund_renew_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_claim_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund Renewal Claim MEDICAL | tx_rig_est_soa | prem_refund_renew_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_claim_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund Renewal Claim | tx_rig_est_soa | prem_refund_renew_claim_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_refund_renew_claim_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Claim : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Claim 1 st yr. LIFE | tx_rig_est_soa | claim_new_life | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Claim 1 st yr. AD&D | tx_rig_est_soa | claim_new_add | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Claim 1 st yr. TPD | tx_rig_est_soa | claim_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Claim 1 st yr. TTD | tx_rig_est_soa | claim_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Claim 1 st yr. MEDICAL | tx_rig_est_soa | claim_new_medical | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Claim 1 st yr. | tx_rig_est_soa | claim_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.claim_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Claim Renewal LIFE | tx_rig_est_soa | claim_renew_life | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Claim Renewal AD&D | tx_rig_est_soa | claim_renew_add | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Claim Renewal TPD | tx_rig_est_soa | claim_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Claim Renewal TTD | tx_rig_est_soa | claim_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Claim Renewal MEDICAL | tx_rig_est_soa | claim_renew_medical | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_renew_medical มาแสดง กรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Claim Renewal | tx_rig_est_soa | claim_renew_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.claim_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Claim Expenses |
| - INVESTIGATION FEE | numeric | 25, 2 | Claim Expenses INVESTIGATION FEE | tx_rig_est_soa | claim_exp_investigation_fee | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_exp_investigation_fee มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - LEGAL FEE | numeric | 25, 2 | Claim Expenses LEGAL FEE | tx_rig_est_soa | claim_exp_legal_fee | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_exp_legal_fee มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL EVIDENCE | numeric | 25, 2 | Claim Expenses MEDICAL EVIDENCE | tx_rig_est_soa | claim_exp_med | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_exp_ex_gratia มาแสดงกรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_exp_med มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Claim Expenses | tx_rig_est_soa | claim_exp_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.claim_exp_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Admin. Commission (Remittance) : | numeric | 25, 2 | Admin. Commission (Remittance) | tx_rig_est_soa | admin_comm_remittance | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.admin_comm_remittance มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Experience Refund Share : | numeric | 25, 2 | Experience Refund Share | tx_rig_est_soa | experience_refund_share | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.experience_refund_share มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Profit Commission : | numeric | 25, 2 | Profit Commission | tx_rig_est_soa | profit_comm | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.profit_comm มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| SUB TOTAL | numeric | 25, 2 | Sub Total (Due from Reinsurer) | tx_rig_est_soa | sub_total_due_from_reinsurer | tx_rig_est_soa.sub_total_due_from_reinsurerกรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| DUE FROM REINSURER | numeric | 25, 2 | Due from Reinsurer | tx_rig_est_soa | due_from_reinsurer | tx_rig_est_soa.due_from_reinsurertx_rig_est_soa.due_from_reinsurer < 0 ให้แสดง tx_rig_est_soa.due_from_reinsurer (ให้แสดงค่าเป็น บวกเสมอ)tx_rig_est_soa.due_from_reinsurer >= 0 ให้แสดงค่าว่าง |  |


===== PAGE 1313439944 | Function Support > cancle > ซ้ำ (ยกเลิก) > (ยกเลิก)RIG-RP-011 SOA_Est_{YYYY}{MM} V2 > RIG-RP-011-04 Output Footer =====
ส่วน Footer
| Name | Type (Source) | Size | Description | Table | Field | เงื่อนไขการบันทึก | ตัวอย่าง |
| Remark : | varchar | 100 | หมายเหตุ | tx_rig_est_soa | remark | - |  |


===== PAGE 1313439983 | Function Support > cancle > ซ้ำ (ยกเลิก) > (ยกเลิก)RIG-RP-011 SOA_Est_{YYYY}{MM} V2 > WS_RIG-RP-011 Output =====
| Name | Type (Source) | Size | Description | Table | Field | เงื่อนไขการบันทึก | ตัวอย่าง |
| DUE TO REINSURER (Cr.) |
| Reinsurance premium : |
| New Business |
| - LIFE | numeric | 25, 2 | Reinsurance premium New Business LIFE | tx_rig_est_soa | prem_new_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Reinsurance premium New Business AD&D | tx_rig_est_soa | prem_new_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Reinsurance premium New Business TPD | tx_rig_est_soa | prem_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Reinsurance premium New Business TTD | tx_rig_est_soa | prem_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Reinsurance premium New Business MEDICAL | tx_rig_est_soa | prem_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Reinsurance premium New Business | tx_rig_est_soa | prem_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Business (1 st yr.) |
| - LIFE | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) LIFE | tx_rig_est_soa | prem_renew_1y_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_1y_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) AD&D | tx_rig_est_soa | prem_renew_1y_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_1y_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) TPD | tx_rig_est_soa | prem_renew_1y_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_1y_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) TTD | tx_rig_est_soa | prem_renew_1y_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_1y_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) MEDICAL | tx_rig_est_soa | prem_renew_1y_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_1y_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Reinsurance premium Renewal Business (1 st yr.) | tx_rig_est_soa | prem_renew_1y_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_renew_1y_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Business (Renewal) |
| - LIFE | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) LIFE | tx_rig_est_soa | prem_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) AD&D | tx_rig_est_soa | prem_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) TPD | tx_rig_est_soa | prem_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) TTD | tx_rig_est_soa | prem_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) MEDICAL | tx_rig_est_soa | prem_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_renew_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Reinsurance premium Renewal Business (Renewal) | tx_rig_est_soa | prem_renew_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Commission Refund : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Commission Refund 1 st yr. LIFE | tx_rig_est_soa | comm_refund_new_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund 1 st yr. AD&D | tx_rig_est_soa | comm_refund_new_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund 1 st yr. TPD | tx_rig_est_soa | comm_refund_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund 1 st yr. TTD | tx_rig_est_soa | comm_refund_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund 1 st yr. MEDICAL | tx_rig_est_soa | comm_refund_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund 1 st yr. | tx_rig_est_soa | comm_refund_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_refund_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Commission Refund Renewal LIFE | tx_rig_est_soa | comm_refund_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund Renewal AD&D | tx_rig_est_soa | comm_refund_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund Renewal TPD | tx_rig_est_soa | comm_refund_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund Renewal TTD | tx_rig_est_soa | comm_refund_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund Renewal MEDICAL | tx_rig_est_soa | comm_refund_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_medicalมาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund Renewal | tx_rig_est_soa | comm_refund_renew_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_refund_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| 1 st yr. Claim |
| - LIFE | numeric | 25, 2 | Commission Refund 1 st yr. Claim LIFE | tx_rig_est_soa | comm_refund_new_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_claim_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund 1 st yr. Claim AD&D | tx_rig_est_soa | comm_refund_new_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_claim_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund 1 st yr. Claim TPD | tx_rig_est_soa | comm_refund_new_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_claim_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund 1 st yr. Claim TTD | tx_rig_est_soa | comm_refund_new_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_claim_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund 1 st yr. Claim MEDICAL | tx_rig_est_soa | comm_refund_new_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_new_claim_medicalมาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund 1 st yr. Claim | tx_rig_est_soa | comm_refund_new_claim_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_refund_new_claim_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Claim |
| - LIFE | numeric | 25, 2 | Commission Refund Renewal Claim LIFE | tx_rig_est_soa | comm_refund_renew_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_claim_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund Renewal Claim AD&D | tx_rig_est_soa | comm_refund_renew_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_claim_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund Renewal Claim TPD | tx_rig_est_soa | comm_refund_renew_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_claim_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund Renewal Claim TTD | tx_rig_est_soa | comm_refund_renew_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_claim_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund Renewal Claim MEDICAL | tx_rig_est_soa | comm_refund_renew_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_refund_renew_claim_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund Renewal Claim | tx_rig_est_soa | comm_refund_renew_claim_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_refund_renew_claim_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Revival Premiums |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Revival Premiums 1 st yr. LIFE | tx_rig_est_soa | revival_prem_new_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Revival Premiums 1 st yr. AD&D | tx_rig_est_soa | revival_prem_new_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Revival Premiums 1 st yr. TPD | tx_rig_est_soa | revival_prem_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Revival Premiums 1 st yr. TTD | tx_rig_est_soa | revival_prem_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Revival Premiums 1 st yr. MEDICAL | tx_rig_est_soa | revival_prem_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Revival Premiums 1 st yr. | tx_rig_est_soa | revival_prem_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.revival_prem_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Revival Premiums Renewal LIFE | tx_rig_est_soa | revival_prem_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Revival Premiums Renewal AD&D | tx_rig_est_soa | revival_prem_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Revival Premiums Renewal TPD | tx_rig_est_soa | revival_prem_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Revival Premiums Renewal TTD | tx_rig_est_soa | revival_prem_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Revival Premiums Renewal MEDICAL | tx_rig_est_soa | revival_prem_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.revival_prem_renew_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Revival Premiums Renewal | tx_rig_est_soa | revival_prem_renew_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.revival_prem_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| SUB TOTAL | numeric | 25, 2 | Sub Total (Due to Reinsurer) | tx_rig_est_soa | sub_total_due_to_reinsurer | tx_rig_est_soa.sub_total_due_to_reinsurerกรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| DUE TO REINSURER | numeric | 25, 2 | Due to Reinsurer | tx_rig_est_soa | due_to_reinsurer | tx_rig_est_soa.due_to_reinsurertx_rig_est_soa.due_to_reinsurer > 0 ให้แสดง tx_rig_est_soa.due_to_reinsurertx_rig_est_soa.due_to_reinsurer <= 0 ให้แสดงค่าว่าง |  |
| DUE FROM REINSURER (Dr.) |
| Commission : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Commission 1 st yr. LIFE | tx_rig_est_soa | comm_new_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission 1 st yr. AD&D | tx_rig_est_soa | comm_new_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission 1 st yr. TPD | tx_rig_est_soa | comm_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission 1 st yr. TTD | tx_rig_est_soa | comm_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission 1 st yr. MEDICAL | tx_rig_est_soa | comm_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission 1 st yr. | tx_rig_est_soa | comm_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Commission Renewal LIFE | tx_rig_est_soa | comm_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Renewal AD&D | tx_rig_est_soa | comm_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Renewal TPD | tx_rig_est_soa | comm_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Renewal TTD | tx_rig_est_soa | comm_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Renewal MEDICAL | tx_rig_est_soa | comm_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.comm_renew_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Renewal | tx_rig_est_soa | comm_renew_total | ค้นหา cf_rig_soa_template.cf_soa_column_id in (51, 52, 53, 54, 55)กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.comm_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Premium Refund : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Premium Refund 1 st yr. LIFE | tx_rig_est_soa | prem_refund_new_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund 1 st yr. AD&D | tx_rig_est_soa | prem_refund_new_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund 1 st yr. TPD | tx_rig_est_soa | prem_refund_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund 1 st yr. TTD | tx_rig_est_soa | prem_refund_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund 1 st yr. MEDICAL | tx_rig_est_soa | prem_refund_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund 1 st yr. | tx_rig_est_soa | prem_refund_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_refund_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Premium Refund Renewal LIFE | tx_rig_est_soa | prem_refund_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund Renewal AD&D | tx_rig_est_soa | prem_refund_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund Renewal TPD | tx_rig_est_soa | prem_refund_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund Renewal TTD | tx_rig_est_soa | prem_refund_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund Renewal MEDICAL | tx_rig_est_soa | prem_refund_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund Renewal | tx_rig_est_soa | prem_refund_renew_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_refund_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| 1 st yr. Claim |
| - LIFE | numeric | 25, 2 | Premium Refund 1 st yr. Claim LIFE | tx_rig_est_soa | prem_refund_new_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_claim_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund 1 st yr. Claim AD&D | tx_rig_est_soa | prem_refund_new_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_claim_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund 1 st yr. Claim TPD | tx_rig_est_soa | prem_refund_new_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_claim_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund 1 st yr. Claim TTD | tx_rig_est_soa | prem_refund_new_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_claim_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund 1 st yr. Claim MEDICAL | tx_rig_est_soa | prem_refund_new_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_new_claim_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund 1 st yr. Claim | tx_rig_est_soa | prem_refund_new_claim_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_refund_new_claim_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Claim |
| - LIFE | numeric | 25, 2 | Premium Refund Renewal Claim LIFE | tx_rig_est_soa | prem_refund_renew_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_claim_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund Renewal Claim AD&D | tx_rig_est_soa | prem_refund_renew_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_claim_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund Renewal Claim TPD | tx_rig_est_soa | prem_refund_renew_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_claim_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund Renewal Claim TTD | tx_rig_est_soa | prem_refund_renew_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_claim_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund Renewal Claim MEDICAL | tx_rig_est_soa | prem_refund_renew_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.prem_refund_renew_claim_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund Renewal Claim | tx_rig_est_soa | prem_refund_renew_claim_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.prem_refund_renew_claim_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Claim : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Claim 1 st yr. LIFE | tx_rig_est_soa | claim_new_life | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_new_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Claim 1 st yr. AD&D | tx_rig_est_soa | claim_new_add | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_new_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Claim 1 st yr. TPD | tx_rig_est_soa | claim_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_new_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Claim 1 st yr. TTD | tx_rig_est_soa | claim_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_new_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Claim 1 st yr. MEDICAL | tx_rig_est_soa | claim_new_medical | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_new_medical มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Claim 1 st yr. | tx_rig_est_soa | claim_new_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.claim_new_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Claim Renewal LIFE | tx_rig_est_soa | claim_renew_life | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_renew_life มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Claim Renewal AD&D | tx_rig_est_soa | claim_renew_add | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_renew_add มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Claim Renewal TPD | tx_rig_est_soa | claim_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_renew_tpd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Claim Renewal TTD | tx_rig_est_soa | claim_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_renew_ttd มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Claim Renewal MEDICAL | tx_rig_est_soa | claim_renew_medical | กรณีพบข้อมูลให้นำ tx_rig_est_soa.claim_renew_medical มาแสดง กรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Claim Renewal | tx_rig_est_soa | claim_renew_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.claim_renew_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Claim Expenses |
| - INVESTIGATION FEE | numeric | 25, 2 | Claim Expenses INVESTIGATION FEE | tx_rig_est_soa | claim_exp_investigation_fee | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_exp_investigation_fee มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - LEGAL FEE | numeric | 25, 2 | Claim Expenses LEGAL FEE | tx_rig_est_soa | claim_exp_legal_fee | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_exp_legal_fee มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL EVIDENCE | numeric | 25, 2 | Claim Expenses MEDICAL EVIDENCE | tx_rig_est_soa | claim_exp_med | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_exp_ex_gratia มาแสดงกรณีพบข้อมูล ให้นำ tx_rig_est_soa.claim_exp_med มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Claim Expenses | tx_rig_est_soa | claim_exp_total | กรณีพบข้อมูล cf_soa_column_id อย่างน้อย 1 id ให้นำ tx_rig_est_soa.claim_exp_total มาแสดงกรณีไม่พบข้อมูล cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Admin. Commission (Remittance) : | numeric | 25, 2 | Admin. Commission (Remittance) | tx_rig_est_soa | admin_comm_remittance | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.admin_comm_remittance มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Experience Refund Share : | numeric | 25, 2 | Experience Refund Share | tx_rig_est_soa | experience_refund_share | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.experience_refund_share มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Profit Commission : | numeric | 25, 2 | Profit Commission | tx_rig_est_soa | profit_comm | กรณีพบข้อมูล ให้นำ tx_rig_est_soa.profit_comm มาแสดงกรณีไม่พบข้อมูล ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| SUB TOTAL | numeric | 25, 2 | Sub Total (Due from Reinsurer) | tx_rig_est_soa | sub_total_due_from_reinsurer | tx_rig_est_soa.sub_total_due_from_reinsurerกรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| DUE FROM REINSURER | numeric | 25, 2 | Due from Reinsurer | tx_rig_est_soa | due_from_reinsurer | tx_rig_est_soa.due_from_reinsurertx_rig_est_soa.due_from_reinsurer < 0 ให้แสดง tx_rig_est_soa.due_from_reinsurer (ให้แสดงค่าเป็น บวกเสมอ)tx_rig_est_soa.due_from_reinsurer >= 0 ให้แสดงค่าว่าง |  |


===== PAGE 1317404712 | Function Support > cancle > ซ้ำ (ยกเลิก) > RIG-RP-021 Ex =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 03/02/2026 | pongsathorn.pa | Profit_Commission_Thaire_Group PA_{YYYY} | xlsx | Profit_Commission_Thaire_Group PA_2026 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับแสดงข้อมูลประมวลผล profit commission |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เข้าหน้าจอ กดปุ่ม ประมวลผล profit commissionระบุเงื่อนไขที่ต้องการจะเรียกดูข้อมูล (quarter_year, treaty)กดประมวลผลระบบ ประมวลผล และ Generate รายงานเป็น xlsx ไฟล์สำหรับ Download |


===== PAGE 1317404721 | Function Support > cancle > ซ้ำ (ยกเลิก) > RIG-RP-021 Map =====
| No. | Name | Description | Table | Field | Format | ตัวอย่าง |
| 1 | PROFIT COMMISSION FOR YEAR YYYY | Report header | tx_rig_act_hd | year |  | PROFIT COMMISSION FOR YEAR 2024 |
| 2 | YYYY | Report header | tx_rig_act_hd | year | Center | 2024 |
| 3 | (Baht) |  |  |  | Text |  |
| 4 | Income | หมวดรายได้ที่ใช้ในการคำนวณผลกำไรสำหรับ Profit Commission |  |  | Text |  |
| 5 | Reassurance premium net of cancellations and discount falling due during the year | เบี้ยประกันต่อสุทธิของปี หลังหักรายการยกเลิกกรมธรรม์และส่วนลดเบี้ยที่ถึงกำหนดในปีนั้น | tx_rig_profit_comm | sum_prem | right | 650,069.03 |
| 6 | Reserve for unearned premiums as at the beginning of the year | เงินสำรองเบี้ยประกันที่ยังไม่ถือเป็นรายได้ ณ ต้นปี | tx_rig_profit_comm | unearn_prem_begin | right | 321,816.50 |
| 7 | Total (Income) | ผลรวมของรายได้ทั้งหมดในหมวด Income | tx_rig_profit_comm | total_income | right | 971,885.53 |
| 8 | Outgo | หมวดค่าใช้จ่ายและรายการหักที่ใช้ในการคำนวณผลกำไรสำหรับ Profit Commission |  |  | Text |  |
| 9 | Claims and legal expenses paid during the year | ค่าสินไหมและค่าใช้จ่ายทางกฎหมายที่จ่ายจริงในระหว่างปี | tx_rig_profit_comm | sum_claim | right | 0.00 |
| 10 | Administrative expenses : Administrative expenses% of the reassurance premiums | ค่าใช้จ่ายในการบริหาร คิดเป็น Administrative expenses% ของเบี้ยประกันต่อ | tx_rig_profit_comm | sum_prem_admin | right | 65,006.90 |
| 11 | Reserve for unearned premiums as at the end of the year = Reserve for unearned premiums% of the reassurance premiums | เงินสำรองเบี้ยประกันที่ยังไม่ถือเป็นรายได้ ณ สิ้นปี คิดเป็น Reserve for unearned premiums% ของเบี้ยประกันต่อ | tx_rig_profit_comm | sum_prem_unearn | right | 325,034.52 |
| 12 | Reserve for claims, if any, as at the end of the year | เงินสำรองค่าสินไหม ณ สิ้นปี (ถ้ามี) | tx_rig_profit_comm | reserve_claim_end | right | 0.00 |
| 13 | Commissions, if any, due during the year | ค่าคอมมิชชั่นที่ถึงกำหนดจ่ายในระหว่างปี (ถ้ามี) | tx_rig_profit_comm | sum_comm | right | 162,523.62 |
| 14 | Any loss carried forward from the previous profit commission statement | ยอดขาดทุนสะสมที่ยกมาจากรอบ Profit Commission ก่อนหน้า | tx_rig_profit_comm | negative_net_balance | right | 0 |
| 15 | Total (Outgo) | ผลรวมของค่าใช้จ่ายและรายการหักทั้งหมดในหมวด Outgo | tx_rig_profit_comm | total_outgoes | Text | 552,565.04 |
| 16 | Profit for Year YYYY | กำไรสุทธิของปี Quarter Year หลังหักรายจ่ายและเงินสำรองทั้งหมดแล้ว | tx_rig_profit_comm | net_balance | right | 419,320.49 |
| 17 | Profit Commission Rate | Profit Commission Rate | tx_rig_profit_comm | percent_profit_comm | Center | 50% |
| 18 | Total profit commission for year YYYY | ยอด Profit Commission ทั้งหมดที่ต้องจ่ายให้คู่สัญญาสำหรับปี YYYY | tx_rig_profit_comm | net_profit_comm | right | 209,660.25 |


===== PAGE 1300726211 | Function Support > cancle > ยกเลิก 04. Landing Processing =====
Ref: 02. Process Specification.


===== PAGE 1300988014 | Function Support > cancle > ยกเลิก 04. Landing Processing > 1.tx_rig_process_policy =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_process_policy | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | PK | rig_v_policy_id | numeric | 8 | เลขที่ Running | เลขที่ Running | auto generate |  |
| 2 | FK | rig_process_hd_id | numeric | 8 | header id | tx_rig_process_hd.rig_process_hd_id |  |  |
| 3 |  | period | numeric | 6 | งวดทำรายการ | งวดทำรายการ |  |  |
| 4 |  | ReinsuredNo | varchar | 10 | เลขประกันภัยต่อ | RIG_View_Policy.ReInsur_No |  | 1701001 |
| 5 |  | PolicyNo | varchar | 8 | เลขที่กรมธรรม์ | RIG_View_Policy.PolicyNo |  | GH1663 |
| 6 |  | Commencement Date | date |  | วันเริ่มสัญญาครั้งแรก | RIG_View_Policy.FirstDate | dd/mm/yyyy (AD.) | 15/11/2006 |
| 7 |  | EffectiveDate | date |  | วันเริ่มสัญญาปีปัจจุบัน | RIG_View_Policy.PromiseDate | dd/mm/yyyy (AD.) | 15/11/2024 |
| 8 |  | EndDate | date |  | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น | RIG_View_Policy.ExpireDate | dd/mm/yyyy (AD.) | 14/11/2025 |
| 9 |  | PolicyYear | numeric | 3 | ปีกรมธรรม์ | RIG_View_Policy.PolicyYear |  | 19 |
| 10 |  | PaymentMode | numeric | 1 | ประเภทการชำระเบี้ย | RIG_View_Policy.PayType | PayType = 0 THEN 'Monthly'PayType = 1 THEN 'Quarterly'PayType = 2 THEN 'Semi Annual'PayType = 3 THEN 'Annual' | Annual |
| 11 |  | PolicyName | varchar | 255 | ชื่อกรมธรรม์ (ชื่อบริษัท) | RIG_View_Policy.CompanyNameEng, CompanyName | if CompanyName ไม่เป็นภาษาอังกฤษให้ใช้ข้อมูลที่ CompanyNameEng | MEIKI ENGINEERING (THAILAND) COMPANY LIMITED |
| 12 |  | NatureOfBusiness | varchar | 255 | ประเภทธุรกิจ | RIG_View_Company.DBDCODE | เป็นหน้าจอให้ User mapping DBD code ด้วย Type of business ภาษาไทยกับภาษาอังกฤษ | Logistics |
| 13 |  | Status | varchar | 1 | สถานะของกรมธรรม์ จากประกันกลุ่ม | RIG_View_Policy.PolicyStatus | if RIG_View_Policy.PolicyStatus = 'I' then 'Inforce'if RIG_View_Policy.PolicyStatus = 'B' then 'New Business'if RIG_View_Policy.PolicyStatus = 'C' then 'Cancel'if RIG_View_Policy.PolicyStatus = 'L' then 'Lapsed' | Inforce |
| 14 |  | RIStatus | varchar | 50 | สถานะของกรมธรรม์ สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากช่วงความคุ้มครองของกรมธรรม์เทียบกับวันสิ้นเดือนของ Closing Period โดยมีหลักการดังนี้กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบหากวันสิ้นสุดความคุ้มครอง (End Date) มากกว่าหรือเท่ากับ วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์ยังมีผลบังคับ และกำหนดสถานะตามปีกรมธรรม์ (Policy Year)Policy Year = 1 ให้แสดงสถานะ New BusinessPolicy Year > 1 ให้แสดงสถานะ Inforceหากวันสิ้นสุดความคุ้มครอง (End Date) น้อยกว่า วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์สิ้นสุดความคุ้มครอง และแสดงสถานะเป็น Lapsedกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed | RIG_View_Policy.PolicyStatus | if RIG_View_Policy.ExpireDate => วันที่สิ้นเดือนของ Periodif RIG_View_Policy.PolicyYear = 1 then 'New Business'if RIG_View_Policy.PolicyYear > 1 then 'Inforce'if RIG_View_Policy.ExpireDate < วันที่สิ้นเดือนของ Period then 'Lapsed' | Inforce |
| 15 |  | LapseDate | date |  | วันที่ไม่ต่อสัญญา | RIG_View_Policy.LapseDate | dd/mm/yyyy (AD.) | 14/11/2025 |
| 16 |  | PreviousPolicyNo | varchar | 8 | เลขกรมธรรม์เก่า (สำหรับกรมธรรม์ที่มีการเปลี่ยนเลขกรมธรรม์ทุกปี) | RIG_View_Policy.PolicyNo_Old |  | GH1662 |
| 17 |  | ExpreienceRefund | numeric | 1 | Flag กรมธรรม์มีสิทธิ์ได้รับ “เงินคืนตามประสบการณ์” หรือไม่หากค่า ExpreienceRefund = 0 หมายถึง ไม่มีเงินคืนตามประสบการณ์ (No)หากค่า ExpreienceRefund = 1 หมายถึง มีเงินคืนตามประสบการณ์ (Yes) | RIG_View_Policy.ExpreienceRefund | if RIG_View_Policy.ExpreienceRefund = 0 then 'No'if RIG_View_Policy.ExpreienceRefund = 1 then 'Yes' | No |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | วันที่บันทึกรายการ |  |  |  |
| 2 |  | created_by | varchar | 50 | ผู้บันทึกรายการ |  |  |  |
| 3 |  | updated_date | Timestamp |  | วันที่ปรับปรุงรายการ |  |  |  |
| 4 |  | updated_by | varchar | 50 | ผู้ปรับปรุงรายการ |  |  |  |


===== PAGE 1300988064 | Function Support > cancle > ยกเลิก 04. Landing Processing > 2.tx_rig_process_PolicyInfo =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_process_policyInfo | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. |  | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | PK | rig_v_policy_id | numeric | 8 | เลขที่ Running | เลขที่ Running | auto generate |  |
| 2 | FK | rig_process_hd_id | numeric | 8 | header id | tx_rig_process_hd.rig_process_hd_id |  |  |
| 3 |  | period | numeric | 6 | งวดทำรายการ | งวดทำรายการ |  |  |
| 4 |  | ReinsuredNo | varchar | 10 | เลขประกันภัยต่อ | RIG_View_Policy.ReinsuredNo |  | 1701001 |
| 5 |  | PolicyNo | varchar | 8 | เลขที่กรมธรรม์ | RIG_View_Policy.PolicyNo |  | GH1663 |
| 6 |  | PolicyYear | numeric | 3 | ปีกรมธรรม์ | RIG_View_Policy.PolicyYear |  | 18 |
| 7 |  | CommencementDate | date |  | วันเริ่มสัญญาครั้งแรก | RIG_View_Policy.FirstDate | dd/mm/yyyy (AD.) | 15/11/2006 |
| 8 |  | EffectiveDate | date |  | วันเริ่มสัญญาปีปัจจุบัน | RIG_View_Policy.PromiseDate | dd/mm/yyyy (AD.) | 15/11/2023 |
| 9 |  | EndDate | date |  | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น | RIG_View_Policy.ExpireDate | dd/mm/yyyy (AD.) | 15/11/2024 |
| 10 |  | PolicyYear | numeric | 3 | ปีกรมธรรม์ | RIG_View_Policy.PolicyYear |  | 18 |
| 11 |  | Status | varchar | 50 | สถานะของกรมธรรม์ จากประกันกลุ่ม | RIG_View_Policy.PolicyStatus | if RIG_View_Policy.PolicyStatus = 'I' then 'Inforce'if RIG_View_Policy.PolicyStatus = 'B' then 'New Business'if RIG_View_Policy.PolicyStatus = 'C' then 'Cancel'if RIG_View_Policy.PolicyStatus = 'L' then 'Lapsed' | New Business |
| 12 |  | RIStatus | varchar | 50 | สถานะของกรมธรรม์ สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากช่วงความคุ้มครองของกรมธรรม์เทียบกับวันสิ้นเดือนของ Closing Period โดยมีหลักการดังนี้กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบหากวันสิ้นสุดความคุ้มครอง (End Date) มากกว่าหรือเท่ากับ วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์ยังมีผลบังคับ และกำหนดสถานะตามปีกรมธรรม์ (Policy Year)Policy Year = 1 ให้แสดงสถานะ New BusinessPolicy Year > 1 ให้แสดงสถานะ Inforceหากวันสิ้นสุดความคุ้มครอง (End Date) น้อยกว่า วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์สิ้นสุดความคุ้มครอง และแสดงสถานะเป็น Lapsedกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed | RIG_View_Policy.PolicyStatus | if RIG_View_Policy.ExpireDate => วันที่สิ้นเดือนของ Periodif RIG_View_Policy.PolicyYear = 1 then 'New Business'if RIG_View_Policy.PolicyYear > 1 then 'Inforce'if RIG_View_Policy.ExpireDate < วันที่สิ้นเดือนของ Period then 'Lapsed' | New Business |
| 13 |  | NoOfMember | numeric | 8 | จำนวน member ทั้งหมด ที่ Active และ Inactive | RIG_View_CertificateCust.count(CertificCustNo)) | #,###นับจำนวนสมาชิกทั้งหมด | 10 |
| 14 |  | NoOfMemberActive | numeric | 8 | จำนวน member ที่ active โดยพิจารณาจากรายการที่มีสถานะไม่อยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | RIG_View_CertificateCust.count(CertificCustNo) | #,###นับจำนวนสมาชิกที่ Active เท่านั้น | 10 |
| 15 |  | NoOfMemberInactive | numeric | 8 | จำนวน member ที่ Inactive โดยพิจารณาจากรายการที่มีสถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | RIG_View_CertificateCust.count(CertificCustNo) | #,###นับจำนวนสมาชิกที่ Inactive เท่านั้น | 10 |
| 16 |  | NoOfMemberLife | numeric | 8 | จำนวนสมาชิกที่มีทุนชีวิตที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | RIG_View_CertificateCust.count(CertificCustNo)Status NOT IN ('C','D','L')LifePrem > 0 or LifeE1Prem > 0 or LifeE2Prem > 0) | #,###นับจำนวนสมาชิกที่ Active และทุนชีวิต > 0 เท่านั้นกรณีไม่มีข้อมูลแสดง - | 10 |
| 17 |  | NoOfMemberAccidentDeath | numeric | 8 | จำนวนสมาชิกที่มีทุนอุบัติเหตุที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’’ | RIG_View_CertificateCust.count(CertificCustNo)Status NOT IN ('C','D','L')AccPrem > 0 or AccE2Prem > 0 | #,###นับจำนวนสมาชิกที่ Active และทุนอุบัติเหตุ > 0 เท่านั้นกรณีไม่มีข้อมูลแสดง - | 10 |
| 18 |  | NoOfMemberMedAccident | numeric | 8 | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | RIG_View_CertificateCust.count(CertificCustNo)Status NOT IN ('C','D','L')MedPrem > 0 | #,###นับจำนวนสมาชิกที่ Active และทุนค่ารักษาพยาบาล อุบัติเหตุ > 0 เท่านั้นกรณีไม่มีข้อมูลแสดง - | 10 |
| 19 |  | NoOfMemberTPD | numeric | 8 | จำนวนสมาชิกที่มีทุนทุพพลภาพที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | RIG_View_CertificateCust.count(CertificCustNo)Status NOT IN ('C','D','L')TPDPrem > 0 | #,###นับจำนวนสมาชิกที่ Active และทุนทุพพลภาพ > 0 เท่านั้นกรณีไม่มีข้อมูลแสดง - | 10 |
| 20 |  | SumInsuredLife | numeric | 14,2 | ทุนชีวิตรวมของสมาชิกที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | RIG_View_CertificateCust.sum(LifeInsur)Status NOT IN ('C','D','L') | #,###.##กรณีไม่มีข้อมูลแสดง 0.00 | 10,000.00 |
| 21 |  | SumInsuredAccidentDeath | numeric | 14,2 | ทุนชีวิต อุบัติเหตุรวมของสมาชิกที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | RIG_View_CertificateCust.sum(AccInsur)Status NOT IN ('C','D','L') | #,###.##กรณีไม่มีข้อมูลแสดง 0.00 | 10,000.00 |
| 22 |  | SumInsuredMedAccident | numeric | 14,2 | ทุนค่ารักษาพยาบาล อุบัติเหตุรวมของสมาชิกที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’’ | RIG_View_CertificateCust.sum(MedInsur)Status NOT IN ('C','D','L') | #,###.##กรณีไม่มีข้อมูลแสดง 0.00 | 10,000.00 |
| 23 |  | SumInsuredTPD | numeric | 14,2 | ทุนทุพพลภาพรวมของสมาชิกที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | RIG_View_CertificateCust.sum(TPDInsur)Status NOT IN ('C','D','L') | #,###.##กรณีไม่มีข้อมูลแสดง 0.00 | 10,000.00 |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | วันที่บันทึกรายการ |  |  |  |
| 2 |  | created_by | varchar | 50 | ผู้บันทึกรายการ |  |  |  |
| 3 |  | updated_date | Timestamp |  | วันที่ปรับปรุงรายการ |  |  |  |
| 4 |  | updated_by | varchar | 50 | ผู้ปรับปรุงรายการ |  |  |  |


===== PAGE 1300988077 | Function Support > cancle > ยกเลิก 04. Landing Processing > 3.tx_rig_process_claim =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_process_claim | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
แบ่งเป็นข้อมูลตามประเภทของสินไหมดังนี้
1) Claim Death
| No. | Key | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | PK | rig_v_policy_id | numeric | 8 | เลขที่ Running | เลขที่ Running | auto generate |  |
| 2 | FK | rig_process_hd_id | numeric | 8 | header id | tx_rig_process_hd.rig_process_hd_id |  |  |
| 3 |  | Period | varchar | 5 | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น | RIG_View_ClaimDeath.Approve_Date | yyyyMM | 202409 |
| 4 |  | PolicyNo | varchar | 8 | เลขกรมธรรม์ | RIG_View_Policy.PolicyNo |  | GH4639 |
| 5 |  | effective_date | datetime |  | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | RIG_View_Policy.PromiseDate | dd/mm/yyy | 01/09/2022 |
| 6 |  | policy_year | numeric | 2 | ปีกรมธรรม์ | RIG_View_Policy.PolicyYear |  | 7 |
| 7 |  | ReinsurNo | varchar | 10 | เลขที่กรมธรรม์ประกันต่อ | RIG_View_Policy.ReInsur_No |  | 1807003 |
| 8 |  | Certno | varchar | 8 | หมายเลขสมาชิก | RIG_View_CertificateCust.CertificCustNo |  | 01610 |
| 9 |  | Age | numeric | 2 | อายุของผู้เอาประกัน | RIG_View_CertificateCust.Age |  | 28 |
| 10 |  | Sex | varchar | 1 | เพศ | RIG_View_CertificateCust.sex | if 1 then 'M', if 2 the 'F' | F |
| 11 |  | AccidentDate | datetime |  | วันที่เกิดเหตุ | RIG_View_ClaimDeath.DeathDate | dd/mm/yyyy (AD.) | 07/09/2024 |
| 12 |  | ApprovedDate | datetime |  | วันที่อนุมัติ | RIG_View_ClaimDeath.Approve_Date | dd/mm/yyyy (AD.) | 23/09/2024 |
| 13 |  | SumInsuredLife | numeric | 14,2 | ทุนประกันชีวิต | RIG_View_CertificateCust.LifeInsur | #,###.## | 300,000.00 |
| 14 |  | SumInsuredAccident | numeric | 14,2 | ทุนประกันชีวิต อุบัติเหตุ | RIG_View_CertificateCust.AccInsur | #,###.## | 300,000.00 |
| 15 |  | ClaimLife | numeric | 14,2 | เคลมชีวิต | RIG_View_ClaimDeath.LifeInsur | #,###.## | 300,000.00 |
| 16 |  | ClaimAccident | numeric | 14,2 | เคลมอุบัติเหตุ | RIG_View_ClaimDeath.AccInsur | #,###.## | 300,000.00 |
| 17 |  | TotalClaim | numeric | 14,2 | จำนวนเงินที่จ่าย | claim_life+claim_acc | #,###.## | 300,000.00 |
| 18 |  | Type | varchar | 10 | ประเภทรับแจ้งกำหนดให้มีค่า “Death” | fix 'Death' |  | Death |
| 19 |  | PaymentDate | datetime |  | วันที่จ่ายเงิน | RIG_View_ClaimDeath.PayDate | dd/mm/yyyy (AD.) | 26/09/2024 |
| 20 |  | ClaimCause | varchar | 255 | สาเหตุการเคลม | RIG_View_ClaimDeath.DeathCauseRemark |  | Acute gastroenteritis |
| 21 |  | InvestigationExpense | numeric | 14,2 | ค่าใช้จ่ายในการสืบสวน | fix 0.00 |  | 0.00 |
| 22 |  | ClaimNo | varchar | 12 | หมายเลขการเคลม | RIG_View_ClaimDeath.InformNo |  | 256701810 |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | วันที่บันทึกรายการ |  |  |  |
| 2 |  | created_by | varchar | 50 | ผู้บันทึกรายการ |  |  |  |
| 3 |  | updated_date | Timestamp |  | วันที่ปรับปรุงรายการ |  |  |  |
| 4 |  | updated_by | varchar | 50 | ผู้ปรับปรุงรายการ |  |  |  |
2) Claim TPD/Dismemberment
| No. | Key | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | PK | rig_v_policy_id | numeric | 8 | เลขที่ Running | เลขที่ Running | auto generate |  |
| 2 | FK | rig_process_hd_id | numeric | 8 | header id | tx_rig_process_hd.rig_process_hd_id |  |  |
| 3 |  | Period | varchar | 5 | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น | RIG_View_ClaimTPD.Approve_Date | yyyyMM (AD.) | 200904 |
| 4 |  | PolicyNo | varchar | 8 | เลขกรมธรรม์ | RIG_View_Policy.PolicyNo |  | GH1726 |
| 5 |  | ReinsurNo | varchar | 10 | เลขที่กรมธรรม์ ประกันต่อ | RIG_View_Policy.ReInsur_No |  | DG009 |
| 6 |  | EffectiveDate | datetime |  | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | RIG_View_Policy.PromiseDate | dd/mm/yyyy (AD.) | 12/05/2007 |
| 7 |  | PolicyYear | numeric | 2 | ปีกรมธรรม์ | RIG_View_Policy.PolicyYear |  | 2 |
| 8 |  | Certno | varchar | 8 | หมายเลขสมาชิก | RIG_View_CertificateCust.CertificCustNo |  | 00606 |
| 9 |  | Age | numeric | 2 | อายุของผู้เอาประกัน | RIG_View_CertificateCust.Age |  | 22 |
| 10 |  | Sex | varchar | 1 | เพศ | RIG_View_CertificateCust.sex | if 1 then 'M', if 2 the 'F' | F |
| 11 |  | AccidentDate | datetime |  | วันที่เกิดเหตุ | RIG_View_ClaimTPD.DeathDate | dd/mm/yyyy (AD.) | 27/02/2009 |
| 12 |  | ApprovedDate | datetime |  | วันที่อนุมัติ | RIG_View_ClaimTPD.Approve_Date | dd/mm/yyyy (AD.) | 04/05/2009 |
| 13 |  | SumInsuredLife | numeric | 14,2 | ทุนประกันชีวิต | RIG_View_CertificateCust.LifeInsur | #,###.## | 300,000.00 |
| 14 |  | SumInsuredDismenberment | numeric | 14,2 | ทุนประกันชีวิต อุบัติเหตุ | RIG_View_CertificateCust.AccInsur | #,###.## | 300,000.00 |
| 15 |  | SumInsuredTPD | numeric | 14,2 | ทุนประกันชีวิต ทุพพลภาพ | RIG_View_CertificateCust.TPDInsur | #,###.## | 300,000.00 |
| 16 |  | ClaimLife | numeric | 14,2 | เคลมชีวิต | fix 0.00 |  | 0.00 |
| 17 |  | ClaimAccident | numeric | 14,2 | เคลมอุบัติเหตุ | RIG_View_ClaimTPD.AccInsur | #,###.## | 300,000.00 |
| 18 |  | ClaimTPD | numeric | 14,2 | เคลมทุพพลภาพ | RIG_View_ClaimTPD.TPDInsur | #,###.## | 300,000.00 |
| 19 |  | TotalClaim | numeric | 14,2 | จำนวนเงินที่จ่าย | claim_acc+claim_tpd |  | 300,000.00 |
| 20 |  | Type | varchar | 10 | ประเภทรับแจ้งหาก ClaimStatus = 0 ให้จัดประเภทเป็น Dismembermentหาก ClaimStatus อยู่ในช่วง 1 หรือ 2 ให้จัดประเภทเป็น TPD | RIG_View_ClaimTPD.ClaimStatus | if RIG_View_ClaimTPD.ClaimStatus = 0 then 'Dismemberment'if RIG_View_ClaimTPD.ClaimStatus in (1,2) then 'TPD' | TPD |
| 21 |  | PaymentDate | datetime |  | วันที่จ่ายเงิน | RIG_View_ClaimTPD.PayDate | dd/mm/yyyy (AD.) | 04/05/2009 |
| 22 |  | ClaimCause | varchar | 80 | สาเหตุการเคลม | RIG_View_ClaimTPD.AccidentCause |  | Motor(อุบัติเหตุรถจักรยานยนต์) |
| 23 |  | InvestigationExpense | numeric | 14,2 | ค่าใช้จ่ายในการสืบสวน | fix 0.00 |  | 0.00 |
| 24 |  | ClaimNo | varchar | 12 | หมายเลขการเคลม | RIG_View_ClaimTPD.InformNo |  | 255200005 |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | วันที่บันทึกรายการ |  |  |  |
| 2 |  | created_by | varchar | 50 | ผู้บันทึกรายการ |  |  |  |
| 3 |  | updated_date | Timestamp |  | วันที่ปรับปรุงรายการ |  |  |  |
| 4 |  | updated_by | varchar | 50 | ผู้ปรับปรุงรายการ |  |  |  |
3) Claim Health
| No. | Key | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | PK | rig_v_policy_id | numeric | 8 | เลขที่ Running | เลขที่ Running | auto generate |  |
| 2 | FK | rig_process_hd_id | numeric | 8 | header id | tx_rig_process_hd.rig_process_hd_id |  |  |
| 3 |  | Period | varchar | 5 | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น | RIG_View_ClaimHealth.Accident_Date | yyyyMM (AD.) | 200909 |
| 4 |  | PolicyNo | varchar | 8 | เลขกรมธรรม์ | RIG_View_Policy.PolicyNo |  | GH1954 |
| 5 |  | ReinsurNo | varchar | 10 | เลขที่กรมธรรม์ ประกันต่อ | RIG_View_Policy.ReInsur_No |  | DG071 |
| 6 |  | EffectiveDate | datetime |  | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | RIG_View_Policy.PromiseDate | dd/mm/yyyy (AD.) | 01/04/2019 |
| 7 |  | PolicyYear | int | 2 | ปีกรมธรรม์ | RIG_View_Policy.PolicyYear |  | 1 |
| 8 |  | Certno | varchar | 8 | หมายเลขสมาชิก | RIG_View_CertificateCust.CertificCustNo |  | 10197 |
| 9 |  | Age | int | 2 | อายุของผู้เอาประกัน | RIG_View_CertificateCust.Age |  | 25 |
| 10 |  | Sex | varchar | 1 | เพศ | RIG_View_CertificateCust.Sex | if 1 then 'M', if 2 the 'F' | F |
| 11 |  | AccidentDate | datetime |  | วันที่เกิดเหตุ | RIG_View_ClaimHealth.Accident_Date | dd/mm/yyyy (AD.) | 19/09/2009 |
| 12 |  | ApprovedDate | datetime |  | วันที่อนุมัติ | RIG_View_ClaimHealth.Approve_Date | dd/mm/yyyy (AD.) | 21/09/2009 |
| 13 |  | ClaimAmount | int | 14,2 | จำนวนเงินที่จ่าย | RIG_View_ClaimHealth.Claim_Right | #,###.## | 300,000.00 |
| 14 |  | Type | varchar | 10 | ประเภทรับแจ้ง | RIG_View_ClaimHealth.ClaimType | IPD, OPD, Dental | IPD |
| 15 |  | PaymentDate | datetime |  | วันที่จ่ายเงิน | RIG_View_ClaimHealth.PayDate | dd/mm/yyyy (AD.) | 30/11/2009 |
| 16 |  | ClaimCause | varchar | 80 | สาเหตุการเคลม | RIG_View_ClaimHealth.Claim_Cause |  | URI |
| 17 |  | ClaimNo | varchar | 12 | หมายเลขการเคลม | RIG_View_ClaimHealth.Notify_N |  | 200909000001 |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | วันที่บันทึกรายการ |  |  |  |
| 2 |  | created_by | varchar | 50 | ผู้บันทึกรายการ |  |  |  |
| 3 |  | updated_date | Timestamp |  | วันที่ปรับปรุงรายการ |  |  |  |
| 4 |  | updated_by | varchar | 50 | ผู้ปรับปรุงรายการ |  |  |  |


===== PAGE 1300988172 | Function Support > cancle > ยกเลิก 04. Landing Processing > 4.tx_rig_process_EstPremiumLayer =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_process_EstPremiumLayer | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Name | Type (Source) | Size | Description | Fieldgroup by cf_layer_by_treaty.layer_of_sa,RIG_View_CertInforce.PolicyNo | เงื่อนไขการบันทึก | Example |
| 1 | PK | rig_v_policy_id | numeric | 8 | เลขที่ Running | เลขที่ Running | auto generate |  |
| 2 | FK | rig_process_hd_id | numeric | 8 | header id | tx_rig_process_hd.rig_process_hd_id |  |  |
| 3 |  | Period | varchar | 6 | รอบประมวลผล | RIG_View_Policy.PromiseDate | yyyyMM (AD.) | 202104 |
| 4 |  | PolicyNo | varchar | 8 | เลขที่กรมธรรม์ | RIG_View_Policy.PolicyNo |  | GH024 |
| 5 |  | EffectiveDate | datetime |  | วันเริ่มสัญญาปีปัจจุบัน | RIG_View_Policy.PromiseDate | dd/mm/yyyy (AD.) | 01/01/2025 |
| 6 |  | Level | varchar | 2 | การกำหนด Layer สำหรับการส่งประกันภัยต่อ (Reinsurance) จะพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย โดยต้องระบุเป็นหนึ่งในชั้นความคุ้มครองต่อไปนี้ และต้องไม่เป็นค่าว่าง:L1 = Layer 1 : ทุนคุ้มครองไม่เกิน 5 ล้านบาทL2 = Layer 2 : ทุนคุ้มครองมากกว่า 5 ล้านบาท แต่ไม่เกิน 20 ล้านบาทL3 = Layer 3 : ทุนคุ้มครองมากกว่า 20 ล้านบาท | cf_layer_by_treaty.layer_of_sa |  | L1 |
| 7 |  | AmountLife | numeric | 14,0 | จำนวนสมาชิกที่มีทุนคุ้มครองชีวิต โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | count(RIG_View_CertInforce.CertificCustNo)where RIG_View_CertInforce.LifeInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.LifeInsur > cf_layer_by_treaty.minimum_sa | #,###.##coalesce(#,0) | 117 |
| 8 |  | AmountAccident | numeric | 14,0 | จำนวนสมาชิกที่มีทุนอุบัติเหตุชีวิต และอายุไม่เกิน 70 ปีโดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | count(RIG_View_CertInforce.CertificCustNo)where RIG_View_CertInforce.AccInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.AccInsur > cf_layer_by_treaty.minimum_sawhere RIG_View_CertInforce.Age <= 70 | #,###.##coalesce(#,0) | 117 |
| 9 |  | AmountMedAccident | numeric | 14,0 | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | count(vw_rig_cert.CertificCustNo)where RIG_View_CertInforce.MedInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.MedInsur > cf_layer_by_treaty.minimum_sa | #,###.##coalesce(#,0) | 11,700,000.00 |
| 10 |  | AmountTPD | numeric | 14,0 | จำนวนสมาชิกที่มีทุนทุนทุพพลภาพ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | count(RIG_View_CertInforce.CertificCustNo)where RIG_View_CertInforce.TPDInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.TPDInsur > cf_layer_by_treaty.minimum_sa | #,###.##coalesce(#,0) | 11,700,000.00 |
| 11 |  | LifeInsure | numeric | 14,2 | ทุนชีวิตของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(RIG_View_CertInforce.LifeInsur)where RIG_View_CertInforce.LifeInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.LifeInsur > cf_layer_by_treaty.minimum_sa | #,###.##coalesce(#,0) | 11,700,000.00 |
| 12 |  | AccidentInsure | numeric | 14,2 | ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(RIG_View_CertInforce.LifeInsur)where RIG_View_CertInforce.AccInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.LifeInsur > cf_layer_by_treaty.minimum_sawhere RIG_View_CertInforce.Age <= 70 | #,###.##coalesce(#,0) | 11,700,000.00 |
| 13 |  | MedAccidentInsure | numeric | 14,2 | ทุนค่ารักษาพยาบาล อุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(RIG_View_CertInforce.MedInsur)where RIG_View_CertInforce.MedInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.TPDInsur > cf_layer_by_treaty.minimum_sa | #,###.##coalesce(#,0) | 11,700,000.00 |
| 14 |  | TPDInsure | numeric | 14,2 | ทุนทุพพลภาพของสมาชิกทุกคนในกรมธรรม์โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(RIG_View_CertInforce.TPDInsur)where RIG_View_CertInforce.TPDInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.MedInsur > cf_layer_by_treaty.minimum_sa | #,###.##coalesce(#,0) | 11,700,000.00 |
| 15 |  | LifePremiumRate | numeric | 14,2 | Rate เบี้ยของความคุ้มครองชีวิต ต่อ ทุน 1,000 บาท | RIG_View_Policy.LifePremRate | #,###.##coalesce(#,0) | 3.30 |
| 16 |  | AccidentPremium Rate | numeric | 14,2 | Rate เบี้ยของความคุ้มครองอุบัติเหตุ ต่อ ทุน 1,000 บาท | RIG_View_Policy.AccPremRate | #,###.##coalesce(#,0) | 1.43 |
| 17 |  | MedAccidentPremium Rate | numeric | 14,2 | Rate เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ ต่อ ทุน 1,000 บาท | RIG_View_Policy.MedPremRate | #,###.##coalesce(#,0) | 1.43 |
| 18 |  | TPDPremiumRate | numeric | 14,2 | Rate เบี้ยของความคุ้มครองทุพพลภาพ ต่อ ทุน 1,000 บาท | RIG_View_Policy.TPDPremRate | #,###.##coalesce(#,0) | 1.43 |
| 19 |  | LifePremium | numeric | 14,2 | เบี้ยของความคุ้มครองชีวิต | sum(RIG_View_CertInforce.LifePrem) | #,###.##coalesce(#,0) | 38,610.00 |
| 20 |  | LifeExtraPremium | numeric | 14,2 | เบี้ยของความคุ้มครองชีวิต (Extra) | sum(RIG_View_CertInforce.LifeE1Prem) | #,###.##coalesce(#,0) | 0.00 |
| 21 |  | AccidentPremium | numeric | 14,2 | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | sum(RIG_View_CertInforce.AccPrem)where RIG_View_CertInforce.Age <= 70 | #,###.##coalesce(#,0) | 16,731.00 |
| 22 |  | AccidentExtraPremium | numeric | 14,2 | เบี้ยของความคุ้มครองอุบัติเหตุ (Extra) ของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | sum(RIG_View_CertInforce.AccE2Prem)where RIG_View_CertInforce.Age <= 70 | #,###.##coalesce(#,0) | 0.00 |
| 23 |  | MedAccidentPremium | numeric | 14,2 | เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ | sum(RIG_View_CertInforce.MedAccPrem) | #,###.##coalesce(#,0.00) | 16,731.00 |
| 24 |  | TPDPremium | numeric | 14,2 | เบี้ยของความคุ้มครองทุพพลภาพ | sum(RIG_View_CertInforce.TPDPrem) | #,###.##coalesce(#,0.00) | 16,731.00 |
| 25 |  | IPDPremium | numeric | 14,2 | เบี้ยของความคุ้มครองผู้ป่วยใน | sum(RIG_View_CertInforce.IPDPrem) | #,###.##coalesce(#,0.00) | 100,000.00 |
| 26 |  | OPD Premium | numeric | 14,2 | เบี้ยของความคุ้มครองผู้ป่วยนอก | sum(RIG_View_CertInforce.OPDPrem) | #,###.##coalesce(#,0.00) | 100,000.00 |
| 27 |  | Dental Premium | numeric | 14,2 | เบี้ยของความคุ้มครองทันตกรรม | sum(RIG_View_CertInforce.DentalPrem) | #,###.##coalesce(#,0.00) | 100,000.00 |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | วันที่บันทึกรายการ |  |  |  |
| 2 |  | created_by | varchar | 50 | ผู้บันทึกรายการ |  |  |  |
| 3 |  | updated_date | Timestamp |  | วันที่ปรับปรุงรายการ |  |  |  |
| 4 |  | updated_by | varchar | 50 | ผู้ปรับปรุงรายการ |  |  |  |


===== PAGE 1300988178 | Function Support > cancle > ยกเลิก 04. Landing Processing > 5.tx_rig_process_MemberInforce =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_process_MemberInforce | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | PK | rig_v_policy_id | numeric | 8 | เลขที่ Running | เลขที่ Running | auto generate |  |
| 2 | FK | rig_process_hd_id | numeric | 8 | header id | tx_rig_process_hd.rig_process_hd_id |  |  |
| 3 |  | Period | numeric | 6 | Period รอบประมวลผลข้อมูลที่กำหนดจากเดือนและปีของวันที่เริ่มมีผลคุ้มครองของสมาชิก โดยระบบจะนำปีและเดือนของ EffectDate มาแปลงให้อยู่ในรูปแบบ YYYYMM เพื่อใช้เป็นตัวระบุงวดข้อมูลของกรมธรรม์หรือสมาชิกในรอบนั้นตัวอย่าง:EffectDate = 2025-01-15 → Period = 202501 | RIG_View_CertInforce.EffectDate | yyyyMM (AD.) | 202501 |
| 4 |  | PolicyNo | varchar | 20 | เลขกรมธรรม์ | RIG_View_CertInforce.PolicyNo |  |  |
| 5 |  | EffectiveDate | datetime |  | วันที่คุ้มครอง | RIG_View_CertInforce.EffectDate | dd/mm/yyyy (AD.) | 01/01/2025 |
| 6 |  | PolicyYear | numeric | 4 | ปีกรมธรรม์ | RIG_View_CertInforce.PolicyYear |  | 1 |
| 7 |  | CertNo | varchar | 20 | หมายเลขสมาชิก | RIG_View_CertInforce.CerNo |  | 00001 |
| 8 |  | Sex | varchar | 1 | เพศ | RIG_View_CertInforce.Sex | if RIG_View_CertInforce.Sex = 1 then 'M'if RIG_View_CertInforce.Sex = 2 then 'F' | M |
| 9 |  | Age | numeric | 2 | อายุ | RIG_View_CertInforce.Age | ## | 34 |
| 10 |  | SumInsuredAccident | numeric | 14,2 | ทุนประกันชีวิต อุบัติเหตุ | RIG_View_CertInforce.AccInsur | #,###.00coalesce(#,0.00) | 1,000.15 |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | วันที่บันทึกรายการ |  |  |  |
| 2 |  | created_by | varchar | 50 | ผู้บันทึกรายการ |  |  |  |
| 3 |  | updated_date | Timestamp |  | วันที่ปรับปรุงรายการ |  |  |  |
| 4 |  | updated_by | varchar | 50 | ผู้ปรับปรุงรายการ |  |  |  |


===== PAGE 1300988191 | Function Support > cancle > ยกเลิก 04. Landing Processing > 6.tx_rig_process_Alteration =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_process_Alteration | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | PK | rig_v_policy_id | numeric | 8 | เลขที่ Running | เลขที่ Running | auto generate |  |
| 2 | FK | rig_process_hd_id | numeric | 8 | header id | tx_rig_process_hd.rig_process_hd_id |  |  |
| 3 |  | Period | numeric | 6 | Period ของข้อมูล | RIG_View_CertAlteration.DocDate | yyyyMM (AD.) | 202401 |
| 4 |  | ReinsuredNo | varchar | 10 | เลขประกันภัยต่อ | RIG_View_Policy.ReinsuredNo |  | 1701001 |
| 5 |  | PolicyNo | varchar | 8 | เลขกรมธรรม์ | RIG_View_CertAlteration.PolicyNo |  |  |
| 6 |  | DocumentDate | datetime |  | วันที่ทำรายการ | RIG_View_CertAlteration.DocDate | dd/mm/yyyy (AD.) | 07/01/2024 |
| 7 |  | AlterationMovement | varchar | 50 | ประเภทสลักหลังหาก StatusAfter = 'A'⇒ ประเภทสลักหลังคือ Addition (สมาชิกใหม่ที่เพิ่มเข้ามาในกรมธรรม์)หาก StatusAfter อยู่ใน ('C')⇒ ประเภทสลักหลังคือ Termination (สมาชิกลาออก/สิ้นสุดความคุ้มครอง)หาก StatusAfter = 'N'⇒ ประเภทสลักหลังคือ IncreaseSA (สมาชิกเพิ่มทุนคุ้มครอง)หาก StatusAfter = 'E'⇒ ประเภทสลักหลังคือ DecreaseSA (สมาชิกลดทุนคุ้มครอง) | RIG_View_CertAlteration.StatusAfter | if StatusAfter = 'A' then 'Addition'if StatusAfter in ('C') then 'Termination'if StatusAfter = 'N' then 'IncreaseSA'if StatusAfter = 'E' then 'DecreaseSA' | Addition |
| 8 |  | AlterationStatus | varchar | 50 | สถานะสลักหลังหาก StatusAfter = 'A'⇒ แสดงสถานะ New Member (สมาชิกใหม่)หาก StatusAfter = 'C'⇒ แสดงสถานะ Cancel (ยกเลิกความคุ้มครอง)หาก StatusAfter = 'N'⇒ แสดงสถานะ Increase (เพิ่มทุนคุ้มครอง)หาก StatusAfter = 'E'⇒ แสดงสถานะ Decrease (ลดทุนคุ้มครอง) | RIG_View_CertAlteration.StatusAfter | if StatusAfter = 'A' then 'New Member'if StatusAfter = 'C' then 'Cancel'if StatusAfter = 'N' then 'Increase'if StatusAfter = 'E' then 'Decrease' | New Member |
| 9 |  | AlterationDate | datetime |  | วันที่มีผลบังคับของสลักหลัง | RIG_View_CertAlteration.ChangeDateAfter | dd/mm/yyyy (AD.) | 07/01/2024 |
| 10 |  | MemberEffectiveDate | datetime |  | วันเริ่มคุ้มครองของสมาชิก | RIG_View_CertAlteration.EffectDate | dd/mm/yyyy (AD.) | 07/01/2024 |
| 11 |  | CertNo | varchar | 8 | หมายเลขสมาชิก | RIG_View_CertAlteration.CertificCustNo |  | 01600 |
| 12 |  | Sex | varchar | 1 | เพศ | RIG_View_CertificateCust.Sex | if RIG_View_CertificateCust.Sex = 1 then 'M'if RIG_View_CertificateCust.Sex = 2 then 'F' | M |
| 13 |  | Age | numeric | 2 | อายุ | RIG_View_CertificateCust.Age |  | 34 |
| 14 |  | SumInsuredAccident | numeric | 14,2 | จำนวนทุนชีวิต (อุบัติเหตุ) | RIG_View_CertAlteration.AccInsurAfter | #,###.00coalesce(#,0.00) | 1,000.15 |
| 15 |  | SumInsuredAccident_Before | numeric | 14,2 | จำนวนทุนชีวิต (อุบัติเหตุ) ก่อนเพิ่ม/ลด ทุน | RIG_View_CertAlteration.AccInsurBefore | #,###.00coalesce(#,0.00) | 600,000.15 |
| 16 |  | SumInsured Accident_After | numeric | 14,2 | จำนวนทุนชีวิต (อุบัติเหตุ) หลังเพิ่ม/ลด ทุน | RIG_View_CertAlteration.AccInsurAfter | #,###.00coalesce(#,0.00) | 500,000.15 |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | วันที่บันทึกรายการ |  |  |  |
| 2 |  | created_by | varchar | 50 | ผู้บันทึกรายการ |  |  |  |
| 3 |  | updated_date | Timestamp |  | วันที่ปรับปรุงรายการ |  |  |  |
| 4 |  | updated_by | varchar | 50 | ผู้ปรับปรุงรายการ |  |  |  |


===== PAGE 1300988194 | Function Support > cancle > ยกเลิก 04. Landing Processing > 7.tx_rig_process_PolicyInforce =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_process_PolicyInforce | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | PK | rig_v_policy_id | numeric | 8 | เลขที่ Running | เลขที่ Running | auto generate |  |
| 2 | FK | rig_process_hd_id | numeric | 8 | header id | tx_rig_process_hd.rig_process_hd_id |  |  |
| 3 |  | Period | numeric | 6 | Period ของข้อมูล | RIG_View_SOPHead.Period | yyyyMM (AD.) | 202501 |
| 4 |  | ReinsuredNo | varchar | 10 | เลขประกันภัยต่อ | RIG_View_Policy.ReInsur_No |  |  |
| 5 |  | PolicyNo | varchar | 8 | เลขกรมธรรม์ | RIG_View_Policy.PolicyNo |  |  |
| 6 |  | CommencementDate | datetime |  | วันเริ่มสัญญาครั้งแรก | RIG_View_Policy.FirstDate | dd/mm/yyy (AD.) |  |
| 7 |  | EffectiveDate | datetime |  | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | RIG_View_Policy.PromiseDate | dd/mm/yyy (AD.) |  |
| 8 |  | PolicyYear | numeric | 4 | ปีกรมธรรม์ | RIG_View_Policy.PolicyYear |  |  |
| 9 |  | Status | varchar | 1 | สถานะของกรมธรรม์ จากประกันกลุ่ม | RIG_View_Policy.PolicyStatus |  | I |
| 10 |  | RIStatus | varchar | 50 | สถานะของกรมธรรม์ สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากช่วงความคุ้มครองของกรมธรรม์เทียบกับวันสิ้นเดือนของ Closing Period โดยมีหลักการดังนี้กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบหากวันสิ้นสุดความคุ้มครอง (End Date) มากกว่าหรือเท่ากับ วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์ยังมีผลบังคับ และกำหนดสถานะตามปีกรมธรรม์ (Policy Year)Policy Year = 1 ให้แสดงสถานะ New BusinessPolicy Year > 1 ให้แสดงสถานะ Inforceหากวันสิ้นสุดความคุ้มครอง (End Date) น้อยกว่า วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์สิ้นสุดความคุ้มครอง และแสดงสถานะเป็น Lapsedกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed | RIG_View_Policy.PolicyStatus | if RIG_View_Policy.ExpireDate => วันที่สิ้นเดือนของ Period (Closing Period)if RIG_View_Policy.PolicyYear = 1 then 'New Business'if RIG_View_Policy.PolicyYear > 1 then 'Inforce'if RIG_View_Policy.ExpireDate < วันที่สิ้นเดือนของ Period (Closing Period) then 'Lapsed' | New Business |
| 11 |  | NoMemberLife | numeric | 4 | จำนวนสมาชิกที่มีทุนชีวิต | RIG_View_SOPHead.TotalLifeAmt | #,###coalesce(#,0) | 1,000 |
| 12 |  | NoMemberAccidentDeath | numeric | 4 | จำนวนสมาชิกที่มีทุนอุบัติเหตุชีวิต และอายุไม่เกิน 70 ปี | RIG_View_SOPHead.TotalAccAmtRIG_View_CertificateCust.Age > 70 | #,###.00coalesce(#,0) | 1,000 |
| 13 |  | NoMemberMedAccident | numeric | 4 | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ | RIG_View_SOPHead.TotalMedAmt | #,###.00coalesce(#,0) | 1,000 |
| 14 |  | NoMemberTPD | numeric | 4 | จำนวนสมาชิกที่มีทุนทุพพลภาพ | RIG_View_SOPHead.TotalTPDAmt | #,###.00coalesce(#,0) | 1,000 |
| 15 |  | SumInsuredLife | numeric | 14,2 | ทุนชีวิตรวม | RIG_View_SOPHead.TotalLifeInsur | #,###.00coalesce(#,0.00) | 600,000.15 |
| 16 |  | SumInsuredAccidentDeath | numeric | 14,2 | ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | RIG_View_SOPHead.TotalAccInsurRIG_View_CertificateCust.Age > 70 | #,###.00coalesce(#,0.00) | 600,000.15 |
| 17 |  | SumInsuredMedAccident | numeric | 14,2 | ทุนค่ารักษาพยาบาล อุบัติเหตุรวม | RIG_View_SOPHead.TotalMedInsur | #,###.00coalesce(#,0.00) | 600,000.15 |
| 18 |  | SumInsuredTPD | numeric | 14,2 | ทุนทุพพลภาพรวม | RIG_View_SOPHead.TotalTPDInsur | #,###.00coalesce(#,0.00) | 600,000.15 |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | วันที่บันทึกรายการ |  |  |  |
| 2 |  | created_by | varchar | 50 | ผู้บันทึกรายการ |  |  |  |
| 3 |  | updated_date | Timestamp |  | วันที่ปรับปรุงรายการ |  |  |  |
| 4 |  | updated_by | varchar | 50 | ผู้ปรับปรุงรายการ |  |  |  |


===== PAGE 1300988210 | Function Support > cancle > ยกเลิก 04. Landing Processing > 8.tx_rig_process_ActPremiumMember =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_process_ActPremiumMember | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | PK | rig_v_policy_id | numeric | 8 | เลขที่ Running | เลขที่ Running | auto generate |  |
| 2 | FK | rig_process_hd_id | numeric | 8 | header id | tx_rig_process_hd.rig_process_hd_id |  |  |
| 3 |  | Period | datetime |  | Period จาก Effective Date ในแต่ละเดือน | RIG_View_Policy.EffectiveDate | yyyyMM (AD.) | 202401 |
| 4 |  | PolicyNo |  |  | เลขกรมธรรม์ | RIG_View_Policy.PolicyNo |  | GH044 |
| 5 |  | ReinsuredNo |  |  | เลขประกันภัยต่อ | RIG_View_Policy.ReInsur_No |  | 1706008 |
| 6 |  | PaymentMode |  |  | ประเภทการชำระเบี้ยประกันภัย | RIG_View_Policy.PayType | PayType = 1 THEN 'Quarterly'PayType = 2 THEN 'Semi Annual'PayType = 3 THEN 'Annual' | Quarterly |
| 7 |  | PolicyYear |  |  | ปีกรรมธรรม์ | RIG_View_Policy.PolicyYear |  | 1 |
| 8 |  | EffectiveDate | datetime |  | วันที่คุ้มครอง | RIG_View_Policy.EffectiveDate | dd/mm/yyyy (AD.) | 01/01/2024 |
| 9 |  | EndDate | datetime |  | วันที่สิ้นความคุ้มครอง | RIG_View_Policy.ExpireDate | dd/mm/yyyy (AD.) | 15/06/2024 |
| 10 |  | NoMemPrevious | numeric | 4 | จำนวนสมาชิกทั้งหมดจาก Period ก่อนหน้า |  | #,###coalesce(#,0) | 31 |
| 11 |  | NoMemAddition | numeric | 4 | จำนวนสมาชิกที่เพิ่มขึ้นใน Period นี้ |  | #,###coalesce(#,0) | 3 |
| 12 |  | NoMemCancellation | numeric | 4 | จำนวนสมาชิกที่ลดลงใน Period นี้ |  | #,###coalesce(#,0) | 8 |
| 13 |  | NoMemTotal | numeric | 4 | จำนวนสมาชิกทั้งหมดใน Period นี้ |  | #,###coalesce(#,0) | 26 |
| 14 |  | PremiumLife | numeric | 14,2 | เบี้ยชีวิต |  | #,###.##coalesce(#,0.00) | 1,000.15 |
| 15 |  | PremiumAccident | numeric | 14,2 | เบี้ยอุบัติเหตุ |  | #,###.##coalesce(#,0.00) | 1,000.15 |
| 16 |  | PremiumMedAcc | numeric | 14,2 | เบี้ยค่ารักษาพยาบาลอุบัติเหตุ |  | #,###.##coalesce(#,0.00) | 1,000.15 |
| 17 |  | PremiumTPD | numeric | 14,2 | เบี้ย TPD |  | #,###.##coalesce(#,0.00) | 1,000.15 |
| 18 |  | PremiumE1 | numeric | 14,2 | เบี้ยชีวิต (Extra) |  | #,###.##coalesce(#,0.00) | 1,000.15 |
| 19 |  | PremiumIPD | numeric | 14,2 | เบี้ย IPD |  | #,###.##coalesce(#,0.00) | 1,000.15 |
| 20 |  | PremiumOPD | numeric | 14,2 | เบี้ย OPD |  | #,###.##coalesce(#,0.00) | 1,000.15 |
| 21 |  | PremiumDental | numeric | 14,2 | เบี้ย ทันตกรรม |  | #,###.##coalesce(#,0.00) | 1,000.15 |
| 22 |  | PremiumMedTotal | numeric | 14,2 | เบี้ยค่ารักษาพยาบาลทั้งหมด |  | #,###.##coalesce(#,0.00) | 1,000.15 |
| 23 |  | PremiumTotal | numeric | 14,2 | เบี้ยทั้งหมด |  | #,###.##coalesce(#,0.00) | 1,000.15 |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | วันที่บันทึกรายการ |  |  |  |
| 2 |  | created_by | varchar | 50 | ผู้บันทึกรายการ |  |  |  |
| 3 |  | updated_date | Timestamp |  | วันที่ปรับปรุงรายการ |  |  |  |
| 4 |  | updated_by | varchar | 50 | ผู้ปรับปรุงรายการ |  |  |  |


===== PAGE 1300988214 | Function Support > cancle > ยกเลิก 04. Landing Processing > 9.tx_rig_process_ExperienceRefund =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_process_ExperienceRefund | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | PK | rig_v_policy_id | numeric | 8 | เลขที่ Running | เลขที่ Running | auto generate |  |
| 2 | FK | rig_process_hd_id | numeric | 8 | header id | tx_rig_process_hd.rig_process_hd_id |  |  |
| 3 |  | Period | numeric | 6 | Period ของวันที่มีผลบังคับ Experience Refund | RIG_View_ExpRefund.PeriodBeginDate | yyyyMM (AD.) | 202501 |
| 4 |  | PolicyNo | varchar | 8 | เลขกรมธรรม์ | RIG_View_ExpRefund.PolicyNo |  | GL2542 |
| 5 |  | ReinsuredNo | varchar | 10 | เลขประกันภัยต่อ | RIG_View_Policy.ReInsur_No |  | 2306018 |
| 6 |  | PolicyYear | numeric | 2 | ปีกรมธรรม์ | RIG_View_ExpRefund.PolicyYear |  | 14 |
| 7 |  | CommencementDate | datetime |  | วันเริ่มสัญญาครั้งแรก | RIG_View_Policy.FirstDate | dd/mm/yyyy (AD.) | 16/06/2010 |
| 8 |  | EffectiveDate | datetime |  | วันที่คุ้มครอง | RIG_View_Policy.PromiseDate | dd/mm/yyyy (AD.) | 16/06/2023 |
| 9 |  | EndDate | datetime |  | วันที่สิ้นความคุ้มครอง | RIG_View_Policy.ExpireDate | dd/mm/yyyy (AD.) | 15/06/2024 |
| 10 |  | PaidStatus | varchar | 10 | เป็นการบอกว่าใน Policy Year นี้มีการจ่าย Experience Refund หรือไม่ | RIG_View_ExpRefund.ExpRefund | if RIG_View_ExpRefund.ExpRefund > 0 then 'Paid'if RIG_View_ExpRefund.ExpRefund <= 0 then 'Not Paid' | Paid |
| 11 |  | PercentExpRefund | numeric | 4 | %การจ่าย Experience Refund | RIG_View_ExpRefund.ExpRefundGPercent | #,###coalesce(#,0) | 75 |
| 12 |  | PercentExpense | numeric | 14,2 | %ค่าใช้จ่าย | RIG_View_ExpRefund.ExpRefundGPercent | #,###coalesce(#,0) | 25 |
| 13 |  | PremiumLife | numeric | 14,2 | เบี้ยประกันภัยรับ(ชีวิต) ทั้งปีใน Policy Year นี้ | RIG_View_ExpRefund.PremiumRIG_View_ExpRefund.type = '01'RIG_View_ExpRefund.FlgCal = 1 | #,###.##coalesce(#,0.00) | 1,000.15 |
| 14 |  | PremiumAccident | numeric | 14,2 | เบี้ยประกันภัยรับ(อุบัติเหตุ) ทั้งปีใน Policy Year นี้ | RIG_View_ExpRefund.Premium + PremiumE1RIG_View_ExpRefund.type = '02' (Acc)RIG_View_ExpRefund.FlgCal = 1 | #,###.##coalesce(#,0.00) | 1,000.15 |
| 15 |  | PremiumTPD | numeric | 14,2 | เบี้ยประกันภัยรับ(TPD) ทั้งปีใน Policy Year นี้ | RIG_View_ExpRefund.Premium + PremiumE1RIG_View_ExpRefund.type = '10' (TPD)RIG_View_ExpRefund.FlgCal = 1 | #,###.##coalesce(#,0.00) | 1,000.15 |
| 16 |  | TotalPremium | numeric | 14,2 | เบี้ยประกันภัยรับทั้งปีใน Policy Year นี้ | PremiumLife + PremiumAccident + PremiumTPD | #,###.##coalesce(#,0.00) | 1,000.15 |
| 17 |  | Claim | numeric | 14,2 | สินไหมที่เกิดขึ้นใน Policy Year นี้ | RIG_View_ExpRefund.ClaimAll | #,###.##coalesce(#,0.00) | 1,000.15 |
| 18 |  | ExpRefundPreviousYear | numeric | 14,2 | ยอดติดลบ Experience Refund จากปีก่อนหน้า | RIG_View_ExpRefund.ADJClaim | #,###.##coalesce(#,0.00) | 1,000.15 |
| 19 |  | ExpRefund | numeric | 14,2 | ยอด Experience Refund ที่ต้องจ่าย | RIG_View_ExpRefund.ExpRefund + ExpRefundE1 | #,###.##coalesce(#,0.00) | 1,000.15 |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | วันที่บันทึกรายการ |  |  |  |
| 2 |  | created_by | varchar | 50 | ผู้บันทึกรายการ |  |  |  |
| 3 |  | updated_date | Timestamp |  | วันที่ปรับปรุงรายการ |  |  |  |
| 4 |  | updated_by | varchar | 50 | ผู้ปรับปรุงรายการ |  |  |  |


===== PAGE 1300988220 | Function Support > cancle > ยกเลิก 04. Landing Processing > 10.tx_rig_process_MemberOverAge =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_process_MemberOverAge | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Name | Type | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | PK | rig_v_policy_id | numeric | 8 | เลขที่ Running | เลขที่ Running | auto generate |  |
| 2 | FK | rig_process_hd_id | numeric | 8 | header id | tx_rig_process_hd.rig_process_hd_id |  |  |
| 3 |  | Period | varchar | 6 | Period ของ EffectiveDate | RIG_View_Policy.PromiseDate | yyyyMM (AD.) | 202104 |
| 4 |  | PolicyNo | varchar | 10 | เลขกรมธรรม์ | RIG_View_Policy.PolicyNo |  |  |
| 5 |  | EffectiveDate | datetime |  | วันที่คุ้มครอง | RIG_View_Policy.PromiseDate | dd/mm/yyy (AD.) | 18/04/2024 |
| 6 |  | PaymentMode | varchar | 10 | ประเภทการชำระเบี้ย | RIG_View_Policy.PayType | PayType = 0 THEN 'Monthly'PayType = 1 THEN 'Quarterly'PayType = 2 THEN 'Semi Annual'PayType = 3 THEN 'Annual' | Annual |
| 7 |  | CertNo | varchar | 8 | หมายเลขสมาชิก | RIG_View_CertificateCust.CertificCustNo |  | 00071 |
| 8 |  | Age | numeric | 2 | อายุของผู้เอาประกัน | RIG_View_CertificateCust.Age | #,###coalesce(#,0) | 73 |
| 9 |  | AccidentInsure | numeric | 14,2 | ทุนอุบัติเหตุของสมาชิกที่อายุเกิน 70 ปี | RIG_View_CertificateCust.AccInsurRIG_View_CertificateCust.Age > 70 | #,###.##coalesce(#,0.00) | 1,000,000.15 |
| 10 |  | AccidentPremium | numeric | 14,2 | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกที่อายุเกิน 70 ปี | RIG_View_CertificateCust.AccPremRIG_View_CertificateCust.Age > 70 | #,###.##coalesce(#,0.00) | 1,000.15 |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | วันที่บันทึกรายการ |  |  |  |
| 2 |  | created_by | varchar | 50 | ผู้บันทึกรายการ |  |  |  |
| 3 |  | updated_date | Timestamp |  | วันที่ปรับปรุงรายการ |  |  |  |
| 4 |  | updated_by | varchar | 50 | ผู้ปรับปรุงรายการ |  |  |  |


===== PAGE 1300988230 | Function Support > cancle > ยกเลิก 04. Landing Processing > 11.tx_rig_process_InvestigateExpense =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_process_InvestigateExpense | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
อยู่ระหว่างรอข้อมูลจากทางประกันกลุ่ม


===== PAGE 1300988299 | Function Support > cancle > ยกเลิก 04. Landing Processing > 12.tx_rig_process_EstUnname =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_process_EstUnname | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | unname_est_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | FK | unname_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. |  | จาก tx_rig_unname_hd.unname_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ |  |  |
| 4 |  | policy_number | varchar | 8 | Y | เลขที่กรมธรรม์ | GH1663 | tbc |
| 5 |  | effective_date | date |  | Y | วันที่คุ้มครองของกรมธรรม์ |  | tbc |
| 6 |  | amount_life | numeric | 8 |  | จำนวนสมาชิกที่มีทุนชีวิต | 22,968 | tbc |
| 7 |  | amount_accident | numeric | 8 |  | จำนวนสมาชิกที่มีทุนอุบัติเหตุชีวิต | 22,968 | tbc |
| 8 |  | amount_medaccident | numeric | 8 |  | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ | 0 | tbc |
| 9 |  | amount_tpd | numeric | 8 |  | จำนวนสมาชิกที่มีทุนทุนทุพพลภาพ | 0 | tbc |
| 10 |  | life_insure | numeric | 20,2 |  | ทุนชีวิตของสมาชิกทุกคนในกรมธรรม์ | 2,296,800,000 | tbc |
| 11 |  | accident_insure | numeric | 20,2 |  | ทุนอุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ | 2,296,800,000 | tbc |
| 12 |  | medaccident_insure | numeric | 20,2 |  | ทุนค่ารักษาพยาบาล อุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ | 0 | tbc |
| 13 |  | tpd_insure | numeric | 20,2 |  | ทุนทุพพลภาพของสมาชิกทุกคนในกรมธรรม์ | 0 | tbc |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1300988583 | Function Support > cancle > ยกเลิก 04. Landing Processing > 13.tx_rig_process_ActUnname =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_process_ActUnname | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | unname_act_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | FK | unname_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. |  | จาก tx_rig_unname_hd.unname_hd_id |
| 3 |  | quarter | numeric | 6 | Y | งวดที่ทำรายการ |  |  |
| 4 |  | policy_number | varchar | 8 | Y | เลขที่กรมธรรม์ | GH1663 |  |
| 5 |  | effective_date | date |  | Y | วันที่คุ้มครองของกรมธรรม์ |  |  |
| 6 |  | end_date | date |  | Y | วันที่สิ้นความคุ้มครอง |  |  |
| 7 |  | period_date | date |  | Y | Effective Date ในแต่ละเดือน |  |  |
| 8 |  | insured_previous | numeric | 8 |  | จำนวนสมาชิกทั้งหมดจาก Period ก่อนหน้า | 22,905 |  |
| 9 |  | insured_addition | numeric | 8 |  | จำนวนสมาชิกที่เพิ่มขึ้นใน Period นี้ | 0 |  |
| 10 |  | insured_cancellation | numeric | 8 |  | จำนวนสมาชิกที่ลดลงใน Period นี้ | 0 |  |
| 11 |  | insured_total | numeric | 8 |  | จำนวนสมาชิกทั้งหมดใน Period นี้ | 22,905 |  |
| 12 |  | premium_life | numeric | 20,2 |  | เบี้ยชีวิต | 3,321,225.00 |  |
| 13 |  | premium_accident | numeric | 20,2 |  | เบี้ยอุบัติเหตุ | 1,145,250.00 |  |
| 14 |  | premium_med_acc | numeric | 20,2 |  | เบี้ยค่ารักษาพยาบาลอุบัติเหตุ | 0.00 |  |
| 15 |  | premium_tpd | numeric | 20,2 |  | เบี้ย TPD | 0.00 |  |
| 16 |  | premium_e1 | numeric | 20,2 |  | เบี้ยชีวิต (Extra) | 0.00 |  |
| 17 |  | premium_ip | numeric | 20,2 |  | เบี้ย IPD | 0.00 |  |
| 18 |  | premium_op | numeric | 20,2 |  | เบี้ย OPD | 0.00 |  |
| 19 |  | premium_dental | numeric | 20,2 |  | เบี้ย ทันตกรรม | 0.00 |  |
| 20 |  | premium_med_total | numeric | 20,2 |  | เบี้ยค่ารักษาพยาบาลทั้งหมด | 0.00 |  |
| 21 |  | premium_total | numeric | 20,2 |  | เบี้ยทั้งหมด | 4,466,475.00 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1294992114 | Function Support > zz rp cancle =====
(empty page)


===== PAGE 1289389367 | Function Support > zz rp cancle > 03. Module Actual Data (AC) =====
(empty page)


===== PAGE 1294992169 | Function Support > zz rp cancle > 05. Module Export Report (EX) =====
(empty page)


===== PAGE 1294992160 | Function Support > zz rp cancle > 9. Module Export Report (EX) =====
(empty page)


===== PAGE 1294992186 | Function Support > zz rp cancle > ssss =====
(empty page)


===== PAGE 1292239663 | Function Support > zz rp cancle > Template - 002_Claim_Est_{YYYY}{MM} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955824020 {padding: 0px;}
div.rbtoc1782955824020 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955824020 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report template version
- 2 การ Export report
- 3 การแสดง Report file name
- 4 การแสดงชื่อ Report sheet
- 5 การแสดง Report detail
- 6 การแสดง Report footer

## Report template version
| Version | Date | Edit By | Source File | Remark |
| 1.0 | 17/10/2025 | pongsathorn.pa | Claim_Est_YYYYMM.xlsx | Initial |

## การ Export report
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |

## การแสดง Report file name
| การแสดงชื่อ File |
| จาก Table : cf_rig_template_file.cf_template_file_id = 2ดึงชื่อ File Generate template จาก cf_template_file.template_file_nameClaim_Est_{YYYY}{MM} ใช้ข้อมูลจาก tx_rig_process_hd.period มาแสดง ตัวอย่างเช่น: Claim_Est_{YYYY}{MM}_202501ข้อมูลนามสกุลไฟล์ : cf_rig_template_file.file_type |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตาม Report Detail |

## การแสดง Report detail
| Report Detail Section |
| ตาม Report Detail |

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1292239720 | Function Support > zz rp cancle > Template - 003_Claim_Act_{YYYY}{MM} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955824014 {padding: 0px;}
div.rbtoc1782955824014 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955824014 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report template version
- 2 การ Export report
- 3 การแสดง Report file name
- 4 การแสดงชื่อ Report sheet
- 5 การแสดง Report detail
- 6 การแสดง Report footer

## Report template version
| Version | Date | Edit By | Source File | Remark |
| 1.0 | 17/10/2025 | pongsathorn.pa | Claim_Act_YYYYMM.xlsx | Initial |

## การ Export report
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |

## การแสดง Report file name
| การแสดงชื่อ File |
| จาก Table : cf_rig_template_file.cf_template_file_id = 3ดึงชื่อ File Generate template จาก cf_template_file.template_file_nameClaim_Act_{YYYY}{MM} ใช้ข้อมูลจาก tx_rig_process_hd.period มาแสดง ตัวอย่างเช่น: Claim_Act_{YYYY}{MM}_202501ข้อมูลนามสกุลไฟล์ : cf_rig_template_file.file_type |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตาม Report Detail |

## การแสดง Report detail
| Report Detail Section |
| ตาม Report Detail |

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1292239737 | Function Support > zz rp cancle > Template - 004_Reinsured Group Policy_{YYYY}{MM} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955824034 {padding: 0px;}
div.rbtoc1782955824034 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955824034 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report template version
- 2 การ Export report
- 3 การแสดง Report file name
- 4 การแสดงชื่อ Report sheet
- 5 การแสดง Report detail
- 6 การแสดง Report footer

## Report template version
| Version | Date | Edit By | Source File | Remark |
| 1.0 | 17/10/2025 | koawkamol.pa | Reinsured Group Policy_YYYYMM.xlsx |  |

## การ Export report
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |

## การแสดง Report file name
| การแสดงชื่อ File |
| จาก Table : cf_rig_template_file.cf_template_file_id = 4ดึงชื่อ File Generate template จาก cf_template_file.template_file_nameReinsured Group Policy_{YYYY}{MM} ใช้ข้อมูลจาก tx_rig_process_hd.period มาแสดง ตัวอย่างเช่น: Reinsured Group Policy_202501ข้อมูลนามสกุลไฟล์ : cf_rig_template_file.file_type |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตาม Report Detail |

## การแสดง Report detail
| Report Detail Section |
| ตาม Report Detail |

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |