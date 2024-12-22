<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
<title>Сайт XSL, задание 2</title>
</head>
<body style="background-color: palegoldenrod">
    <table border="1px">
        <xsl:for-each select="body/table/root">
            <tr>
                <th><xsl:value-of select="th"/></th>
                <th><xsl:value-of select="disc1"/></th>
                <th><xsl:value-of select="disc2"/></th>
                <th><xsl:value-of select="disc3"/></th>
            </tr>
        </xsl:for-each>

        <xsl:for-each select="body/table/student">
            <tr>
                <xsl:variable name="varDisc1"> <xsl:value-of select="disc1"/> </xsl:variable>
                <xsl:variable name="varDisc2"> <xsl:value-of select="disc2"/> </xsl:variable>
                <xsl:variable name="varDisc3"> <xsl:value-of select="disc3"/> </xsl:variable>

                <th><xsl:value-of select="th"/></th>

                <xsl:choose>
                    <xsl:when test="4>$varDisc1">
                        <th style="background-color: red"><xsl:value-of select="disc1"/></th>
                    </xsl:when>
                    <xsl:when test="$varDisc1>8">
                        <th style="background-color: green"><xsl:value-of select="disc1"/></th>
                    </xsl:when>
                    <xsl:otherwise>
                        <th><xsl:value-of select="disc1"/></th>
                    </xsl:otherwise>
                </xsl:choose>
        
                <xsl:choose>
                    <xsl:when test="4>$varDisc2">
                        <th style="background-color: red"><xsl:value-of select="disc2"/></th>
                    </xsl:when>
                    <xsl:when test="$varDisc2>8">
                        <th style="background-color: green"><xsl:value-of select="disc2"/></th>
                    </xsl:when>
                    <xsl:otherwise>
                        <th><xsl:value-of select="disc2"/></th>
                    </xsl:otherwise>
                </xsl:choose>

                <xsl:choose>
                    <xsl:when test="4>$varDisc3">
                        <th style="background-color: red"><xsl:value-of select="disc3"/></th>
                    </xsl:when>
                    <xsl:when test="$varDisc3>8">
                        <th style="background-color: green"><xsl:value-of select="disc3"/></th>
                    </xsl:when>
                    <xsl:otherwise>
                        <th><xsl:value-of select="disc3"/></th>
                    </xsl:otherwise>
                </xsl:choose>
            </tr>
        </xsl:for-each>
    </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>